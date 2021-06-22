<template>
  <b-container id="app">
    <h1 class="h-title">{{getChosenWb ? getChosenWb : placeHolder}}</h1>
    <b-row align-h="between">
      <b-col class="wb-container wb-name mb-3" cols="12" md="7">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="wbName">
    </b-col>
      <b-col class="wb-container wb-type mb-3" cols="12" md="4">
        <label>WARBAND TYPE:</label>
        <!-- This button activates the Warband Modal -->
        <button
          type="button"
          class="addHeroBtn"
          @click="toggleModal"
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
        <p>Total Experience: {{ totalExp }}</p>
        <p>Members ( {{ totalMembers }} ) x 5: {{ wbRating }}</p>
        <p>Rating: {{ totalExp + wbRating }}</p>
    </b-col>
      <b-col class="wb-container wb-equip mb-3" cols="12" md="6">
      <label>STORED EQUIPMENT:</label>
    </b-col>
    </b-row>
    <b-row v-if="getChosenWb">
      <b-col>
        <!-- This button activates the Hero Modal -->
        <button @click="showHeroModal">Add Hero</button>
           <!-- This button activates the Henchmen Modal -->
        <button>Add Henchmen</button>
         <!-- This modal takes a heroes object and listens for the chosen hero and calls the addCharacter method -->
        <HeroModal
          v-show="this.isModalVisible"
          @close="closeWbModal"
          :heroesObj="heroesObj"
          v-on:chosenHero="addCharacter($event)"
        />
        <h2 class="h-title">{{heroesTitle}}</h2>
      </b-col>
    </b-row>
    <!-- <HeroCard v-if="ready" :hero="hero"/> -->
    <HeroCard v-for="hero in heroCardArr" :key="hero.id" :hero="hero"/>
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
      heroType: '',
      placeHolder: 'Warband Name',
      heroesTitle: 'Heroes',
      henchmanTitle: 'Henchmen',
      totalMembers: 0,
      wbRating: 0,
      totalExp: 0,
      heroesObj: {},
      heroesArr: [],
      hero: {},
      ready: false,
      heroCardArr: [],
      limit: 0,
    }
  },
  components: {
    HeroCard,
    WbModal,
    HeroModal,
  },
  computed: {
    ...mapGetters(['getAllWarbands', 'getModalState', 'getChosenWb', 'getStartGold']),
  },
  methods: {
    ...mapActions(['toggleModal']),

    // startWarBand(wbtype) {
    //   let allWbs = this.allWarBands.warbands;
    //   allWbs.filter( chosenWb => {
    //     if ( chosenWb.name === wbtype ) {
    //       this.chosenWbType = wbtype; 
    //       this.chosenWb = chosenWb;
    //       this.heroesObj = Object.assign({}, chosenWb.heroes);
    //       this.heroesArr = chosenWb.heroes;
    //       this.addCharacter(chosenWb.heroes[0].type);
    //     }
    //   })
    // },
    // addCharacter(heroType) {
    //   let allHeroes = this.heroesArr;
    //   allHeroes.filter( chosenHero => {
    //     if ( chosenHero.type === heroType ) { 
    //       this.ready = true; 
    //       this.totalMembers++;
    //       this.wbRating = this.totalMembers * 5;
    //       this.totalExp += chosenHero.startExp;
    //       this.startGold = this.startGold - chosenHero.cost;
    //       this.hero = chosenHero;
    //       this.limit = chosenHero.limit;
    //       this.currentLimit = this.limit - 1;
    //     }
    //   })
    //   this.heroCardArr.push(this.hero);
    // },
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
