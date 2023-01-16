// const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const main = async () => {
    const client = new MongoClient('');
    try {
        const connection = await client.connect();
        const plays = connection.db('PlebFM').collection('plays')
        console.log(db)
        plays.find()
    } catch (e) {
        console.error(e);
    } finally {
        client.close()
    }
};

main()
