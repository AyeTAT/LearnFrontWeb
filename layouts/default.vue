<script setup>
import { accessToPoetry } from '~/api/footer'
import { menus } from '~/constants/menuTree'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const poetry = reactive({
  from: '',
  hitokoto: '',
})

const route = useRoute()

const loadData = () => {
  const params = {
    c: 'i',
    encode: 'json',
  }
  accessToPoetry({ params }).then(data => {
    Object.keys(poetry).forEach(key => (poetry[key] = data[key]))
  })
}

const findRightHeadContext = (target, findKey, array) => {
  for (let i = 0; i < array.length; i++) {
    const tempObj = array[i]
    if (tempObj[findKey] === target) {
      return tempObj
    }
    if (tempObj.children.length) {
      let findResult = findRightHeadContext(target, findKey, tempObj.children)

      if (findResult) {
        return findResult
      }
    }
  }
}

const collapsed = useState('collapsed', () => false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}

const headContext = computed(() => {
  loadData()
  return route.fullPath && route.fullPath !== '/'
    ? findRightHeadContext(route.fullPath, 'path', menus).name
    : null
})
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider class="sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <a-button
        block
        type="primary"
        style="margin-bottom: 16px; border-radius: 0px !important"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <MenuTree />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div>张同学的{{ headContext }}</div>
      </a-layout-header>
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
      <a-layout-footer class="footer" @click="loadData">
        <div>「 {{ poetry.hitokoto }} 」</div>
        <div>—— {{ poetry.from }}</div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="less">
.layout {
  width: 100vw;
  height: 100vh;
  .sider {
    background-color: #fff;
  }
  .header {
    background: #fff;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
