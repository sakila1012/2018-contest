import Vue from 'vue'
import BoardView from './components/BoardView.vue'
import './assets/scss/style.css'
import './assets/scss/main.css'

Vue.config.productionTip = false

new Vue({
  el: '#boardDiv',
  components: { BoardView }
})