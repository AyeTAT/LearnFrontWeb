<script setup>
import {
  BookTwoTone,
  HourglassTwoTone,
  RocketTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons-vue'

const props = defineProps({ menu: Object })
</script>

<template>
  <a-sub-menu :key="menu.path">
    <template #icon> <BookTwoTone style="font-size: 20px" v-if="menu.id == 2" /> </template>
    <template v-for="item in menu.children" :key="item.id">
      <template v-if="!item.children.length">
        <a-menu-item :key="item.path">
          <template #icon>
            <HourglassTwoTone style="font-size: 20px" v-if="item.id == 3" />
            <RocketTwoTone style="font-size: 20px" v-if="item.id == 4" />
            <ThunderboltTwoTone style="font-size: 20px" v-if="item.id == 5" />
          </template>
          <span>
            <NuxtLink :to="item.path">
              {{ item.name }}
            </NuxtLink>
          </span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :title="item.name" :menu="item" :key="item.path" />
      </template>
    </template>
  </a-sub-menu>
</template>
