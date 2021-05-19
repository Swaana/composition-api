import { Ref, ref } from '@vue/composition-api'

export interface Order {
  item: any
}

let orders: Ref<Order[]>

export default function () {
  if (!orders) {
    orders = ref<Order[]>([])
  }

  return {
    addOrder (item: any) {
      console.log('adding', item)
      orders.value.push({ item })
    },
    removeOrder (order: Order) {
      const index = orders.value.indexOf(order)
      orders.value.splice(index, 1)
    },
    orders,
  }
}
