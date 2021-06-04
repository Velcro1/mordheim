<template>
  <b-container id="app">
    <h1 class="h-title">{{wbType ? wbType : placeHolder}}</h1>
    <b-row align-h="between">
      <b-col class="wb-container wb-name mb-3" cols="12" md="7">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="wbName">
    </b-col>
      <b-col class="wb-container wb-type mb-3" cols="12" md="4">
        <label>WARBAND TYPE:</label>
        <b-form-select v-model="wbType" :options="warBands.warbands" value-field="name" text-field="name" @change="startCharacter"></b-form-select>
    </b-col>
    </b-row>
    <b-row align-h="between">
      <b-col class="wb-container wb-treasury mb-3" cols="12" md="3">
        <label>TREASURY:</label>
        <p>Gold Crowns: {{ startGold }}</p>
        <p>Wyrdstone Shards:</p>
      </b-col>
      <b-col class="wb-container wb-rating mb-3" cols="12" md="3">
        <label>WARBAND RATING:</label>
        <p>Total Experience: {{ totalExp }}</p>
        <p>Members ( {{ totalMembers }} ) x 5: {{ membersRating }}</p>
        <p>Rating: {{ totalExp + membersRating }}</p>
    </b-col>
      <b-col class="wb-container wb-equip mb-3" cols="12" md="6">
      <label>STORED EQUIPMENT:</label>
    </b-col>
    </b-row>
    <b-row v-if="wbType">
      <h2 class="h-title">{{heroesTitle}}</h2>
    </b-row>
    <HeroCard v-if="leader" :hero="hero"/>
  </b-container>
</template>

<script>
import warBands from './data/warbands.json';
import HeroCard from './components/hero-card.vue';


export default {
  name: 'App',
  data() {
    return {
      warBands,
      wbName: '',
      wbType: '',
      heroType: '',
      placeHolder: 'Warband Name',
      heroesTitle: 'Heroes',
      henchmanTitle: 'Henchmen',
      startGold: 0,
      totalMembers: 0,
      membersRating: 0,
      totalExp: 0,
      hero: '',
      leader: false,
    }
  },
  components: {
    HeroCard,
  },
  computed: {
  },
  methods: {
    startCharacter() {
      let data = this.warBands.warbands;
      data.filter(item => {
        if ( item.name === this.wbType) {
          this.startGold = item.startGold - item.leader.cost;
          this.leader = true;
          this.totalMembers++;
          this.membersRating = this.totalMembers * 5;
          this.hero = item.leader;
          this.totalExp = item.leader.startExp;
        }
      })
      console.log(this.warBands.warbands[6].heroes);
    },
    addHero() {
      let data = this.warBands.warbands;
      data.filter(item => {
        if ( item.name === this.wbType) {
         console.log("jhfd");
        }
      })
    },
  }
}
</script>

<style lang="scss">
@import '@/design/index.scss';

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
