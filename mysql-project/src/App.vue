<template>
  <!-- Header Component -->
  <default-header/>
  <router-view/>
  <!-- Footer Component --> 
</template>
<script>
import DefaultHeader from '@/layouts/DefaultHeader.vue'

export default {
  components : {
    DefaultHeader,
  }
}
</script>