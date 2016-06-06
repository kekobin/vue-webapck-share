<template>
  <div class="discovery-page">
    <appheader title="发现"></appheader>
    <item-group :list="listA"></item-group>
  </div>
</template>

<script>
import Appheader from 'components/header.vue';
import itemGroup from 'components/itemGroup.vue';

export default {
  data (){
    return {
      listA: [
        {
          icon: 'fa-dot-circle-o',
          name: '朋友圈',
          arrow: true,
          link: '/discovery/discoveryDetail/1'
        }
      ],
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
