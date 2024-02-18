import { client } from '../../api/client';

export const getTags = async () => {
  return client.get('/api/v1/adverts/tags');
};
