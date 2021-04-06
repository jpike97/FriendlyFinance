<template>
	<div class="profile">
		<h1>Profile Page!</h1>
	</div>
</template>

<script>
// @ is an alias to /src
import "@/scss/_variables.scss";
//import AuthenticationService from "@/services/AuthenticationService";

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
      var user = AuthenticationService  
    }
};
</script>
<style lang="scss" scoped></style>
