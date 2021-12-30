import './contact.scss'

export const Contact = () => {

  return (
    <div className='contact' id='contact'>
      <div className="headtext">
        <h1 className='main-text'>contact</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="contact-text">
            <ul className='contact-list'>
              <h4>Cellphone: </h4>
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
        <footer>
          <p>Mehdi Allaou</p>
        </footer>
      </div>
    </div>
  )
}
