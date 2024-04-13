document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registerForm");
    const registrationBody = document.getElementById("tableBody");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = document.getElementById('nameInput');
        const userEmail = document.getElementById('emailInput');
        const userRole = document.getElementById('roleInput');
        const userIDElements = document.querySelectorAll('.userID');

        if(userName.value === ""){
            alert("Please enter your name");
            return;
        }

        if (userEmail.value === "") {
            alert("Please enter your email address.");
            return;
        } else if (!userEmail.value.includes("@") || !userEmail.value.includes(".")) {
            alert("Please enter a valid email address."); 
            return;
        }
        

        let maxID = 0;
        userIDElements.forEach(userIDElement => {
            const userID = parseInt(userIDElement.textContent.trim());
            if (!isNaN(userID) && userID > maxID) {
                maxID = userID;
            }
        });

        const nextID = maxID + 1;

        register(nextID, userName.value, userEmail.value, userRole.value);
        userName.value = "";
        userEmail.value = "";
    });

    function register(userID, userName, userEmail, userRole){
        const appendNewRow = document.createElement('tr');
        appendNewRow.innerHTML = '<td class="p-1 text-center border border-black userID">' + userID + '</td>' +
        '<td class="p-1 border border-black">' + userName + '</td>' +
        '<td class="p-1 border border-black">' + userEmail + '</td>' +
        '<td class="p-1 border border-black">' + userRole + '</td>' +
        '<td class="p-1 border border-black">' +
        '<button><i class="fa fa-edit" id="editBtn" style="font-size:20px; color:blue"></i></button>' +
        '<button><i class="fa fa-trash-o p-1" id="deleteBtn" style="font-size:18px;color:red"></i></button>' +
        '</td>';







        registrationBody.appendChild(appendNewRow);
    }





    // // Add event listener to handle edit button clicks
    // registrationBody.addEventListener('click', function(event) {
    //     if (event.target.classList.contains('editBtn')) {
    //         // Get the row containing the clicked edit button
    //         const row = event.target.closest('tr');
    //         // Extract the details from the row
    //         const userID = row.querySelector('.userID').textContent.trim();
    //         const userName = row.querySelectorAll('td')[1].textContent.trim();
    //         const userEmail = row.querySelectorAll('td')[2].textContent.trim();
    //         const userRole = row.querySelectorAll('td')[3].textContent.trim();

    //         // Populate the form fields with the details for editing
    //         document.getElementById('nameInput').value = userName;
    //         document.getElementById('emailInput').value = userEmail;
    //         document.getElementById('roleInput').value = userRole;

    //         // Optionally, you can store the userID for further processing when saving the edits.
    //         // For demonstration, I'm just logging it to the console.
    //         console.log("Editing user with ID:", userID);
    //     }



    });

