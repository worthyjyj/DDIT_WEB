/**
 * 
 */

function proc1(){
	
	let today = new Date();
	let day1 = today.toLocaleString(); 
	let day2 = today.toLocaleDateString();
	let day3 = today.toLocaleTimeString();
	
	//id=result인 요소를 검색 
	let vres = document.getElementById('result');
	
	//함수내에서 var/let은 역할이 같음. 차이점은 let은 똑같은 이름으로 중복 선언이안됨 .
	//let은 한 블록에서만 {} 사용가능 
	
	// 출력 
	let str = today + "<br>"; //선언없이 str += 하면 안된다! 
	str += day1 + "<br>";
	str += day2 + "<br>";
	str += day3 + "<br>";
	
	vres.innerHTML = str; 
   


  var sum = 0;
  for(var i=0; i<=10 ; i++){
	sum += i;

}
 alert(i + ", " + sum);

 const A = "123";

  alert(A)


}