import './topbar.scss'
import { Mail, LinkedIn, GitHub, Call } from '@material-ui/icons'

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>mehdi</a>
          
          <div className="itemContainer">
            <a href="tel:+46729239923">
            <Call className='icon' />
            </a>
          </div>

          <div className="itemContainer">
            <a href="mailto:mehallaou@gmail.com">
              <Mail className='icon' />
            </a>
          </div>

          <div className="itemContainer">
            <a href="https://linkedin.com/in/mehdi-allaou">
              <LinkedIn className='linkedin' />
            </a>
          </div>

          <div className="itemContainer">
            <a href="https://github.com/Mehdi-Allaou">
              <GitHub className='github' />
            </a>
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