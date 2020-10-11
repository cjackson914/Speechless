import {gsap} from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const marilynTL = gsap.timeline();

marilynTL.from("#marilyn-container-photo", {duration: 1, y: 400, alpha:0}, "sameTime")
        .from("#marilyn-hr", {duration: .5, x:2000}, "sameTime")
        .from("#marilyn-container-text h3", {duration: .5, x:2000}, "-=0.5")
        .from("#marilyn-container-text p", {duration: .5, x:2000, stagger: .2});





export function celebsMarilynAnimation(){
//     ScrollTrigger.create({
//         // markers:true,
//         // stagger: 2,
//         animation: marilynTL,
//         toggleActions: "play none none none",
//         trigger: "#marilyn-container",
//         start: "top, 30%",
//         end: "bottom 30%"

//         });

}