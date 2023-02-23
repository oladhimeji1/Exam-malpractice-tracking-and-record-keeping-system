$('.btn-nextA').click(()=>{
    $('#partA').fadeOut(300)
    $('#partB').fadeIn(300)
})
$('.btn-prevB').click(()=>{
    $('#partB').fadeOut(300)
    $('#partA').fadeIn(300)
})
$('.btn-nextB').click(()=>{
    $('#partB').fadeOut(300)
    $('#partC').fadeIn(300)
})
$('.btn-prevC').click(()=>{
    $('#partC').fadeOut(300)
    $('#partB').fadeIn(300)
})
$('.btn-nextC').click(()=>{
    $('#partC').fadeOut(300)
    $('#partD').fadeIn(300)
})
$('.btn-prevD').click(()=>{
    $('#partD').fadeOut(300)
    $('#partC').fadeIn(300)
})
$('.btn-submit').click(()=>{
    var studentAffirmation, exhibitAffirmation;
    if($('#truex').is(':checked')){
        studentAffirmation = 'True'
    }else if($('#falsex').is(':checked')){
        studentAffirmation = 'False'
    }
    if($('#rmv-me').is(':checked')){
        exhibitAffirmation="Removed from me"
    }else if($('#rmv-around').is(':checked')){
        exhibitAffirmation="Removed around my siting position"
    }
    const fullname = $('#fullname').val();
    const matno = $('#matno').val();
    const _data = {
        fullname : $('#fullname').val(),
        faculty : $('#faculty').val(),
        matno : $('#matno').val(),
        coursecode : $('#coursecode').val(),
        coursetitle : $('#coursetitle').val(),
        examhall : $('#examhall').val(),
        date : $('#date').val(),
        exhibit : $('#exhibit').val(),
        reasonForMal : $('#reason-for-mal').val(),
        invigilator : $('#invigilator').val(),
        invigilatorFac : $('#invigilator-fac').val(),
        invigilatorDep : $('#invigilator-dep').val(),
        invigilatorSta : $('#invigilator-sta').val(),
        invigilatorDat : $('#invigilator-dat').val(),
        stuMatno : $('#stu-matno').val(),
        stuName : $('#stu-name').val(),
        studentAffirmation: studentAffirmation,
        exhibitAffirmation: exhibitAffirmation,
        studentSta : $('#student-sta').val(),
        studentDat : $('#student-dat').val(),
        chiefInv : $('#chief-inv').val(),
        investigator : $('#investigator').val(),
        investigatorFac : $('#investigator-fac').val(),
        investigatorDep : $('#investigator-dep').val(),
        investigatorSta : $('#investigator-sta').val(),
        investigatorDat : $('#investigator-dat').val(),
        sanction : $('#sanction').val(),
    }

    // Sending the data to the backend using fetch Api
    fetch('http://localhost:5000/add-student', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        alert(`${fullname} with matno: ${matno} is added to malpractie list`)
        console.log(data)
        window.location.reload(true);
        // ola()
    })
    .catch(err => console.log(err));

    function ola(){
        const formData = new FormData();
        const iE = document.getElementById('exhibitFile');
        const file = iE.files[0]
        
        formData.append('file', file);
        formData.append('name', 'ola');

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
            // headers: {'Content-type': 'multipart/form-data'}
        })
        .then((response)=>response.json())
        .then(data=>console.log(data))
        .catch(err => console.log(err))
    }
})

// const api_url = 'http://localhost:3000/requests';

// async function getapi(url){

//     const response = await fetch(url);
//     var data = await response.json();
//     if(response){
//         $('#tab').fadeOut();
//         $('.loadery').fadeIn(100)
//         $('.loadery').delay(2000)
//         $('.loadery').fadeOut(200)
//         $('#tab').fadeIn(300);
//     }
//     show(data);
// }
// getapi(api_url);

// var num;
// function show(data){
//     if(data[0].msg == "No pending flight booking"){
//         document.getElementById('tab').innerHTML = `<h2 style='color:black;'>${data[0].msg}</h2>`
//     } else{
//         let tab = `<tr><th>Username</th>
//         <th>From</th><th>To</th><th>Flight Type</th>
//         <th>Seat Number</th><th>Flight Time</th><th>No & Time</th>
//         <th>Status</th></tr>`;

//         for(let ol of data){
//         document.getElementById('tab').innerHTML = 
//             tab += `<tr onclick="num = ${ol.Sno};
//             document.getElementById('details').style.display = 'block';" class="item">
//             <td>${ol.Username}</td><td>${ol.xFrom}</td>
//             <td>${ol.xTo}</td><td>${ol.FlightType}</td><td>${ol.Flight_no}</td>
//             <td>${ol.FlightTime}</td><td>${ol.NoOfFlight}</td><td>${ol.Status}</td></tr>`
//         }
//     }
    
// }

// function closex(){
//     document.getElementById('details').style.display = 'none';
// }

// document.getElementById('btnn').addEventListener('click', ()=>{
//     const _data = {
//         Sno: num,
//     }

//     fetch('http://localhost:3000/approve', {
//         method: 'POST',
//         body: JSON.stringify(_data),
//         headers: {'Content-type': 'application/json; charset=utf-8'}
//     })
//     // .then(response => response.json())
//     .then(response => response.text())
//     .then(text => {
//         alert(text)
//         document.getElementById('details').style.display = 'none';
//         window.location.reload(true);
//     })
//     .catch(err => console.log(err));
// })
// document.getElementById('btnx').addEventListener('click', ()=>{
//     const _data = {
//         Sno: num,
//     }

//     fetch('http://localhost:3000/decline', {
//         method: 'POST',
//         body: JSON.stringify(_data),
//         headers: {'Content-type': 'application/json; charset=utf-8'}
//     })
//     // .then(response => response.json())
//     .then(response => response.text())
//     .then(text => {
//         alert(text)
//         document.getElementById('details').style.display = 'none';
//         window.location.reload(true);
//     })
//     .catch(err => console.log(err));
// })

