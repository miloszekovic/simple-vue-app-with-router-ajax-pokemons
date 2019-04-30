export default Vue.component('pokemons', {
  data() {
      return {
          pokemoni: []
      }
  },

  mounted() {
      fetch('https://api.pokemontcg.io/v1/cards')
          .then(res => res.json())
          .then(data => {
              this.pokemoni = data.cards
          }
      )
  },

  template: `
    <div>
      <h1>Pokemons</h1>
      <ul>
          <li v-for="pokemon in pokemoni">{{pokemon.name}} 
          <img :src="pokemon.imageUrl" alt=""> {{pokemon.artist}}</li>
      </ul>
    </div>
  `
})
