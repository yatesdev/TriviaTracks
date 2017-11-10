<template>
  <div class="sidebar-item">
    <div class="title">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-item',
  props: {
    item: {
      type: Object,
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

    &:hover {
      background-color: tomato;
    }
  }

  .title {
    max-width: 100%;
  }
</style>