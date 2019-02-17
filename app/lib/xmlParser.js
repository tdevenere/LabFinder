import labJson from "../assets/data/lab_list.js";
import scheduleJson from "../assets/data/lab_schedules.js";

export function parseLabs() {
  var labs = {
    csLabs: [],
    atusLabs: []
  };

  for (var i in labJson.spaces.space){

    var space = labJson.spaces.space[i]; /// MIGHT NEED TO CHANGE TO JUST labJson.spaces
    var buildingName = space.space_name.__text;
    var building = buildingName.split(" ", 0);

    var partitionName = space.partition_name.__text

    if(partitionName == "ATUS COMPUTER LAB"){
      labs.atusLabs.push({
        "space_name" : space.space_name.__text,
        "formal_name": space.formal_name.__text,
        "max_capacity": space.max_capacity.__text,
        "partition_name" : space.partition_name.__text,
        "type" : "ATUS/General",
        "building" : building
      });
    }else if(partitionName == "DEPT SPACE" && building == "CF"){
     labs.csLabs.push({
        "space_name" : space.space_name.__text,
        "formal_name": space.formal_name.__text,
        "max_capacity": space.max_capacity.__text,
        "partition_name" : space.partition_name.__text,
        "type" : "Computer Science",
        "building" : building
      });
    }
  }
  return labs
}

export function parseLabSchedules(){
  for(var i in scheduleJson.space_reservations.space_reservation){
    //var reservation =
  }
}
