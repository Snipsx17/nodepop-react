import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

export const login = (credentials, rememberSesion) => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (rememberSesion) {
      storage.set('auth', accessToken);
    }
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
  });
};

export const getAdverts = () => {
  return client.get('api/v1/adverts');
};

export const getAdvert = (id) => {
  return client.get(`api/v1/adverts/${id}`);
};

export const deleteAdvert = (id) => {
  return client.delete(`api/v1/adverts/${id}`);
};
