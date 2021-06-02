<template>
  <WbName/>
  <WbType/>
  <WbTreasury/>
  <WbRating/>
  <WbEquipment/>
</template>

<script>
import WbName from './components/wb-name'
import WbType from './components/wb-type'
import WbTreasury from './components/wb-treasury'
import WbRating from './components/wb-rating'
import WbEquipment from './components/wb-equipment'

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
