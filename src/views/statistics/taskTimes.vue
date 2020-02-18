<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :inline="true" :model="query" class="demo-form-inline">
        <el-form-item label="时间范围">
          <el-date-picker
            v-model="timerange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="timeChange"
          />
        </el-form-item>
        <el-form-item label="时间粒度">
          <el-select v-model="query.status" placeholder="请选择">
            <el-option
              v-for="item in [{value: 2, label: '15分钟'}, {value: 1, label: '30分钟'}, {value: 0, label: '1小时'}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
        <el-table-column label="日期" align="center">
          <template slot-scope="{row}">
            <span>{{ row.trainNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" align="center">
          <template slot-scope="{row}">
            <span>{{ row.deviceName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" align="center">
          <template slot-scope="{row}">
            <span>{{ row.deviceName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="违规次数" align="center">
          <template slot-scope="{row}">
            <span>{{ row.deviceName }}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="query.total>0" size="mini" :total="query.total" :page.sync="query.page" :limit.sync="query.limit" @pagination="getList" />
    </div>
  </div>
</template>
<script>
import { list } from '@/api/statistics/taskType'
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
  methods: {
    handleFilter() {
      this.getList()
    },
    getList() {
      list(this.query).then(res => {
        this.list = res.data.records
      })
    },
    timeChange(arr) {

    }
  }
}
</script>
