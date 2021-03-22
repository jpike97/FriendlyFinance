import Api from '@/services/Api';
import AuthenticationService from '@/services/AuthenticationService';
export default {
    postUserRegistration(registerData) {
    Api().post('/register', {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email
      }).then(tokenResponse => tokenResponse.data.token ? AuthenticationService.saveToken(tokenResponse.data.token) : "");
  }
}