var parallaxIt = function(e, target, parent, movement) {
    var relX = e.pageX - offset(parent).left
    var relY = e.pageY - offset(parent).top
    var x = (relX - parent.offsetWidth / 2) / parent.offsetWidth * movement
    var y = (relY - parent.offsetHeight / 2) / parent.offsetHeight * movement
    
    target.style.setProperty('--parallax-x', x+"px");
    target.style.setProperty('--parallax-y', y+"px");
  }

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

document.querySelector(".container").addEventListener("mousemove", function(e) {
    parallaxIt(e, this.querySelector("h1"), this, 80)
    parallaxIt(e, this.querySelector("p"), this, 60)
    parallaxIt(e, this.querySelector(".btn-container"), this, 40)
})