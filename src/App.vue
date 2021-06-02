<template>
  <div id="app" class="container">
    <h1 class="h-title">{{title}}</h1>
    <div class="row">
      <WbName @update-title="writeTitle" :newTitle="title" />
      <WbType @selected-band="selectedBand" />
    </div>
    <div class="row">
      <WbTreasury />
      <WbRating />
      <WbEquipment />
    </div>
  </div>
</template>

<script>
import WbName from './components/wb-name.vue';
import WbType from './components/wb-type';
import WbTreasury from './components/wb-treasury';
import WbRating from './components/wb-rating';
import WbEquipment from './components/wb-equipment';
import warBands from './data/warbands.json';

export default {
  name: 'App',
  data() {
    return {
      newTitle: '',
      title: '',
      warBands,
      selected: '',
      selectedWarBand: '',
    }
  },
  components: {
    WbName,
    WbType,
    WbTreasury,
    WbRating,
    WbEquipment,
  },
  methods: {
    writeTitle(newTitle){
      this.title = newTitle;
    },
    selectedBand(selected){
      this.selectedWarBand = selected;
    }
  }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
