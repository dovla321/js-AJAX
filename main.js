console.log('test'); //1



let b =document.querySelector('body'); //2

b.innerHTML = "<p>ovo je recenica</p>"; //3

//  https://62a88cb0943591102ba4e94b.mockapi.io

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if(this.readyState == 4 && this.status == 200){
		 console.log(xhttp.responseText);
	}
}

xhttp.open('GET', 'https://62a88cb0943591102ba4e94b.mockapi.io/Projekt1', true);
xhttp.send();



document.write("pisanje");  //4

/*let t = document.querySelector('body p');

t.style.color = 'red';*/