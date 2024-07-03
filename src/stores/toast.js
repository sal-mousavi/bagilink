import { defineStore } from 'pinia'

export default defineStore('toast', {
  state: () => ({
    notification: {
      type: '',
      message: ''
    }
  }),
  actions: {
    activateToast(type, message) {
      this.notification.type = type
      this.notification.message = message

      setTimeout(() => {
        this.deactivateToast()
      }, 5000)
    },
    deactivateToast() {
      this.notification.type = ''
      this.notification.message = ''
    }
  }
})
