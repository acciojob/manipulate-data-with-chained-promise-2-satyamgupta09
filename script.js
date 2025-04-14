function prom1(){
	return new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve([1, 2, 3, 4]);
	},3000);
})
}

function prom2(arr) {
	return new Promise((resolve, reject) => {
	setTimeout(()=>{
		let newArr = arr.filter(item => item%2==0);
		resolve(newArr);
	},1000);
})
}

function prom3(arr){
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			let newArr = arr.map(item => item*2); 
			resolve(newArr);
		},2000);
	})
}

prom1().then(data =>{
	return prom2(data);
}).then(data => {
	document.getElementById('output').innerHTML = data.map(item => `<p>${item}</p>`);
	return prom3(data);
}).then(data => {
	document.getElementById('output').innerHTML = data.map(item => `<p>${item}</p>`)
})



// function prom1(){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			resolve([1,2,3,4])
// 		},3000)
// 	})
// }


// function prom2(arr){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newArr = arr.filter((item)=>item%2==0);
// 			resolve(newArr);
// 		},1000)
// 	})
// }

// function prom3(arr){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newArr = arr.map((item)=>item*2);
// 			resolve(newArr);
// 		},3000)
// 	})
// }

// prom1().then(res=>{return prom2(res)})
// 	.then(res=>{
// 	document.getElementById('output').innerHTML=res.map((item)=>`<p>${item}</p>`);
// 	return prom3(res);
// }).then(data=>{
// 	document.getElementById('output').innerHTML=data.map((item)=>`<p>${item}</p>`)
// })