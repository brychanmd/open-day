<template>
    <div>
      <label for="Topic" class="block text-sm font-medium text-white">Choose topic</label>
      <select id="Topic" 
        name="Topic" 
        @change="onFilterChange($event)"
        v-model="key"
        class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-brand-black focus:border-blue-500 focus:outline-none  focus:ring-indigo-500 sm:text-sm">

        <option value="" selected disabled>Choose</option>
        <option 
            v-for="topic in topics" 
            :value="topic.id" 
            :key="topic.id" 
            :selected="activeTopic === topic.id"
          >
          {{ topic.name }}
        </option>
  
      </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        topics: Array,
        activeTopic: Number
    },
    data() {
      return {
        key: this.activeTopic
      }
    },
    methods: {
      onFilterChange(event) {
        this.$emit('filter-change', event.target.value);
        console.log(event.target.value);
      }
    }
}
</script>

