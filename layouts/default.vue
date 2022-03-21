<template>
  <v-app dark>
    <default-app-navigation-drawer
      :drawer="drawer"
      :miniVariant="miniVariant"
      :clipped="clipped"
      @closeDrawer="drawer = false"
      @toggleMiniVariant="miniVariant = !miniVariant"
    />
    <default-app-bar
      :title="title"
      :drawer="drawer"
      :clipped="clipped"
      :fixed="fixed"
      @toggleDrawer="drawer =! drawer"
      @toggleClipped="clipped = !clipped"
      @toggleFixed="fixed = !fixed"
    />
    <v-main>
      <v-container
        class="align-center justify-center d-flex"
        :style="{height: 100 + '%'}"
      >
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import DefaultAppNavigationDrawer
  from '~/components/layouts/DefaultAppNavigationDrawer'
import AppBar from '~/components/layouts/AppBar'
import RightDrawer from '~/components/rightDrawer'
import DefaultAppBar from '~/components/layouts/DefaultAppBar'

export default {
  components: { DefaultAppBar, RightDrawer, AppBar, DefaultAppNavigationDrawer },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Символы'
    }
  },
}
</script>

<style scoped>

</style>
