<template>
    <div>
        <rooms-list/>
        <v-card
            class="d-flex justify-center align-center pa-0 mt-10" color="#E8EAF6" flat>
            <v-card class="pa-3" color="#E8EAF6" flat width="80%">
                <p class="text-h3 mb-2 text-center">Zasady Pobytu</p>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-calendar-today</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Zameldowanie</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Od 15:00 do 22:00</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-calendar</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Wymeldowanie</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Do 10:00</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3">
                            <span class="justify-center  text-left">
                                <v-icon left> mdi-human-male-female-child</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Zakwaterowanie dzieci</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Zasady dotyczące pobytu dzieci</b> <br/><br/>
                                Dzieci w każdym wieku są mile widziane. <br/><br/>

                                <b> Zasady dotyczące łóżeczek dziecięcych i dodatkowych łóżek</b><br/><br/>
                                W tym obiekcie są dostępne łóżeczka dla dzieci za dodatkową opłatą.<br/><br/>

                                W tym obiekcie nie są dostępne dodatkowe łóżka.</p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-smoking-off</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Palenie tytoniu</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Palenie jest zabronione.</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-party-popper</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Imprezy</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Organizacja imprez i przyjęć jest zabroniona.</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-moon-waning-crescent</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Cisza nocna</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Goście muszą zachować ciszę w godzinach 22:00–07:00.</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-5 mt-5" flat>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <span>
                                <v-icon left> mdi-dog-side-off</v-icon>
                                <span
                                    class=" pa-0 ma-0"><b>Zwierzęta</b></span>
                            </span>
                        </v-col>
                        <v-col>
                            <p class="ml-8 pa-0 ma-0 text-justify">
                                <b>Zwierzęta nie są akceptowane.</b>
                            </p>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import RoomsList from "@/components/RoomsList";

export default {
    name: "Rooms",
    components: {RoomsList},
}
</script>

<style scoped>


</style>