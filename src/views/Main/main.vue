<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible style="height:100vh">
      <div class="logo"/>
      <myframe @myItems = "handleMyItems"></myframe>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div style="display: flex;flex-direction: row;align-items: center;justify-content: center">
          <Header></Header>
        </div>
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
  <router-view/>
</template>
<script lang="ts" setup>
import {ref, h} from 'vue';
import Header from '../../components/header.vue'
import myframe from '../../components/frame.vue'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const items = ref()
const collapsed = ref<boolean>(false);
const handleMyItems = (val)=>{
  items.value = val.value
  console.log(items)
}
const getIndex = (item,index)=>{
  console.log(item)
  console.log(index)
}

</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.logo {
  margin: 10px auto;

  width: 150px;
  height: 40px;
  background-color: white;
}
</style>