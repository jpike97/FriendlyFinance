<template>
	<div class="login">
		<input
			type="text"
			name="username"
			v-model="input.username"
			placeholder="Username"
		/>
		<input
			type="password"
			name="password"
			v-model="input.password"
			placeholder="Password"
		/>
		<button type="button" v-on:click="login()">Login</button>
	</div>
</template>

<script>
export default {
	name: "login",
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
			if (this.input.username != "" && this.input.password != "") {
				console.log(this.input);
				//post login service here
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
