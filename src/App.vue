<template>
    <Header 
      v-if="openDay && Object.keys(openDay).length !== 0"
      :openDay="openDay" 
      :activeTopic="activeTopic" 
      @filter-change="changeTopic($event)" 
    />

    <Content>
      <ExpandedTopic 
          v-if="expandedTopic && expandedTopic.id"
          :topic="expandedTopic"
      />
    </Content>
</template>

<script>
import Header from './components/layout/Header.vue'
import Content from './components/layout/Content.vue'
import ExpandedTopic from './components/ExpandedTopic.vue'


export default {
    name: 'App',
    components: {
        Header,
        Content,
        ExpandedTopic
    },
    data() {
        return {
            openDay : {},
            activeTopic : null,
            expandedTopic : {},
        };
    },
    methods: {
        async fetchData() {
            // Fetch the json data.
            const res = await fetch("OpenDay.json");
            const data = await res.json();
            return data;
        },
        changeTopic(id) {
            // Update the current topic for all relevant data properties.
            this.activeTopic = parseInt(id);
            this.expandedTopic = this.getTopicByID( this.activeTopic );
            console.log(id);
        },
        getTopicByID(ID) {
            // Fetch the topic object by it's ID value.
            let topic = this.openDay.topics.find( obj => {
                return obj.id === ID
            } );
            return topic;
        }
    },
    async created() {
        // Await a response from the fetchData function before updating the openDay data object.
        this.openDay = await this.fetchData();
        // Set the first topic to open by default.
        if (this.openDay.topics.length > 0) {
          let id = this.openDay.topics[0].id;
          this.changeTopic(id);
        }

    },
}
</script>

