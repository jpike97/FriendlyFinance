<template>
	<div class="login">
		<div class="sign-up__wrapper">
			<h2>Login</h2>
			<div class="sign-up__inputs">
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
			<button
				class="btn-default"
				:class="formValid ? 'ready' : ''"
				type="button"
				v-on:click="login()"
			>
				Login
			</button>
			<div class="sign-up__login">
				<span class="text--small">No Account?</span>
				<a class="text--small text-link" href="/">Sign Up</a>
			</div>
		</div>
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
	computed: {
		formValid() {
			if (
				this.input.email != "" &&
				this.input.password != ""
			) {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		login() {
			if (
				this.input.email != undefined &&
				this.input.password != undefined
			) {
				UserLoginService.postUserLogin(this.input);
				//TODO: logic here to redirect
				window.location = "/profile";
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
@import "@/scss/components/shared/shared.scss";
@import "@/scss/components/_signup.scss";
.error {
	border: 1px solid red;
}
</style>
