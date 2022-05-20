import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

export default function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            address={props.meetupData.address}
            title={props.meetupData.title}
            description={props.meetupData.description}
        />


    )
}


export const getStaticPaths = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://korn3584:Cocosweet0123@cluster0.dhuzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    // client.close();
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }

}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
        'mongodb+srv://korn3584:Cocosweet0123@cluster0.dhuzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({ '_id': ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                image: meetup.image,
                address: meetup.address,
                title: meetup.title,
                description: meetup.description
            }
        }
    }
}
