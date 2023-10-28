<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    vsheet
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
      v-slot="{}"
    >
      vslide
      <v-slide-group-item v-for="n in 15" :key="n">
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', isSelected]"
          height="200"
          width="100"
        >
          vcard
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
