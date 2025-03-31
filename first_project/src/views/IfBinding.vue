<template>
  <div>
    <input type="number" v-model="grade">
    <p v-if="grade >= 90">성적 : A</p>
    <p v-else>성적 : D</p>
  </div>
</template>
<script>

</script>