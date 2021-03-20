<template>
	<div class="login">
		<input
			type="text"
			name="username"
			v-model="input.username"
			placeholder="Username"
		/>
		<input
			type="text"
			name="email"
			v-model="input.email"
			placeholder="Email"
		/>
		<input
			type="password"
			name="password"
			v-model="input.password"
			placeholder="Password"
		/>
		<button type="button" v-on:click="signup()">Sign Up</button>
	</div>
</template>

<script>
export default {
	name: "signup",
	data: function () {
		return {
			input: {}
		};
	},
	mounted() {},
	computed: {},
	methods: {
		login() {
			console.log(this.input.username);
            console.log(this.input.password);
            console.log(this.input.email);
			if (this.input.username != "" && this.input.password != "" && this) {
				console.log(this.input);
				//post signup code to service
            }
            
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
