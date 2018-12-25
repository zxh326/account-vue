<template>
  <div class="conent">
    <h3>登陆</h3>
    <h5>记账本</h5>
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item label>
        <el-input v-model="form.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-input
          v-model="form.password"
          placeholder="密码"
          type="password"
          @keyup.enter.native="Submit"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin-right: 20px" @click="Submit">登陆</el-button>
        <router-link to="/auth/reg">
          <el-button>注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true
export default {
  name: "login",
  data: function() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    Submit() {
      axios.post("/auth/login", this.form).then(resp => {
        console.log(resp.headers)
        if (resp.data.ret == 0) {
          this.showMessage("登陆成功", "success");
          sessionStorage.setItem("uname", resp.data.name);
          this.$router.push({ path: "/" });
        } else {
          this.showMessage(resp.data.msg, "error");
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
  mounted: function() {},
  created() {
    document.title = "登陆";
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
