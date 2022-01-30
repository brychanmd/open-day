<template>
    <div v-if="openDay && Object.keys(openDay).length !== 0">
        <header>
            <img alt="Cardiff logo" src="./assets/logo.png">
            <div>
                <h1>{{ openDay.description }}</h1>
                <p>{{ formatDate( openDay.start_time ) }}</p>
            </div> 

        </header>

        <div class="sorting" v-if="openDay.topics && openDay.topics.length !== 0">
            <Select :topics="openDay.topics" @select-filter="changeTopic($event)" :selected-topic="selectedTopic"/> 
        </div>

        <ExpandedTopic 
            v-if="expandedTopic && expandedTopic.id"
            :topic="expandedTopic"
        />
    </div>
</template>

<script>
import Select from './components/Select.vue'
import ExpandedTopic from './components/ExpandedTopic.vue'

export default {
    name: 'App',
    components: {
        Select,
        ExpandedTopic
    },
    data() {
        return {
            openDay : {},
            selectedTopic : null,
            expandedTopic : {}
        };
    },
    methods: {
        async fetchData() {
            // Fetch the json data.
            const res = await fetch("OpenDay.json")
            const data = await res.json()
            return data
        },
        formatDate ( datetime ) {
            // Get the datetime string, and convert into a more readable date-only format.
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            let theDate = new Date( datetime )
            return theDate.toLocaleDateString("en-GB", options)
        },
        changeTopic ( event ) {
            // Update the current topic for all relevant data properties.
            this.selectedTopic = parseInt( event.target.value )
            this.expandedTopic = this.getTopicByID( this.selectedTopic )
        },
        getTopicByID( ID ) {
            // Fetch the topic object by it's ID value.
            let topic = this.openDay.topics.find( obj => {
                return obj.id === ID
            } )
            return topic
        }
    },
    async created() {
        // Await a response from the fetchData function before updating the openDay data object.
        this.openDay = await this.fetchData()
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  max-width: 70em;
}

.sorting {
    margin: 20px 0px;
}
</style>
