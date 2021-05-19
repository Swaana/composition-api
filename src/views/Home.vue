<template>
  <div class="home">
    <h1>Welcome {{ greeting }}!</h1>
    <div class="mt-5">
      <h3>Place your order</h3>
      <b-button to="/pizzas">Pizza</b-button>
      <b-button to="/drinks">Drink</b-button>
    </div>
    <div class="mt-5">
      <h3>What is composition API?</h3>
      <p>
        <i>“Reactive API coupled with the ability to register lifecycle hooks using globally imported functions”</i>
        ~ Evan You
      </p>
      <ul>
        <li><a href="https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api">Introduction</a></li>
        <li><a href="https://v3.vuejs.org/api/reactivity-api.html#reactivity-api">Reactive API</a></li>
        <li><a href="https://github.com/vuejs/composition-api">@vue/composition-api (Vue2)</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      name: 'Awesome',
      title: 'Mr.'
    }
  },
  computed: {
    greeting () {
      // @ts-ignore
      return `${this.title} ${this.name}`
    }
  }
});
</script>
