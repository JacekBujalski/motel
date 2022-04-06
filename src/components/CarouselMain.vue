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
                <v-row
                    align="center"
                    class="fill-height"
                    justify="center"
                >
                    <div class="text-h2">
                        {{ item.title }} Slide
                    </div>
                </v-row>
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
                {title: 'First', fileName: 'replace1.jpg', lazyName: 'replace1lazy.jpg'},
                {title: 'Second', fileName: "replace2.jpg", lazyName: 'replace2lazy.jpg'},
                {title: 'Third', fileName: "replace3.jpg", lazyName: 'replace3lazy.jpg'},
            ],
        }
    },
}

</script>

<style scoped>

</style>