import { createContext, useContext, useState } from 'react';
import { createAdvert } from '../service';
import { useNavigate } from 'react-router-dom';

const NewAdvertFormContext = createContext(null);

export const useNewFormData = () => {
  const newFormData = useContext(NewAdvertFormContext);
  return newFormData;
};

export const NewAdvertFormContextProvider = ({ children }) => {
  const [advertData, setAdvertData] = useState({
    name: '',
    sale: true,
    price: 0,
    tags: [],
    photo: null,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const isValidForm = !!(
    advertData.name &&
    advertData.price &&
    advertData.tags.length > 0
  );
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

  const resetAdvertData = () => {
    setAdvertData({
      name: '',
      sale: true,
      price: 0,
      tags: [],
      photo: null,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const result = await createAdvert(advertData);
      setIsFetching(false);
      resetAdvertData();
      navigate(`/adverts/${result.id}`);
    } catch (error) {
      setIsFetching(false);
      setError(error.message);
      console.log(error);
    }
  };

  const newAdvertFormData = {
    advertData,
    isValidForm,
    isFetching,
    error,
    onChangeHandler,
    submitHandler,
  };

  return (
    <NewAdvertFormContext.Provider value={newAdvertFormData}>
      {children}
    </NewAdvertFormContext.Provider>
  );
};
