<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue'
import firebase from 'firebase'
import { useRoute, useRouter } from "vue-router"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/')
        }else if (!!user) {
          router.replace('/dashboard')
        }
      }) 
    })
  }
}
</script>

