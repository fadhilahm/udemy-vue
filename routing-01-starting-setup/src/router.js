import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(), // use the built-in browser support
    routes: [
      {
        path: '/',
        redirect: '/teams'
      },
      {
        name: 'teams',
        path: '/teams', // our-domain.com/teams => ...
        // component: TeamsList,
        meta: {
          needsAuth: true
        },
        components: {
          default: TeamsList,
          footer: TeamsFooter
        },
        // alias: '/',
        children: [
          {
            name: 'team-members',
            path: ':teamId', // /teams/t1
            component: TeamMembers,
            props: true
          }
        ]
      },
      {
        path: '/users', // our-domain.com/users => ...
        // component: UsersList,
        components: {
          default: UsersList,
          footer: UsersFooter
        },
        beforeEnter(to, from, next) {
          console.log('users beforeEnter');
          console.log(to, from);
          next();
        }
      },
      {
        path: '/:notFound(.*)',
        // redirect: '/teams',
        component: NotFound
      }
    ],
    linkActiveClass: 'active', // use other CSS class name
    scrollBehavior: function(to, from, savedPosition) {
      // console.log(`to: `, to);
      // console.log(`from: `, from);
      // console.log(`savedPosition: `, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    }
  });
  
  router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach')
    console.log(to, from);
    if (to.meta.needsAuth) {
      console.log('Needs auth!');
      next();
    } else {
      next();
    }
    // next(false);
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } });
    // }
  });
  
  router.afterEach((to, from) => {
    // sending analytics data
    console.log('Global afterEach');
    console.log(to, from);
  })

  export default router;