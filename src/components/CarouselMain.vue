<template>
    <v-carousel
        cycle
        height="70vh"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            fade
        >
            <v-img
                height="100%"
                v-bind:lazy-src="require('../assets/' + item.lazyName)"
                v-bind:src="require('../assets/' + item.fileName)"
            >
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "CarouselMain",
    data() {
        return {
            items: [
                {fileName: 'mc1.jpg', lazyName: 'mc1lazy.jpg'},
                {fileName: "p36.jpg", lazyName: 'p36lazy.jpg'},
                {fileName: 'mc2.jpg', lazyName: 'mc2lazy.jpg'},
                {fileName: 'mc3.jpg', lazyName: 'mc3lazy.jpg'},
            ],
        }
    },
}

</script>

<style scoped>

</style>