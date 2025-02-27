function intaliseArray() {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	});
}

function evenNumber(arr) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const even = arr.filter((num)=>num%2==0);
			document.getElementById("output").innerHTML+=even.map(x=>`<p>${x}</p>`);
			resolve(even);
		},1000)
	})
}

function multiplyNumber(arr) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			// document.getElementById("output").innerHTML+="";
			let doubled = arr.map(x=>x*2);
			document.getElementById("output").innerHTML+=doubled.map(x => `<p>${x}</p>`);
			resolve(doubled);
		},2000)
	})
}

function helper() {
	intaliseArray().then(evenNumber).then(multiplyNumber);
}

window.onload = helper;