//   /api/newmeetup
//POST /api/newmeetup
//all these  api will only execute on server side  it has nothing to do with client side so we dont not have to worry about security
import {MongoClient} from  'mongodb'

async function handler(req,res){
 console.log("processing request");
    if(req.method==='POST'){
        const data=req.body;
        console.log("processing request")

// const {title,img, desc,address}=data;
console.log("request received and processing")
const client =await MongoClient.connect("mongodb+srv://Aditya2763:Aditya%401040@cluster0.y9uyd.mongodb.net/udemyMeetupProject?retryWrites=true&w=majority");
 const db=client.db();
 const meetupCollection=db.collection('meetups');
 const result=meetupCollection.insertOne(data);
 console.log(result);
 client.close();
 res.status(201).json({msg:"meetup inserted successfully"});
    }
}

export default handler