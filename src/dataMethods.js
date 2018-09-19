import axios from 'axios';

/**
 * The method for fetching topics.
 * @returns Promise<data>
 */
export function getTopics() {
    return axios
        .get('http://localhost:3000/topics')
        .then(({data}) => data);
}

/**
 * The method for creating a new topic.
 * 
 * @param {String} topicTitle - The new topic title 
 */
export function createTopic(topicTitle) {
    return axios
        .post(
            'http://localhost:3000/topics',
            {title: topicTitle}
        );
}

/**
 * The method for updating a topic.
 * 
 * @param {Number} topicId - The ID of the topic being updated.
 * @param {String} topicTitle - The updated topic title.
 */
export function updateTopic(topicId, topicTitle) {
    return axios
        .put(
            `http://localhost:3000/topics/${topicId}`,
            {title: topicTitle}
        );
}

/**
 * The method for deleting a topic.
 * 
 * @param {Number} topicId - The ID of the topic being deleted.
 */
export function deleteTopic(topicId) {
    return axios
        .delete(
            `http://localhost:3000/topics/${topicId}`
        );
}
