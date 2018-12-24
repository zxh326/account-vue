<template>
  <div class="conent">
    <h3>登陆</h3>
    <h5>这是一个简单的记账本</h5>
  <el-form ref="form" :model="form" label-width="0px">
    <el-form-item label="">
      <el-input v-model="form.name"  placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="">
    <el-input v-model="form.passsword" placeholder="密码" type="password"  @keyup.enter.native="onSubmit"></el-input>
  </el-form-item>


    <el-form-item>
      <el-button type="primary" style="margin-right: 20px" @click="onSubmit">登陆</el-button>
      <router-link to="/register">
      <el-button >注册</el-button>
      </router-link>

    </el-form-item>
  </el-form>
  </div>
</template>

<script>

    export default {
        name: "login",
      data:function () {
        return{
          form: {
            name: '',
            passsword: ''
          }
        }
      },
      methods:{
        onSubmit() {
            console.log(11)
        }
      },
      mounted:function () {
        console.log(22)
      }
    }
</script>

<style scoped>
  .conent{
    width: 400px;
    margin: auto;
    padding-top: 60px;
  }
</style>
