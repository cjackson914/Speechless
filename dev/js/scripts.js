// import {gsap} from "gsap";

import $ from "jquery"

import {celebsMarilynAnimation} from "./celebs-marilyn.js";
import {celebsJoeAnimation} from "./celebs-joe.js";
import {celebsJamesAnimation} from "./celebs-james.js";

import {burgerClicked} from "./nav-click.js";
import {closeClicked} from "./nav-click.js";


// call celebs Marilyn Photo function
celebsMarilynAnimation();
celebsJoeAnimation();
celebsJamesAnimation();

// import {triangleYellowAnimation} from "./triangleYellow.js";
// import {triangleOrangeAnimation} from "./triangleOrange.js";
// import {rectangleBlueAnimation} from "./rectangleBlue.js";
// import {lineNavy1Animation} from "./lineNavy1.js";
// import {lineNavy2Animation} from "./lineNavy2.js";
// import {lineOrangeAnimation} from "./lineOrange.js";

// const mainTL = gsap.timeline({paused:true});

// mainTL.add(triangleYellowAnimation())
//         .add(triangleOrangeAnimation())
//         .add(rectangleBlueAnimation())
//         .add(lineNavy1Animation())
//         .add(lineNavy2Animation())
//         .add(lineOrangeAnimation())
//         .play();


$("#burger-icon").on("click",burgerClicked);

$(".stutter button").on("click",closeClicked);

