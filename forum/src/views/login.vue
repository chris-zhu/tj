<template>
  <div class="login">
    <div class="wrapper">
      <div class="left">
        <h4 class="title">QQ邮箱，常联系！</h4>
        <p class="content">2500年前，人们飞鸽传书<br />
          184年前，莫尔斯发明了电报<br />
          51年前，第一封电子邮件发出<br />
          今天，QQ邮箱联系你、我、他</p>
      </div>
      <div class="right">
        <el-card class="box-card">
          <el-form :model="form"
                   :rules="rules"
                   ref="form"
                   class="form">
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
              <el-checkbox v-model="form.remember">下次自动登录</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button style="width:100%"
                         type="primary"
                         @click="submitForm">立即创建</el-button>
            </el-form-item>
          </el-form>
          <p class="tips">
            <el-button type="text">忘了密码</el-button>
            <el-button @click="$router.push('/register')"
                       type="text">注册新账号</el-button>
          </p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        pwd: '',
        remember: false
      },
      rules: {
        email: [
          { required: true, message: '请输入您的邮箱账号', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入你的密码', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功!');
          setTimeout(() => {
            this.$router.push('/')
          }, 1500);
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
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
    .left {
      width: 450px;
      height: 290px;
      background-image: url('https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-chang1ea8a2.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 100% 0%;
      > .title {
        line-height: 26px;
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: normal;
        color: #6f95c8;
      }
      > .content {
        line-height: 1.5;
        color: #666;
        font-size: 15px;
      }
    }
    .right {
      margin-left: 50px;
      .tips {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -10px;
      }
    }
  }
}
.box-card {
  padding: 10px 0 0;
}
.form {
  width: 300px;
}
</style>
