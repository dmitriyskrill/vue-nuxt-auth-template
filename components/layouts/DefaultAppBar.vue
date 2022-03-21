<template>
  <v-app-bar
    dense
    :clipped-left="clipped"
    fixed
    app
  >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-on="on"
          v-bind="attrs"
          @click.stop="$emit('toggleDrawer')"
        />
      </template>
      <span>{{ drawer ? 'Скрыть' : 'Показать' }} основное (левое) меню</span>
    </v-tooltip>
    <v-toolbar-title v-text="title"/>
  </v-app-bar>
</template>

<script>
import LayoutConfig from '~/components/layouts/LayoutConfig'
export default {
  name: 'DefaultAppBar',
  components: { LayoutConfig },
  props: {
    drawer: Boolean,
    miniVariant: Boolean,
    clipped: Boolean,
    fixed: Boolean,
    title: String,
    rightDrawer: Boolean
  },

}
</script>

<style scoped>

</style>
