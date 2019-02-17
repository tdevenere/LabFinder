import labJson from "../assets/data/lab_list.js";
import scheduleJson from "../assets/data/lab_schedules.js";

//Written by Owen with love <3
//Edited by Connor with general uninterest


export function parseLabs() {
  var labs = {    //Array object to hold all the labs
    lab: []
  };

  for (var i in labJson.spaces.space){ // Loop through each lab in json file

    var space = labJson.spaces.space[i];  //Grab all desired information
    var buildingName = space.space_name.__text;
    var building = buildingName.split(" ", 0);
    var partitionName = space.partition_name.__text;
    var spaceName = space.space_name.__text;

    if(partitionName == "ATUS COMPUTER LAB"){ // Check for type of lab

      if(spaceName == "AW 308" || spaceName == "CF 161" ||  // Special check for mac labs
      spaceName== "FI 101" || spaceName == "MH 31" || spaceName == "MH 39"){
        labs.lab.push({
          "space_name" : space.space_name.__text,
          "formal_name": space.formal_name.__text,
          "max_capacity": space.max_capacity.__text,              //POPULATING THE LAB OBJECT WITH DATA
          "partition_name" : space.partition_name.__text,
          "type" : "ATUS/General",
          "os" : ["Mac"],
          "building" : building,
          "reservations" : []
        });
      }else{
        labs.lab.push({
          "space_name" : space.space_name.__text,
          "formal_name": space.formal_name.__text,
          "max_capacity": space.max_capacity.__text,
          "partition_name" : space.partition_name.__text,
          "type" : "ATUS/General",
          "os" : ["Windows"],
          "building" : building,
          "reservations" : []
        });
      }
    }else if(partitionName == "DEPT SPACE" && building == "CF"){
     labs.lab.push({
        "space_name" : space.space_name.__text,
        "formal_name": space.formal_name.__text,
        "max_capacity": space.max_capacity.__text,
        "partition_name" : space.partition_name.__text,
        "type" : "Computer Science",
        "os" : ["Linux", "Windows "],
        "building" : building,
        "reservations" : []
      });
    }
  }
  associateSchedule(labs);  // Function to fill lab objects with their availability
  return labs
}

 function associateSchedule(labs){
  for(var i in scheduleJson.space_reservations.space_reservation){   // Loop through every reservation made on rooms
    var schedule = scheduleJson.space_reservations.space_reservation[i];
    try{
      if(typeof schedule != 'undefined'){
        var labId = schedule.spaces.space_name.__text
         lab = labs.lab.find((lab) =>{  // Search the lab array to see if the lab has a reservation
            return lab.space_name == labId;
        });
    
        if(typeof lab != 'undefined'){  // If the lab was found to have a reservation
          var startTime = schedule.start_time.__text;
          var endTime = schedule.end_time.__text;
      
          var date = startTime.split("T" , 0);    // Grab start and end times
          var startTime = startTime.split("-", 0);
          var temp = endTime.split("T", 0);
          var endTime = endTime.split("0", 0);
    
          lab.reservations.push({ // Add reservations to lab object
            "date": date,
            "start_time": startTime,
            "end_time": endTime
          });
        }
      }
    }catch{
      console.log("¯\_(ツ)_/¯")
    }

  }
}
