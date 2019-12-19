const Animate = function (os) {
  this.os = os
}

Animate.prototype = {
  activate (el, speed, scrollTop) {
    el.style.transform = `translateY(${-(scrollTop/speed)}px)`
  }
}

export default {
  install (Vue, os = {}) {
    let a
    Vue.prototype.$animate = a = new Animate(os)
    const items = []

    window.addEventListener('scroll', function () {
      items.forEach((item) => {
        a.activate(item.elem, item.speed, window.scrollY)
      })
    })

    Vue.directive('animate', {
      bind (el, binding) {
        items.push({ elem: el, speed: binding.value.speed || 10 })
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
