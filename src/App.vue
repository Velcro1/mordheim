<template>
  <b-container id="app">
    <h1 class="h-title">{{userSelect}}</h1>
    <b-row align-h="between">
      <b-col class="wb-container" cols="7">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="title">
    </b-col>
      <b-col class="wb-container" cols="4">
        <label>WARBAND TYPE:</label>
        <b-form-select v-model="userSelect" :options="warBands.warbands" value-field="name" text-field="name" @change="startCharacter"></b-form-select>
    </b-col>
    </b-row>
    <b-row>
      <b-col class="wb-container" cols="3">
        <label>TREASURY:</label>
        <p>Gold Crowns: {{ startGold }}</p>
        <p>Wyrdstone Shards:</p>
        <input/>
      </b-col>
         <b-col class="wb-container" cols="3">
      <label>WARBAND RATING:</label>
      <p>Total Experience: <input /></p>
      <p>Memebers ( ) x 5: <input /></p>
      <p>Rating: <input /></p>
    </b-col>
      <b-col class="wb-container" cols="6">
      <label>STORED EQUIPMENT:</label>
    </b-col>
    </b-row>
    <b-row v-if="userSelect">
      <h2 class="h-title">{{heroType}}</h2>
    </b-row>
    <HeroCard v-if="userSelect"/>
  </b-container>
</template>

<script>
import warBands from './data/warbands.json';
import HeroCard from './components/hero-card.vue';


export default {
  name: 'App',
  data() {
    return {
      title: '',
      userSelect: '',
      warBands,
      startGold: 0,
      heroType: 'Heroes',
    }
  },
  components: {
    HeroCard,
  },
  methods: {
    startCharacter() {
      let data = this.warBands.warbands;
      data.filter(item => {
        if ( item.name === this.userSelect) {
          this.startGold = item.startGold;
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
