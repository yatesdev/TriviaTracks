<template>
  <div class="header">
    <div class="sidebar-toggle" @click="toggleSidebar">Sidebar</div>
    <div class="title-text">Trivia Tracks</div>
    <div class="user-data">User Name</div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_colors.scss';
  .header {
    height: 50px;
    color: white;
    background-color: darken($deepblue,20);
    display: flex;
    flex-direction: row;
  }

  .sidebar-toggle {
    flex: 0 1 auto;
    align-self: left;
  }

  .title-text {
    flex: auto;
    font-size: 2em;
    align-self: center;
  }

  .user-data {
    flex: 0 1 auto;
    align-self: right;
  }
</style>