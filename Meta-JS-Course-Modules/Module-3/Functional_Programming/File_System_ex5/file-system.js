"use strict";
// ========================================
// FILE SYSTEM DATA STRUCTURE
// ========================================
// This represents our file system as a tree structure
// Each node has: name, type ('file' or 'folder'), size, and children (for folders)
const fileSystem = {
  name: "root",
  type: "folder",
  size: 0,
  children: [
    {
      name: "documents",
      type: "folder",
      size: 0,
      children: [
        {
          name: "projects",
          type: "folder",
          size: 0,
          children: [
            { name: "game.js", type: "file", size: 2048 },
            { name: "website.html", type: "file", size: 1024 },
            { name: "styles.css", type: "file", size: 512 },
          ],
        },
        { name: "resume.pdf", type: "file", size: 1536 },
        { name: "notes.txt", type: "file", size: 256 },
      ],
    },
    {
      name: "photos",
      type: "folder",
      size: 0,
      children: [
        { name: "vacation.jpg", type: "file", size: 3072 },
        { name: "family.png", type: "file", size: 2560 },
        {
          name: "events",
          type: "folder",
          size: 0,
          children: [
            { name: "birthday.jpg", type: "file", size: 2048 },
            { name: "graduation.jpg", type: "file", size: 1792 },
          ],
        },
      ],
    },
    {
      name: "music",
      type: "folder",
      size: 0,
      children: [
        { name: "favorites.mp3", type: "file", size: 4096 },
        { name: "playlist.m3u", type: "file", size: 128 },
      ],
    },
    { name: "config.json", type: "file", size: 64 },
  ],
};

// ========================================
// TASK 1: DISPLAY TREE STRUCTURE
// ========================================
// GOAL: Show the file system as a visual tree with indentation
// CONCEPTS: Recursion, tree traversal, HTML manipulation
//
// STEPS TO COMPLETE:
// 3. Create a recursive function that:
//
// HINTS:
// - output.innerHTML += "text" adds text to the display
// - Use \n for new lines
// - node.type tells you if it's a 'file' or 'folder'
// - node.children contains the child nodes (if it's a folder)
function displayTree() {
  // YOUR CODE HERE
  // 1. Get the output element using getElementById
  const output = document.getElementById("output");
  // 2. Clear the output (set innerHTML to empty string)
  output.innerHTML = "";

  // recursive function - Takes a node and an indent string as parameters
  const displayNode = (node, indent = "") => {
    // 4. Add CSS classes: 'folder' for folders, 'file' for files
    const icon = node.type === "folder" ? "📁" : "📑";
    const cssClass = node.type === "folder" ? "folder" : "file";
    // - Use template literals: `${indent}${node.name}`
    //    - Displays the current node with proper indentation
    output.innerHTML += `${indent}<span class="${cssClass}">${icon} ${node.name}</span>\n`;

    if (node.type === "folder" && node.children && node.children.length > 0) {
      // - Increases the indent for child nodes (try '  ' for 2 spaces)
      const childIndent = indent + "  ";
      //  - If it's a folder with children, recursively calls itself for each child
      node.children.forEach((child) => {
        displayNode(child, childIndent);
      });
    }
  };
  //Invoke/call the recursive function
  displayNode(fileSystem);
}

// ========================================
// TASK 2: CALCULATE TOTAL SIZE
// ========================================
// GOAL: Add up all file sizes in the entire tree
// CONCEPTS: Recursion, accumulation, mathematical operations
//
// STEPS TO COMPLETE:
// 1. Create a recursive function that:
//    - If the node is a file, return its size
//    - If the node is a folder, sum up all its children's sizes
//    - Use recursion to get the size of each child
// 2. Call this function on the root fileSystem
// 3. Display the result in bytes and KB (divide by 1024)
// 4. Use the 'size' CSS class for colored output
//
// HINTS:
// - Files have a size property, folders need their children's sizes calculated
// - Use a loop or forEach to go through children
// - (totalBytes / 1024).toFixed(2) gives you KB with 2 decimals
// - Remember: recursion means the function calls itself
function calculateTotalSize() {
  // YOUR CODE HERE
}

