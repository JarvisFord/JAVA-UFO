var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $date_input = document.querySelector("#datetime");
var $state_input = document.querySelector("#state");
var $city_input = document.querySelector("#city");
var $country_input = document.querySelector("#country");
var $shape_input = document.querySelector("#shape");
var $comment_input = document.querySelector("#comments");
var $searchBtn = document.querySelector("#search");

function renderTable() {
    $tbody.innerHTML = "";
    console.log("rendering")

    for(var i = 0; i < tableData.length; i++) {
        var sighting = tableData[i];
        var fields = Object.keys(sighting);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cells = $row.insertCell(j);
            $cells.innerText = sighting[field];
        }
    }
}
renderTable();

// $searchBtn.addEventListener('click' , handlesearchbuttonclick);
// function handlesearchbuttonclick() {
//     var filter_state = $state_input.nodeValue.trim().toLowerCase();
//     var filter_date = $date_input.nodeValue.trim();

//     if (filter_date.length  != 0){
//     filtered_data = tableData.filter(function(sighting){
//         var date_sight = sighting.datetime
//         return date_sight === filter_date
//     });
// }
//     else {
//         filtered_data = tableData
// }
//     if (filter_state.length !=0) {
//         filtered_data = tableData.filter(function(sighting){
//             var state_sight = sighting.state;
//             return state_sight === filter_state;
//         });
//     }
//     else {
//         filtered_data = filtered_data
//     }
//     renderTable();
// }

