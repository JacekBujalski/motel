<template>
    <v-card
        class="d-flex justify-center align-center text-center pa-0 mt-10 mb-10" flat>
        <v-card class="pa-3 rounded-xl " flat width="80%">
            <div
                class="text-center align-center mb-4 text-h3"
            >
                Pokoje
            </div>
            <v-row v-for="room in rooms" :key="room.title">
                <v-col align-center cols="12" sm="5">
                    <v-img class="rounded-xl" contain
                           v-bind:lazy-src="require('../assets/' + room.lazyName)"
                           v-bind:src="require('../assets/' + room.fileName)">

                    </v-img>
                </v-col>
                <v-col class="px-10"
                       cols="12"
                       sm="7">
                    <h3 class="grey--text">{{ room.title }}</h3>
                    <p class="grey--text">
                        {{ room.description }}
                    </p>
                    <h5 class="grey--text">Oferta</h5>
                    <v-row>
                        <v-col v-for="offer in room.offers" :key="room.offers.subtitle" cols="12" sm="6">
                            <v-app-bar color="white" flat>
                                <v-avatar class="mr-3" color="#FDD3E9" size="42">
                                    <v-icon color="grey darken-1">{{ offer.icon }}</v-icon>
                                </v-avatar>
                                {{ offer.subtitle }}
                            </v-app-bar>
                        </v-col>
                    </v-row>
                    <v-btn class="mt-2" color="warning" rounded width="100%"
                           @click="$router.push(`/rooms/${room.id}`)">
                        Więcej
                        <v-icon right>
                            mdi-chevron-right
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</template>

<script>
export default {
    name: "RoomsList",
    data: () => ({
        rooms: [
            {
                id: 1,
                title: "Pokój dwuosobowy standard",
                fileName: 'p2s1.jpg', lazyName: 'p2s1lazy.jpg',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny. Powierzchnia pokoju wynosi 14 m². ',
                offers: [
                    {
                        icon: "mdi-bed-double",
                        subtitle: "Łoże małżeńskie",
                    },
                    {
                        icon: "mdi-shower-head",
                        subtitle: "Prywatna łazienka",
                    },
                    {
                        icon: "mdi-television",
                        subtitle: "Telewizor",
                    },
                    {
                        icon: "mdi-fridge",
                        subtitle: "Lodówka w pokoju",
                    },
                    {
                        icon: "mdi-kettle",
                        subtitle: "Czajnik w pokoju",
                    },
                    {
                        icon: "mdi-eye-outline",
                        subtitle: "Widok na dziedziniec",
                    },

                ]
            },
            {
                id: 2,
                title: "Pokój dwuosobowy delux z widokiem na morze",
                fileName: 'p2d5.jpg',
                lazyName: 'p2d5lazy.jpg',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny. Powierzchnia pokoju wynosi 18,5 m². ',
                offers: [
                    {
                        icon: "mdi-bed-double",
                        subtitle: "Łóżko typu King size (160cmx200cm)",
                    },
                    {
                        icon: "mdi-shower-head",
                        subtitle: "Prywatna łazienka",
                    },
                    {
                        icon: "mdi-television",
                        subtitle: "Duży telewizor",
                    },
                    {
                        icon: "mdi-fridge",
                        subtitle: "Lodówka w pokoju",
                    },
                    {
                        icon: "mdi-kettle",
                        subtitle: "Czajnik w pokoju",
                    },

                ]
            },
            {
                id: 3,
                title: "Pokój rodzinny z widokiem na morze",
                fileName: 'pr1.jpg',
                lazyName: 'pr1lazy.jpg',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny. Powierzchnia pokoju wynosi 25 m². ',
                offers: [
                    {
                        icon: "mdi-bed-double",
                        subtitle: "Łoże małżeńskie",
                    },
                    {
                        icon: "mdi-bed",
                        subtitle: "Rozkładana sofa",
                    },
                    {
                        icon: "mdi-shower-head",
                        subtitle: "Prywatna łazienka",
                    },
                    {
                        icon: "mdi-television",
                        subtitle: "Duży telewizor",
                    },
                    {
                        icon: "mdi-fridge",
                        subtitle: "Lodówka w pokoju",
                    },
                    {
                        icon: "mdi-kettle",
                        subtitle: "Czajnik w pokoju",
                    },
                ]
            },
            {
                id: 4,
                title: "Pokój trzyosobowy standard",
                fileName: 'p34.jpg',
                lazyName: 'p34lazy.jpg',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny. Powierzchnia pokoju wynosi 19,5 m². ',
                offers: [
                    {
                        icon: "mdi-bed",
                        subtitle: "3 łóżka pojedyncze",
                    },
                    {
                        icon: "mdi-bed-double",
                        subtitle: " (Opcja) Łóżko typu King size  + łóżko pojedyncze",
                    },
                    {
                        icon: "mdi-shower-head",
                        subtitle: "Prywatna łazienka",
                    },
                    {
                        icon: "mdi-television",
                        subtitle: "Telewizor",
                    },
                    {
                        icon: "mdi-fridge",
                        subtitle: "Lodówka w pokoju",
                    },
                    {
                        icon: "mdi-eye-outline",
                        subtitle: "Widok na dziedziniec",
                    },
                ]
            },
        ],
    }),
}
</script>

<style scoped>

</style>