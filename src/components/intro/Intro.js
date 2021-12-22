import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backspeed: 60,
      showCursor: true,
      strings: ['Developer', 'Designer']
    });
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profilbildtest.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mehdi Allaou</h1>
          <h3>Junior <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">

        <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
