function makeBody() {
    document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');

btn.onclick = function() {
    makeBody('teal');
}

const violetBtn = document.querySelector('#violet')

violetBtn.addEventListener('click', function() {
    makeBody('violet');
});