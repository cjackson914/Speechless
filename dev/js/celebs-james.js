import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jamesTL = gsap.timeline();

jamesTL.from("#james-container-photo", {duration: 1, x: -400, alpha:0}, "sameTime")
        .from("#james-hr", {duration: .5, x:2000}, "sameTime")
        .from("#james-container-text h3", {duration: .5, x:2000}, "-=.5")
        .from("#james-container-text p", {duration: .5, x:2000, stagger: .2});




export function celebsJamesAnimation(){
    ScrollTrigger.create({
        // markers:true,
        // stagger: 2,
        animation: jamesTL,
        toggleActions: "play none none none",
        trigger: "#james-container",
        start: "top, 70%",
        end: "bottom 30%"

        });

}