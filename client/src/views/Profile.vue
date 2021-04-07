<template>
	<div class="profile">
		<h1>Profile Page!</h1>
		<span>{{user.username}}</span>
	</div>
</template>

<script>
// @ is an alias to /src
import "@/scss/_variables.scss";
import UserProfileService from "@/services/UserProfileService";
import AuthenticationService from "@/services/AuthenticationService";

export default {
	name: "Profile",
	components: {},
	data: function () {
		return {
			input: "ah",
			user: { username: " ", score: 0 }
		};
	},
	mounted() {
		let userToken = AuthenticationService.getToken();
		console.log(userToken);
		var user = UserProfileService.fetchUserProfile(userToken);
		this.user = user;
	}
};
</script>
<style lang="scss" scoped></style>
