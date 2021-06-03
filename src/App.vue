<template>
  <div id="app" class="container">
    <h1 class="h-title">{{userSelect}}</h1>
    <div class="row">
      <div class="wb-container col-md-6">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="title">
    </div>
      <div class="wb-container col-md-5">
        <label>WARBAND TYPE:</label>
        <b-form-select v-model="userSelect" :options="warBands.warbands" value-field="name" text-field="name" @change="startCharacter"></b-form-select>
    </div>
    </div>
    <div class="row">
         <div class="wb-container col-md-3">
      <label>TREASURY:</label>
      <p>Gold Crowns:{{ startGold }}</p>
      <p>Wyrdstone Shards:</p>
      <input/>
    </div>
         <div class="wb-container col-md-3">
      <label>WARBAND RATING:</label>
      <p>Total Experience: <input /></p>
      <p>Memebers ( ) x 5: <input /></p>
      <p>Rating: <input /></p>
    </div>
      <div class="wb-container col-md-5">
      <label>STORED EQUIPMENT:</label>
      <textarea />
    </div>
    </div>
  </div>
</template>

<script>
import warBands from './data/warbands.json';


export default {
  name: 'App',
  data() {
    return {
      title: '',
      userSelect: '',
      warBands,
      startGold: 0,
    }
  },
  components: {

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
