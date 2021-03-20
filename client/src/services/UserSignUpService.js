import Api from '@/services/Api'

export default {
  postUserSignup(signupData) {
    return Api().post('/signup', {
        username: signupData.username,
        password: signupData.password,
        email: signupData.email
      });
  }
}