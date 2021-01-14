<template>
  <div class="home">
    <h1>A compreensive wikipedia about games</h1>
    <button @click="toggleGameForm" class="btn btn-primary">Add a Game Entry</button>

    <template>
      <div class="text-left">
        <b-form @submit.prevent="handleSubmit" v-if="showGameForm">
          <b-form-group
            id="name-input-group"
            label="Nome:"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="E.g.: Super Mario Bros"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="series-input-group"
            label="Series:"
            label-for="series"
          >
            <b-form-input
              id="series"
              v-model="form.series"
              type="text"
              placeholder="E.g.: Super Mario"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="platforms-input-group"
            label="Plataformas:"
            label-for="platforms"
          >
            <b-form-input
              id="platforms"
              v-model="form.platforms"
              type="text"
              placeholder="E.g.: Nintendo Entertainment System"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="release-input-group"
            label="Release Year:"
            label-for="release"
          >
            <b-form-input
              id="release"
              v-model="form.release"
              type="text"
              placeholder="E.g.: 1985"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="developers-input-group"
            label="Developer Companies:"
            label-for="developers"
          >
            <b-form-input
              id="developers"
              v-model="form.developers"
              type="text"
              placeholder="E.g.: Nintendo"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="genres-input-group"
            label="Genres:"
            label-for="genres"
          >
            <b-form-input
              id="genres"
              v-model="form.genres"
              type="text"
              placeholder="E.g.: Platform"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="shortDescription-input-group"
            label="Short Description:"
            label-for="shortDescription"
          >
            <b-form-textarea
              id="shortDescription"
              v-model="form.shortDescription"
              placeholder="Enter description..."
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </template>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      showGameForm: false,
      form: {
        name: '',
        series: '',
        platforms: '',
        release: '',
        developers: '',
        genres: '',
        shortDescription: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addGame'
    ]),
    toggleGameForm: function() {
      this.showGameForm = !this.showGameForm
    },
    handleSubmit: function() {
      const game = { 
        name: this.form.name,
        series: [this.form.series],
        platforms: [this.form.platforms],
        release: this.form.release,
        developers: [this.form.developers],
        genres: [this.form.genres],
        shortDescription: this.form.shortDescription,
        fullDescription: {
          summary: this.form.shortDescription
        }
      }

      this.addGame(game)

      this.form = {
        name: '',
        series: '',
        platforms: '',
        release: '',
        developers: '',
        genres: '',
        shortDescription: ''
      }
    }
  }
}
</script>
