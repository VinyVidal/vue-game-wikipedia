<template>
  <div>
    <h1>Games List</h1>
    <b-table striped hover :items="gameList" :fields="fields">
      <template #cell(name)="data">
        <router-link :to="`/games/`+data.item.id">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      fields: [
        {
          key: 'name'
        },
        {
          key: 'genres',
          formatter: function(value) {
            var string = ''
            value.forEach(element => {
              string += element + ', '
            })
            string = string.substr(0, string.length-2)
            
            return string
          }
        },
        {
          key: 'developers',
          formatter: function(value) {
            var string = ''
            value.forEach(element => {
              string += element + ', '
            })
            string = string.substr(0, string.length-2)
            
            return string
          }
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'gameList'
    ])
  }
}
</script>

<style>

</style>
