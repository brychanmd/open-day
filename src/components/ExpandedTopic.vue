<template>
  <div class="topic">

        <div class="topic__header" :style="{ 'background-image': 'url(' + topic.cover_image + ')' }">
            <h2>{{topic.name}}</h2>
        </div>

        <section class="cards" v-if="topic.programs && topic.programs.length !== 0">
            <Programme
                v-for="programme in topic.programs" 
                :key="programme.id"
                :programme="programme"
            />
        </section>
        
  </div>
</template>

<script>
import Programme from '../components/Programme.vue'


export default {
    name: 'ExpandedTopic',
    components: {
        Programme,
    },
    props: {
        topic: {
            type: Object,
            required: true
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic {
    overflow: hidden;

}
.topic__header {
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.topic__header h2 {
    color: white;
    margin: 0 auto;
    background-color: #d63348;
    padding: 5px 15px;

}
.cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
