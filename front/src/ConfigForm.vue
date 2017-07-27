<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-container fluid>
        <v-card-text>
        <v-layout row>
            <h6>Global</h6>
        </v-layout>

        <v-layout row>
            <v-flex xs5>
            <v-text-field
              name="input-1"
              label="Client URL"
              id="clientUrl"
            ></v-text-field>
          </v-flex>
            <v-flex xs3>
                <v-select
                  v-bind:items="items"
                  v-model="e1"
                  label="Select"
                  single-line
                  bottom
                ></v-select>          
            </v-flex>
          <v-flex xs2>
            <v-switch label="Debug: true" v-model="ex11"></v-switch>
          </v-flex>
          <v-flex xs2>
            <v-switch label="Live: true" v-model="ex11"></v-switch>
          </v-flex>
        </v-layout>

        </v-card-text>
    </v-container>
  </v-card>
</template>