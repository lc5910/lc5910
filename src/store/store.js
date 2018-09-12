import Vue from 'vue'
import { default as Vuex, mapState, mapActions } from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('app', {
    state: {
        isLoading: true,
    },
    mutations: {
        updateLoading(state, isLoading) {
            if (isLoading) {
                console.log('loading...');
            } else {
                console.log('loaded');
            }
            state.isLoading = isLoading;
        },
    },
    actions: {
        updateLoading({ commit }, isLoading) {
            commit('updateLoading',isLoading);
        },
    },
})

Vue.mixin({
    methods: {
        ...mapActions([
            'updateLoading',
        ])
    },
    computed: {
        ...mapState({
            isLoading: state => state.app.isLoading,
        })
    }
})
export default store