
var username;
var ola

// $(document).ready(()=>{
//     username = sessionStorage.getItem('username');
    // loadRecord()   
// })

const api_url = 'http://localhost:5000/loadrec';

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

    var num;
function show(data){
   
    let tab = ` <tr>
    <th>Fullname</th>
    <th>Facuty</th>
    <th>Matric</th>
    <th>Code</th>
    <th>Title</th>
    <th>Hall</th>
    <th>Date</th>
    <th>Exhibits</th>
    <th>Mal. Reason</th>
    <th>Invigilator</th>
    <th>Invg-Fac</th>
    <th>Invg-Dep</th>
    <th>Invg-Stat</th>
    <th>Invg-Dat</th>
    <th>Stu-Affr</th>
    <th>Exh-Affr</th>
    <th>Stu-Stmt</th>
    <th>Stu-Dat</th>
    <th>Inves-com</th>
    <th>Inves-Name</th>
    <th>Inves-Fac</th>
    <th>Inves-Dep</th>
    <th>Inves-Stat</th>
    <th>Inves-Dat</th>
    <th>Sanction</th>
    </tr>`;
 
    for(let ol of data){
        // console.log(data)
        var data = data;
        document.getElementById('tab').innerHTML = 
        tab += `<tr class='item' title='click here to view record'
        onclick = "num = '${ol.matno}';
        readOne();"><td>${ol.fullname}</td><td>${ol.faculty}</td>
        <td>${ol.matno}</td><td>${ol.coursecode}</td>
        <td>${ol.coursetitle}</td><td>${ol.examhall}</td>
        <td>${ol.date}</td><td>${ol.exhibit}</td><td>${ol.reasonForMal}</td>
        <td>${ol.invigilator}</td><td>${ol.invigilatorFac}</td>
        <td>${ol.invigilatorDep}</td><td>${ol.invigilatorSta}</td>
        <td>${ol.invigilatorDat}</td><td>${ol.studentAffirmation}</td><td>${ol.exhibitAffirmation}</td>
        <td>${ol.studentSta}</td><td>${ol.studentDat}</td>
        <td>${ol.chiefInv}</td><td>${ol.investigator}</td>
        <td>${ol.investigatorFac}</td><td>${ol.investigatorDep}</td>
        <td>${ol.investigatorSta}</td><td>${ol.investigatorDat}</td>
        <td>${ol.sanction}</td>
        </tr>`
    }
    
}
function readOne(){
    $('#detail').toggle(300)
    const _data = {
        matno: num,
    }

    fetch('http://localhost:5000/readone', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => {
        data.map(ol => {
           document.getElementById('detail').innerHTML =
            `<p>Fullname: <span>${ol.fullname}</span></p>
            <p>Faculty: <span>${ol.faculty}</span></p>
            <p>Matric: <span>${ol.matno}</span></p>
            <p>Code: <span>${ol.coursecode}</span></p>
            <p>Course Title: <span>${ol.coursetitle}</span></p>
            <p>Exam Hall: <span>${ol.examhall}</span></p>
            <p>Date: <span>${ol.date}</span></p>
            <p>Exhibits: <span>${ol.exhibit}</span></p>
            <p>Invigilator Name: <span>${ol.invigilator}</span></p>
            <p>Invigilator Faculty: <span>${ol.invigilatorFac}</span></p>
            <p>Invigilator Department: <span>${ol.invigilatorDep}</span></p>
            <p>Invigilator Status: <span>${ol.invigilatorSta}</span></p>
            <p>Invigilator Date: <span>${ol.invigilatorDat}</span></p>
            <p>Student Affirmation: <span>${ol.studentAffirmation}</span></p>
            <p>Exhibit Affirmation: <span>${ol.exhibitAffirmation}</span></p>
            <p>Student Statement: <span>${ol.studentSta}</span></p>
            <p>Student Date: <span>${ol.studentDat}</span></p>
            <p>Chief Investigator's Comment: <span>${ol.chiefInv}</span></p>
            <p>Investigator Name: <span>${ol.investigator}</span></p>
            <p>Investigator Faculty: <span>${ol.investigatorFac}</span></p>
            <p>Investigator Department: <span>${ol.investigatorDep}</span></p>
            <p>Investigator StStatementat: <span>${ol.investigatorSta}</span></p>
            <p>Investigator Date: <span>${ol.investigatorDat}</span></p>
            <p>Sanction: <span>${ol.sanction}</span></p>`
        })
    })
    .catch(err => console.log(err));
}

document.getElementById('searchbar').addEventListener("keyup",function(){
    
    var keyword = this.value;
    keyword = keyword.toUpperCase();
    var table_2 = document.getElementById("tab");
    var all_tr = table_2.getElementsByTagName("tr");
    for(var i=0; i<all_tr.length; i++){
        var name_column = all_tr[i].getElementsByTagName("td")[0];
        var email_column = all_tr[i].getElementsByTagName("td")[2];
        var sanction_column = all_tr[i].getElementsByTagName("td")[24];
        if(name_column && email_column && sanction_column){
            var name_value = name_column.textContent || name_column.innerText;
            var email_value = email_column.textContent || email_column.innerText;
            var sanction_value = sanction_column.textContent || sanction_column.innerText;
            name_value = name_value.toUpperCase();
            email_value = email_value.toUpperCase();
            sanction_value = sanction_value.toUpperCase();
            if((name_value.indexOf(keyword) > -1) || (sanction_value.indexOf(keyword) > -1) || (email_value.indexOf(keyword) > -1)){
                all_tr[i].style.display = ""; // show
            }else{
                all_tr[i].style.display = "none"; // hide
            }
        }
    }
})      
