import Vue from 'vue';

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
