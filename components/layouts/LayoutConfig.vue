<template>
  <v-dialog v-model="dialog">
    <template #activator="{on: dialog, attrs}">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            icon
            v-on="{ ...tooltip, ...dialog }"
            v-bind="attrs"
          >
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <span>Настройки приложения</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title>
        Настройки приложения
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-switch
          v-model="isDarkSwitcher"
          label="Темная тема"
        ></v-switch>
        <v-switch
          :value="fixed"
          label="Фиксация шапки при прокрутке"
          @change="$emit('toggleFixed')"
        ></v-switch>
        <v-switch
          :value="clipped"
          label="Шапка над левым меню"
          @change="$emit('toggleClipped')"
        ></v-switch>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LayoutConfig',
  data: () => ({
    dialog: false,
    isDarkSwitcher: false,
  }),
  props: {
    fixed: Boolean,
    clipped: Boolean,
  },
  computed: {
    themeIsDark () {
      return !!this.$vuetify.theme.dark
    }
  },
  watch: {
    isDarkSwitcher(value){
      this.$vuetify.theme.dark = !!value
    }
  },
  beforeMount () {
    this.isDarkSwitcher = !!this.$vuetify.theme.dark
  }
}
</script>

<style scoped>

</style>
