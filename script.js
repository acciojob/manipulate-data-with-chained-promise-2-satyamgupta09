function prom1(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve ([1, 2, 3, 4]);
		},3000)
	})
}

function prom2(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newArr = arr.filter((num)=>num%2==0);
			resolve(newArr)
		},1000);
	})
}

function prom3(arr) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newArr = arr.map((num)=>num*2);
			resolve(newArr);
		},2000);
	})
}

prom1().then((res)=> { return prom2(res)})
	.then((data)=>{
	  document.getElementById("output").innerHTML =data.map((num)=>`<p>${num}</p>`);
	  return prom3(data); 
	})
	.then((data2)=>
		{
			document.getElementById("output").innerHTML =data2.map((num)=>`<p>${num}</p>`);
		}
	)
