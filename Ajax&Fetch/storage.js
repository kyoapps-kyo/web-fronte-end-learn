//使用JSON方法封装localStorage

const storage = window.localStorage;

export const Storage = {
  set(key, value) {
    storage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(storage.getItem(key));
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  },
};
