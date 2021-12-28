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
        <h1>Contact</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="contact-text">
            <ul className='contact-list'>
              <h4>Call me on: </h4>
              <a href="tel:+46729239923">
                <p>+46 729 23 99 23</p>
              </a>
              <h4>Mail: </h4>
              <a href="mailto:mehallaou@gmail.com">
                <p>mehallaou@gmail.com</p>
              </a>
              <h4>LinkedIn profile: </h4>
              <a href="https://linkedin.com/in/mehdi-allaou">
                <p>https://linkedin.com/in/mehdi-allaou</p>
              </a>
              <h4>GitHub link:</h4>
              <a href="https://github.com/Mehdi-Allaou">
               <p>https://github.com/Mehdi-Allaou</p>
              </a>
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
