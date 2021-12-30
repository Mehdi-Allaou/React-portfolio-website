import './about.scss';
import { Text } from './text/Text';

export const About = () => {
  return (
    <div className='about' id='about' >
      <div className="headtext">
        <h1 className='main-text'>about me</h1>
      </div>
      <div className="container">
        <div className="text-div">
          <p>
            <Text />
          </p>
        </div>
        <div className="left-container">
        </div>
        <div className="right-container">
        </div>
      </div>
    </div>
  )
}
