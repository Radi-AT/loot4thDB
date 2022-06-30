<template>
  <div class="filter-wrapper">
    <input class="filter-input" type="input" :placeholder="placeholder" v-model="filterText">
    <img class="filter-clear" src="../assets/icons/x-close.svg" v-show="filterValue" v-on:click="clearSearch()">
  </div>
</template>


<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Filter...'
    }
  },
  data() {
    return {
      filterText: '',
      // searchIcon: require('../assets/icons/searchIcon.svg'),
    };
  },
  computed:{
    filterValue: function() {
      this.$emit('input', this.filterText);
      return this.filterText;
    }
  },
  methods:{
    clearSearch: function () {
      this.filterText = '';
    }
  }
};
</script>

<style lang="scss">
.filter-wrapper{
  width: 30%;
  min-width: 300px;
  position: relative;
  &::after {
    content: "";
    height: 100%;
    width: 3rem;
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../assets/icons/searchIcon.svg');
    background-repeat: no-repeat;
    background-position: .5rem center;
    background-size: 1.2rem;
    pointer-events: none;
  }
  .filter-input {
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid rgb(0, 0, 0);
    height: 2rem;
    width: 100%;
    padding-left: 2rem;
    padding-right: 3rem;
    border-radius: 2rem;
    outline: none;
    &:focus,
    &:active {
      border: 1px solid rgb(139, 19, 19);
    }
  }

  .filter-clear {
    opacity: 0.3;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    width: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>