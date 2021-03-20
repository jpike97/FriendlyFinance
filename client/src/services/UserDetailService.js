import Api from '@/services/Api'

export default {
  fetchUserDetail(username) {
    return Api().get("users/" + username)
  }
}