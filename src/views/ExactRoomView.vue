<template>
    <v-card
        class="d-flex justify-center align-center text-center pa-0 mb-10" flat>
        <v-card class="pa-3" flat width="80%">
            <p class="mb-5 text-h2">{{ exactRoom.name }}</p>
            <v-carousel
                class=" rounded-xl"

                height="600"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="(photo, i) in exactRoom.photos"
                    :key="i"
                    fade
                >
                    <v-img
                        height="100%"
                        v-bind:lazy-src="require('../assets/' + photo.lazyName)"
                        v-bind:src="require('../assets/' + photo.fileName)"

                    >
                        <v-row
                            class="fill-height"
                        >
                            <v-dialog v-model="dialog"
                                      max-width="1000"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="ml-auto mb-auto" color="white" fab v-bind="attrs" x-large
                                           v-on="on"
                                    >
                                        <v-icon> mdi-fullscreen</v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-img contain
                                           height="100%"
                                           v-bind:lazy-src="require('../assets/' + photo.lazyName)"
                                           v-bind:src="require('../assets/' + photo.fileName)">
                                        <v-row
                                            class="fill-height"
                                        >
                                            <v-btn class="ml-auto mb-auto" color="white" fab
                                                   @click="dialog = false">
                                                <v-icon> mdi-close</v-icon>
                                            </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-card>
                            </v-dialog>

                        </v-row>
                    </v-img>

                </v-carousel-item>
            </v-carousel>
            <p class="mt-5 text-pre-wrap text-h5"> {{ exactRoom.description }} </p>
            <div class="flexbox">
                <div v-for="facilitie in exactRoom.facilities" :key="exactRoom.facilities.title" class="item">
                    <div class="content">
                        <span>
                            <v-icon> {{ facilitie.icon }} </v-icon> {{ facilitie.title }}
                        </span>
                        <div v-for="item in facilitie.items" :key="facilitie.item" class="mr">
                            <span>
                                <v-icon> mdi-check </v-icon> {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-card>
</template>

<script>


export default {
    name: "ExactRoomView",
    created() {
        this.id = this.$route.params.room_id
        this.exactRoom = this.findById(this.id)
    },
    data: () => ({
        dialog: false,
        exactRoom: [],
        rooms: [
            {
                id: '1',
                name: 'Pokój dwuosobowy standard',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny.\n' +
                    '\n' +
                    'Powierzchnia pokoju wynosi 14 m². ',
                photos: [
                    {fileName: 'p2s1.jpg', lazyName: 'p2s1lazy.jpg'},
                    {fileName: "p2s2.jpg", lazyName: 'p2s2lazy.jpg'},
                    {fileName: "p2s3.jpg", lazyName: 'p2s3lazy.jpg'},
                    {fileName: "p2s4.jpg", lazyName: 'p2s4lazy.jpg'},
                    {fileName: "p2s5.jpg", lazyName: 'p2s5lazy.jpg'},
                    {fileName: "p2s6.jpg", lazyName: 'p2s6lazy.jpg'},
                    {fileName: "p2s7.jpg", lazyName: 'p2s7lazy.jpg'},
                ],
                facilities: [
                    {
                        title: "Łazienka",
                        icon: "mdi-shower",
                        items: ["prywatna łazienka", "suszarka do włosów", "prysznic", "papier toaletowy", "ręczniki"]
                    },
                    {
                        title: "Sypialnia",
                        icon: "mdi-bed-king",
                        items: ["pościel", "szafa lub garderoba", "telewizor", "wieszaki na ubrania"]
                    },
                    {
                        title: "Kuchnia",
                        icon: "mdi-bed-king",
                        items: ["czajnik", "lodówka", "talerze", "sztućce", "szklanki"]
                    },
                    {
                        title: "Ogólne",
                        icon: "mdi-information-variant",
                        items: ["parking (potrzebna rezerwacja)", "zakaz palenia", "balkon", "widok na dziedziniec"]
                    }
                ],
            },
            {
                id: '2',
                name: 'Pokój dwuosobowy delux z widokiem na morze',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny.\n' +
                    '\n' +
                    'Powierzchnia pokoju wynosi 18,5 m². ',
                photos: [
                    {fileName: 'p2d1.jpg', lazyName: 'p2d1lazy.jpg'},
                    {fileName: "p2d2.jpg", lazyName: 'p2d2lazy.jpg'},
                    {fileName: "p2d3.jpg", lazyName: 'p2d3lazy.jpg'},
                    {fileName: "p2d4.jpg", lazyName: 'p2d4lazy.jpg'},
                    {fileName: "p2d5.jpg", lazyName: 'p2d5lazy.jpg'},

                ],
                facilities: [
                    {
                        title: "Łazienka",
                        icon: "mdi-shower",
                        items: ["prywatna łazienka", "suszarka do włosów", "prysznic", "papier toaletowy", "ręczniki"]
                    },
                    {
                        title: "Sypialnia",
                        icon: "mdi-bed-king",
                        items: ["pościel", "szafa lub garderoba", "telewizor", "wieszaki na ubrania"]
                    },
                    {
                        title: "Kuchnia",
                        icon: "mdi-bed-king",
                        items: ["czajnik", "lodówka", "talerze", "sztućce", "szklanki"]
                    },
                    {
                        title: "Ogólne",
                        icon: "mdi-information-variant",
                        items: ["parking (potrzebna rezerwacja)", "zakaz palenia", "balkon", "widok na morze"]
                    }
                ],
            },
            {
                id: '3',
                name: 'Pokój rodzinny z widokiem na morze',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny.\n' +
                    '\n' +
                    'Powierzchnia pokoju wynosi 25 m². ',
                photos: [
                    {fileName: 'pr1.jpg', lazyName: 'pr1lazy.jpg'},
                    {fileName: "pr2.jpg", lazyName: 'pr2lazy.jpg'},
                    {fileName: "pr3.jpg", lazyName: 'pr3lazy.jpg'},
                    {fileName: "pr4.jpg", lazyName: 'pr4lazy.jpg'},
                    {fileName: "pr5.jpg", lazyName: 'pr5lazy.jpg'},

                ],
                facilities: [
                    {
                        title: "Łazienka",
                        icon: "mdi-shower",
                        items: ["prywatna łazienka", "suszarka do włosów", "prysznic", "papier toaletowy", "ręczniki"]
                    },
                    {
                        title: "Sypialnia",
                        icon: "mdi-bed-king",
                        items: ["pościel", "szafa lub garderoba", "telewizor", "wieszaki na ubrania"]
                    },
                    {
                        title: "Kuchnia",
                        icon: "mdi-bed-king",
                        items: ["czajnik", "lodówka", "talerze", "sztućce", "szklanki"]
                    },
                    {
                        title: "Ogólne",
                        icon: "mdi-information-variant",
                        items: ["parking (potrzebna rezerwacja)", "zakaz palenia", "balkon", "widok na morze"]
                    }
                ],
            },
            {
                id: '4',
                name: 'Pokój trzy osobowy standard',
                description: 'Posiada nowoczesną łazienkę, lodówkę, TV oraz czajnik elektryczny.\n' +
                    '\n' +
                    'Powierzchnia pokoju wynosi 19,5 m². ',
                photos: [
                    {fileName: 'p31.jpg', lazyName: 'p31lazy.jpg'},
                    {fileName: "p32.jpg", lazyName: 'p32lazy.jpg'},
                    {fileName: "p33.jpg", lazyName: 'p33lazy.jpg'},
                    {fileName: "p34.jpg", lazyName: 'p34lazy.jpg'},
                    {fileName: "p35.jpg", lazyName: 'p35lazy.jpg'},
                    {fileName: "p36.jpg", lazyName: 'p36lazy.jpg'},
                    {fileName: "p37.jpg", lazyName: 'p37lazy.jpg'},
                ],
                facilities: [
                    {
                        title: "Łazienka",
                        icon: "mdi-shower",
                        items: ["prywatna łazienka", "suszarka do włosów", "prysznic", "papier toaletowy", "ręczniki"]
                    },
                    {
                        title: "Sypialnia",
                        icon: "mdi-bed-king",
                        items: ["pościel", "szafa lub garderoba", "telewizor", "wieszaki na ubrania"]
                    },
                    {
                        title: "Kuchnia",
                        icon: "mdi-bed-king",
                        items: ["czajnik", "lodówka", "sztućce", "talerze", "szklanki"]
                    },
                    {
                        title: "Ogólne",
                        icon: "mdi-information-variant",
                        items: ["parking (potrzebna rezerwacja)", "zakaz palenia", "balkon", "widok na dziedziniec"]
                    }
                ],
            },
        ],
    }),

    methods: {
        findById(id) {
            for (let i = 0; i < this.rooms.length; i++) {
                if (id === this.rooms[i].id) {
                    return this.rooms[i]
                }
            }
        },
    }
}
</script>

<style scoped>

.flexbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    box-sizing: border-box;
    margin: 0px -10px;
}

.item {
    box-sizing: border-box;
    width: 50%;
    margin-bottom: 20px;
    padding: 0px 10px;
}

.content {
    font-weight: 600;
    text-align: left;
    text-wrap: none;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
}

.mr {
    margin-top: 10px;
}

</style>