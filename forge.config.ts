import type { ForgeConfig } from '@electron-forge/shared-types'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
// import { MakerZIP } from '@electron-forge/maker-zip'
// import { MakerDeb } from '@electron-forge/maker-deb'
// import { MakerRpm } from '@electron-forge/maker-rpm'
import { VitePlugin } from '@electron-forge/plugin-vite'
import { FusesPlugin } from '@electron-forge/plugin-fuses'
import { FuseV1Options, FuseVersion } from '@electron/fuses'

const config: ForgeConfig = {
  packagerConfig: {
    name: 'toolset', // 应用程序的名称
    executableName: 'Toolset', // 生成的可执行文件的名称
    // appBundleId: 'com.example.toolset', // 应用程序的唯一标识符（Mac 和部分平台使用）
    // appCategoryType: 'public.app-category.utilities', // 应用类别（Mac 使用）
    asar: true, // 是否启用 ASAR 打包
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      setupExe: 'Toolset.exe',
      noMsi: true, // 禁用 MSI 安装包生成（可选）
    }), // 用于 Windows 平台的默认安装包生成工具
    // new MakerZIP({}, ['darwin']), // 生成 ZIP 压缩包，常见于 macOS（darwin）平台
    // new MakerRpm({}), // 生成 Linux 平台的 RPM 包
    // new MakerDeb({}), // 生成 Linux 平台的 DEB 包
  ],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'src/main.ts',
          config: 'vite.main.config.ts',
          target: 'main',
        },
        {
          entry: 'src/preload.ts',
          config: 'vite.preload.config.ts',
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.ts',
        },
      ],
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
}

export default config
