 <template>
  <el-table :data="detail" style="width: 100%" stripe>
    <el-table-column prop="date" label="日期" width="180" :formatter="formatterdate"></el-table-column>
    <el-table-column prop="payornot" label="支出/收入" width="180" :formatter="formatterpay"></el-table-column>
    <el-table-column prop="money" label="金额"></el-table-column>
    <el-table-column prop="type" label="分类" :formatter="formattertype"></el-table-column>
    <el-table-column prop="remark" label="备注"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="dialogFormVisible = true">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

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
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </el-table>
</template>

  <script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "detail",
  data() {
    return {
      detail: [],
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
  created() {
    axios.get("/account/detail").then(resp => {
      this.detail = resp.data;
    });
  },
  methods: {
    formatterpay(row) {
      if (row.payorno == 1) {
        return "收入";
      } else {
        return "支出";
      }
    },
    formatterdate(row) {
      return row.date.slice(0, 10);
    },
    formattertype(row) {
      switch (row.type) {
        case 0:
          return "餐饮";
        case 1:
          return "零食";
        case 2:
          return "日用";
        case 3:
          return "交通";
        case 4:
          return "通讯";
        case 5:
          return "购物";
        case 6:
          return "娱乐";
      }
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
      console.log(this.dialogFormVisible);
    },
    diagClose() {
      console.log(1);
      // this.activeIndex = "1";
      this.$router.push({ path: "/" });
      this.dialogFormVisible = false;
    }
  }
};
</script>