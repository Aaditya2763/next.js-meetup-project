// our-domain.com/

import React from 'react';
import { useEffect, useState } from 'react';
import MeetupList from "../components/meetups/MeetupList";

const Dummy_Meetups = [
  {
    id: "m1",
    title: "A first meetup",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    address: "delhi",
    description: "meetup",
  },
  {
    id: "m2",
    title: "A first meetup",
    img: "https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg",
    address: "delhi",
    description: "meetup",
  },
];


function HomePage(props){
  //If we are using  getStaticProps we do not have to use useState and useEffect in it
// const [loadedmeetups,setloadedmeetups]=useState([]);



// useEffect(()=>{
//   //send a http request and fetch data
//   setloadedmeetups(Dummy_Meetups);
// },[]);


  return < MeetupList meetups={props.meetups} />

}
//getStaticProps runs only on server it do not have to do anything with the  client side
//Anything that we write here never execute on client side
//Used for pre rendering with pros
//This getStaticPropsruns during buid process
// it is good for app like where data changes very less
// 
export async function getStaticProps(){
 // we always have to retun an object init and the object will contain props  which also contian an object 
  return{
    props:{
      meetups:Dummy_Meetups
    },
    //This revalidate ford help us to validate dat from server after a perticular period of time inrthi case it is 1sec
    revalidate:1,

  }
}

//This function will always on the server after deployment and validate the data after particular period of time
//we always have to retun an object init and the object will contain props  which also contian an object 
//this function always runs on server 
//we can not use  revalidate here because it doesn't make any sense here  it will automatically revalidate data for every request 
//good for the app like where data changes frequently
// export async function getServerSideProps(context){
//   // this function also provide req and response object
//   const req=context.req;
//   const res=context.res;
// return{
//   props:{
//     meetups:Dummy_Meetups
//   }
// }
// }

export default HomePage;