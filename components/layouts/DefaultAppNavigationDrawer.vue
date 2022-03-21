<template>
  <v-navigation-drawer
    :value="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    @input="onInput"
  >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-2"
          v-on="on"
          v-bind="attrs"
          icon
          @click.stop="$emit('toggleMiniVariant')"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ miniVariant ? 'Увеличить' : 'Уменьшить' }} основное (левое)
          меню</span>
    </v-tooltip>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DefaultAppNavigationDrawer',
  props: {
    drawer: Boolean,
    miniVariant: Boolean,
    clipped: Boolean
  },
  data: () => ({
    items: [
      {
        icon: 'mdi-apps',
        title: 'Главная страница',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Войти',
        to: '/login'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Зарегистрироваться',
        to: '/registration'
      },
    ],
  }),
  methods: {
    onInput (event) {
      if (!event) this.$emit('closeDrawer')
    }
  }
}
</script>

<style scoped>

</style>
