import './about.scss';
import { Text } from './text/Text';




export const About = () => {
  return (
    <div className='about' id='about' >
      <div className="headtext">
        <h1>about me</h1>
        <br />
      </div>
      <div className="container">
        <div className="left-container">
          <img src="assets/picture3.png" alt="" />      
          <p>
            <Text />
          </p>
          <div className="header__buttons">
            {/* <a href="MehdiAllaouCVny.pdf" title='' className="btn btn-outline">Download Resume */}
            {/* </a> */}
            
          </div>
        </div>
        <div className="right-container">
          <div className='img-container'>
          </div>
        </div>
      </div>
    </div>
  )
}
