<template>
	<div class="login">
		<input
			type="text"
			name="username"
			v-model="input.username"
			placeholder="Username"
			:class="usernameClass"
		/>
		<input
			type="text"
			name="email"
			v-model="input.email"
			placeholder="Email"
			:class="emailClass"
		/>
		<input
			type="password"
			name="password"
			v-model="input.password"
			placeholder="Password"
			:class="passwordClass"
		/>
		<button type="button" v-on:click="register()">Sign Up</button>
	</div>
</template>

<script>
import UserRegisterService from "@/services/UserRegisterService.js";
export default {
	name: "signup",
	data: function () {
		return {
			input: {}, 
			usernameClass: {},
			passwordClass: {},
			emailClass: {}
		};
	},
	mounted() {},
	computed: {},
	methods: {
		register() {
			if (
				this.input.username != undefined &&
				this.input.password != undefined
			) {
				console.log(this.input);
				var registerToken = UserRegisterService.postUserRegistration(this.input);
				console.log("here's the token!");
				console.log(registerToken);
			}
			if (this.input.username == undefined) {
				this.usernameClass = "error";
			}
			if (this.input.password == undefined) {
				this.passwordClass = "error";
			}
			if (this.input.email == undefined) { 
				this.emailClass = "error";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
