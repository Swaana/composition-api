<template>
  <div>
    <b-form-group label="Flavor">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="drink.flavor"
        :options="drinks.flavors"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <b-form-group label="Variant">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="drink.variant"
        :options="drinks.variants"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <b-form-group label="Extra">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="drink.extras"
        :options="drinks.extras"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <div>Current selection: {{ drink }}</div>
    <b-button @click="addDrink()">Add</b-button>
  </div>
</template>

<script lang="ts">
import { drinks } from '@/data/items'
import { defineComponent, reactive } from '@vue/composition-api'
import useOrder from '@/data/useOrder'

export default defineComponent({
  name: 'Drink',
  setup () {
    const drink = reactive({
      flavor: null,
      variant: null,
      extra: null,
    })

    function resetDrink () {
      drink.flavor = null
      drink.variant = null
      drink.extra = null
    }

    const { addOrder } = useOrder()
    return {
      drinks,
      drink,
      addDrink () {
        addOrder({ ...drink })
        resetDrink()
      }
    }
  },
})
</script>

<style scoped>

</style>
