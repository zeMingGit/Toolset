<template>
  <div class="layout">
    <el-container class="myContainer">
      <el-aside width="25%">
        <el-scrollbar height="100%" view-class="scrollbar-wrapper">
          <el-menu 
            :default-active="activeMenu"
            @select="handleSelect"
            class="myMenu"
          >
            <el-menu-item index="/crawler">
              <span>爬虫爬取</span>
            </el-menu-item>
            <el-menu-item index="/vlog">
              <span>vlog</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 监听当前路由高亮菜单项
const activeMenu = computed(() => route.path)

const handleSelect = (key: string) => {
  router.push(key)
}
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .myContainer {
    width: 100%;
    height: 100%;

    :deep(.scrollbar-wrapper) {
      width: 100%;
      height: 100%;
    }

    .myMenu {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
