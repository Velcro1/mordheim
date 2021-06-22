import axios from "axios";

const state = {
    warbands: [],
    isModalVisible: false,
    chosenWb: '',
    choseWbData: {},
    startGold: 0,
};

const getters = {
    getAllWarbands: state => state.warbands,
    getModalState: state => state.isModalVisible,
    getChosenWb: state => state.chosenWb,
    getStartGold: state => state.startGold,
};

const actions = {
    async populateWarbands({ commit }){
        const response = await axios.get('warbands.json');
        commit('setAllWarbands', response.data.warbands);
    },
    toggleModal({ commit }) {
        const updateModal = !state.isModalVisible;
        commit('setModal', updateModal);
    },
    chosenWb({ commit, dispatch }, name){
        dispatch('toggleModal');
        state.warbands.filter( chosenWb => {
            if ( chosenWb.name === name ) {
                commit('setChosenWb', chosenWb.name);
                commit('setChosenWbData', chosenWb)
                commit('setStartGold', chosenWb.startGold);
            }
        })
    }
    
};

const mutations = {
    setAllWarbands: (state, wbs) => (state.warbands = wbs),
    setModal: (state, updateModal) => (state.isModalVisible = updateModal),
    setChosenWb: (state, name) => (state.chosenWb = name),
    setChosenWbData: (state, data) => (state.choseWbData = data),
    setStartGold: (state, gold) => (state.startGold = gold),
};

export default {
    state,
    getters,
    actions,
    mutations
}