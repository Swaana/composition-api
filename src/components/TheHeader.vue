<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="info"
  >
    <b-container>
      <b-navbar-brand to="/">
        Composition api
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/pizzas">
            Pizzas
          </b-nav-item>
          <b-nav-item to="/drinks">
            Drinks
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            right
          >
            <template #button-content>
              <b-icon-cart/> <b-badge v-if="orders.length > 0" variant="light">{{ orders.length }}</b-badge>
            </template>
            <b-dropdown-item v-for="order in orders">{{ order.item }}</b-dropdown-item>
            <b-dropdown-item-btn
              href="#"
            >
              Checkout
            </b-dropdown-item-btn>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useOrder from '@/data/useOrder'

export default defineComponent({
  name: 'TheHeader',
  setup () {
    const { orders } = useOrder()

    return {
      orders,
    }
  },
})
</script>

<style scoped>

</style>
