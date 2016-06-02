<template>
  <div class="my-page">
    <appheader title="我"></appheader>
  </div>
</template>

<script>
import Appheader from 'components/header.vue';

export default {
  data (){
    return {
    }
  },
  components: {
    Appheader
  },
  route:{
    data (transition) {
      transition.next();
    }
  }
}
</script>
