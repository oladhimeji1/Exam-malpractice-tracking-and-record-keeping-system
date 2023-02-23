var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username
    // loadRecord();
})

$('#formx').click(()=>{
    document.getElementById('frame').src = 'fill.html'
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = 'table.html'
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.html')
    }
});
