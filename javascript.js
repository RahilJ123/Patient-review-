
const patients = [];

function addPatient() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const condition = document.getElementById('condition').value;
    const doctor = document.getElementById('Doctor').value; // Use 'Doctor' with the correct case

    patients.push({ name, age, gender, condition, doctor });
    updateTable();

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('male').checked = true;
    document.getElementById('condition').value = '';
    document.getElementById('Doctor').value = '';   
}

function updateTable() {
    const tableBody = document.querySelector('#patientTable tbody');
    tableBody.innerHTML = '';

    patients.forEach(patient => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.textContent = patient.name;
        cell2.textContent = patient.age;
        cell3.textContent = patient.gender;
        cell4.textContent = patient.condition;
        cell5.textContent = patient.doctor; // Use 'doctor' with the correct case
    });
}

        function editPatient(index) {
            const patient = patients[index];
            document.getElementById('name').value = patient.name;
            document.getElementById('age').value = patient.age;
            document.querySelector(`input[name="gender"][value="${patient.gender}"]`).checked = true;
            document.getElementById('condition').value = patient.condition;
            document.getElementById('Doctor').value = patient.doctor;

            // Replace "Add Patient" button with an "Update" button during editing
            const addButton = document.querySelector('button[type="button"]');
            addButton.textContent = "Update";
            addButton.onclick = () => updatePatient(index);
        }

        function updatePatient(index) {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const condition = document.getElementById('condition').value;
            const doctor = document.getElementById('Doctor').value;

            patients[index] = { name, age, gender, condition, doctor };
            updateTable();

            // Clear form fields and restore "Add Patient" button
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('male').checked = true;
            document.getElementById('condition').value = '';
            document.getElementById('Doctor').value = '';
            const addButton = document.querySelector('button[type="button"]');
            addButton.textContent = "Add Patient";
            addButton.onclick = addPatient;
        }

        function updateTable() {
            const tableBody = document.querySelector('#patientTable tbody');
            tableBody.innerHTML = '';

            patients.forEach((patient, index) => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                const cell5 = row.insertCell(4);
                const cell6 = row.insertCell(5); // Edit button cell

                cell1.textContent = patient.name;
                cell2.textContent = patient.age;
                cell3.textContent = patient.gender;
                cell4.textContent = patient.condition;
                cell5.textContent = patient.doctor;
                
                // Add an "Edit" button for each row
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editPatient(index);
                cell6.appendChild(editButton);
            });
        }
        function printList() {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Patients List</title>');
        printWindow.document.write('<style>@media print { body { margin: 0.5cm; } table { width: 100%; } th, td { padding: 8px; } }</style>');
        printWindow.document.write('</head><body>');

        printWindow.document.write('<h2 style="text-align: center;">Patients List</h2>');
        printWindow.document.write('<table border="1"><thead><tr><th>Name</th><th>Age</th><th>Gender</th><th>Condition</th><th>Doctor</th></tr></thead><tbody>');

        patients.forEach(patient => {
            printWindow.document.write(`<tr><td>${patient.name}</td><td>${patient.age}</td><td>${patient.gender}</td><td>${patient.condition}</td><td>${patient.doctor}</td></tr>`);
        });

        printWindow.document.write('</tbody></table></body></html>');
        printWindow.document.close();
        printWindow.print();
    }
    function sortPatients() {
        const sortAttribute = document.getElementById('sortList').value;

        patients.sort((a, b) => {
            if (a[sortAttribute] < b[sortAttribute]) return -1;
            if (a[sortAttribute] > b[sortAttribute]) return 1;
            return 0;
        });

        updateTable();
    }
    