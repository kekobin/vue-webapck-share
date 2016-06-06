<template>
  <div class="contacts-detail-page">
    <appheader title="朋友圈">
      <a href="javascript:history.back();" slot="left" ><i class="fa fa-chevron-left"></i>&nbsp;发现</a>
    </appheader>
    朋友圈----发现
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
