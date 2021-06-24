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
    charArr: [],
};

const getters = {
    getAllWarbands: state => state.warbands,
    getWbName: state => state.wbName,
    getModalState: state => state.isModalVisible,
    getChosenWb: state => state.chosenWb,
    getStartGold: state => state.startGold,
    getCharArr: state => state.charArr,
    getHeroModalState: state => state.isHeroVisable,
    getHeroes: state => state.heroes,
    getTotalMembers: state => state.totalMembers,
    getWbRating: state => state.wbRating,
    getTotalExp: state => state.totalExp,
};

const actions = {
    async populateWarbands({ commit }){
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
    addCharacter({ commit }, type){
        commit('setTotalMembers');
        commit('setWbRating');
        commit('setTotalExp', type.startExp);
        commit('setCharacter', type);
    },
    chosenWb({ commit, dispatch }, name){
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
    setCharacter: (state, character) => (state.charArr.push(character)),
    setHeroModal: (state, updateHeroModal) => (state.isHeroVisable = updateHeroModal),
    setTotalMembers: (state) => (state.totalMembers += 1),
    setWbRating: (state) => (state.wbRating = state.totalMembers * 5),
    setTotalExp: (state, startExp) => (state.totalExp += startExp),
};

export default {
    state,
    getters,
    actions,
    mutations
}