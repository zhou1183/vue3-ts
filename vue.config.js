const { defineConfig } = require("@vue/cli-service")
//先确定node_modules项目中是否有path模块， 如果没有path模块需要先安装path; npm install path --save
const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        //"@crud": resolve("src/components/Crud"),
      },
    },
  },
})
