<template>

  <div class="overflow-hidden bg-white shadow sm:rounded-lg sm:my-5 mh-32">
    <div class="px-4 py-5 sm:p-6 bg-no-repeat bg-cover bg-center h-full" :style="{ 'background-image': 'url(' + topic.cover_image + ')' }">
      <div class="bg-brand-red sm:w-2/5 p-5 sm:rounded-lg text-white">
        <h2 class="text-4xl font-bold sm:my-2">{{topic.name}}</h2>
          <p class="" v-if="topic.description.length !== 0">
            {{ topic.description }}
          </p>
      </div>
    </div>
  </div>

  <Programme
      v-for="programme in topic.programs" 
      :key="programme.id"
      :programme="programme"
  />

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

