
// 手动实现 instanceof
const myInstanceof = (left, right) => {
   if (typeof left !== 'object' || left === null) return false
   let proto = Object.getPrototypeOf(left)
   while (true) {
      if (proto === null) return false
      if (proto === right.prototype) return true
      proto = Object.getPrototypeOf(proto)
   }
}

// 手动实现 deepClone
const deepclone = (target, hash = new WeakMap()) => {
   if (typeof target !== 'object' || target === null) return target
   if (hash.has(target)) return hash.get(target)
   const cloneTarget = Array.isArray(target) ? [] : {}
   hash.set(target, cloneTarget)

   const symkeys = Object.getOwnPropertySymbols(target)
   if (symkeys.length) {
      symkeys.forEach(key => {
         if (typeof target[key] === 'object' && target[key] !== null) {
            cloneTarget[key] = deepclone(target[key], hash)
         } else {
            cloneTarget[key] = target[key]
         }
      })
   }

   for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
         if (typeof target[key] === 'object' && target[key] !== null) {
            cloneTarget[key] = deepclone(target[key], hash)
         } else {
            cloneTarget[key] = target[key]
         }
      }
   }

   return cloneTarget
}