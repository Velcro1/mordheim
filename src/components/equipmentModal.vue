<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <button type="button" class="btn-close" @click="toggleEquipmentModal">
          x
        </button>

        <section class="modal-body">
          <div>
          <ul>
            <li v-for="weap in getWeapons" :key="weap.id">
              <button
                @click="
                  addEquipment(hero);
                  toggleEquipmentModal();
                "
              >
                {{ weap.name }}
              </button>
            </li>
          </ul>
          </div>
          <div>
          <ul>
            <li v-for="arm in getArmour" :key="arm.id">
              <button
                @click="
                  addEquipment(hero);
                  toggleEquipmentModal();
                "
              >
                {{ arm.name }}
              </button>
            </li>
          </ul>
          </div>
          <div>
          <ul>
            <li v-for="equip in getEquipment" :key="equip.id">
              <button
                @click="
                  addEquipment(hero);
                  toggleEquipmentModal();
                "
              >
                {{ equip.name }}
              </button>
            </li>
          </ul>
          </div>
        </section>

        <button type="button" class="btn-green" @click="toggleEquipmentModal">
          Close Modal
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'EquipmentModal',
    methods: {
        ...mapActions(['populateEquipment', 'toggleEquipmentModal', 'addEquipment']),
    },
    created() {
        this.populateEquipment();
    },
    computed: {
        ...mapGetters(['getWeapons', 'getArmour', 'getEquipment']),
    },
};
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
  background-color: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 50%;
  margin: 10% 12%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
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
  display: flex;
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
  color: #4aae9b;
  background: transparent;
  z-index: 99;
  line-height: 5px;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
