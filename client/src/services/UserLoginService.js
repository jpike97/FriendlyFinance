import Api from '@/services/Api'
import AuthenticationService from '@/services/AuthenticationService';
export default {
  postUserLogin(loginData) {
    return Api()
      .post('/login', {
        email: loginData.email,
        password: loginData.password
      })
      .then(tokenResponse => tokenResponse.data.token ? AuthenticationService.saveToken(tokenResponse.data.token) : "");
  }
}