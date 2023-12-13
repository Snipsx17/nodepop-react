const storageLocalHost = {
  get(key) {
    const token = localStorage.getItem(key);
    if (!token) {
      return null;
    }
    return JSON.parse(token);
  },

  set(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  },

  remove(id) {
    localStorage.removeItem(id);
  },

  clear() {
    localStorage.clear();
  },
};

export default storageLocalHost;
