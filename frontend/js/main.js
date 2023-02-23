
var traveltype, economic, premium, business, first;
$(document).ready(()=>{
    const cookies = document.cookie.split(';')
    const cookiesList = [];
    cookies.forEach(cookie =>{
        const name = decodeURIComponent(cookie.trim().split('=')[0]);
        const value = decodeURIComponent(cookie.trim().split('=')[1]);
        cookiesList.push(`{"${name}":"${value}"}`);
    })
    const cookieString = cookiesList.join(',');
    console.log(cookieString)
})

$('.search').click(()=>{
    
    const _data = {
        fullname : $('#user-input').val().toUpperCase(),
    }
    const _datax = {
        matno : $('#user-input').val().toUpperCase(),
    }
    $('.framecon').slideToggle(500)

    // Sending the user search input to the backend using fetch Api
    fetch('http://localhost:5000/search', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    
    .then(data => {
        sendData(_datax)
        console.log(data)
        if(data == ![]){
            console.log('nothing')
        }else{
            console.log('something')
        }
        // document.getElementById('frame').src = './pages/search.html';
    })
    .catch(err => console.log(err));

});

function sendData(x){
    // Sending the user search input to the backend using fetch Api
    fetch('http://localhost:5000/search', {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    
    .then(data => {
        if(data == ![]){
            console.log('nothing')
        }else{
            // console.log('something')
            show(data);
            // localStorage.setItem('data', data)
        }
        // console.log(data)
        // show(data);
        // document.getElementById('frame').src = './pages/search.html';
    })
    .catch(err => console.log(err));
}



$('.header-right').click(()=>{
    if(confirm('Want to log in to dashboard?')){
        window.location.assign('./pages/login.html')
    }
})