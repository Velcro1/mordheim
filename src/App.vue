<template>
  <b-container id="app">
    <h1 class="h-title">{{getChosenWb ? getChosenWb : placeHolder}}</h1>
    <b-row align-h="between">
      <b-col class="wb-container wb-name mb-3" cols="12" md="7">
        <label>WARBAND NAME:</label>
        <input type="text" v-model="wbName" v-on:keyup.enter="addWbName(wbName)">
    </b-col>
      <b-col class="wb-container wb-type mb-3" cols="12" md="4">
        <label>WARBAND TYPE:</label>
        <button
          type="button"
          class="addHeroBtn"
          @click="toggleWbModal"
          v-if="!getChosenWb"
          >
          Pick Warband
        </button>
        <span>{{getChosenWb}}</span>
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
        <p>Members ( {{ getTotalMembers }} ) x 5: {{ getWbMembersRating }}</p>
        <p>Rating: {{ getWbRating }}</p>
    </b-col>
      <b-col class="wb-container wb-equip mb-3" cols="12" md="6">
      <label>STORED EQUIPMENT:</label>
    </b-col>
    </b-row>
    <b-row v-if="getChosenWb">
      <b-col>
        <!-- This button activates the Hero Modal -->
        <button @click="toggleHeroModal();">Add Hero</button>
        <!-- This button activates the Henchmen Modal -->
        <!-- <button>Add Henchmen</button> -->
        <HeroModal v-show="getHeroModalState" />
        <h2 class="h-title">{{heroesTitle}}</h2>
      </b-col>
    </b-row>
    <HeroCard v-for="hero in getChosenHeroes" :key="hero.id" :hero="hero"/>
    <!-- <b-row v-if="getChosenWb">
      <b-col>
        <h2 class="h-title">{{henchmanTitle}}</h2>
      </b-col>
    </b-row>
    <HenchmenCard v-for="henchman in getChosenHenchman" :key="henchman.id" :hero="henchman"/> -->
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HeroCard from './components/hero-card.vue';
import WbModal from './components/wbModal.vue';
import HeroModal from './components/heroModal.vue';

export default {
    name: 'App',
    data() {
        return {
            placeHolder: 'Warband Name',
            heroesTitle: 'Heroes',
            henchmanTitle: 'Henchmen',
            wbName: '',
        };
    },

    components: {
        HeroCard,
        WbModal,
        HeroModal,
    },
    computed: {
        ...mapGetters([
            'getModalState',
            'getChosenWb',
            'getStartGold',
            'getChosenHeroes',
            'getHeroModalState',
            'getTotalMembers',
            'getWbRating',
            'getWbMembersRating',
            'getTotalExp',
        ]),

    },
    methods: {
        ...mapActions(['toggleWbModal', 'toggleHeroModal', 'addWbName']),
    },
};
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
