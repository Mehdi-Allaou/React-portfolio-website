import { useState, useEffect } from 'react';
import { projectPortfolio } from '../../data';

import './projects.scss';

export const Projects = () => {
  const [selected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(projectPortfolio);
        break;
      default:
        console.log(Error);
    }
  }, [selected])

  return (
    <div className='projects' id='projects'>
      <h1 className='main-text'>projects</h1>
      <div className="container">
        {data.map(_data => (
        <div className='wrapper' key={_data.id}>
          <p className='project-title'>{_data.title}</p>
          <p className='project-info'>{_data.info.map(keyword => <span key={keyword}>{keyword}&nbsp;</span>)}</p>
          <div className="item">
            <img 
              src={_data.img} 
              alt="" 
              onClick={() => window.open(_data.src, '_blank')}
            />
            <h3>{_data.title}</h3>
          </div>
            <button 
              className='btn'
              onClick={() => window.open(_data.git, '_blank')}>
              View the code
            </button>
        </div>
        ))}
      </div>
    </div>
  )
}
