const paginationNumbers = document.getElementById('pagination-number');
const paginatedList = document.getElementById('tab');


$('.btn-times').click(()=>{
    $('#contprev').hide(500)
})
$(document).ready(()=>{

})

const api_url = 'http://localhost:3000/loadall';

async function getapi(url){

    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    if(response){
        $('#tab').fadeOut();
        $('.loadery').fadeIn(100)
        $('.loadery').delay(2000)
        $('.loadery').fadeOut(200)
        $('#tab').fadeIn(300);
    }
    show(data);
}
getapi(api_url);

function show(data){
    let tab = `<tr><th>Username</th>
    <th>From</th><th>To</th>
    <th>Take off</th><th>Arrival</th>
    <th>Seat Number</th><th>Flight Type</th>
    <th>Flight Time</th><th>Status</th><th>No of Travellers</th></tr>`;

    for(let ol of data){
        document.getElementById('tab').innerHTML = 
        tab += `<tr class="item"><td>${ol.Username}</td><td>${ol.xFrom}</td>
        <td>${ol.xTo}</td><td>${ol.Depdate}</td>
        <td>${ol.Retdate}</td><td>${ol.Flight_no}</td>
        <td>${ol.FlightType}</td><td>${ol.FlightTime}</td>
        <td>${ol.Status}</td><td>${ol.NoOfFlight}</td></tr>`
    }
}