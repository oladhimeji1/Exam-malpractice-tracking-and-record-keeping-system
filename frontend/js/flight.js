var Depdate, Retdate, cityname, Country, Destination, ftype, identification;
var fullname, HomeAddress, PassportId, phone, reason, Means_of_id

var ful = document.getElementById('ful');
var idp = document.getElementById('idp');
var start = document.getElementById('start');
var end = document.getElementById('end');
var cityx = document.getElementById('cityx');
var countryx = document.getElementById('countryx');
var daddress = document.getElementById('daddress');
var addressx = document.getElementById('addressx');
var phonex = document.getElementById('phonex');
var ftypex = document.getElementById('ftypex');
var msg = document.getElementById('msg');
var means = document.getElementById('means');
var identification = document.getElementById('identi');

var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    // loadRecord();
})

$('#btn-next').click(()=>{
    Depdate = $('#Depdate').val();
    Retdate = $('#Retdate').val();
    cityname = $('#cityname').val();
    Country = $('#Country').val();
    Destination = $('#Destination').val();
    ftype = $('#ftype').val();
    identification = $('#identification').val();
    
    $('#flight').hide(500, ()=>{
        $('#personal').show(500)
    })
});

$('#btn-prev').click(()=>{
    $('#personal').hide(500, ()=>{
        $('#flight').show(500)
    })
})

$('#btn-submit').click(()=>{
    fullname = $('#fullname').val();
    HomeAddress = $('#HomeAddress').val();
    PassportId = $('#PassportId').val();
    phone = $('#phone').val();
    reason = $('#reason').val();
    Means_of_id = $('#Means_of_id').val();

    $('#personal').hide(500, ()=>{
        $('#contprev').show(500)
    })

    ful.innerHTML = fullname;
    idp.innerHTML = PassportId;
    start.innerHTML = Depdate;
    end.innerHTML = Retdate;
    cityx.innerHTML = cityname;
    countryx.innerHTML = Country;
    daddress.innerHTML = Destination;
    addressx.innerHTML = HomeAddress;
    phonex.innerHTML = phone;
    ftypex.innerHTML = ftype;
    msg.innerHTML = reason;
    identi.innerHTML = identification;
    means.innerHTML = Means_of_id;

});

$('.btn-times').click(()=>{
    $('#contprev').hide(500);
    $('#personal').show(500);
});

$('#submitx').click(()=>{
    $('.loadery'). show(500)

    const _data = {
        Username: username,
        Fullname: fullname,
        PassportId: PassportId,
        Depdate: Depdate,
        Retdate: Retdate,
        City: cityname,
        Country: Country,
        Destination: Destination,
        HomeAddress: HomeAddress,
        Phone: phone,
        FlightType: ftype,
        Reason: reason,
        Identification: identification,
        Means_of_id: Means_of_id
    }
    console.log(_data)
    fetch('http://localhost:3000/add-user', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    // .then(response => response.json())
    .then(response => response.text())
    // .then(datax => console.log(datax))
    .catch(err => console.log(err));

    setTimeout(()=>{
        $('.loadery'). hide(500)
    }, 1000);

    $('#contprev').hide(500);
})
