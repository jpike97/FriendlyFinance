import Api from '@/services/Api'

export default {
  fetchUserProfile(userToken) {
    return Api().get("/profile", userToken);
  }
}