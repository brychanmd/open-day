<template>
  <section class="w-full bg-brand-red">

    <div class="container mx-auto sm:px-6 lg:px-8">

      <div class="md:flex md:items-center md:justify-between md:space-x-5 py-6 px-4 md:px-0">
        <div class="flex items-start space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img class="h-16" src="../../assets/logo.png" alt="">
              <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></span>
            </div>
          </div>

          <div class="pt-1.5">
              <h1 class="text-3xl font-bold text-white">{{ openDay.description }}</h1>
              <p class="text-sm font-medium text-white">{{ formatDate( openDay.start_time ) }}</p>
          </div>
        </div>
        <div
          class="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">

            <Select 
              v-if="openDay.topics"
              :topics="openDay.topics" 
              @filter-change="emit($event)" 
              :activeTopic="activeTopic"
            />

        </div>
      </div>
    </div>



  </section>

</template>

<script>
import Select from '../Select.vue';

export default {
  name: "Heading",
  props: {
    openDay: Object,
    activeTopic: Number
  },
  components: {
    Select,
  },
  methods: {
      emit(value) {
        console.log(value);
        this.$emit('filter-change', value);
      },
      formatDate ( datetime ) {
            // Get the datetime string, and convert into a more readable date-only format.
            return new Date( datetime )
              .toLocaleDateString("en-GB", {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
        },
    }
};
</script>