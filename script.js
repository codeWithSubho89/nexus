let tl = gsap.timeline();
let cursor = document.querySelector(".cursor");

document.addEventListener('mousemove',function(dets){
    gsap.from('.cursor',{
        x:dets.x,
        y:dets.y,
        delay:0.1
    })
})

gsap.to('.suggest-ep',{
    y:-100,
    duration:3,
    yoyo:true,
    repeat:-1,
    scrub:2
})

tl.from('.info-section h1',{
    y:100,
    opacity:0,
    blur:20,
    duration:0.5,
})
tl.from('.info-section p',{
    y:100,
    opacity:0,
    duration:0.5,
})
tl.from('.info-buttons .btn1 ',{
    x:-100,
    opacity:0,
    duration:0.2
})
tl.from('.info-buttons .btn2 ',{
    x:100,
    opacity:0,
    duration:0.2
})