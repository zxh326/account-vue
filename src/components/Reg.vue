<template>
  <div class="conent">
    <h3>注册</h3>
    <h5>这是一个简单的记账本</h5>
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item label>
        <el-input v-model="form.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-input
          v-model="form.password"
          placeholder="密码"
          type="password"
        ></el-input>
      </el-form-item>  
      <el-form-item label>
        <el-input
          v-model="form.password2"
          placeholder="重复密码"
          type="password"
          @keyup.enter.native="Submit"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin-right: 20px" @click="Submit">提交</el-button>
        <router-link to="/auth/login">
          <el-button>登陆</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "reg",
  data: function() {
    return {
      form: {
        name: "",
        password: "",
        password2: ""
      }
    };
  },
  methods: {
    Submit() {
      if(this.form.password != this.form.password2){
        this.showMessage("两次密码不一样","warning")
        return
      }
      axios.post("/auth/reg", this.form).then(resp => {
        if (resp.data.ret==0){
          this.showMessage("注册成功",'success')
          this.$router.push({path:'/'})
        }else{
          this.showMessage(resp.data.msg, 'error')
        }
      });
    },
    showMessage(msg, type) {
      this.$message({
        message: msg,
        type: type
      });
    }
  },
  mounted: function() {
  },
  created(){
    document.title="注册"
  }
};
</script>

<style scoped>
.conent {
  width: 400px;
  margin: auto;
  padding-top: 60px;
}
</style>
