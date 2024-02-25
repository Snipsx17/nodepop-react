import Content from '../../components/Content';
import './NewAdvertForm.css';
import NewAdvertForm from './NewAdvertForm';
import { useNewFormData } from './Context';

const NewAdvert = () => {
  const { isFetching, error } = useNewFormData();

  return (
    <>
      <Content title={'Create New Advert'}>
        <NewAdvertForm />
        <div>
          <span>{error || ''}</span>
          <span>{isFetching && 'Creating Advert'}</span>
        </div>
      </Content>
    </>
  );
};

export default NewAdvert;
