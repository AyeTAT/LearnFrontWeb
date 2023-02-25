<script setup>
import { menus } from '/constants/menuTree.js'
import {
  AppstoreTwoTone,
  CalculatorTwoTone,
  BookTwoTone,
  HourglassTwoTone,
  RocketTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons-vue'

const iconList = [
  AppstoreTwoTone,
  CalculatorTwoTone,
  BookTwoTone,
  HourglassTwoTone,
  RocketTwoTone,
  ThunderboltTwoTone,
]
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in menus" :key="item.id">
      <template v-if="!item.children.length">
        <a-menu-item :key="item.path">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :title="item.name" :key="item.path" :menu="item" />
      </template>
    </template>
  </a-menu>
</template>

<style scoped></style>
