<template>
  <div class="hello">
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '2']" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>地图显示</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="basemap">基础地图</el-menu-item>
              <el-menu-item index="1-2" route="baseTileLayer">基础切片</el-menu-item>
              <el-menu-item index="1-3" route="tileLayer">切片地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>地图操作</template>
            <el-menu-item-group>
              <el-menu-item index="2-1" route="drawModel">模型作图</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>
