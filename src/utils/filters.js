import Vue from 'vue'

Vue.filter('formatDate', date => new Date(date).toLocaleDateString('en-US'))
