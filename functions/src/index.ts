import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

 export const getBostonWeather = functions.https.onRequest((request, response) => {
    const promise = admin.firestore().doc('cities-weather/boston-ma-us').get();
    const p2 = promise.then(snapshot => {
        const data = snapshot.data()
        response.send(data)
    })
    p2.catch(error=>{
        //Handle the error
        console.log(error)
        response.status(500).send(error)
    })
 });
