import Button from '../../../components/Button';
import Tags from '../../../components/Tags';
import imgPlaceHolder from '../../../assets/no-pic.jpeg';
import DeleteModal from '../../../components/deleteModal/DeleteModal';
import { useState } from 'react';

export const AdvertDetail = ({ advert }) => {
  const { name, photo, price, sale, tags } = advert;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="advert-container" style={{ margin: 'auto' }}>
      <div className="advert-photo">
        <img
          src={photo || imgPlaceHolder}
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
              {price}$
            </p>
            <p className="product-state" style={{ fontSize: '3rem' }}>
              {sale ? 'SALE' : 'BUY'}
            </p>
          </div>
          <p className="product-name" style={{ fontSize: '2rem' }}>
            {name}
          </p>
          {<Tags tags={tags} />}
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
      {showDeleteModal ? (
        <DeleteModal setShowDeleteModal={setShowDeleteModal} advert={advert} />
      ) : null}
    </div>
  );
};