// ========================================
// TASK 3: FIND LARGEST FILE
// ========================================
// GOAL: Find the file with the biggest size in the entire tree
// CONCEPTS: Recursion, comparison, tracking maximum values
//
// STEPS TO COMPLETE:
// 1. Create variables to track the largest file and its size
// 2. Create a recursive function that:
//    - If the node is a file, compare its size to the current largest
//    - If it's bigger, update your tracking variables
//    - If the node is a folder, recursively check all its children
// 3. Display the name and size of the largest file
// 4. Use 'file' and 'size' CSS classes
//
// HINTS:
// - Initialize largestSize to 0 and largestFile to null
// - Use if (node.size > largestSize) to compare
// - Don't forget to handle the case where no files exist
function findLargestFile() {
  // YOUR CODE HERE
}

// ========================================
// TASK 4: COUNT FILES AND FOLDERS
// ========================================
// GOAL: Count how many files and folders exist in the tree
// CONCEPTS: Recursion, counting, classification
//
// STEPS TO COMPLETE:
// 1. Create counter variables for files and folders
// 2. Create a recursive function that:
//    - If the node is a file, increment file counter
//    - If the node is a folder, increment folder counter
//    - For folders, recursively count all children
// 3. Display the counts with appropriate CSS classes
// 4. Also show the total count (files + folders)
//
// HINTS:
// - Use let fileCount = 0; and let folderCount = 0;
// - node.type === 'file' checks if it's a file
// - Don't forget to process children for folders
function countItems() {
  // YOUR CODE HERE
}

// ========================================
// TASK 5: SEARCH FILE SYSTEM
// ========================================
// GOAL: Find all files and folders that match a search term
// CONCEPTS: Recursion, string searching, path tracking
//
// STEPS TO COMPLETE:
// 1. Get the search term from the input field
// 2. Create an array to store results
// 3. Create a recursive function that:
//    - Takes a node and the current path as parameters
//    - Builds the full path for the current node
//    - Checks if the node name contains the search term
//    - If it matches, adds it to the results array
//    - Recursively searches all children (for folders)
// 4. Display all matches with their full paths
//
// HINTS:
// - Use document.getElementById('searchInput').value to get search term
// - Use .toLowerCase() for case-insensitive search
// - Use .includes() to check if a string contains another string
// - Build paths like: path ? `${path}/${node.name}` : node.name
function searchFileSystem() {
  // YOUR CODE HERE
}

// ========================================
// TASK 6: SHOW ALL PATHS
// ========================================
// GOAL: Display the full path to every file and folder
// CONCEPTS: Recursion, path building, comprehensive traversal
//
// STEPS TO COMPLETE:
// 1. Create an array to store all paths
// 2. Create a recursive function that:
//    - Takes a node and current path as parameters
//    - Builds the full path for the current node
//    - Adds the path to the array
//    - Recursively processes all children (for folders)
// 3. Display all paths with icons and proper CSS classes
//
// HINTS:
// - Similar to search, but you collect ALL nodes, not just matches
// - Use the same path building logic: path ? `${path}/${node.name}` : node.name
// - Consider showing different icons for different file types
function showAllPaths() {
  // YOUR CODE HERE
}

// ========================================
// DEBUGGING TIPS:
// ========================================
// 1. Use console.log() to see what's happening:
//    console.log('Processing node:', node.name);
// 2. Add console.log() at the start of recursive functions to trace execution
// 3. Test with simple cases first (maybe comment out some children)
// 4. Use browser developer tools to inspect errors
// 5. Start with displayTree() - it's the foundation for understanding the others

// ========================================
// EXTRA CHALLENGES (After completing the basics):
// ========================================
// 1. Add file extension filtering (show only .js files)
// 2. Calculate the average file size
// 3. Find the deepest folder (most nested)
// 4. Create a function to show only files larger than a certain size
// 5. Add a function to show the folder structure with file counts
// 6. Implement a function to find duplicate file names
// 7. Create a "breadcrumb" display showing the path to a specific file
