import 'object-fit-images'
import { jarallax } from 'jarallax'

window.addEventListener('load', function(event) {

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 1.1
  })

  jarallax(document.querySelectorAll('.jarallax-fast'), {
    speed: 1.3
  })

  jarallax(document.querySelectorAll('.jarallax-slow'), {
    speed: 0.8
  })

})
