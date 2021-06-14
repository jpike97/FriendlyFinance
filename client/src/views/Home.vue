<template>
  <div class="home">
    <signup />
  </div>
</template>

<script>
// @ is an alias to /src
//TODO: get rid of home component doesn't make a lot of sense
import signup from '@/components/signup.vue';

export default {
  name: 'Home',
  components: {
    signup
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/pages/home.scss";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.avgImg { 
  height: 500px;
  width: 100%;
  max-width: 600px;
}
</style>