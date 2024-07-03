import { defineStore } from 'pinia'
import { supabase } from '@/plugins/supabase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
    userId: null,
    username: ''
  }),
  actions: {
    async register(values) {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            username: values.username
          }
        }
      })

      if (error) {
        return error
      }

      this.userId = data.user.id
      this.userLoggedIn = true
    },

    async authenticate(values) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      })

      if (error) {
        return error
      }

      this.userId = data.user.id
      this.userLoggedIn = true
    }
  }
})
