export default {
  saveToken(token) {
    localStorage.setItem('mevn-token', token);
    this.token = token;
  },
  getToken() { 
    if (!this.token) {
        this.token = localStorage.getItem('mevn-token');
      }
      return this.token;
  },
  logout() { 
      this.token = ''; 
      window.localStorage.removeItem('mevn-token');
      window.location.href = '/';
  },
  getUserDetails() { 
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  },
  isLoggedIn() { 
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}