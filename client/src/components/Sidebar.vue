<template>
  <div class="sidebar">
    <div class="sidebar-items">
      <sidebar-item v-for="item in items" :key="item.title" :item="item"/>
    </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
  name: 'sidebar',
  components: {
    'sidebar-item': SidebarItem,
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: { path: '/' },
        }, {
          title: 'Location',
          to: { path: '/location' },
        }, {
          title: 'Statistics',
          to: '/stats',
        }, {
          title: 'Admin',
          to: '/admin',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_colors.scss';
  .sidebar {
    width: 200px;
    position: fixed;
    height: 100%;
    background-color: $lightbluegray;
  }

  .sidebar-items {
    display: flex;
    flex-direction: column;
  }
</style>