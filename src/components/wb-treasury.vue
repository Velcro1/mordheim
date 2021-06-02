<template>
    <div class="wb-container col-md-3">
      <label>TREASURY:</label>
      <p>Gold Crowns: {{crowns}}</p>
      <p>Wyrdstone Shards:</p>
      <input/>
    </div>
</template>

<script>
export default {
  name: 'wb-treasury',
  data() {
    return {
      crowns: 0,
    }
  },
  methods: {
    updateCrowns(){
      
    }
  },
}
</script>
