<script setup>
import { menus } from '~/constants/menuTree'

const router = useRouter()
onBeforeMount(() => {
  router.push(menus[0].path)
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
