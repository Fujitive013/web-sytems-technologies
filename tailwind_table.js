document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registerForm");
    const registrationBody = document.getElementById("tableBody");
    const userTable = document.getElementById("userTable");

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
        '<td class="p-1 border border-black user-Name">' + userName + '</td>' +
        '<td class="p-1 border border-black user-Email">' + userEmail + '</td>' +
        '<td class="p-1 border border-black user-Role">' + userRole + '</td>' +
        '<td class="p-1 border border-black">' +
        '<button class="editBtn"><i class="fa fa-edit" style="font-size:20px; color:blue"></i></button>' +
        '<button class="deleteBtn"><i class="fa fa-trash-o p-1" style="font-size:18px;color:red"></i></button>' +
        '</td>';

        registrationBody.appendChild(appendNewRow);



    const deleteButton = appendNewRow.querySelector('.deleteBtn');
    deleteButton.addEventListener('click', function(event) {
        const rowToDelete = this.parentElement.parentElement;
        registrationBody.removeChild(rowToDelete);
    });


    const editButton = appendNewRow.querySelector('.editBtn');
    editButton.addEventListener('click', function(event) {
        const row = this.closest('tr'); 
        const userName = row.querySelector('.user-Name').textContent;
        const userEmail = row.querySelector('.user-Email').textContent; 


        document.getElementById('nameInput').value = userName;
        document.getElementById('emailInput').value = userEmail;


        registrationBody.removeChild(row);
    });




}
});
