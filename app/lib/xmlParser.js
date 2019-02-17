import labJson from "../../assets/data/lab_list.json";
import scheduleJson from "../../assets/data/lab_schedules.json";

var atusLabs = {
  labs: []
};

var csLabs = {
  labs: []
};

export function parseLabs() {
  for (var i in labJson.spaces.space){

    var space = labJson.spaces.space[i]; /// MIGHT NEED TO CHANGE TO JUST labJson.spaces
    var building = space.space_name.split(" ");

    if(space.partition_name.equals("ATUS COMPUTER LAB")){
      atusLabs.labs.push({
        "space_name" : space.space_name,
        "formal_name": space.formal_name,
        "max_capacity": space.max_capacity,
        "partition_name" : space.partition_name,
        "building" : building
      });
    }else if(space.partition_name.equals("DEPT SPACE") && building.equals("CF")){
      csLabs.labs.push({
        "space_name" : space.space_name,
        "formal_name": space.formal_name,
        "max_capacity": space.max_capacity,
        "partition_name" : space.partition_name,
        "building" : building
      });
    }
  }
}

export function parseLabSchedules(){
  for(var i in scheduleJson.space_reservations.space_reservation){
    //var reservation =
  }
}




export function returnAtusLabs(){
  return atusLabs;
}

export function returnLabs(){
  return csLabs;
}
