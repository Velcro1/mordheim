<template>
<b-row>
    <b-col class="wb-container">
        <div class="grid-container">
            <div class="Cell-4">Experience</div>
            <div class="Cell-1">
                <div class="row-1">Name</div>
                <div class="row-2">Type</div>
                <div class="row-3">Stats</div>
            </div>
            <div class="Cell-2">EQUIPMENT</div>
            <div class="Cell-3">Sklls</div>
        </div>
    </b-col>
</b-row>
</template>

<script>
    export default {
        name: 'HeroCard',
    }
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Cell-1 Cell-2 Cell-3"
    "Cell-4 Cell-4 Cell-4";
}
.Cell-4 { grid-area: Cell-4; }
.Cell-1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "row-1"
    "row-2"
    "row-3";
  grid-area: Cell-1;
}
.row-1 { grid-area: row-1; }
.row-2 { grid-area: row-2; }
.row-3 { grid-area: row-3; }
.Cell-2 { grid-area: Cell-2; }
.Cell-3 { grid-area: Cell-3; }
</style>