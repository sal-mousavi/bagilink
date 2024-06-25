import { defineStore } from 'pinia'
import { supabase } from '@/plugins/supabase'
import useUserStore from '@/stores/user'

const userStore = useUserStore()

export default defineStore('linkPosts', {
  state: () => ({
    posts: []
  }),
  actions: {
    async addLink(title, url) {
      const { error } = await supabase.from('link_posts').insert({
        user_id: userStore.userId,
        username: userStore.username,
        title: title,
        url: url,
        order: 0
      })

      if (error) {
        return error
      }

      this.getLinkPosts()
    },

    async deleteLink(id) {
      await supabase.from('link_posts').delete().eq('id', id)

      this.getLinkPosts()
    },

    async hideLink(status, id) {
      const { error } = await supabase.from('link_posts').update({ hidden: status }).eq('id', id)

      if (error) {
        return error
      }

      this.getLinkPosts()
    },

    async getLinkPosts(username = userStore.username) {
      const { data, error } = await supabase.from('link_posts').select().eq('username', username)

      if (error) {
        return error
      }

      this.posts = data
    }
  }
})
