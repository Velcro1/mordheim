import axios from "axios";

const state = {
    warbands: [],
    wbName: '',
    totalMembers: 0,
    wbRating: 0,
    totalExp: 0,
    isModalVisible: false,
    isHeroVisable: false,
    chosenWb: '',
    choseWbData: {},
    startGold: 0,
    heroes: {},
    chosenHeroes: [],
    availableHeroes: [],
};

const getters = {
    getAllWarbands: state => state.warbands,
    getWbName: state => state.wbName,
    getModalState: state => state.isModalVisible,
    getChosenWb: state => state.chosenWb,
    getStartGold: state => state.startGold,
    getChosenHeroes: state => state.chosenHeroes,
    getHeroModalState: state => state.isHeroVisable,
    getHeroes: state => state.heroes,
    getTotalMembers: state => state.totalMembers,
    getWbRating: state => state.wbRating,
    getTotalExp: state => state.totalExp,
    getAvailableHeroes: state => state.availableHeroes,
};

const actions = {
    async populateWarbands({ commit }) {
        const response = await axios.get('warbands.json');
        commit('setAllWarbands', response.data.warbands);
    },
    toggleWbModal({ commit }) {
        const updateModal = !state.isModalVisible;
        commit('setModal', updateModal);
    },
    toggleHeroModal({ commit }) {
        const updateHeroModal = !state.isHeroVisable;
        commit('setHeroModal', updateHeroModal);
    },
    filterHeroes({ commit }) {
        for (let i = 0; i < state.heroes.length; i++) {
            if (state.heroes[i].limit !== 0) {
                commit('setAvailableHeroes', state.heroes[i]);
            }
        }
    },
    updateLimit({ commit }, hero) {
        for (let i = 0; i < state.heroes.length; i++) {
            if (hero.type === state.heroes[i].type ) {
                commit('setUpdateLimit', state.heroes[i])
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
        state.warbands.filter( chosenWb => {
            if ( chosenWb.name === name ) {
                commit('setChosenWb', chosenWb.name);
                commit('setChosenWbData', chosenWb);
                commit('setStartGold', chosenWb.startGold);
                commit('setHeroes', chosenWb.heroes);
                dispatch('addCharacter', chosenWb.heroes[0]);
            }
        })
    },
};

const mutations = {
    setAllWarbands: (state, wbs) => (state.warbands = wbs),
    setModal: (state, updateModal) => (state.isModalVisible = updateModal),
    setChosenWb: (state, name) => (state.chosenWb = name),
    setChosenWbData: (state, data) => (state.choseWbData = data),
    setStartGold: (state, gold) => (state.startGold = gold),
    setHeroes: (state, heroes) => (state.heroes = heroes),
    setCharacter: (state, character) => (state.chosenHeroes.push(character)),
    setHeroModal: (state, updateHeroModal) => (state.isHeroVisable = updateHeroModal),
    setTotalMembers: (state) => (state.totalMembers += 1),
    setWbRating: (state) => (state.wbRating = state.totalMembers * 5),
    setTotalExp: (state, startExp) => (state.totalExp += startExp),
    setGold: (state, amount) => (state.startGold -= amount),
    setAvailableHeroes: (state, hero) => state.availableHeroes.push(hero),
    setUpdateLimit: (state, hero) => (hero.limit = parseInt(hero.limit) - 1),
    resetHeroes: (state) => (state.availableHeroes = []),
};

export default {
    state,
    getters,
    actions,
    mutations
}




