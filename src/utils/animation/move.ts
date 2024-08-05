import { gsap } from 'gsap'

export const move = (className: string, ty: 'enter' | 'leave', span: number = 100, method: 'x' | 'y', duration: number = .5) => {
   const tl = gsap.timeline()
   let moveObj = {}

   if (method === 'x') {
      moveObj = { x: span, duration }
      if (ty === 'enter') {
         tl.to(className, moveObj)
      } else {
         (moveObj as any).x = 0
         tl.to(className, moveObj)
      }
   } else if (method === 'y') {
      moveObj = { y: span, duration }
      if (ty === 'enter') {
         tl.to(className, moveObj)
      } else {
         (moveObj as any).y = 0
         tl.to(className, moveObj)
      }
   }
}