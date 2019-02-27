<template>
  <div class="activePublic">
    <el-steps
      :space="200"
      :active="step"
      class="step"
    >
      <el-step title="活动信息"></el-step>
      <el-step title="报名签到"></el-step>
      <el-step title="分享设置"></el-step>
      <el-step title="个性设置"></el-step>
    </el-steps>
    <router-view class="view">

    </router-view>
    <div class="but-group">
      <el-button
        v-show="preview"
        @click.native.prevent="handlePreview"
      >
        预览
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      preview: true
    };
  }
};
</script>
<style scoped>
.activePublic .router-link {
  color: #fff;
}
.activePublic .but-group .el-button {

  margin-right: 20px;
}
</style>

