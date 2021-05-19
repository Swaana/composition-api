<template>
  <div>
    <b-form-group label="Crust">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="pizza.crust"
        :options="pizzas.crusts"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <b-form-group label="Topping">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="pizza.topping"
        :options="pizzas.toppings"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <div>Current selection: {{ pizza }}</div>
    <b-button @click="addPizza()">Add</b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { pizzas } from '@/data/items'
import useOrder from '@/data/useOrder'

export default defineComponent({
  name: 'Pizza',
  setup () {
    const pizza = ref({})
    const { addOrder } = useOrder()
    return {
      pizzas,
      pizza,
      addPizza() {
        addOrder(pizza.value)
        pizza.value = {}
      }
    }
  },
})
</script>

<style scoped>

</style>
