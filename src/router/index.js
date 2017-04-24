import Vue from 'vue'
import Router from 'vue-router'
import Footer from '../components/footer/Footer';
import Remind from '../components/remind/Remind';
import Record from '../components/record/Record';
import More from '../components/more/More';
import Signup from '../components/signup/Signup';
import Signin from '../components/signin/Signin';
import Edit from '../components/edit/Edit';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Remind
    },
    {
      path: '/remind',
      component: Remind
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/more',
      component: More
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/edit',
      component: Edit
    }
  ]
})
