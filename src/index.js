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
        state: '',
        newTopicName: '',
        topicEditing: {},
        topics: []
    }),
    methods: {
        logIn: function() {
            this.state = 'loggedIn';

            this.refreshData();
        },

        refreshData: function() {
            getTopics()
                .then(data => this.topics = data);
        },

        addTopic: function(topicName) {
            createTopic(topicName)
                .then(this.refreshData);
        },

        updateTopic: function({id, title}) {
            updateTopic(id, title)
                .then(this.refreshData)
                .then(() => this.state = 'loggedIn');
        },

        editTopic: function(topic) {
            this.topicEditing = topic;
            this.state = 'editing';
        },

        removeTopic: function(topicId) {
            deleteTopic(topicId)
                .then(this.refreshData);
        }
    }
});
