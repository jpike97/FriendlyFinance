<template>
  <div class="nav">
      <nav class="desktop">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/rando">Rando</router-link> -->
      </nav>
      <nav class="mobile-tray">
      <div class="mobile-nav__header">
      <h1>Friendants</h1>
      <button class="hamburger hamburger--collapse" type="button">
      <span class="hamburger-box">
      <span class="hamburger-inner"></span>
      </span>
      </button>
      </div>
 
      <div class="mobile-slideout">
        <div class="mobile-nav__wrapper">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <!-- <router-link to="/rando">Rando</router-link> -->
      </div>
      </nav>
  </div>
</template>

<script>
import jQuery from "jquery";
let $ = jQuery;
export default {
  name: 'nav',
  data: function() {
return { 
    avgColor: ''
  };
},
	mounted() {
		$(document).on("click", ".hamburger", function () {
      $('.hamburger').toggleClass('is-active');
      $('.mobile-slideout').toggleClass('active');
    });
    $(document).on("click", ".router-link-active", function() {
      console.log("clicked"); 
      $('.mobile-slideout').toggleClass('active');
      $('.hamburger').toggleClass('is-active');
    });
	},
computed: {
},
methods:  {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/third-party/hamburgers/hamburgers.scss";

h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 1.25rem;
  }
  a {
    color: #42b983;
  }
  nav { 
    padding: 1rem 0rem;
  
    &.desktop { 
      display: none;
      @media (min-width: $screen-lg) { 
        display: block;
      }
    a { 
      margin-right: 6rem;
      font-family: 'F37 Ginger',Helvetica,Arial,sans-serif;
      font-weight: 700;
      letter-spacing: .3px;
      position: relative;
      text-decoration: none;
      font-size: 1.75rem;
      color: $white;

      @media (min-width: $screen-lg) { 
        color: $black;
      }
  
  
          &:after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            height: 2px;
            background: $black;
            transition: width 0.25s $ease-in-quad;
          }
  
          &:hover,
          &:active,
          &:focus,
          &.active,
          &.router-link-exact-active {
            &:after {
              width: 100%;
              transition: width 0.25s $ease-out-quad;
            }
          }
  
      &:last-of-type { 
        margin-right: 0;
      }
    }
  }
  &.mobile-tray { 
    display: block;
    @media (min-width: $screen-lg) { 
      display: none;
    }
    h1 { 
      color: $black;
      margin: 0rem;
    }
    .mobile-slideout { 
      position: fixed;
      z-index: 1;
      display: block;
      width: 100%;
      height: 100%;
      top: auto;
      left: 0;
      padding-top: 4rem;
      background-color: black;
      transform: translateX(100%);
      transition: transform 0.25s $ease-in-quad, visibility .25s;
      
      &.active { 
        transform: translateX(0%);
        transition: transform 0.25s $ease-out-quad, visibility .25s ease 0s;
        -webkit-overflow-scrolling: touch;
       
      }
    }
  }
  .mobile-nav { 
    &__wrapper { 
      text-align: left;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      a { 
        text-decoration: none;
        color: $black;
        font-size: 2rem;
        font-weight: bold;
        &:first-of-type { 
          margin-bottom: 2rem;
        }
        &.router-link-exact-active { 
          text-decoration: underline;
        }
      }

    }
    &__header { 
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 2rem;
    }
  }
}

</style>