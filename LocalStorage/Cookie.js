/**
 * Encapsulation Cookie
 * set()
 * get()
 * remove()
 * kyo
 */

export const set = (name, value, { maxAge, domain, path, secure } = {}) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (typeof maxAge === "number") {
    cookieText += `; max-age=${maxAge}`;
  }
  if (domain) {
    cookieText += `; domain=${domain}`;
  }
  if (path) {
    cookieText += `; path=${path}`;
  }
  if (secure) {
    cookieText += `; secure`;
  }
  document.cookie = cookieText;
};

export const get = (name) => {
  name = encodeURIComponent(name).toString();
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return;
};

export const remove = (name, { domain, path } = {}) => {
  set(name, "", { domain, path, maxAge: -1 });
};
