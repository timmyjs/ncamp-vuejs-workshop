import Vue from 'vue';

import {
    getTopics,
    createTopic,
    updateTopic,
    deleteTopic
} from './dataMethods';

new Vue({
    el: '#app',
    data: () => ({
        userName: '',
        loggedIn: false,
        newTopicName: '',
        topics: []
    }),
    methods: {
        logIn: function() {
            this.loggedIn = true;

            this.refreshData();
        },

        refreshData() {
            getTopics()
                .then(data => this.topics = data);
        },

        addTopic: function(topicName) {
            createTopic(topicName)
                .then(this.refreshData);
        },

        updateTopic: function({id, title}) {
            updateTopic(id, title)
                .then(this.refreshData);
        },

        removeTopic: function(topicId) {
            deleteTopic(topicId)
                .then(this.refreshData);
        }
    }
});
