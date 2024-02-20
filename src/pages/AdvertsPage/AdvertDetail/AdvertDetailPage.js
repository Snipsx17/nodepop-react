import { useEffect, useState } from 'react';
import { getAdvertById } from '../../service';
import { useParams } from 'react-router-dom';
import '../AdvertsPage.css';
import Content from '../../../components/Content';
import { Error } from '../../../components/Error';
import { AdvertDetail } from './AdvertDetail';

const AdvertDetailPage = () => {
  const [advert, setAdvert] = useState({});
  const [errorOnLoadAdvert, setErrorOnLoadAdvert] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    try {
      setIsLoading(true);
      getAdvertById(params.id)
        .then((data) => setAdvert(data))
        .catch((error) => setErrorOnLoadAdvert(error.message));
      setIsLoading(false);
    } catch (error) {
      setErrorOnLoadAdvert(error.message);
    }
  }, [params.id]);

  return (
    <Content title={advert.name}>
      {errorOnLoadAdvert ? (
        <Error>
          Opps, looks like an error occurred when try to load the advert, please
          try again later...
        </Error>
      ) : (
        <AdvertDetail advert={advert} />
      )}
    </Content>
  );
};

export default AdvertDetailPage;
