import './topbar.scss'
import { Person, Mail, LinkedIn, GitHub } from '@material-ui/icons'

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>mehdi</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+46 729 23 99 23</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>mehallaou@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className='linkedin' />
            <span>www.linkedin.com/in/mehdi-allaou</span>
          </div>
          <div className="itemContainer">
            <GitHub className='github' />
            <span>https://github.com/Mehdi-Allaou</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
