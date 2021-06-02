<template>
  <div id="app" class="container">
    <h1>Warband</h1>
    <div class="row">
      <WbName />
      <WbType />
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

export default {
  name: 'App',
  components: {
    WbName,
    WbType,
    WbTreasury,
    WbRating,
    WbEquipment,

  }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
