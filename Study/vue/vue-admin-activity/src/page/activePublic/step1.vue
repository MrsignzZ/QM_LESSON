<template>
  <div class="step1">
    <el-form :model="ruleForm"
    class="demo-ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-position="top"
    >
      <el-form-item
      label="活动名称"
      prop="name">
      <el-input
        v-model="ruleForm.name"
        size="large"
      ></el-input>
      </el-form-item>
      <el-form-item label="活动标签"
      required>
        <el-tag
        v-for="(tag, index)
        in ruleForm.tags"
        :key="index"
        :closable="true"
        type="primary"
        @close="handleClose(tag)"
        >
        {{tag}}
        </el-tag>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称',
            trigger: 'change'
          }
        ]
      },
      ruleForm: {
        name: '',
        tags: ['1', '2']
      }
    }
  }
}
</script>


