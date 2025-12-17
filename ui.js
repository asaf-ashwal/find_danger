import { getCallRecords, getPeopleList, searchPeoplebyAge, searchPeoplebyName } from "./functions.js";

export default async function ui() {
  let flag = true;
//   while (flag) {
    let menu = `1`;
    switch (menu) {
      case "1": {
        const allPeople = await getPeopleList();
        console.log(allPeople);
        
        break;
      }
      case "2": {
        getCallRecords();
        break;
      }

      case "3": {
        searchPeoplebyName();
        break;
      }
      case "4": {
        searchPeoplebyAge();
        break;
      }
      case "5": {
        console.log("by");
        flag = false;
      }
     
      default:
        console.log('not valid');
        
        break;
    // }
  }
}
