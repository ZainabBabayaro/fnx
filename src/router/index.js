import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Services.vue')
    }
  },
  {
    path: '/values',
    name: 'values',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Values.vue')
    }
  },
  {
    path: '/team',
    name: 'team',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Team.vue')
    }
  },
  {
    path: '/team-details',
    name: 'team-details',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/TeamDetails.vue')
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
    }
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Disclaimer.vue')
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
    }
  },
  {
    path: '/sustainability-disclosures',
    name: 'sustainabilityDisclosures',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SustainabilityDisclosures.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
