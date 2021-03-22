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
//import UserLoginService from "@/services/UserLoginService";

export default {
	name: "login",
	data: function () {
		return {
			input: {},
			usernameClass: "",
			passwordClass: ""
		};
	},
	mounted() {},
	computed: {},
	methods: {
		login() {
			if (
				this.input.username != undefined &&
				this.input.password != undefined
			) {
				console.log(this.input);
			}
			if (this.input.username == undefined) {
				this.usernameClass = "error";
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
