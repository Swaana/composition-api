import { getCurrentInstance } from '@vue/composition-api'

export default function () {
  const vm = getCurrentInstance() as any
  return {
    router: vm.$router,
    route: vm.$route,
  }
}
