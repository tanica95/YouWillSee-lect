var stop = document.getElementById('stop');
stop.onclick = stopCanvas;
   
function stopCanvas() {
    if (localStorage.getItem('stop') == '1') {
        localStorage.setItem('stop', '0')}
        console.log('stop');
};