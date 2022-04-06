<template>
<span>
  <v-navigation-drawer
      v-model="drawer"
      app
      class="hidden-md-and-up"
      dark
      disable-resize-watcher
  >
    <v-list shaped>
        <v-list-item-group
            color="green"
            dark
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.url"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
  <v-app-bar ref="navigation" app dark height="64">
    <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="text-h6 text-no-wrap ml-3 hidden-md-and-down">
          Pokoje Amber
      </div>
      <v-spacer></v-spacer>
      <v-tabs centered class="hidden-md-and-down">
      <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
      <v-spacer></v-spacer>
      <v-btn color="green" rounded @click="dial(phone)">
          <v-icon left>
            mdi-phone
          </v-icon>
        {{ phone }}
      </v-btn>
  </v-app-bar>
</span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            phone: "700-800-900",
            drawer: false,
            items: [
                {icon: "mdi-home", title: 'Strona Główna', url: '/'},
                {icon: "mdi-bed", title: 'Pokoje', url: '/rooms'},
                {icon: "mdi-near-me", title: 'Okolica', url: '/area'},
                {icon: "mdi-card-account-phone", title: 'Kontakt', url: '/contact'},
            ]
        };
    },
    methods: {
        dial: function (number) {
            window.location = 'tel:' + number;
        }
    }
};


</script>

<style scoped>
</style>