import Api from '@/services/Api'

export default {
  postUserLogin(loginData) {
    return Api().post('/login', {
        username: loginData.username,
        password: loginData.password
      });
  }
}