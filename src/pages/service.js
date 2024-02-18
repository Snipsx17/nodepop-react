import { client } from '../api/client';

export const getAdverts = () => {
  return client.get('api/v1/adverts');
};

export const getAdvertById = (id) => {
  return client.get(`api/v1/adverts/${id}`);
};

export const deleteAdvert = (id) => {
  return client.delete(`api/v1/adverts/${id}`);
};

export const createAdvert = (advertData) => {
  return client.post('api/v1/adverts', advertData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
