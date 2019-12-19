const Animate = function (os) {
  this.os = os
}

Animate.prototype = {
  
  activate (el, speed, scrollTop) {    
    
    el.style.transform = `translateY(${(-(scrollTop/speed)*0.3)}px)`    

    // activate (el, speed, scrollTop, reverse) {
    //   const calc = (reverse) ? (scrollTop/speed) : -(scrollTop/speed);
    //   el.style.transform = `translateY(${calc}px)`
    // }

  }
}
 
export default {
  install (Vue, os = {}) {
    let a
    Vue.prototype.$animate = a = new Animate(os)
    const items = []

    window.addEventListener('scroll', function () {
      items.forEach((item) => {
        a.activate(item.elem, item.speed, window.scrollY, item.reverse)
      })
    })

    Vue.directive('animate', {
      bind (el, binding) {
        items.push({ elem: el, speed: binding.value.speed || 10, reverse: binding.value.reverse || false })
      },
      unbind (el) {
        items.forEach((item, i) => {
          if (el === item.elem) {
            items.splice(i, 1)
          }
        })
      }
    })
  }
}
