<template>
  <a-sub-menu :key="menu.path">
    <template v-for="item in menu.children" :key="item.id">
      <template v-if="!item.children.length">
        <a-menu-item :key="item.path">
          <NuxtLink :to="item.path">
            {{ item.name }}
          </NuxtLink>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :title="item.name" :menu="item" :key="item.path" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup>
const props = defineProps({ menu: Object })
</script>
