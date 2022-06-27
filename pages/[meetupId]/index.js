import MeetupDetails from "../../components/meetups/MeetupDetails";

function Meetupinfo(){


    return (
      <MeetupDetails
       img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" 
       
       title="First meetup"
       address="delhi"
       description="this is description"
       />
    );

    
}

// note we have to export getstatticPath() for dynamic pages using getStaticProps() becuase it fetched all dynamic values and check before rendering 
 export async function getStaticPaths(){
   return{
     //here false means we have defined all dynamic id and if we type m3 in broser it eill give error 404
     //if we type true here it will try to generate a page for m3 id in the browser and dont show error
     //if we have hundreds of pages we  only gives ids in paths  of some popular pages to prerender these pages with data
     fallback: false,
    paths:[
      {
        params:{
          meetupId: 'm1',
        },

      },
       {
        params:{
          meetupId: 'm2',
        },
        
      },
    ]
   }
 }



export async function getStaticProps(context) {
  //here we can not destruct meetupid by useRouter or context.req because  use router is used in component and context.req,res is used in getServerSideProps
  //getStaticProps provide context.params which we used to destruct id

  const meetupId=context.params.meetupId;
  console.log(meetupId)

 return{
    props:{
      meetups:{
       img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", 
       id:meetupId,
       title:"First meetup",
       address:"delhi",
       description:"this is description"
      }
    }
 }


}

export default  Meetupinfo 