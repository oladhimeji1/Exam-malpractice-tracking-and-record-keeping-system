window.onload = ()=>{
    const data = localStorage.getItem('data');
    showx(data)
    console.log(data)
}

function showx(data){
    console.log(data)
    let tab = `<tr>
    <th>Fullname</th>
    <th>Matric</th>
    <th>Exhibits</th>
    <th>Mal. Reason</th>
    <th>Sanction</th>
    <th>Invigilator</th>
    </tr>`;
 
    for(let ol of data){
        // console.log(data)
        var data = data;
        document.getElementById('tab').innerHTML = 
        tab += `<tr class='item'>
        <td>${ol.fullname}</td>
        <td>${ol.matno}</td><td>${ol.exhibit}</td>
        <td>${ol.reasonForMal}</td><td>${ol.sanction}</td>
        </tr>`
    }
    
}