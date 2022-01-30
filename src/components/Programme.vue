<template>
    <div class="card">

        <div class="card__header" >
            <h3>{{ programme.title }}</h3>
        </div>

        <div class="card__details">
            <p><strong>Type:</strong> {{ programme.programType.type }}</p>
            <p><strong>Location:</strong> {{ programme.room }}</p>
            <p><strong>Time:</strong> {{ formatTime( programme.start_time ) }} - {{ formatTime( programme.end_time ) }}</p>
            <p>
                {{ programme.description_short }}
            </p>
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
            let options = { hour: '2-digit', minute: '2-digit' }
            let theDate = new Date( datetime )
            return theDate.toLocaleTimeString("en-GB", options)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    border: #d63348 1px solid;  
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 600px) {
  .card {
    flex: 0 1 calc(50% - 1em);
  }
}
.card__header {
    color: white;
    background-color: #d63348;
    height:max-content;
    padding: 5px 0px;
}
.card__header h3 {
    margin: 0;
}
.card__details {
    text-align: start ;
    padding: 1rem;
}
p {
    margin: 0;
}
</style>
