import { useState, useEffect } from 'react';
import { PortfolioList } from '../portfoliolist/PortfolioList';
import { projectPortfolio } from '../../data';

import './portfolio.scss';


export const Portfolio = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    { id: 'project', title: 'Project' }
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(projectPortfolio);
        break;
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(_data => (
        <div>
          <p className='project-info'>{_data.info.map(keyword => <span>{keyword}&nbsp;</span>)}</p>
          <div className="item">
            {/* <img src={_data.img} alt="" onClick={() => window.location.href=_data.src}/> */}
            <img src={_data.img} alt="" onClick={() => window.open(_data.src, '_blank')}/>
            <h3>{_data.title}</h3>
          </div>
        </div>
          ))}
      </div>
    </div>
  )
}
