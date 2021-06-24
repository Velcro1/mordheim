<template>
  <b-container id="app">
    <h1 class="h-title">{{getChosenWb ? getChosenWb : placeHolder}}</h1>
    <b-row align-h="between">
      <b-col class="wb-container wb-name mb-3" cols="12" md="7">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="getWbName">
    </b-col>
      <b-col class="wb-container wb-type mb-3" cols="12" md="4">
        <label>WARBAND TYPE:</label>
        <!-- This button activates the Warband Modal -->
        <button
          type="button"
          class="addHeroBtn"
          @click="toggleWbModal"
          v-if="!getChosenWb"
          >
          Pick Warband
        </button>
        <span>{{getChosenWb}}</span>
        <!-- This modal takes the warbands object and listens for the chosen warband and calls the startCharacter method-->
        <WbModal v-show="getModalState" />
    </b-col>
    </b-row>
    <b-row align-h="between">
      <b-col class="wb-container wb-treasury mb-3" cols="12" md="3">
        <label>TREASURY:</label>
        <p>Gold Crowns: {{ getStartGold }}</p>
        <p>Wyrdstone Shards:</p>
      </b-col>
      <b-col class="wb-container wb-rating mb-3" cols="12" md="3">
        <label>WARBAND RATING:</label>
        <p>Total Experience: {{ getTotalExp }}</p>
        <p>Members ( {{ getTotalMembers }} ) x 5: {{ getWbRating }}</p>
        <p>Rating: {{ getTotalExp + getWbRating }}</p>
    </b-col>
      <b-col class="wb-container wb-equip mb-3" cols="12" md="6">
      <label>STORED EQUIPMENT:</label>
    </b-col>
    </b-row>
    <b-row v-if="getChosenWb">
      <b-col>
        <!-- This button activates the Hero Modal -->
        <button @click="toggleHeroModal">Add Hero</button>
        <!-- This button activates the Henchmen Modal -->
        <button>Add Henchmen</button>
        <HeroModal v-show="getHeroModalState" />
        <h2 class="h-title">{{heroesTitle}}</h2>
        <div>{{getCharArr}}</div>
      </b-col>
    </b-row>
    <HeroCard v-for="hero in getCharArr" :key="hero.id" :hero="hero"/>
  </b-container>
</template>

<script>
import HeroCard from './components/hero-card.vue';
import WbModal from './components/wbModal';
import HeroModal from './components/heroModal';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      placeHolder: 'Warband Name',
      heroesTitle: 'Heroes',
      henchmanTitle: 'Henchmen',
    }
  },
  components: {
    HeroCard,
    WbModal,
    HeroModal,
  },
  computed: {
    ...mapGetters([
      'getAllWarbands',
      'getModalState',
      'getChosenWb',
      'getStartGold',
      'getWbName',
      'getCharArr',
      'getHeroModalState',
      'getTotalMembers',
      'getWbRating',
      'getTotalExp',
    ]),

  },
  methods: {
    ...mapActions(['toggleWbModal','toggleHeroModal']),
  }
}
</script>

<style lang="scss">
@import '@/design/index.scss';
.addHeroBtn {
  border-radius: 5px;
  border: 1px solid green;
  background-color: #1e7331;
  color: #dcff8c;
  box-shadow: #ADFF2F 2px 2px 12px;
  position: relative;
  z-index: 5;
}
@media (min-width: 768px){
  .wb-name.col-md-7 {
    width: 60%;
  }
  .wb-type.col-md-4{
    width: 38%;
  }
  .wb-treasury.col-md-3,
  .wb-rating.col-md-3{
    width: 23%;
  }
}
</style>
