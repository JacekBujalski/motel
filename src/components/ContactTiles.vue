<template>
    <v-card
        class="d-flex justify-center align-center pa-0 mt-10 mb-10"
        flat
        margin
        tile
    >
        <v-card class="pa-3" flat rounded width="90%">
            <v-row class="justify-center align-center">
                <v-col
                    v-for="card in cards"
                    :key="card.title"
                >
                    <v-card
                        class="mx-auto pa-3 text-center align-center"
                        elevation="3"
                        width="400"

                    >
                        <div>
                            <v-icon class="pa-3" color="green" x-large> {{ card.icon }}</v-icon>
                        </div>
                        <div class="pa-3">
                            {{ card.title }}
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</template>

<script>
export default {
    name: "ContactTiles",
    data: () => ({
        cards: [
            {name: 'Phone', title: '793-350-477', icon: 'mdi-cellphone'},
            {name: 'Address', title: 'Marynarzy 6, 82-120 Krynica Morska', icon: 'mdi-map-marker'},
            {name: 'Email', title: 'amberkrynica@gmail.com', icon: 'mdi-at'},
        ],
    }),
}
</script>

<style scoped>

</style>