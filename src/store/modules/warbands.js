import axios from 'axios';

const state = {
    warbands: [],
    wbName: '',
    totalMembers: 0,
    wbRating: 0,
    wbMembersRating: 0,
    totalExp: 0,
    isWbModalVisible: false,
    isHeroVisable: false,
    isEquipmentVisable: false,
    chosenWb: '',
    choseWbData: {},
    startGold: 0,
    heroes: {},
    chosenHeroes: [],
    availableHeroes: [],
    heroLimit: 0,
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
    getModalState: (state) => state.isWbModalVisible,
    getChosenWb: (state) => state.chosenWb,
    getStartGold: (state) => state.startGold,
    getChosenHeroes: (state) => state.chosenHeroes,
    getHeroModalState: (state) => state.isHeroVisable,
    getEquipmentModalState: (state) => state.isEquipmentVisable,
    getHeroes: (state) => state.heroes,
    getTotalMembers: (state) => state.totalMembers,
    getWbRating: (state) => state.wbRating,
    getWbMembersRating: (state) => state.wbMembersRating,
    getTotalExp: (state) => state.totalExp,
    getAvailableHeroes: (state) => state.availableHeroes,
};

const actions = {
    addWbName({ commit }, wbName) {
        commit('setWbName', wbName);
    },
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
        const updateModal = !state.isWbModalVisible;
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
    updateHeroLimit({ commit }) {
        let theLimit = 0;
        for (let i = 0; i < state.availableHeroes.length; i += 1) {
            theLimit += state.availableHeroes[i].limit;
        }
        commit('setHeroLimit', theLimit);
    },
    updateLimit({ commit }, hero) {
        for (let i = 0; i < state.heroes.length; i += 1) {
            if (hero.type === state.heroes[i].type) {
                commit('setUpdateLimit', state.heroes[i]);
            }
        }
    },
    filterHeroes({ commit }) {
        for (let i = 0; i < state.heroes.length; i += 1) {
            if (state.heroes[i].limit !== 0) {
                commit('setAvailableHeroes', state.heroes[i]);
            }
        }
    },
    async addCharacter({ commit, dispatch }, hero) {
        commit('resetHeroes');
        commit('setTotalMembers');
        commit('setTotalExp', hero.startExp);
        commit('setWbMembersRating');
        commit('setWbRating');
        commit('setCharacter', hero);
        commit('setGold', hero.cost);
        await dispatch('updateLimit', hero);
        await dispatch('filterHeroes');
    },
    async removeCharacter({ commit, dispatch }, hero) {
        commit('updateGold', hero.cost);
        commit('updateTotalExp', hero.startExp);
        commit('updateTotalMembers');
        commit('setWbMembersRating');
        await dispatch('updateLimit', hero);
        await dispatch('filterHeroes');
    },
    chosenWb({ commit, dispatch }, name) {
        dispatch('toggleWbModal');
        // eslint-disable-next-line array-callback-return
        state.warbands.filter(async (chosenWb) => {
            if (chosenWb.name === name) {
                commit('setChosenWb', chosenWb.name);
                commit('setChosenWbData', chosenWb);
                commit('setStartGold', chosenWb.startGold);
                commit('setHeroes', chosenWb.heroes);
                await dispatch('addCharacter', chosenWb.heroes[0]);
                await dispatch('updateHeroLimit');
            }
        });
    },
};

const mutations = {
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWbName: (state, wbs) => (state.wbName = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setAllWarbands: (state, wbs) => (state.warbands = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWeapons: (state, wbs) => (state.weapons = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setArmour: (state, wbs) => (state.armour = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setEquipment: (state, wbs) => (state.equipment = wbs),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setModal: (state, updateModal) => (state.isWbModalVisible = updateModal),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setChosenWb: (state, name) => (state.chosenWb = name),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setChosenWbData: (state, data) => (state.choseWbData = data),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setStartGold: (state, gold) => (state.startGold = gold),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setHeroes: (state, heroes) => (state.heroes = heroes),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setCharacter: (state, character) => (state.chosenHeroes.push(character)),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setHeroModal: (state, updateHeroModal) => (state.isHeroVisable = updateHeroModal),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setTotalMembers: (state) => (state.totalMembers += 1),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWbMembersRating: (state) => (state.wbMembersRating = state.totalMembers * 5),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setWbRating: (state) => (state.wbRating = state.wbMembersRating + state.totalExp),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setTotalExp: (state, startExp) => (state.totalExp += startExp),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setGold: (state, amount) => (state.startGold -= amount),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setAvailableHeroes: (state, hero) => state.availableHeroes.push(hero),
    // eslint-disable-next-line no-param-reassign, no-return-assign, radix
    setUpdateLimit: (_state, hero) => (hero.limit = parseInt(hero.limit) - 1),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    resetHeroes: (state) => (state.availableHeroes = []),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setHeroLimit: (state, theLimit) => (state.heroLimit = theLimit),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    setEquipmentModal: (state, updateEquipmentModal) => (state.isEquipmentVisable = updateEquipmentModal),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    updateGold: (state, cost) => (state.startGold += cost),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    updateTotalExp: (state, startExp) => (state.totalExp -= startExp),
    // eslint-disable-next-line no-param-reassign, no-return-assign
    updateTotalMembers: (state) => (state.totalMembers -= 1),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
