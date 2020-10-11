import gsap from "gsap";

var canSeeNav = false;

export function burgerClicked(){
    console.log("clicked");
    if(canSeeNav === false){
        gsap.set("#nav",{display:"grid"});
    }else{
        gsap.set("#nav",{display:"none"});
    }
}

export function closeClicked(){
    gsap.set("#nav",{display:"none"});
}