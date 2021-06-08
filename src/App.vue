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
      <b-col>
      <h2 class="h-title">{{heroesTitle}}</h2>
         <button
          type="button"
          class="addHeroBtn"
          @click="showModal"
          >
          Add Hero
        </button>
        <MemberModal
          v-show="isModalVisible"
          @close="closeModal"
        />
      </b-col>
    </b-row>
    <HeroCard v-if="leader" :hero="hero"/>
  </b-container>
</template>

<script>
import warBands from './data/warbands.json';
import HeroCard from './components/hero-card.vue';
import MemberModal from './components/memberModal'


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
      isModalVisible: false,
    }
  },
  components: {
    HeroCard,
    MemberModal,
  },
  computed: {
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    startCharacter() {
      let wbs = this.warBands.warbands;
      wbs.filter(wb => {
        if ( wb.name === this.wbType) {
          this.startGold = wb.startGold - wb.heroes[0].cost;
          this.leader = true;
          this.totalMembers++;
          this.membersRating = this.totalMembers * 5;
          this.hero = wb.heroes[0];
          this.totalExp = wb.heroes[0].startExp;
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
