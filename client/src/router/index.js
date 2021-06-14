import Vue from "vue";
import VueRouter from "vue-router";
//TODO: clean imports here 4 about page
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import AuthenticationService from "../services/AuthenticationService.js";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About
	},
	{ 
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/users/:id",
		name: "Users",
		component: () => import("../views/UserDetail.vue"),
		props: { id: ":id" }
	},
	{
		path: "/profile",
		name: "Profile",
    component: Profile,
    meta: { 
      requiresAuth: true
    }
	}
];

const router = new VueRouter({
	mode: "history",
	routes
});

//navigation guards for protected pages
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    let isUserLoggedIn = AuthenticationService.isLoggedIn();
    if (isUserLoggedIn) {
      next();
    } else {
      next({ path: '/' });
    }
  }
  next();
});

export default router;
