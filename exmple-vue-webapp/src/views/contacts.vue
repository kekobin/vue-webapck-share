<template>
  <div class="contacts-page">
    <appheader title="通讯录"></appheader>
    <section class="search-bar">
      <input type="text" placeholder="搜索">
    </section>
    <article>
      <div class="contacts-items">
        <h4>A</h4>
        <item-group :list="listA"></item-group>
      </div>
      <div class="contacts-items">
        <h4>B</h4>
        <item-group :list="listB"></item-group>
      </div>
    </article>
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
          avatar: true,
          name: 'A-----111111',
          arrow: false,
          link: '/contacts/contactsDetail/A-----111111'
        },
        {
          avatar: true,
          name: 'A-----222222',
          arrow: false,
          link: '/contacts/contactsDetail/A-----222222'
        },
        {
          avatar: true,
          name: 'A-----333333',
          arrow: false,
          link: '/contacts/contactsDetail/A-----333333'
        }
      ],
      listB: [
        {
          avatar: true,
          name: 'B-----111111',
          arrow: false,
          link: '/contacts/contactsDetail/B-----111111'
        },
        {
          avatar: true,
          name: 'B-----222222',
          arrow: false,
          link: '/contacts/contactsDetail/B-----222222'
        },
        {
          avatar: true,
          name: 'B-----333333',
          arrow: false,
          link: '/contacts/contactsDetail/B-----333333'
        }
      ]
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

<style lang="scss">
  .search-bar{
    padding: 10px 20px;
    input{
      width:100%;
      height:30px;
      line-height: 30px;
      border:none;
      border-radius:3px;
      text-align: center;
      color:#ccc;
      background: #fff;
      font-size: 14px;
    }
  }
  .contacts-items{
    h4{
      color:#333;
      padding-left:10px;
      font-size: 18px;
    }
  }
</style>
