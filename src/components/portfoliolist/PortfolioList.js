import './portfolioList.scss';

export const PortfolioList = ({ id, active, setSelected }) => {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'} 
    onClick={() => setSelected(id)}
    >
    </li>
  )
}
