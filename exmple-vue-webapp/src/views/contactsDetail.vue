<template>
  <div class="contacts-detail-page">
    <appheader title="详细资料">
      <a href="javascript:history.back();" slot="left" ><i class="fa fa-chevron-left"></i>&nbsp;通讯录</a>
    </appheader>
    通讯录----详细资料
    <p>
      {{$route.params.id}}
    </p>
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
