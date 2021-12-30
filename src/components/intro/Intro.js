import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backspeed: 60,
      showCursor: true,
      // strings: ['Developer', 'Designer', 'Frontender']
      strings: ['Frontend Developer', 'UX / UI Designer', 'JavaScript Developer']
    });
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img className='main-img' src="assets/me-picture.png" alt="Photo of me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi There, I'm</h1>
          <h2>Mehdi Allaou</h2>
          <h3>Junior <span ref={textRef}></span></h3>
        </div>
        <a href="#about">
        <img src="assets/down.png" alt="leading arrow to the next page" />
        </a>
      </div>
    </div>
  )
}
