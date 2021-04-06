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
    <button class="btn-default" :class="formValid ? 'ready' : ''" type="button" v-on:click="register()">Sign Up</button>
    <div class=sign-up__login><span class="text--small">Have an Account?</span><a class="text--small text-link" href="/login">Sign in</a></div>
    <div class="testing">
      <a href="#" v-on:click="showUserDetails()">Click to Test</a>
    </div>
  </div>
</template>

<script>
import UserRegisterService from "@/services/UserRegisterService.js";
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
	name: "signup",
	data: function () {
		return {
      input: { password: "", email: "", username: ""},
			usernameClass: {},
			passwordClass: {},
      emailClass: {},
      buttonClass: {}
		};
	},
	mounted() {},
	computed: {
     formValid() {
      if (this.input.password != "" && this.input.username != "" && this.input.password != "") { 
        return true;
      }
      else { 
        return false;
      }
    }
  },
	methods: {
		register() {
			if (
				(this.formValid)
			) {
				console.log(this.input);
				var registerToken = UserRegisterService.postUserRegistration(this.input);
				console.log("here's the token!");
				console.log(registerToken);`                                                                                                `
			}
			if (this.input.username == "") {
        this.usernameClass = "error";
			}
			if (this.input.password == "") {
				this.passwordClass = "error";
			}
			if (this.input.email == "") { 
				this.emailClass = "error";
			}
    },
    showUserDetails() { 
      var userInfo = AuthenticationService.getUserDetails();
      console.log(userInfo);
      var isLoggedIn = AuthenticationService.isLoggedIn();
      console.log(isLoggedIn);
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
