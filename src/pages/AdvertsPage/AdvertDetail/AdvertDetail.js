import { useEffect, useState } from 'react';
import { getAdvertById } from '../../service';
import { useParams } from 'react-router-dom';
import Tags from '../../../components/Tags';
import '../AdvertsPage.css';
import Content from '../../../components/Content';
import Button from '../../../components/Button';
import DeleteModal from '../../../components/deleteModal/DeleteModal';

const AdvertDetail = () => {
  const [advert, setAdvert] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const params = useParams();

  useEffect(() => {
    getAdvertById(params.id).then((data) => setAdvert(data));
  }, [params.id]);

  return (
    <Content title={advert.name}>
      <div className="advert-container" style={{ margin: 'auto' }}>
        <div className="advert-photo">
          <img
            src={advert.photo || '../no-pic.jpeg'}
            alt="product-pic"
            style={{ width: '40vw', borderRadius: '2rem' }}
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
            <Button
              $variant="primary"
              onClick={() => {
                setShowDeleteModal(!showDeleteModal);
              }}
            >
              DELETE
            </Button>
          </div>
        </div>
      </div>
      {showDeleteModal ? (
        <DeleteModal setShowDeleteModal={setShowDeleteModal} advert={advert} />
      ) : null}
    </Content>
  );
};

export default AdvertDetail;
