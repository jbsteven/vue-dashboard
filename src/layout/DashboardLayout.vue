<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link to="/user">
        <i class="nc-icon nc-notes"></i>
        <p>模型参数</p>
      </sidebar-link>
      <sidebar-link to="/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>预测结果</p>
      </sidebar-link>
<!--      <sidebar-link to="/table-list">-->
<!--        <i class="nc-icon nc-notes"></i>-->
<!--        <p>Table list</p>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/typography">-->
<!--        <i class="nc-icon nc-paper-2"></i>-->
<!--        <p>Typography</p>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/icons">-->
<!--        <i class="nc-icon nc-atom"></i>-->
<!--        <p>Icons</p>-->
<!--      </sidebar-link>-->
<!--      <sidebar-link to="/notifications">-->
<!--        <i class="nc-icon nc-bell-55"></i>-->
<!--        <p>Notifications</p>-->
<!--      </sidebar-link>-->

<!--      <template slot="bottom-links">-->
<!--        <sidebar-link class="active"-->
<!--                      to="/upgrade">-->
<!--          <i class="nc-icon nc-alien-33"></i>-->
<!--          <p>Upgrade to PRO</p>-->
<!--        </sidebar-link>-->
<!--      </template>-->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
