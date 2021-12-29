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
          <p>
            <Text />
          </p>
        </div>
        <div className="right-container">
        </div>
      </div>
    </div>
  )
}
