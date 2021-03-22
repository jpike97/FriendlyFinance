import Api from '@/services/Api';
import AuthenticationService from '@/services/AuthenticationService';
export default {
  async postUserRegistration(registerData) {
    var tokenResponse = await Api().post('/register', {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email
      });
      if (tokenResponse.token) { 
        console.log("this is the response");
        console.log(tokenResponse);
        AuthenticationService.saveToken(tokenResponse.token);
      }
      return tokenResponse;
  }
}