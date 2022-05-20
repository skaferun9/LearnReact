import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://korn3584:Cocosweet0123@cluster0.dhuzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();
        res.status(201).json({ message: 'Meetup inserted!' });

    }
};

export default handler;