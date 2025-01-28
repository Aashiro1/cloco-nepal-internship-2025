import { students as allStudents } from "./data.js"; // Rename the import to avoid confusion

const subjectSelectEl = document.getElementById("subject-select");
const studentTableEl = document.getElementById("student-table");
const hideButtonEl = document.getElementById("hide-button");

//  No need to create a new students array with just names here.  Work with the original data.

// Display students based on the selected subject
subjectSelectEl.addEventListener("change", () => {
  const selectedSubject = subjectSelectEl.value;

  // Clear the table body
  const tableBody = studentTableEl.querySelector("tbody");
  tableBody.innerHTML = "";

  if (selectedSubject) {
    // Filter students who have the selected subject
    const filteredStudents = allStudents.filter(student => student.subjects.includes(selectedSubject)); // Use allStudents here

    // Add filtered students to the table
    filteredStudents.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
      `;
      tableBody.appendChild(row);
    });

    // Show the table and hide button
    studentTableEl.classList.remove("hidden");
    hideButtonEl.classList.remove("hidden");
  } else {
    // Hide the table if no subject is selected
    studentTableEl.classList.add("hidden");
    hideButtonEl.classList.add("hidden");
  }
});

// Hide the table when the "Hide Table" button is clicked
hideButtonEl.addEventListener("click", () => {
  studentTableEl.classList.add("hidden");
  hideButtonEl.classList.add("hidden");
});