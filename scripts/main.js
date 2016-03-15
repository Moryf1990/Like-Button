var button = document.querySelector('.button');
var reset = document.querySelector('.reset');
var count = 0;

button.addEventListener('click', addClick);

function addClick() {
    count ++;
    if(count ===1) {
        button.innerHTML = (count + ' Like');
    }
    else {
        button.innerHTML = (count + ' Likes');
    }
}


reset.addEventListener('click', resetCounter)

function resetCounter() {
	count = 0;
	button.innerHTML = (count + ' Likes');
}