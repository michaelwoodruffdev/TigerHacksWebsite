<template>
    <div class="heading">
        <v-card tile class="card py-5">
            <h1 class="title">{{ text }}</h1>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Heading', 
    props: {
        text: String
    }
}
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        width: 80vw;
        margin: auto;
        margin-bottom: 40px;
        height: auto !important;
    }

    .v-card h1 {
        font-family: 'outage' !important;
        font-size: 4rem !important;
        margin: 30px;
        color: rgb(247, 152, 69);
        height: auto !important;
    }
</style>