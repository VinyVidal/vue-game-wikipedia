<template>
    <div>
        <b-container fluid class="text-left">
            <b-row>
                <b-col>
                    <h1>{{ game.name }}</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="8">
                    <p> {{ game.fullDescription.summary }} </p>
                </b-col>
                <b-col>
                    <b-table bordered stacked :items="[this.game]" :fields="informationTableFields"></b-table>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <div v-for="(description, section) in fullDescription" :key="section">
                        <h3>{{ section | ucwords }}</h3>
                        <p>{{ description }}</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            informationTableFields: [
                { key: 'name' },
                { key: 'release' },
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
                },
                {
                    key: 'series',
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
                    key: 'platforms',
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
                    key: 'genres',
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
        // Alternative way to access the state (mostly not used)
        // gameList: function() {
        //     return this.$store.state.gameList
        // },
        ...mapState([
            'gameList'
        ]),
        game: function() {
            return this.gameList.find(x => x.id === parseInt(this.$route.params.id))
        },
        fullDescription: function() {
            const newDesc = {}
            for(var section in this.game.fullDescription) {
                if(section !== 'summary') {
                    newDesc[section] = this.game.fullDescription[section]
                }
            }

            return newDesc;
        },
        informationTable: function() {
            const info = {}
            const fields = ['name', 'release', 'developers']
            for(var index in this.game) {
                if(fields.includes(index)) {
                    info[index] = this.game[index]
                }
            }

            return info;
        }
    },
    filters: {
        ucwords: function(value) {
            return value.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        },
        uppercase: function(value) {
            return value.toUpperCase()
        },
        nl2br: function(value) {
            var breakTag = '<br>';
            return (value + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
    }
}
</script>

<style>

</style>
