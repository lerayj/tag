<template>
  <v-app id="example-3" standalone>
    <v-navigation-drawer permanent floating light>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="green" dark>
      <v-toolbar-title>Convertyx Config</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <ConfigForm />
        <ConfigBasket />
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import ConfigForm from './ConfigForm.vue';
  import ConfigBasket from './ConfigBasket.vue';
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Config', icon: 'dashboard' }
        ],
        right: null
      }
    },
    components: { 
      ConfigForm,
      ConfigBasket
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
