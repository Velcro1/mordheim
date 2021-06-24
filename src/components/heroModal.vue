<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <button
          type="button"
          class="btn-close"
          @click="toggleHeroModal"
        >
          x
        </button>

      <section class="modal-body">
          <ul>
            <li v-for="hero in availableHeroes" :key="hero.id">
              <button @click="addCharacter(hero); toggleHeroModal(); getCharArr();">{{hero.type}}</button>
            </li>
          </ul>
       </section>

        <button
          type="button"
          class="btn-green"
          @click="toggleHeroModal"
        >
          Close Modal
        </button>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'heroModal',
    data() {
      return{
        availableHeroes: [],
        characterLimit: [],
      }
    },
    computed: {
      ...mapGetters(['getHeroes','getCharArr']),
    },
    methods: {
      ...mapActions(['toggleHeroModal', 'addCharacter']),
      filterCharacter() {
        this.getCharArr.forEach(character => {this.characterLimit[character.type] = (this.characterLimit[character.id] || 0) + 1});
          console.log(this.characterLimit);
        return this.getHeroes.filter((character) => {
          if ( character.limit >= 1) {
            this.availableHeroes.push(character)
            console.log("hello");
          }
        });
 
      },
    },
    created() {
      this.filterCharacter();
    },
}
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  .modal {
    background-color: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    margin: 10% 25%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    z-index: 99;
    line-height: 5px;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>