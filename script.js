let attendanceList = [];
let present = 0;
let absent = 0;

function addAttendance() {
    let name = document.getElementById("studentName").value;
    let status = document.getElementById("status").value;
    let error = document.getElementById("error");

    if (name === "" || status === "") {
        error.textContent = "Fadlan geli magaca iyo status-ka";
        return;
    }

    error.textContent = "";

    attendanceList.push({
        studentName: name,
        status: status
    });

    if (status === "Present") {
        present++;
    } else {
        absent++;
    }

    displayAttendance();

    document.getElementById("studentName").value = "";
    document.getElementById("status").value = "";
}

function displayAttendance() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    attendanceList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.studentName + " - " + item.status;
        list.appendChild(li);
    });

    document.getElementById("presentCount").textContent = present;
    document.getElementById("absentCount").textContent = absent;
}