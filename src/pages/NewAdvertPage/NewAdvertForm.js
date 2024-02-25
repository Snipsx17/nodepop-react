import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { getTags } from './service';

const NewAdvertForm = ({
  submitHandler,
  changeHandler,
  advertData,
  isValidForm,
}) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((tags) => {
      setTags(tags);
    });
  }, []);

  return (
    <>
      <form className="new-advert-form">
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={advertData.name}
            onChange={changeHandler}
          />
        </div>
        <div className="input-box">
          <label htmlFor="sale">Buy / Sell</label>
          <select
            name="sale"
            id="sale"
            onChange={changeHandler}
            value={advertData.sale === true ? 'sale' : 'buy'}
          >
            <option value={'sale'}>For Sale</option>
            <option value={'buy'}>For Buy</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            name="price"
            onChange={changeHandler}
            value={advertData.price}
          />
        </div>
        <div className="input-box">
          <label htmlFor="tags">Tags</label>
          <select
            id="tags"
            name="tags"
            onChange={changeHandler}
            multiple={true}
            value={advertData.tags}
          >
            {tags.map((tag) => {
              return (
                <option key={tag} value={tag}>
                  {tag.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/png, image/jpeg, image/jpg"
            onChange={changeHandler}
          />
        </div>

        <Button
          $variant="primary"
          onClick={submitHandler}
          disabled={!isValidForm}
        >
          Create Advert
        </Button>
      </form>
    </>
  );
};

export default NewAdvertForm;
