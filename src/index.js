import Vue from 'vue/dist/vue.esm.js';

new Vue({
    el: '#app',
    data: () => ({
        disableMe: false,
        visible: true
    }),
    methods: {
        toggleInputDisabled: function() {
            this.disableMe = !this.disableMe;
        },
        toggleShowHide: function() {
            this.visible = !this.visible;
        }
    }
});
