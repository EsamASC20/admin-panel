let usernameElement = document.querySelector("#probname");
let messageElement = document.querySelector("#data");
let imgElement = document.querySelector("#img");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let probname        = usernameElement.value;
    let data         = messageElement.value;
    let img         = imgElement.value;
    usernameElement.value = "";
    messageElement.value  = "";
    imgElement.value  = "";
//    console.log(username + " : " + message);
    // Update database here
    let value= {
        NAME:probname,
        DATA: data,
        IMG: img,
    }
    database.push(value);
}

//set database "child_added" event here:
database.on("child_added",addMessageTB);
//This function grabs a row of data from the database
function addMessageTB(rowData){
    let row = rowData.val(); // Returns an object just like the "value" we pushed
    let board = document.querySelector(".allMessages")
    let data = document.createElement("p");

    data.innerHTML = row.NAME + ": " + row.DATA;
    board.appendChild(data);
    usernameElement.val="";
    messageElement.val="";

}


