import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import { getAdverts } from '../auth/service';
import './AdvertsPage.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [loadAdsError, setLoadAdsError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const renderAdverts = (adverts) => {
    return !adverts.length ? (
      <div className="no-ads">
        <span>No adverts to display, start Selling or buying...</span>
        <Button as={Link} $variant="primary" to="new" relative="route">
          Create your first Advert
        </Button>
      </div>
    ) : (
      <ul className="adverts">
        {adverts.map(({ id, photo, price, sale, name, tags }) => {
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
                  <div className="tags">{renderTags(tags)}</div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  const renderError = () => {
    return (
      <span className="load-error">
        Something went wrong while trying to load ads, try again later...
      </span>
    );
  };

  const renderTags = (tags) => {
    const result = tags.map((tag) => (
      <span key={tag[1]} className="product-tag">
        {tag}
      </span>
    ));

    return result;
  };

  useEffect(() => {
    setIsLoading(true);
    getAdverts()
      .then((data) => {
        setAdverts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setLoadAdsError(error);
        setIsLoading(false);
      });
  }, []);

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
