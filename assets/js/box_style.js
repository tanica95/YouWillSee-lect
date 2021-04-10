// stilizzazione categorie + sketch dopo che è stato attivaato il canvas p5.js

if (localStorage.getItem('start') == '1') {
    var container = document.getElementById('category-sketch');
    container.classList.remove('wrapper');
    container.classList.add('wrapper-sketch');

    
    
    var noline = document.getElementsByClassName('line');
    // noline.classList.remove('line');
}