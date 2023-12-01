<script lang="ts" setup>
import {ref, h, onMounted} from 'vue';
import {
  MailOutlined,CalendarOutlined,

} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
const selectedKeys = ref<string[]>(['1']);
const router = useRouter()

const items = ref([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
  },
  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
])
const $emit = defineEmits(['myItems'])

onMounted(async ()=>{
  $emit('myItems',selectedKeys)
})
const getIndex = (selectedKeys)=>{
  console.log(selectedKeys[0])
  // switch (selectedKeys[0]){
  //   case '1':{
  //     router.push("/");
  //     break
  //   }
  //   case '2':{
  //     router.push("")
  //   }
  // }
}

</script>

<template>

  <a-menu @click="getIndex(selectedKeys)"  :items="items" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline"/>
  <router-view></router-view>
</template>

<style scoped>

</style>
