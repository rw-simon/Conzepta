import 'object-fit-images'
import { jarallax, jarallaxVideo } from 'jarallax'

window.addEventListener('load', function(event) {
  jarallaxVideo()

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 1.1
  })

  jarallax(document.querySelectorAll('.jarallax-fast'), {
    speed: 1.3
  })

  jarallax(document.querySelectorAll('.jarallax-slow'), {
    speed: 0.9
  })

  jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://youtu.be/mru3Q5m4lkY'
  })
})
