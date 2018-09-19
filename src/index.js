import Vue from 'vue/dist/vue.esm.js';

new Vue({
    el: '#app',
    data: () => ({
        items: [
            {
                id: 1,
                text: 'first one'
            },
            {
                id: 2,
                text: 'second one',
            },
            {
                id: 3,
                text: 'third one' 
            }
        ]
    }),
    methods: {
        addToArray: function(newItemText) {
            const lastItem = this.items.length - 1;
            const newItemId = this.items[lastItem].id + 1;
            this.items.push({
                id: newItemId,
                text: newItemText
            });
        }
    }
});
