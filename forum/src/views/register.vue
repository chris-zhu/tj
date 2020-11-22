<template>
  <div class="register">
    <div class="left"></div>
    <div class="right">
      <el-card shadow="never"
               class="box-card">
        <h3>欢迎注册QQ </h3>
        <h4>每一天，乐在沟通。</h4>
        <el-form :model="form"
                 :rules="rules"
                 ref="form"
                 class="form">
          <el-form-item prop="name">
            <el-input v-model="form.name"
                      placeholder="请输入您的昵称"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email"
                      placeholder="请输入您的邮箱账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input show-password
                      v-model="form.pwd"
                      placeholder="请输入您的密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width:100%;margin-top:20px"
                       type="primary"
                       @click="submitForm">立即创建</el-button>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.agree">我已阅读并同意相关服务条款和隐私政策</el-checkbox>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        pwd: '',
        agree: false
      },
      rules: {
        name: [
          { required: true, message: '昵称不可以为空', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入您的邮箱账号', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入你的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('注册成功!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
<style lang='scss' scoped>
.register {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    flex: 0 0 30vw;
    height: 100%;
    background-image: url('https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .box-card {
      width: 50%;
      min-width: 400px;
      h3 {
        font-size: 44px;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 28px;
        margin-bottom: 64px;
        line-height: 1.2;
        color: #333;
      }
    }
  }
}
</style>
