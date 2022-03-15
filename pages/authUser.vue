<template>
  <div>
    {{ authUser }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'authUser',
  computed: {
    ...mapGetters('auth', ['authUser']),
  }
}
</script>

<style scoped>

</style>
