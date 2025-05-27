// tester file

const axios = require('axios');


async function testPost(userId, points) {
    try {
        const { data } = await axios.post('http://localhost:8000/score', {userId, points});
        console.log(`User ${data.userId} scored ${data.points} points. Total score: ${data.total}`);
} catch (err) {
        console.error(`Error updating score for user ${userId}:`, err.response.data);
}
    }

async function testGet(userId) {
    try {
        const { data } = await axios.get(`http://localhost:8000/score/${userId}`);
        console.log(`User ${userId} has a total score of ${data.scores}`);
    } catch (err) {
        console.error(`Error retrieving score for user ${userId}:`, err.response.data);
    }
}

async function testReset() {
    try {
        const { data } = await axios.post('http://localhost:8000/reset');
        console.log('Scores reset successfully:');
    } catch (err) {
        console.error('Error resetting scores:', err.response.data);
    }
}



async function runTests() {
    await testPost('user1', 10);
    await testPost('user2', 20);
    await testPost('user1', 5);
    await testPost('user3', 15);
    await testPost('user4', 25);
    await testPost('user5', 30);

    await testGet('user1');
    await testGet('user2');
    await testGet('user3');
    await testGet('user4');
    await testGet('user5');

    await testReset();

    await testGet('user1');
}

runTests().then(() => console.log('All tests completed'));