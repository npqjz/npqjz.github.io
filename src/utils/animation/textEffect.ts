import { gsap } from "gsap"
export const addTextEffect = () => {
   const chars = document.querySelectorAll('.char')
   const t = gsap.timeline({})
   t.to(chars, {
      opacity: 1,
      delay: 0.1,
      duration: 0.5,
      y: 0,
      ease: 'Power4.inOut',
      stagger: 0.1
   })
}