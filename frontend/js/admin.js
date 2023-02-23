var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username
    // loadRecord();
})

$('#reg').click(()=>{
    document.getElementById('frame').src = '../pages/overview.html';
    document.getElementById('reg').style.backgroundColor = 'white';
    document.getElementById('reg').style.color = '#017DBA';
    document.getElementById('viewrec').style.backgroundColor = '#017DBA';
    document.getElementById('viewrec').style.color = 'white';
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = '../pages/request.html'
    document.getElementById('viewrec').style.backgroundColor = 'white';
    document.getElementById('viewrec').style.color = '#017DBA';
    document.getElementById('reg').style.backgroundColor = '#017DBA';
    document.getElementById('reg').style.color = 'white';
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.html')
    }
});