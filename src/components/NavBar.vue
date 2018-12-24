<template>
  <el-header>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="router"
      :unique-opened="true"
    >
      <el-menu-item index="1" :route="{name:'index'}">记录</el-menu-item>
      <el-menu-item index="2" :route="{name:'count'}">统计</el-menu-item>
      <el-menu-item
        index="3"
        @click="dialogFormVisible = true"
        v-if="$route.name == 'index' || $route.name=='new'"
      >新纪录</el-menu-item>

      <el-submenu index="4" style="float: right">
        <template slot="title">
          <span>欢迎你 {{name}}</span>
        </template>
        <el-menu-item index="4-1" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>

    <el-dialog title="新消费/支出" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-col :span="formSpan">
            <el-date-picker
              v-model="form.date"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="支出/收入" :label-width="formLabelWidth">
          <el-col :span="formSpan">
            <el-select v-model="form.payorno" placeholder="请选择类别">
              <el-option label="支出" value="0"></el-option>
              <el-option label="收入" value="1"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="金额" :label-width="formLabelWidth">
          <el-col :span="formSpan">
            <el-input-number v-model="form.money" placeholder="请输入内容" :min="0" :max="10000000000"></el-input-number>
          </el-col>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth">
          <el-col :span="formSpan">
            <el-select v-model="form.type" placeholder="请选择分类">
              <el-option label="餐饮" value="0"></el-option>
              <el-option label="零食" value="1"></el-option>
              <el-option label="日用" value="2"></el-option>
              <el-option label="交通" value="3"></el-option>
              <el-option label="通讯" value="4"></el-option>
              <el-option label="购物" value="5"></el-option>
              <el-option label="娱乐" value="6"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-col :span="12">
            <el-input v-model="form.remark" placeholder="请输入内容"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="diagClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </el-header>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "NavBar",
  data() {
    return {
      name: sessionStorage.getItem("uname"),
      defaultActive: "1",
      dialogFormVisible: false,
      form: {
        date: "",
        payorno: "1",
        money: "",
        type: "",
        remark: ""
      },
      formLabelWidth: "150px",
      formSpan: 4
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    diagClose() {
      console.log(1);
      // this.activeIndex = "1";
      this.$router.push({ path: "/" });
      this.dialogFormVisible = false;
    },
    logout() {
      axios.post("/auth/logout").then(resp => {
        if (resp.data.ret == 0) {
          sessionStorage.removeItem("uname");
          this.$message("推出成功");
          this.$router.push({ path: "/" });
        }
      });
    },
    submit() {
      // eslint-disable-next-line
      axios.post("/account/new", this.form).then(resp => {
        if (resp.data.ret == 0) {
          this.$message({ message: resp.data.msg, type: "success" });
          this.$router.push({ path: "/" });
          this.dialogFormVisible = false;
        }
      });
    }
  }
};
</script>