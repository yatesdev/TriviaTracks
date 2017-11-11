<template>
  <div class="sidebar">
    <div class="sidebar-items">
      <sidebar-item v-for="(item, index) in items" :key="index" :item="item" :index="index"/>
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
          icon: 'dashboard',
          to: { path: '/' },
        }, {
          title: 'Location',
          icon: 'developer_board',
          to: { path: '/location' },
        }, {
          title: 'Statistics',
          icon: 'insert_chart',
          to: '/stats',
        }, {
          title: 'Admin',
          icon: 'settings',
          to: '/admin',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 200px;
    position: fixed;
    height: 100%;
    background: red;
  }

  .sidebar-items {
    display: flex;
    flex-direction: column;
  }
</style>