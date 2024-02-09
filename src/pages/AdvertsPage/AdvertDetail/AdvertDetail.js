import { useEffect, useState } from 'react';
import { getAdvert } from '../../auth/service';
import { useParams } from 'react-router-dom';
import Tags from '../../../components/Tags';
import '../AdvertsPage.css';
import Content from '../../../components/Content';

const AdvertDetail = () => {
  const [advert, setAdvert] = useState({});
  const params = useParams();

  useEffect(() => {
    getAdvert(params.id).then((data) => setAdvert(data));
  }, [params.id]);

  return (
    <Content title={advert.name}>
      <div className="advert-container" style={{ margin: 'auto' }}>
        <div className="advert-photo">
          <img
            src={advert.photo}
            alt="product-pic"
            style={{ width: '70vw', borderRadius: '2rem' }}
          />
        </div>
        <div className="advert-info" style={{ marginTop: '2rem' }}>
          <div className="card-info">
            <div
              className="card-info-row"
              style={{ justifyContent: 'center', gap: '3rem' }}
            >
              <p className="product-price" style={{ fontSize: '3rem' }}>
                {advert.price}$
              </p>
              <p className="product-state" style={{ fontSize: '3rem' }}>
                {advert.sale ? 'SALE' : 'BUY'}
              </p>
            </div>
            <p className="product-name" style={{ fontSize: '2rem' }}>
              {advert.name}
            </p>
            {<Tags tags={advert.tags} />}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default AdvertDetail;