<template>
  <div class="discovery-page">
    <appheader title="发现"></appheader>
    <item-group></item-group>
  </div>
</template>

<script>
import Appheader from 'components/header.vue';
import itemGroup from 'components/itemGroup.vue';

export default {
  data (){
    return {
    }
  },
  components: {
    Appheader,
    itemGroup
  },
  route:{
    data (transition) {
      transition.next();
    }
  }
}
</script>
