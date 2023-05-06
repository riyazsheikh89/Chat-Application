var socket = io();

socket.on('from_server', () => {
    var div = document.createElement('div');
    div.innerText = 'New Emmit from Server';
    document.body.appendChild(div);
});


let btn = document.getElementById('btn');
btn.onclick = function () {
    socket.emit('from_client');
}