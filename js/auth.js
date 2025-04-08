const AUTH_CONFIG = {
  username: 'admin',
  password: 'chickens2024',
  storagePrefix: 'eggnest_'
};

export const AuthService = {
  isLoggedIn() {
    return localStorage.getItem(`${AUTH_CONFIG.storagePrefix}isLoggedIn`) === 'true';
  },

  login(username, password) {
    if (username === AUTH_CONFIG.username && password === AUTH_CONFIG.password) {
      localStorage.setItem(`${AUTH_CONFIG.storagePrefix}isLoggedIn`, 'true');
      localStorage.setItem(`${AUTH_CONFIG.storagePrefix}username`, username);
      return true;
    }
    return false;
  },

  logout() {
    Object.keys(localStorage)
      .filter(key => key.startsWith(AUTH_CONFIG.storagePrefix))
      .forEach(key => localStorage.removeItem(key));
    location.reload();
  },

  getUsername() {
    return localStorage.getItem(`${AUTH_CONFIG.storagePrefix}username`);
  }
};