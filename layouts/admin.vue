<template>
  <v-app>
    <template v-if="isAuth">
      <admin-app-navigation-drawer
        :drawer="drawer"
        :miniVariant="miniVariant"
        :clipped="clipped"
        @closeDrawer="drawer = false"
        @toggleMiniVariant="miniVariant = !miniVariant"
      />
      <app-bar
        :title="title"
        :drawer="drawer"
        :clipped="clipped"
        :fixed="fixed"
        :rightDrawer="rightDrawer"
        @toggleDrawer="drawer =! drawer"
        @toggleClipped="clipped = !clipped"
        @toggleFixed="fixed = !fixed"
        @toggleRightDrawer="rightDrawer =! rightDrawer"
      />
      <v-main>
        <v-container>
          <Nuxt/>
        </v-container>
      </v-main>
      <right-drawer
        :rightDrawer="rightDrawer"
        @closeRightDrawer="rightDrawer = false"
      />
      <default-layout-footer
        :fixed="fixed"
      />
    </template>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AdminAppNavigationDrawer
  from '~/components/layouts/AdminAppNavigationDrawer'
import AppBar from '~/components/layouts/AppBar'
import RightDrawer from '~/components/rightDrawer'
import DefaultLayoutFooter from '~/components/layouts/DefaultLauoutFooter'

export default {
  components: {
    DefaultLayoutFooter,
    RightDrawer,
    AppBar,
    AdminAppNavigationDrawer
  },
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    rightDrawer: false,
    title: 'Символы'
  }),
  computed: {
    ...mapGetters('auth', ['authUser', 'isAuth']),
  },
  methods: {
    ...mapActions('auth', ['getAuthUser'])
  },
  async created () {
    if(!this.isAuth){
      await this.getAuthUser()
    }

  }
}
</script>

<style scoped>

</style>
