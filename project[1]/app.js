// jobportal.js

function loginUser() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "admin@uog.edu.pk" && password === "1234") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
}

function clearForm() {
    document.getElementById("applyForm").reset();
}

function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// function showJobDetails(title, description) {
//     document.getElementById("jobTitle").innerText = title;
//     document.getElementById("jobDescription").innerText = description;
// }

function applyJob() {
    alert("Your application has been submitted!");
    clearForm();
}

function validateName() {
    const name = document.getElementById("name").value;
    const error = document.getElementById("nameError");

    if (name.trim() === "") {
        error.innerText = "Name is required!";
    } else {
        error.innerText = "";
    }
}

// function searchJobs() {
//     const input = document.getElementById("search").value.toLowerCase();
//     const jobs = document.getElementsByClassName("job");

//     for (let job of jobs) {
//         job.style.display = job.innerText.toLowerCase().includes(input)
//             ? "block"
//             : "none";
//     }
// }

// function toggleTheme() {
//     document.body.classList.toggle("dark-mode");
// }

// function showDate() {
//     const today = new Date();
//     document.getElementById("date").innerText = today.toDateString();
// }

function goToApplyPage() {
    window.location.href = "login.html";
}
