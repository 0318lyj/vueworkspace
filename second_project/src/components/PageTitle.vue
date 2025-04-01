<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  // data(){
  //   return{
  //     title : 'Hello, world',
  //   }
  // }
  //부모가 넘겨준 값들, Read only
  props : ['title'],
  created(){
    console.log('PropsComponent.vue Created');
  },
  mounted(){
    console.log('PropsComponent.vue Mounted');
  },
}

</script>