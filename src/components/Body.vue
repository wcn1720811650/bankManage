<template>
  <div class="body">
    <div style="display: flex; flex-direction: row">
      <div class="logo">
        <SketchOutlined style="font-size: 100px"/>
      </div>
      <div class="NavRight">
        <Button @click="goLogin" class="LoginButton">登录</Button>
        <Button @click="goLogin" class="FreeUse">免费使用</Button>
      </div>
    </div>
    <div class="title">WcN银行管理系统</div>
    <Button class="GoFreeUse" @click="goLogin">免费使用 &#8594;</Button>
    <div class="Till">截止2023年1月11日，我们已经累计为<span class="Number">9600+</span>用户，提供了<span class="Number">10W+</span>次管理服务。
    </div>
  </div>
</template>

<script setup lang="ts">
import {SketchOutlined} from '@ant-design/icons-vue';

import {useRouter} from "vue-router";

const router = useRouter();
const goLogin = () => {
  router.push("/login");
}
</script>

<style scoped>

.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.title {
  color: white;
  font-size: 60px;
  font-weight: 800;
  margin-top: 160px;
  text-align: center;
  text-shadow: 1px 0 rgb(31, 185, 185), 1px 2px #28a842, 3px 1px rgb(31, 185, 185),
  2px 3px #006615, 4px 2px rgb(31, 185, 185), 4px 4px rgb(31, 185, 185),
  5px 3px rgb(31, 185, 185), 5px 5px #006615, 7px 4px rgb(31, 185, 185),
  6px 6px rgb(31, 185, 185), 8px 5px rgb(31, 185, 185), 7px 7px #006615,
  9px 6px rgb(31, 185, 185), 9px 8px rgb(31, 185, 185), 11px 7px #006615
}

.GoFreeUse {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 54px;
  background: #fff;
  border-radius: 30px;
  margin-top: 34px;
  text-align: center;
  color: #1FB9B9;
  cursor: pointer;
  border: 1px solid #1FB9B9;
  transition: height 2s;
}

.GoFreeUse:hover {
  height: 60px;
  background: #1FB9B9;
  border: 1px solid rgb(49, 139, 221);
  color: #fff;
}

.Till {
  font-size: 20px;
  font-weight: 400;
  color: #203230;
  line-height: 27px;
  text-align: center;
  margin-top: 150px;
}

.Number {
  color: #1FB9B9;
  line-height: 41px;
  font-size: 30px;

}

.NavRight {
  margin-left: auto;
}

.logo {
  width: 8.5vw;
  height: calc(8.5vw * 0.327);
  margin-left: 2vw;

}

.LoginButton {
  width: 120px;
  height: 40px;
  background: #FFF;
  border-radius: 20px;
  border: 1px solid #1FB9B9;
  color: #1FB9B9;
  margin-top: 15px;
  transition: height 2s;
  cursor: pointer;
}

.LoginButton:hover {
  height: 45px;
  background: #1FB9B9;
  border: 1px solid rgb(49, 139, 221);
  color: #fff;
  margin-top: 15px;
}

.FreeUse {
  width: 120px;
  height: 40px;
  background: #fff;
  border: 1px solid #1FB9B9;
  border-radius: 20px;
  margin-left: 16px;
  color: #1FB9B9;
  margin-right: 2vw;
  transition: height 2s;
  cursor: pointer;
}

.FreeUse:hover {
  height: 45px;
  background: #1FB9B9;
  border: 1px solid rgb(49, 139, 221);
  color: #fff;
  margin-top: 15px;
}
</style>