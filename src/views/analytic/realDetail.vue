<template>
  <div class="app-container">
    <div class="table-container">
      <el-table
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column label="序号" width="80" align="center">
          <template slot-scope="{row, $index}">
            <span>{{ $index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="车次" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.runNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="司机" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.driverName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.beginTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.endTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时长" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.duration }}</span>
          </template>
        </el-table-column>
        <el-table-column label="违规次数" align="center">
          <template slot-scope="{row}">
            <span>{{ row.times }}</span>
          </template>
        </el-table-column>
        <el-table-column label="考勤打卡" align="center">
          <template slot-scope="{row}">
            <span>{{ row.attendance }}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="query.total>0" size="mini" :total="query.total" :page.sync="query.page" :limit.sync="query.limit" @pagination="getList" />
    </div>
  </div>
</template>
<script>
import { detail } from '@/api/analytic/realtime'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  filters: {
  },
  data() {
    return {
      query: {
        total: 0,
        size: 10,
        current: 1
      },
      timerange: [], // 日期范围
      list: [],
      listLoading: false
    }
  },
  mounted() {
    if (this.$route.query.id) {
      const id = this.$route.query.id
      this.getList(id)
    } else {
      this.$message({ type: 'info', message: '无效id!' })
      this.$router.back(-1)
    }
  },
  methods: {
    getList(id) {
      detail({ id }).then(res => {
        console.log(res)
        this.list = res.data.records || []
        this.query.total = res.data.total
      })
    }
  }
}
</script>
