<template>
  <v-form
    v-model="valid"
    @submit.prevent="onSubmit"
  >
    <v-card
      max-width="600"
      min-width="400"
    >
      <v-card-title>
        Авторизация
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="formData.email"
          :rules="emailRules"
          label="Эл. почта"
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          :rules="passwordRules"
          type="password"
          label="Пароль"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          nuxt
          to="/registration"
        >
          Регистрация
        </v-btn>
        <v-spacer/>
        <v-btn
          type="submit"
          :disabled="!valid"
        >
          Войти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { isEmail, isNotEmpty } from '~/utils/appValidator'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'pageLogin',
  data: () => ({
    valid: false,
    formData: {
      email: '',
      password: ''
    },
    emailRules: [
      isNotEmpty,
      isEmail
    ],
    passwordRules: [
      isNotEmpty
    ]
  }),
  computed: {
    ...mapGetters('auth', ['isAuthDataNotEmpty'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    async onSubmit () {
      await this.login(this.formData)
    }
  },
  async created () {
    if (this.isAuthDataNotEmpty) await this.logout()
  }
}
</script>

<style scoped>

</style>
