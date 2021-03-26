<template>
  <div class="sign-up__wrapper">
    <h2>Create your Friendly Account</h2>
    <div class="sign-up__inputs">
      <div class="sign-up__input">
        <label for="username">
          <span class="text--small">Username</span>
        </label>
        <input
          type="text"
          name="username"
          v-model="input.username"
          :class="usernameClass"
        />
      </div>
      <div class="sign-up__input">
        <label for="email">
          <span class="text--small">Email</span>
        </label>
        <input
          type="text"
          name="email"
          v-model="input.email"
          :class="emailClass"
        />
      </div>
      <div class="sign-up__input">
        <label for="password">
          <span class="text--small">Password</span>
        </label>
        <input
          type="password"
          name="password"
          v-model="input.password"
          :class="passwordClass"
        />
      </div>
    </div>
    <button class="btn-default" type="button" v-on:click="register()">Sign Up</button>
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
				!!(this.input.username != undefined &&
				this.input.password != undefined) &&
				this.input.email != undefined
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
@import "@/scss/components/shared/shared.scss";
@import "@/scss/components/_signup.scss";
</style>
