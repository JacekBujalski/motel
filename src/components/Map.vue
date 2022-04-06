<template>
    <v-card
        class="d-flex justify-center align-stretch pa-0 ma"
        height="50vh"
        margin
        tile
    >
        <div style=" width: 100%">
            <l-map
                v-if="showMap"
                :center="center"
                :options="mapOptions"
                :zoom="zoom"
                class="vue2leaflet-map"
                style="height: 100%"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
            >
                <l-tile-layer
                    :attribution="attribution"
                    :url="url"
                />
                <l-marker :lat-lng="marker">

                </l-marker>
            </l-map>
        </div>

    </v-card>
</template>

<script>
import {latLng} from "leaflet";
import {LMap, LTileLayer, LMarker, LPopup, LTooltip} from "vue2-leaflet";

export default {
    name: "MapComp",
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            zoom: 15,
            center: latLng(54.382132, 19.4211082),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: latLng(54.3821023, 19.4232541),

            currentZoom: 13.5,
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true,
            cards: [
                {title: 'Pokój dwuosobowy', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
                {title: 'Pokój rodzinny', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
                {title: 'Pokój delux', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
            ],
        }
    },

    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        innerClick() {
            alert("Click!");
        }
    }
};
</script>

<style scoped>

.vue2leaflet-map {
    z-index: 1;
}
</style>