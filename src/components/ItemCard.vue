<template>
  <div class="Card">
    My first card
    <ul class="cardsList">
      <li v-for="(item, i) in elements" :key="i">Nombre: {{ item.Element }} Grupo: {{ item.Group }}</li>
    </ul>
  </div>
</template>

<script>
// import data from "@/data/data.js";

export default {
  name: "ItemCard",
  data: () => ({
    elements: data
  })
};
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    padding: 10px;
  }
  li {
    display: block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  article {
    background: white;
    width: 40%;
    padding: 20px;
    position: relative;
  }
  article::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 20px;
    width: 100%;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/rip.svg) bottom center;
    background-size: 150%;
  }
</style>