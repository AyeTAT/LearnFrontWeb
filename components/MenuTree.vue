<script setup>
import { menus } from '~/constants/menuTree.js'
import { AppstoreTwoTone, CalculatorTwoTone } from '@ant-design/icons-vue'

const route = useRoute()

const excludeArr = ['add', 'edit', 'detail']

const selectedKeys = computed(() => {
  let fullPath = route.fullPath.split('/')

  fullPath = fullPath.filter(e => e)
  let selectPath = findMaxPath({ children: menus }, fullPath)
  return selectPath ? [selectPath] : []
})

const openKeys = computed(() => {
  if (route.fullPath.split('/').length <= 2) {
    return []
  }
  const routeList = route.fullPath.split('/')
  return ['/' + routeList[1]]
})

const findMaxPath = (menuTree, fullPath) => {
  let path = ''
  let selectPath = ''

  for (let i = 0; i < fullPath.length; i++) {
    path += '/' + fullPath[i]

    menuTree = menuTree.children.find(m => m.path == path)
    if (menuTree) {
      selectPath = menuTree.path
      if (i == 2) {
        return selectPath
      }
    } else {
      return selectPath
    }
  }
  return selectPath
}
</script>

<template>
  <a-menu :selectedKeys="selectedKeys" mode="inline" v-model:openKeys="openKeys" theme="light">
    <template v-for="item in menus" :key="item.id">
      <template v-if="!item.children.length">
        <a-menu-item :key="item.path">
          <template #icon>
            <AppstoreTwoTone style="font-size: 20px" v-if="item.id == 0" />
            <CalculatorTwoTone style="font-size: 20px" v-if="item.id == 1" />
          </template>
          <span>
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :title="item.name" :key="item.path" :menu="item" />
      </template>
    </template>
  </a-menu>
</template>

<style scoped></style>
