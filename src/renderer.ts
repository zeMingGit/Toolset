/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router, { setupRouter } from './router'

// 引入全局样式
import '@/styles/index.scss'

// 引入 element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  setupElementPlus(app)

  setupRouter(app)

  await router.isReady()

  app.mount('#app')
}

setupAll()