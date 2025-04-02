<!-- layouts/DefaultHeader.vue -->
<template>  
  <nav class="container justify-content-center nav">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" :to="{name: 'custList'}">전체조회</router-link> |
    <!-- <router-link :to="{name: 'custInfo'}">정보</router-link>  | -->
    <router-link class="nav-link" :to="{name: 'custAdd'}">등록</router-link>
  </nav>
</template>
<script>

</script>