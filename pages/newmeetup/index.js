import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp() {
 
      async function onAddMeetUpHandler(InputData) {
    console.log(InputData);
     try {
       const response = await fetch("/api/NewMeetup", {
         method: "POST",
         body: JSON.stringify(InputData),
         headers: {
           "content-Type": "application/json",
         },
       });
       console.log("request sent");
       data = await response.json();
       console.log(data);
     } 
     catch (e) {
         console.log("error detected")
       console.log(e);
     }

  }
 
  //here we are passingdata
  return <NewMeetupForm onAddMeetup={onAddMeetUpHandler} />;
}

export default NewMeetUp;
