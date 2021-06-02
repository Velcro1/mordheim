<template>
    <div class="wb-container col-md-5">
        <label>WARBAND TYPE:</label>
        <b-form-select v-model="selected" v-bind:options="options" @change="selectedBand"></b-form-select>
    </div>
</template>

<script>
export default {
  name: 'wb-type',
  data() {
      return {
        selected: null,
        options: [
          { value: null, text: '' },
          { value: 'undead', text: 'Undead' },
          { value: 'skaven', text: 'Skaven' },
          { value: 'sisters-of-sigmar', text: 'Sisters of Sigmar' },
          { value: 'witch-hunters', text: 'Witch Hunters' },
        ]
      }
  },
  methods: {
    selectedBand() {
       this.$emit('selected-band', this.selected);
    }
  }
}
</script>
