import { NavLink, useNavigate } from 'react-router-dom';
import { deleteAdvert } from '../../pages/auth/service';
import Button from '../Button';
import Modal from './Modal';
import Overlay from './Overlay';
import { useState } from 'react';

const DeleteModal = ({ setShowDeleteModal, advert }) => {
  const [deleteAdError, setDeleteAdError] = useState(false);
  const navigate = useNavigate();

  const onDeleteHandler = async () => {
    try {
      await deleteAdvert(advert.id);
      navigate('/');
    } catch (error) {
      setDeleteAdError(true);
    }
  };

  return (
    <Overlay onClick={() => setShowDeleteModal(false)}>
      {!deleteAdError ? (
        <Modal onClick={(e) => e.stopPropagation()}>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setShowDeleteModal(false)}
          >
            X
          </button>
          <p>Are you sure you want to delete this advert?</p>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
            <Button onClick={onDeleteHandler} $variant="primary">
              Delete
            </Button>
          </div>
        </Modal>
      ) : (
        <Modal>
          <h3>Error when try to delete advert</h3>
          <NavLink to="/" className="">
            Back to home...
          </NavLink>
        </Modal>
      )}
    </Overlay>
  );
};

export default DeleteModal;
