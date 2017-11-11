<template>
  <router-link class="sidebar-item" :to="item.to" tag="div" :exact="index == 0">
    <div class="title">{{item.title}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'sidebar-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .sidebar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: tomato;
    }

  }

  .title {
    max-width: 100%;
  }

  .router-link-active {
    background-color: tomato;
  }

</style>