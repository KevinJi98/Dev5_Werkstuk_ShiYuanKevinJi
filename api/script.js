"use strict";
import { convertQuerySnapshotToRegularArray } from './utils.js';

firebase.initializeApp({
    apiKey: 'AIzaSyDOxLMN2XKpUem96oP6zX_PUKr0ftYfNI8',
    authDomain: 'localhost',
    projectId: 'dev5werkstuk-d934e'
  });

 const db = firebase.firestore();
 const drinkCollection = db.collection("drinks");

async function renderDrinks(){
    drinkCollection.get().then(querySnapshot => {
        const drinks = convertQuerySnapshotToRegularArray(querySnapshot);
        console.log(drinks);
    })
}
renderDrinks();