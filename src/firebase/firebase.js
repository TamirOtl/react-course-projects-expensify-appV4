import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAmASq_l65dR58ZYpoX17dVWJQX0fI6MD4",
    authDomain: "expensify-tamir.firebaseapp.com",
    databaseURL: "https://expensify-tamir.firebaseio.com",
    projectId: "expensify-tamir",
    storageBucket: "expensify-tamir.appspot.com",
    messagingSenderId: "948644208045",
    appId: "1:948644208045:web:739176d730a595b6259524",
    measurementId: "G-43PVK0BYYQ"
  };

  firebase.initializeApp(firebaseConfig);
//refernce to the database

const database= firebase.database();
database.ref().set({
    name:"tamir oberlander",
    age:28,
   
    job:{
        title:"information system",
        company:"non working"
    },
    stressLevel:6,
    isSingle:false,
    location:{
        city:"tel aviv",
        state:"israel"
    },
   
  }).then(()=>{
      console.log("Data has been save!")
  }).catch((e)=>{
      console.log("Error:",e)
  })
//changing specifc value:
  database.ref("age").set(27);
  database.ref("location/city").set("Rishon Lezion");
  //add new data to the firebase database
  database.ref("attrbuites").set({
    height:170,
    weight:67
  }).then(()=>{
     console.log("Data save successfully!"); 
  }).catch((error)=>{
      console.log("somthing went wrong",error);
  })
  //remove data
  database.ref("isSingle").remove().then(()=>{
      console.log("Data remove successfully!")
  }).catch((e1)=>{
    console.log("somthing went wrong",e1);
  })
  //update data
  database.ref().update({
      "job/company":"Consist",
      'location/city':"petah tikva",
      stressLevel:9
  }).then(()=>{
    console.log("Data update successfully!")
}).catch((e2)=>{
  console.log("somthing went wrong",e2);
})

//fetching data
// const onValueChange=database.ref().on("value",snapShot)=>{
//     console.log(snapShot.val());
// })
// setTimeout(() => {
//     console.log(onValueChange);
// }, 1500);

database.ref().on('value',(snapShot)=>{
const val=snapShot.val();
console.log(`hi my name is ${val.name} and i am ${val.age} and
i work at ${val.job.company}`)
})