<template>
  <div class="logo_title">
    <img src="../assets/logo.png" alt="">
    GoCopy<span class="msg">(适用于vue3的h5网站快速成型工具)</span>
  </div>
</template>

<script lang='ts'>
</script>

<style lang='scss' scoped>
.logo_title {
    // background-color: #6fa8dc;
    border-bottom: 1px solid #6fa8dc;
    // color: #fff;
    color: #6fa8dc;
    padding: 1rem;
    text-align: left;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      width: 28px;
      margin-right: 12px;
    }
    .msg {
      font-size: 1rem;
      // color: #999;
      margin-left: 14px;
    }
}
</style>