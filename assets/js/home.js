// Clean locale storage
localStorage.clear();
// info
localStorage.setItem('start', '0');
localStorage.setItem('stop', '1');
// news
const items = ['notizierecenti', 'politica', 'economia', 'dalmondo', 'cronaca', 'sport', 'scienzaetecnologia', 'cultura'];
for(let item of items){
    localStorage.setItem(item, '0');
    localStorage.setItem('N_' + item, '0');
}