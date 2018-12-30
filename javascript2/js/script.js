let id = 1;

function insertRows() {

    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let pinCode = document.getElementById('pinCode').value;
    let country = document.getElementById('country').value;
    let table = document.getElementsByTagName('table')[0];
    let newRow = table.insertRow(table.rows.length);


    let idCol = newRow.insertCell(0);
    let nameCol = newRow.insertCell(1);
    let addressCol = newRow.insertCell(2);
    let cityCol = newRow.insertCell(3);
    let pinCol = newRow.insertCell(4);
    let countryCol = newRow.insertCell(5);
    let actionCol = newRow.insertCell(6);


    idCol.innerHTML = id;
    nameCol.innerHTML = name;
    addressCol.innerHTML = address;
    cityCol.innerHTML = city;
    pinCol.innerHTML = pinCode;
    countryCol.innerHTML = country;
    actionCol.innerHTML = `<a class="link"> <i id="viewButton-${id}" class="far fa-eye"></i> </a>
                            <a class="link"> <i id="editButton-${id}" class="far fa-edit"></i> </a>                            
                            <a class="link"> <i id="updateButton-${id}" class="far fa-save" style="display:none"></i>  </a>                   
                            <a class="link"> <i id="deleteButton-${id}" class="fa fa-trash-alt"></i> </a>`;

    document.getElementById('reset').click();


    let viewButton = document.getElementById(`viewButton-${id}`);
    let editButton = document.getElementById(`editButton-${id}`);
    let updateButton = document.getElementById(`updateButton-${id}`);
    let deleteButton = document.getElementById(`deleteButton-${id}`);

    viewButton.addEventListener('click', function () {
        alert('Full Name:' + name + '\n' + 'Address:' + address + '\n' + 'City:' + city + '\n' + 'Pin Code:' + pinCode + '\n' + 'Country:' + country)
    });


    editButton.addEventListener('click', function () {
        viewButton.style.display = 'inline';
        updateButton.style.display = 'inline';
        editButton.style.display = 'none';
        deleteButton.style.display = 'inline';


        nameCol.innerHTML = `<input  id="newName-${id}" value="${name}"  type="text">`
        addressCol.innerHTML = `<input id="newAddress-${id}" value="${address}" type="text">`
        cityCol.innerHTML = `<input id="newCity-${id}" value="${city}" type="text">`
        pinCol.innerHTML = `<input id="newPinCode-${id}" value="${pinCode}" type="text">`
        countryCol.innerHTML = `<input id="newCountry-${id}" value="${country}" type="text">`

    });


    updateButton.addEventListener('click', function () {

        viewButton.style.display = 'inline';
        updateButton.style.display = 'none';
        editButton.style.display = 'inline';
        deleteButton.style.display = 'inline';


        name = document.getElementById(`newName-${id}`).value;
        address = document.getElementById(`newAddress-${id}`).value;
        city = document.getElementById(`newCity-${id}`).value;
        pinCode = document.getElementById(`newPinCode-${id}`).value;
        country = document.getElementById(`newCountry-${id}`).value;


        nameCol.textContent = name;
        addressCol.textContent = address;
        cityCol.textContent = city;
        pinCol.textContent = pinCode;
        countryCol.textContent = country;


    });

    deleteButton.addEventListener("click", function () {
        alert("Are you sure that you want to delete this row?")
        newRow.remove();
    });

    id++;

}