<template>
  <div class="login">
    <input
      type="text"
      name="email"
      v-model="input.email"
      placeholder="email"
      :class="emailClass"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
      :class="passwordClass"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import UserLoginService from "@/services/UserLoginService";
export default {
	name: "login",
	data: function () {
		return {
			input: {},
			emailClass: "",
			passwordClass: ""
		};
	},
	mounted() {},
	computed: {},
	methods: {
		login() {
			if (
				this.input.email != undefined &&
				this.input.password != undefined
			) {
				UserLoginService.postUserLogin(this.input);
			}
			if (this.input.email == undefined) {
				this.emailClass = "error";
			}
			if (this.input.password == undefined) {
				this.passwordClass = "error";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.error {
  border: 1px solid red;
}
</style>
