<template>
  <v-navigation-drawer
    :value="rightDrawer"
    :right="right"
    temporary
    fixed
    @input="onInput"
  >
    <v-list>
      <v-list-item @click.native="right = !right">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RightDrawer',
  props: {
    rightDrawer: Boolean,
  },
  data: () => ({
    right: true
  }),
  methods: {
    onInput (event) {
      if (!event) this.$emit('closeRightDrawer')
    }
  }
}
</script>

<style scoped>

</style>
