console.log('test'); //1



let b =document.querySelector('body'); //2

b.innerHTML = "<p>ovo je recenica</p>"; //3

//  https://62a88cb0943591102ba4e94b.mockapi.io

let r = fetch('https://62a88cb0943591102ba4e94b.mockapi.io/Projekt1')
.then(response => response.json()).then(data => {
	console.log(data);
}).catch(error => {
	alert(error);
});





/*let t = document.querySelector('body p');

t.style.color = 'red';*/