<template>
  <div class="contacts-page">
    <appheader title="通讯录"></appheader>
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
