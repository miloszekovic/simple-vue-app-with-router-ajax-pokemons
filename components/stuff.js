const users = [
  {
      name: 'Mika',
      lastName: 'Milosevic'
  },
  {
      name: 'Zika',
      lastName: 'Milosevic'
  },
  {
      name: 'Pera',
      lastName: 'Milosevic'
  }
]

const jezici = ['js', 'php', 'html', 'c']

export default Vue.component('stuff', {
  
  data () {
    return {
      ime: 'Pera',
      prezime: 'Petrovic',
      users,
      jezici
    }
  },

  template: `
    <div>
      <h1>Stuff</h1>

      <h2>{{ime}} {{prezime}}</h2>

      <ul>
        <li v-for="jezik in jezici">{{jezik}}</li>
      </ul>
      <ul>
        <li v-for="user in users">{{user.name}} {{user.lastName}}</li>
      </ul>
    </div>
  `
})
