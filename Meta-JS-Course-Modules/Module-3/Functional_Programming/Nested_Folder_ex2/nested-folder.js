"use strict";
// folder-viewer/script.js
// TODO: Build recursive function to display nested folder structure
// Example structure using better naming conventions
const folderTree = document.getElementById("folderTree");

const folderStructure = {
  name: "Root",
  directories: [
    {
      name: "Projects",
      directories: [{ name: "Meta Fullstack" }, { name: "FreeCodeCamp" }],
    },
    {
      name: "Images",
      directories: [{ name: "Vacation" }, { name: "Work" }],
    },
    { name: "Notes", directories: [] },
  ],
};

// Step-by-step instructions:
// 1. Create a function `renderFolders(folderObj, parentElement)`.
// 2. If the folder has `directories`, loop through and recursively call `renderFolders`.
// 3. Use `document.createElement("ul")` and `li` to build the nested structure.
// 4. Append everything into the #folderTree div.
const renderFolders = (folderObj, parentElement) => {
  const li = document.createElement("li");
  li.textContent = folderObj.name;
  parentElement.appendChild(li);
  //step 4 base case scenario
  if (folderObj.directories && Array.isArray(folderObj.directories)) {
    //NB. In we typically append the ul elements to the list element 
    li.appendChild(ul);
    folderObj.directories.forEach((subDir) => {
      //Step 4 recursive call to display the sub folders and un-ordered list
      renderFolders(subDir, ul);
    });
  }
};
renderFolders(folderStructure, folderTree);
