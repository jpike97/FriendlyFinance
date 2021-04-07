import Api from '@/services/Api'

export default {
  fetchUserProfile(userToken) {
    const authString = 'Bearer '.concat(userToken); 
    console.log(userToken);
    return Api().get("/profile", { headers: { Authorization: authString }});
  }
}