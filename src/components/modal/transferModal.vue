<script setup>
import {transferFuc, withdrawFuc} from "../../api/adminTable.js"
import {ref} from "vue";
import {message} from "ant-design-vue";


const fromAccount = ref('')
const toAccount = ref('')
const amount = ref()

const token = localStorage.getItem("token")
fromAccount.value = token
const makeTransferButton = async ()=>{
  const res = await transferFuc({
    fromAccount:fromAccount.value,
    toAccount: toAccount.value,
    amount: amount.value
  })
  console.log(res)
  message.success(res.msg)
}

const open = ref(false);

const showTransferModal = () =>{
  open.value = true;
}

const handleOk = () => {
  open.value = false;
};

</script>

<template>
  <a-button type="primary" @click="showTransferModal">转账</a-button>

  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input :disabled="true" placeholder="请输入您的用户名" class="inputType" v-model:value="fromAccount"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>要转到的账户：</div>
        <a-input placeholder="请输入您要取的钱" class="inputType" v-model:value="toAccount" style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>转账金额：</div>
        <a-input placeholder="请输入值" class="inputType" v-model:value="amount" style="width: 200px"></a-input>
      </div>
      <a-button type="primary" @click="makeTransferButton">转账</a-button>
    </div>
  </a-modal>
</template>

<style scoped>
.InfoItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
</style>