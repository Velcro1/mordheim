import axios from 'axios';

const state = {
    warbands: [],
    wbName: '',
    totalMembers: 0,
    wbRating: 0,
    totalExp: 0,
    isModalVisible: false,
    isHeroVisable: false,
    isEquipmentVisable: false,
    chosenWb: '',
    choseWbData: {},
    startGold: 0,
    heroes: {},
    chosenHeroes: [],
    availableHeroes: [],
    equipment: [],
    weapons: [],
    armour: [],
};

const getters = {
    getAllWarbands: (state) => state.warbands,
    getWeapons: (state) => state.weapons,
    getArmour: (state) => state.armour,
    getEquipment: (state) => state.equipment,
    getWbName: (state) => state.wbName,
    getModalState: (state) => state.isModalVisible,
    getChosenWb: (state) => state.chosenWb,
    getStartGold: (state) => state.startGold,
    getChosenHeroes: (state) => state.chosenHeroes,
    getHeroModalState: (state) => state.isHeroVisable,
    getEquipmentModalState: (state) => state.isEquipmentVisable,
    getHeroes: (state) => state.heroes,
    getTotalMembers: (state) => state.totalMembers,
    getWbRating: (state) => state.wbRating,
    getTotalExp: (state) => state.totalExp,
    getAvailableHeroes: (state) => state.availableHeroes,
};

const actions = {
    async populateWarbands({ commit }) {
        const response = await axios.get('warbands.json');
        commit('setAllWarbands', response.data.warbands);
    },
    async populateEquipment({ commit }) {
        const response = await axios.get('equipment.json');
        commit('setWeapons', response.data.weapons);
        commit('setArmour', response.data.armour);
        commit('setEquipment', response.data.equipment);
    },
    toggleWbModal({ commit }) {
        const updateModal = !state.isModalVisible;
        commit('setModal', updateModal);
    },
    toggleHeroModal({ commit }) {
        const updateHeroModal = !state.isHeroVisable;
        commit('setHeroModal', updateHeroModal);
    },
    toggleEquipmentModal({ commit }) {
        const updateEquipmentModal = !state.isEquipmentVisable;
        commit('setEquipmentModal', updateEquipmentModal);
    },
    filterHeroes({ commit }) {
        for (let i = 0; i < state.heroes.length; i += 1) {
            if (state.heroes[i].limit !== 0) {
                commit('setAvailableHeroes', state.heroes[i]);
            }
        }
    },
    updateLimit({ commit }, hero) {
        for (let i = 0; i < state.heroes.length; i += 1) {
            if (hero.type === state.heroes[i].type) {
                commit('setUpdateLimit', state.heroes[i]);
            }
        }
    },
    async addCharacter({ commit, dispatch }, hero) {
        commit('resetHeroes');
        commit('setTotalMembers');
        commit('setWbRating');
        commit('setTotalExp', hero.startExp);
        commit('setCharacter', hero);
        commit('setGold', hero.cost);
        await dispatch('updateLimit', hero);
        await dispatch('filterHeroes');
    },
    chosenWb({ commit, dispatch }, name) {
        dispatch('toggleWbModal');
        // eslint-disable-next-line array-callback-return
        state.warbands.filter((chosenWb) => {
            if (chosenWb.name === name) {
                commit('setChosenWb', chosenWb.name);
                commit('setChosenWbData', chosenWb);
                commit('setStartGold', chosenWb.startGold);
                commit('setHeroes', chosenWb.heroes);
                dispatch('addCharacter', chosenWb.heroes[0]);
            }
        });
    },
};

const mutations = {
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setAllWarbands: (state, wbs) => (state.warbands = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWeapons: (state, wbs) => (state.weapons = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setArmour: (state, wbs) => (state.armour = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setEquipment: (state, wbs) => (state.equipment = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setModal: (state, updateModal) => (state.isModalVisible = updateModal),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setChosenWb: (state, name) => (state.chosenWb = name),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setChosenWbData: (state, data) => (state.choseWbData = data),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setStartGold: (state, gold) => (state.startGold = gold),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setHeroes: (state, heroes) => (state.heroes = heroes),
    setCharacter: (state, character) => (state.chosenHeroes.push(character)),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setHeroModal: (state, updateHeroModal) => (state.isHeroVisable = updateHeroModal),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setTotalMembers: (state) => (state.totalMembers += 1),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWbRating: (state) => (state.wbRating = state.totalMembers * 5),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setTotalExp: (state, startExp) => (state.totalExp += startExp),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setGold: (state, amount) => (state.startGold -= amount),
    setAvailableHeroes: (state, hero) => state.availableHeroes.push(hero),
    // eslint-disable-next-line no-param-reassign, no-return-assign, radix
    setUpdateLimit: (_state, hero) => (hero.limit = parseInt(hero.limit) - 1),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    resetHeroes: (state) => (state.availableHeroes = []),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setEquipmentModal: (state, updateEquipmentModal) => (state.isEquipmentVisable = updateEquipmentModal),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
