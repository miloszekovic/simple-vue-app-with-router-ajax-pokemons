// uvozimo komponente
import Home from './components/home.js';
import Pokemons from './components/pokemons.js';
import Stuff from './components/stuff.js';

// definisemo putanje
const putanje = [{
    path: '/',
    component: Home
  },
  {
    path: '/pokemons',
    component: Pokemons
  },
  {
    path: '/stuff',
    component: Stuff
  }
]

// inicijalizujemo ruter i aplikaciju
const router = new VueRouter({
  routes: putanje
})

new Vue({
  el: '#app',
  router,
})
