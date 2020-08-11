new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"   
    }
});

const { styler, physics, easing, tween, composite } = window.popmotion;

const ball = document.querySelector('.brand');
const ballStyler = styler(ball);

const polarToCartesian = ({ angle, radius }) => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle)
});

composite({
  angle: physics({ velocity: 5 }),
  radius: tween({
    from: 50,
    to: 150,
    duration: 2000,
    ease: easing.easeInOut,
    yoyo: Infinity
  })
}).pipe(polarToCartesian)
  .start(ballStyler.set); 

