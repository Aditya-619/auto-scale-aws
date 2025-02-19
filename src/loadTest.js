const axios = require('axios');

const url = 'http://auto-scale-alb-1498815496.ap-south-1.elb.amazonaws.com/product';
const numRequests = 10000;
const concurrency = 100;

const makeRequests = async () => {
    const promises = [];
    for (let i = 0; i < numRequests; i++) {
        promises.push(axios.get(url).catch(() => {}));
        if (i % concurrency === 0) {
            await Promise.all(promises);
            promises.length = 0;
        }
    }
};

makeRequests().then(() => console.log('Load test completed.'));
