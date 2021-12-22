import './works.scss';
import { useState } from 'react';

export const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    { id: '1', 
      icon: './assets/project1.png', 
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus fugit mollitia eligendi, sint illum?',
      img: './assets/project1.png'
    },
    { id: '2', 
      icon: './assets/globe.png', 
      title: 'Globe design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus fugit mollitia eligendi, sint illum?',
      img: './assets/project1.png'
    }
  ];

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              </div>
            </div>
        </div>
          ))} 
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick('left')} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick('right')} />
    </div>
  )
}
