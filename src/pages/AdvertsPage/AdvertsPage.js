import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import { getAdverts } from '../auth/service';
import './AdvertsPage.css';
import { Link, Navigate } from 'react-router-dom';
import FilterZone from './FilterZone/FilterZone';
import NoAdverts from './NoAdverts/NoAdverts';
import { useIsLogged } from '../auth/loginPage/LoginContext';
import Tags from '../../components/Tags';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const { isLogged } = useIsLogged();
  const [loadAdsError, setLoadAdsError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ name: '', status: '0' });

  const onChangeFilters = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const filteredAdverts = () => {
    return adverts
      .filter(
        (advert) =>
          advert.name.toLowerCase().search(filters.name.toLowerCase()) !== -1
      )
      .filter((advert) => {
        return filters.status === '0'
          ? true
          : filters.status === '1'
          ? advert.sale === false
          : advert.sale === true;
      });
  };

  const renderAdverts = (adverts) => {
    return !adverts.length ? (
      <NoAdverts>No adverts to display, try to create one</NoAdverts>
    ) : (
      <>
        <FilterZone onChangeFilters={onChangeFilters} />
        <ul className="adverts">
          {!filteredAdverts().length ? (
            <NoAdverts>
              No ads were found with those filters. Try others, or even better,
              create one.
            </NoAdverts>
          ) : (
            filteredAdverts().map(({ id, photo, price, sale, name, tags }) => {
              return (
                <Link key={id} to={id}>
                  <li className="advert-card">
                    <img src={photo} alt="product-pic" />
                    <div className="card-info">
                      <div className="card-info-row">
                        <p className="product-price">{price}$</p>
                        <p className="product-state">{sale ? 'SALE' : 'BUY'}</p>
                      </div>
                      <p className="product-name">{name}</p>
                      {<Tags tags={tags} />}
                    </div>
                  </li>
                </Link>
              );
            })
          )}
        </ul>
      </>
    );
  };

  const renderError = () => {
    return (
      <span className="load-error">
        Something went wrong while trying to load ads, try again later...
      </span>
    );
  };

  useEffect(() => {
    !isLogged ? Navigate('/login') : setIsLoading(true);
    getAdverts()
      .then((data) => {
        setAdverts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setLoadAdsError(error);
        setIsLoading(false);
      });
  }, [isLogged]);

  return (
    <>
      <Content title={'Adverts'}>
        {isLoading ? (
          <>Loading...</>
        ) : loadAdsError ? (
          renderError(loadAdsError)
        ) : (
          renderAdverts(adverts)
        )}
      </Content>
    </>
  );
};

export default AdvertsPage;
