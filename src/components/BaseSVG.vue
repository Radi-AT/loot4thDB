<script>
export default {
  name: 'BaseSVG',
  data() {
    return {
      svgImport: '',
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    cssClass: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '150px'
    },
    width: {
      type: String,
      default: '150px'
    },
  },
  methods: {
    getSVG() {
      import(`../assets/svg/${this.name}.svg`).then((mod) => {
        console.log(`../assets/svg/${this.name}.svg?raw`);
        this.svgImport = mod.default;
      });
    },
    classes() {
      return `svgWrapper ${this.cssClass}`;
    },
  },
  beforeMount() {
    this.getSVG();
  },
  // mounted() {
  //   if (this.$el.firstElementChild.nodeName === 'svg') {
  //     const svgElement = this.$el.firstElementChild;
  //     // use `viewBox` attribute to get the svg's inherent width and height
  //     const viewBox = svgElement.getAttribute('viewBox').split(' ').map(n => Number(n));
  //     const widthToHeight = (viewBox[2] / viewBox[3]).toFixed(2);
  //     // set width and height relative to font size
  //     // if growByHeight is true, height set to 1em else width set to 1em and remaining is calculated based on widthToHeight ratio
  //     if (this.growByHeight) {
  //       svgElement.setAttribute('height', '1em');
  //       svgElement.setAttribute('width', `${widthToHeight}em`);
  //     } else {
  //       svgElement.setAttribute('width', '1em');
  //       svgElement.setAttribute('height', `${1 / widthToHeight}em`);
  //     }
  //     svgElement.classList.add('svg-class');
  //   }
  // }
};
</script>

<template>
  <div v-html="svgImport" :class=classes() ></div>
</template>

<style lang="scss" scoped>
.svgWrapper {
    display: inline-flex;
    fill: v-bind(color);
    height: v-bind(height);
    width: v-bind(width);
}
</style>