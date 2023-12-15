




let apiKEY = '69ef989817e225dd011087faf8239130';
let accTemp = 26;
let temp = 0;
let condition = 'Smoke';
let humidity = 35;


let cityName = '';


async function checkWeather(cityName){

	let apiURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKEY}`;

	const response = await fetch(apiURL2);

	if(response.status == 404){
		document.querySelector('.error').innerHTML = 'Invalid city name';

	}
	else{
		document.querySelector('.error').innerHTML = '';
		var data = await response.json();
		// console.log(data);
		accTemp = data.main.temp - 273;
		temp = accTemp.toFixed(0);
	
	
		
		
		condition = data.weather[0].main;
		humidity = data.main.humidity;
		cityNameJSON = data.name;
		// console.log(temp);
		// console.log(cityNameJSON);
		// console.log(condition);
		// console.log(humidity);
		document.querySelector('.city-name').innerHTML = String(cityNameJSON);
		document.querySelector('.temp').innerHTML = String(`${temp}&#x2103`);
		
		document.querySelector('.humidity').innerHTML = String(`${humidity}%`);
	
		function imageDecider(){
			if(condition === 'Clouds' || condition === 'Smoke'){
				document.querySelector('.js-weather-images').innerHTML = `<img class="weather-pics" src = "images/cloudy-removebg-preview.png">`;
			}
			else if (condition === 'Clear') {
				document.querySelector('.js-weather-images').innerHTML = `<img class="weather-pics" src = "images/sunny-removebg-preview.png">`;
			} 
			else if (condition === 'Rain') {
				document.querySelector('.js-weather-images').innerHTML = `<img class="weather-pics" src = "images/rainy-removebg-preview (1).png">`;
			} 
			else if (condition === 'Mist') {
				document.querySelector('.js-weather-images').innerHTML = `<img class="weather-pics" src = "images/cloudy-removebg-preview.png">`;
			} 
			else if (condition === 'Thunderstorm') {
				document.querySelector('.js-weather-images').innerHTML = `<img class="weather-pics" src = "images/thunder-removebg-preview.png">`;
			} 
	
		}
		imageDecider();
		
	
		function iconDecider(){
			if(condition === 'Clear' ){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/clear sky.png">
				<div class="condition-name">Clear sky </div>`;
			}
			else if(condition === 'Clouds'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/few clouds.png">
				<div class="condition-name">Few clouds </div>`;
			}
			else if(condition === 'Scattered clouds'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/scattered clouds.png">
				<div class="condition-name">Scattered Clouds</div>`;
			}
			else if(condition === 'Broken clouds'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/broken clouds.png">
				<div class="condition-name">Broken Clouds</div>`;
			}
			else if(condition === 'Shower rain'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/shower rain.png">
				<div class="condition-name">Shower rain</div>`;
			}
			else if(condition === 'Rain'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/rain.png">
				<div class="condition-name">Rain</div>`;
			}
			else if(condition === 'Thunderstorm'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/thunderstorm.png">
				<div class="condition-name">Thunderstorm</div>`;
			}
			else if(condition === 'Snow'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/snow.png">
				<div class="condition-name">Snow</div>`;
			}
			else if(condition === 'Mist'){
				document.querySelector('.js-condition').innerHTML = `<img class="weather-pics" src = "icons/day/mist.png">
				<div class="condition-name">Mist</div>`;
			}
		
		}
		iconDecider();
	}

}

function getValue(){
	const inputElement = document.querySelector('.js-city-name');
	 city = inputElement.value;
	 cityName = city;
	//  console.log(city);
	 return checkWeather(cityName);
}

addEventListener("keypress", function(event){
	if(event.key === "Enter"){
		// event.preventDefault();
		getValue();
		console.log("Hello");
	}
});




