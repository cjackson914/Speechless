import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const joeTL = gsap.timeline();

joeTL.from("#joe-container-photo", {duration: 1, x: 2000, alpha:0}, "sameTime")
        .from("#joe-hr", {duration: .5, x:-2000}, "sameTime")
        .from("#joe-container-text h3", {duration: .5, x:-2000}, "-=.5")
        .from("#joe-container-text p", {duration: .5, x:-2000, stagger: .2});





export function celebsJoeAnimation(){
    ScrollTrigger.create({
        // markers:true,
        // stagger: 2,
        animation: joeTL,
        toggleActions: "play none none none",
        trigger: "#joe-container",
        start: "top, 70%",
        end: "bottom 30%"

        });

}