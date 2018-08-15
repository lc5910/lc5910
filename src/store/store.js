import Vue from 'vue'
import { default as Vuex, mapState, mapActions } from 'vuex'
import { Loading } from 'element-ui'; 

Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('app', {
    state: {
        isLoading: true,
    },
    mutations: {
        updateLoading(state, isLoading) {
            if (isLoading) {
                Loading.service({background: 'rgba(0, 0, 0, 0.1)'});
            } else {
                Loading.service().close();
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