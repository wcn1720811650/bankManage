<template>
  <div>
    <div class="bottom">
      <img class="MLogo" />
      <div style="display:flex;flex-direction:column">
        <div class="contact">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bottom{
  display:flex;
  flex-direction: row;
  margin-top:158px;
  justify-content:center;
}
.MLogo{
  height: 40px;
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 13.5vw;
}

.Copyright{
  font-size: 14px;
  font-weight: 400;
  color: rgb(32 50 48 / 50%);
  line-height: 22px;
  margin: auto auto 20px;
}

.contact{
  margin-left: auto;
  margin-right: 13.5vw;
}
</style>