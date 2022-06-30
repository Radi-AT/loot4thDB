<template>
  <div class="cardSearch">
    Busca tu carta:
    <input v-model="cardName" id="cardSearchInput" debounce="500" />
    <button @click="find()">Buscar</button>
    <br>
    <div id="cardResults" />
    <ul class="cardsList">
      <li v-for="(item, i) in cardResults"
          :key="i">
        <img :src="item.imageUrl">
      </li>
    </ul>
  </div>
</template>

<script>
// import mtg from 'mtgsdk'

export default {
  name: "CardSearch",
  data: () => ({
    elements: 20,
    cardName: '',
    cardResults: '',
  }),
  methods: {
    find() {
      console.log('HEY!', this.cardName);
      mtg.card.where({name: this.cardName})
        .then(results => {
          console.log(results);
          this.cardResults = results;
          const array = [results];
          array.length;
        })
        .catch(error => {
          console.log('Sin resultados', error);
        });
    }
  }
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
</style>