import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import countryList from '../data/countryList';

type CountryType = typeof countryList[0];

const initialCountry = {
  id: 0,
  title: '',
  description: '',
  image: '',
};

const Country = () => {
  const [country, setCountry] = useState<CountryType>(initialCountry);
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedCountries = countryList.find((item) => item.id === parseInt(id as string, 10));

    if (matchedCountries) {
      setCountry(matchedCountries);
      return;
    }

    navigate('../../404');
  }, [id]);

  const { image, title, description } = country;

  return (
    <>
      <div className="country__container">
        <img src={image} alt={title} width={250} height={165} />
        <h1 className="heading1">{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="link__wrapper">
          <Link className="link" to={`/country/${Number(id) === 1 ? Number(id) : Number(id) - 1}`}>Previous</Link>
          <Link className="link" to={`/country/${Number(id) === countryList.length ? Number(id) : Number(id) + 1}`}>Next</Link>
        </div>
        <Link className="link link-back" to="/countries">Go Back</Link>
      </div>
    </>
  );
};

export default Country;
