<template>
  <div>
    <div class="box">
      <div class="UseBox">
        <div class="SmallBox">
          <div class="NowContent">现在使用开始专业管理</div>
          <div class="Consultant">管理者的工具箱</div>
          <Button class="FreeToUse" @click="goLogin">免费使用 &#8594;</Button>
        </div>
      </div>
      <div class="bgBox"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const goLogin = ()=>{
  router.push("/login")
}

</script>

<style scoped>
.box {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.bgBox {
  width: 72vw;
  height: 256px;
  background: #D9F6F7;
  border-radius: 32px;
  transform: rotate(357.35deg);
}

.UseBox {
  width: 70vw;
  height: 256px;
  background: #1FB9B9;
  position: absolute;
  border-radius: 32px;
  z-index: 1;
}

.SmallBox {
  text-align: center;
  margin-top: 70px;
}

.NowContent {
  font-size: 34px;
  font-weight: 400;
  color: #FFF;
  line-height: 42px;

}

.Consultant {
  font-size: 16px;
  font-weight: 400;
  color: rgb(255 255 255 / 80%);
  line-height: 24px;
  margin-top: 10px;
}

.FreeToUse {
  width: 130px;
  height: 40px;
  background: #FFF;
  border-radius: 20px;
  color: #1FB9B9;
  margin-top: 24px;
  border: 1px solid #1FB9B9;
  transition: height 2s;
  cursor: pointer;
}
.FreeToUse:hover{
  height: 60px;
  border: 1px solid rgb(49, 139, 221);
}
</style>