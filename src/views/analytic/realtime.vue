<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="车次">
          <el-input v-model="query.runNo" />
        </el-form-item>
        <el-form-item label="司机">
          <el-input v-model="query.driverName" />
        </el-form-item>
        <el-form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
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
        <el-table-column label="位置" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.location }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时长" width="120" align="center">
          <template slot-scope="{row}">
            <span>{{ row.duration | statusFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="违规次数" align="center">
          <template slot-scope="{row}">
            <span>{{ row.times }}</span>
          </template>
        </el-table-column>
        <el-table-column label="考勤" align="center">
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
import { list } from '@/api/analytic/realtime'
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
      list: [],
      listLoading: false
    }
  },
  methods: {
    handleFilter() {
      this.getList()
    },
    getList() {
      list(this.query).then(res => {
        this.list = res.data.records || []
        this.query.total = res.data.total
      })
    }
  }
}
</script>
