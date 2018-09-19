import Vue from 'vue';

new Vue({
    el: '#app',
    data: () => ({
        state: 'state1'
    }),
    methods: {
        switchState: function() {
            if (this.state === 'state1') {
                this.state = 'state2';
                return this.state;
            }
            this.state = 'state1';
        }
    }
});
