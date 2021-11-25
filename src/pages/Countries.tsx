import { Link } from 'react-router-dom';
import countryList from '../data/countryList';

const Countries = () => (
  <div className="countries__container">
    <h2 className="heading2">Countries where I have been!</h2>
    <div className="countries">
      {countryList.map(({ id, title, image }) => (
        <Link className="link" key={id} to={`/country/${id}`}>
          <img src={image} alt={title} width={250} height={165} />
          <h3 className="heading3">
            {title}
          </h3>
        </Link>
      ))}
    </div>
  </div>
);

export default Countries;
