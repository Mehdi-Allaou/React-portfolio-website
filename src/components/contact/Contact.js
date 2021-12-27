import { useState } from 'react'
import './contact.scss'

export const Contact = () => {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className="headtext">
        <h1>Contact.</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="contact-text">
            <ul className='contact-list'>
              <p>+46 729 23 99 23</p>
              <p>mehallaou@gmail.com</p>
              <a href="https://linkedin.com/in/mehdi-allaou">https://linkedin.com/in/mehdi-allaou</a>
              <a href="https://github.com/Mehdi-Allaou">https://github.com/Mehdi-Allaou</a>
            </ul>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Firstname'/>
            <input type="text" placeholder='Lastname'/>
            <input type="text" placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button type='Submit'>Send</button>
            {message && <span>Thanks, I'll reply asap!</span>}
          </form>
        </div>
      </div>
      
    </div>
  )
}
