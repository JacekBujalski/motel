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
                <v-col align-center cols="12" sm="4">
                    <v-img class="rounded-xl" contain
                           src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    </v-img>
                </v-col>
                <v-col class="px-10"
                       cols="12"
                       sm="8">
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
                    <v-btn class="mt-2" color="warning" rounded width="100%">
                        <v-icon left>fas fa-plus</v-icon>
                        Więcej >
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</template>

<script>
export default {
    name: "Rooms",
    data: () => ({
        rooms: [
            {
                title: "Pokój dwuosobowy",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum,quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at. Hic commodi .",
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
                title: "Pokój rodzinny",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum,quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at. Hic commodi .",
                offers: [
                    {
                        icon: "mdi-bed-double",
                        subtitle: "Łoże małżeńskie",
                    },
                    {
                        icon: "mdi-bed",
                        subtitle: "2 łóżka pojedyncze",
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
                title: "Pokój deluxe",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum,quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at. Hic commodi .",
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
        ],
    }),
}
</script>

<style scoped>

</style>