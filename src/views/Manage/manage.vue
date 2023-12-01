<template>
  <div>
    <div style="display: flex;flex-direction: row;align-items: center;justify-content: center;margin:10px;">
      <div class="bankStyle">WcN银行管理系统</div>
      <a-space direction="vertical" style="width: 300px;margin-left: auto">
        <a-badge-ribbon text="you are manager" color="green">
          <a-card title="Tips" size="small">You can register, cancel, and freeze depositor accounts</a-card>
        </a-badge-ribbon>
      </a-space>
    </div>
  </div>

  <div style="display: flex;flex-direction: row;align-items: center;justify-content: center">
    <div style="margin-right: 400px">
      <change-pw-modal/>
    </div>
    <div style="margin-right: 500px">
      <register-user-modal/>
    </div>
    <delete-modal/>
  </div>
  <a-table :dataSource="userInfo" :columns="columns"/>


</template>

<script setup>

import deleteModal from "../../components/modal/deleteModal.vue"
import {tellerListFuc} from "../../api/adminTable.js";
import {onMounted, ref} from "vue";
import registerUserModal from "../../components/modal/registertellerModal.vue"
import changePwModal from "../../components/modal/changePwModal.vue"

const userInfo = ref()

onMounted(async () => {
  const res = await tellerListFuc()
  console.log(res.dataList)
  userInfo.value = res.dataList;
  console.log(userInfo.value)
})


const columns = [
  {
    title: 'Name',
    dataIndex: 'userName',
    key: 'userName',
    width: 300
  },
  {
    title: 'userPassword',
    dataIndex: 'passWord',
    key: 'passWord',
    width: 300
  },
  {
    title: 'Position',
    dataIndex:'position',
    key: 'position',
    width: 100
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    key: 'nickName',
    width: 300
  },
  {
    title: '是否被冻结(0表示未冻结 1表示冻结)',
    dataIndex: 'status',
    key: 'status',
    width: 300
  },
  {
    title:'余额',
    dataIndex: 'balance',
    key: 'balance'
  }
]

</script>

<style scoped>
.bankStyle {
  color: white;
  font-size: 60px;
  font-weight: 800;
  margin-left: 400px;
  text-shadow: 1px 0 rgb(31, 185, 185), 1px 2px #28a842, 3px 1px rgb(31, 185, 185),
  2px 3px #006615, 4px 2px rgb(31, 185, 185), 4px 4px rgb(31, 185, 185),
  5px 3px rgb(31, 185, 185), 5px 5px #006615, 7px 4px rgb(31, 185, 185),
  6px 6px rgb(31, 185, 185), 8px 5px rgb(31, 185, 185), 7px 7px #006615,
  9px 6px rgb(31, 185, 185), 9px 8px rgb(31, 185, 185), 11px 7px #006615
}
</style>