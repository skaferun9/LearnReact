import React from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';


export default function HomePage(props) {
    return (<MeetupList meetups={props.meetups} />)
}



export const getStaticProps = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://korn3584:Cocosweet0123@cluster0.dhuzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

