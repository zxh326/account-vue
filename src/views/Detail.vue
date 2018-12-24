 <template>
  <el-table :data="tableData" style="width: 100%" stripe>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="payorno" label="支出/收入" width="180"></el-table-column>
    <el-table-column prop="money" label="金额"></el-table-column>
    <el-table-column prop="type" label="分类"></el-table-column>
    <el-table-column prop="remark" label="备注"></el-table-column>
  </el-table>
</template>

  <script>
export default {
  name: "detail",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          payorno: "支出",
          money: "12.22",
          type: "无",
          remark: "test"
        },
        {
          date: "2016-05-02",
          payorno: "支出",
          money: "12.22",
          type: "无",
          remark: "test"
        },
        {
          date: "2016-05-02",
          payorno: "支出",
          money: "12.22",
          type: "无",
          remark: "test"
        },
        {
          date: "2016-05-02",
          payorno: "支出",
          money: "12.22",
          type: "无",
          remark: "test"
        }
      ]
    };
  }
};
</script>