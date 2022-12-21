<template>

  <div class="overflow-hidden bg-white shadow sm:rounded-lg my-2">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">{{ programme.title }}</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ programme.description_short }}</p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Type</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ programme.programType.type }}</dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Time</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ formatTime( programme.start_time ) }} - {{ formatTime( programme.end_time ) }}</dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ programme.description }}</dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Location</dt>
          <dd class="mt-1 font-bold text-sm text-brand-red sm:col-span-2 sm:mt-0"><a :href="createMapUrl( programme.location.latitude, programme.location.longitude )" target="_blank">{{ programme.location.address }}</a></dd>
        </div>
      </dl>
    </div>
  </div>

</template>

<script>
export default {
    name: 'Programme',
    props: {
        programme: Object,
    },
    methods: {
        formatTime ( datetime ) {
          // Get the datetime string, and convert into a more readable time-only format.
          return new Date( datetime )
            .toLocaleTimeString(
              'en-GB',
              {
                hour: '2-digit',
                minute: '2-digit',
              }
            )
        },
        createMapUrl(lat, long) {
          return `https://maps.google.com/?q=${lat},${long}`;
        }
    },
}
</script>
