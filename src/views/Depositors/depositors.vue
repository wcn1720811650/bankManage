<template>
  <div>
    <div style="display: flex;flex-direction: row;justify-content: center;margin:10px;">
      <div class="bankStyle">WcN银行管理系统</div>
      <a-space direction="vertical" style="width: 300px;margin-left: auto">
        <a-badge-ribbon text="you are teller" color="blue">
          <a-card title="Tips" size="small">You can make deposits, withdrawals, transfers, check balances, and modify password.</a-card>
        </a-badge-ribbon>
      </a-space>
    </div>
  </div>
  <change-pw-modal/>
  <deposit-modal/>
  <withdraw-modal/>
  <transfer-modal/>

</template>

<script setup lang="ts">
import changePwModal from "../../components/modal/changePwModal.vue"
import depositModal from "../../components/modal/depositModal.vue"
import withdrawModal from "../../components/modal/withdrawModal.vue"
import transferModal from "../../components/modal/transferModal.vue"
import {makeDepositFuc} from "../../api/adminTable.js"
import {ref} from "vue";


const deposit = ref<number>()
const balance = ref<number>()
const userName = ref<string>('')
const token = localStorage.getItem("token")
userName.value = token
const makeDepositButton = async ()=>{
  const res = await makeDepositFuc({
    username:userName.value,
    balance: balance.value,
    deposit: deposit.value
  })
  console.log(res)
}

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