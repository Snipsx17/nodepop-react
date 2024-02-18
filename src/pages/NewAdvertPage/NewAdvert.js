import { useState } from 'react';
import Content from '../../components/Content';
import './NewAdvertForm.css';
import { createAdvert } from '../service';
import NewAdvertForm from './NewAdvertForm';
import { useNavigate } from 'react-router-dom';

const NewAdvert = () => {
  const [advertData, setAdvertData] = useState({
    name: '',
    sale: true,
    price: 0,
    tags: [],
    photo: null,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    if (event.target.name === 'sale') {
      const value = event.target.value === 'sale' ? true : false;
      setAdvertData({
        ...advertData,
        [event.target.name]: value,
      });
      return;
    }

    if (event.target.name === 'tags') {
      const options = [...event.target.selectedOptions];
      const values = options.map((option) => option.value);
      setAdvertData({
        ...advertData,
        [event.target.name]: values,
      });
      return;
    }

    if (event.target.name === 'photo') {
      setAdvertData({
        ...advertData,
        [event.target.name]: event.target.files[0],
      });
      return;
    }

    setAdvertData({ ...advertData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const result = await createAdvert(advertData);
      setIsFetching(false);

      navigate(`/adverts/${result.id}`);
    } catch (error) {
      setIsFetching(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <Content title={'Create New Advert'}>
        <NewAdvertForm
          changeHandler={onChangeHandler}
          submitHandler={submitHandler}
          advertData={advertData}
        />
        <div>
          <span>{error || ''}</span>
          <span>{isFetching && 'Creating Advert'}</span>
        </div>
      </Content>
    </>
  );
};

export default NewAdvert;
