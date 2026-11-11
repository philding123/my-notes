import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Notes',
  description: '个人学习笔记',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        text: '笔记',
        items: [
          { text: 'IDA Pro 使用方法', link: '/ida-pro' }
        ]
      }
    ]
  }
})
