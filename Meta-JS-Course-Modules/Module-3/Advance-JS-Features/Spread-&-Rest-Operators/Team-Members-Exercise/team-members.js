"use strict";
/**
 * @param { 🧩 Challenge 2: Organize Team Members }
 * @Info The spread operator helps you merge lists or add items immutably, while the rest operator helps you extract specific values from arrays or objects while grouping the "rest" into a new variable.

 *@param Real-World Context:
You're managing a project team. You start with a core set of team members, and later add more dynamically. You also want to separate out the team leader from the rest of the group when needed.

 @Example Syntax:
 const [lead, ...restOfTeam] = ["Alice", "Bob", "Charlie"];
console.log(lead); <-Output-> "Alice"
console.log(restOfTeam);  <-Output-> ["Bob", "Charlie"]

@param Task:
Use the spread operator to merge a list of core members with new members when the “Add New Members” button is clicked.  Then, use the rest operator to separate the first person (team leader) from the rest of the merged team.  Display the team leader and the rest of the team in separate <ul> sections in the UI.
 */

const teamMembers = [
  "John",
  "Mark",
  "David",
  "Sarah",
  "Harold",
  "Hettie",
  "Brett",
];

const organizeTeam = () => {
  //merge list array with added alphabetical sort
  const newMembers = ["Mike", "Ina", "Austin"];
  const allMembers = [...teamMembers, ...newMembers];
  const [teamLead, ...restOfTeam] = allMembers;
  const sortedRestOfTeam = [...restOfTeam].sort();
  
  const teamLeaderList = document.getElementById("teamLeaderList");
  teamLeaderList.innerHTML = ""; //-> Clear existing info/data

  const leaderList = document.createElement("li");
  leaderList.textContent = teamLead;
  teamLeaderList.appendChild(leaderList);
  console.log(leaderList);

  const teamMembersList = document.getElementById("teamMembersList");
  teamMembersList.innerHTML = "";
  sortedRestOfTeam.forEach((rest) => {
    const remainingList = document.createElement("li");
    remainingList.textContent = rest;
    teamMembersList.appendChild(remainingList);
    console.log(remainingList);
  });
};
