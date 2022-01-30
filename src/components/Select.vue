<template>
     <select @change="$emit('select-filter', $event)">
        <option value="" selected disabled>Choose</option>
        <option 
            v-for="topic in topics" 
            :value="topic.id" 
            :key="topic.id" 
            :selected="selectedTopic === topic.id"
        >
            {{ topic.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'Select',
    props: {
        topics: Array,
        selectedTopic: Number
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
    background-color:  #d63348;
    border: 1px  #d63348 solid;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
}
</style>
