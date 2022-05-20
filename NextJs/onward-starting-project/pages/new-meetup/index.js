import useRouter from 'next/router';
import React, { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


export default function NewMeetupPage() {
    const router = useRouter();
    const addMeetupHandler = async (enteredMeetupDate) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupDate),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
        router.push('/');
    }
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name='description'
                    content={props.meetupData.description}
                />
            </Head>

            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}
