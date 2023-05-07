var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function exec() {
    socket.emit('send_msg', {msg: inputMsg.value});
}

socket.on('rcvd_msg', (data) => {
    let li_msg = document.createElement('li');
    li_msg.innerText = data.msg;
    msgList.appendChild(li_msg);
})