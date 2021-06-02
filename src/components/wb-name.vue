<template>
    <div class="wb-container col-md-6">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="title" @input="updateTitle"/>
    </div>
</template>

<script>
export default {
  name: 'wb-name',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    updateTitle(){
      this.$emit('update-title', this.title);
    }
  }
}
</script>

