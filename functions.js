// import getData from "./geter.js";

import getData from "./geter.js";

export async function getPeopleList() {
  try {
    const allPeople = await getData("people");
    return allPeople;
  } catch (error) {
    console.error(error);
  }
}
export async function getCallRecords(params) {
     try {
    const allRecords = await getData("people");
    return allRecords;
  } catch (error) {
    console.error(error);
  }
}
export async function searchPeoplebyName(params) {}
export async function searchPeoplebyAge(params) {}
