import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();
const todaysDate = today.format('dddd, D MMM');
const apiUrl = ' https://api.weatherapi.com/v1/forecast.json?';
const apiKey = '33bc064d1ccc4de6ae184238251611';
const days = 7;
const hourlyContainer = document.querySelector('.ctn-hourly');
const searchBox = document.querySelector('.input-search');
const searchBtn = document.querySelector('.search-btn');




/* - GET THE SHORT DATES - */
function getShortDay (targetDate) {
  const dateObj = new Date(targetDate);
  const weekDays = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday'];
  const shortWeekdays = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri','Sat'];
  const dayName = weekDays[dateObj.getDay()];
  const shortDay = shortWeekdays[dateObj.getDay()];
  return shortDay;
}

/* ----- */


const country = document.querySelector('.js-country');
const temperature = document.querySelector('.js-temperature');
const currentDate = document.querySelector('.js-date');
const weatherIcon = document.querySelector('.js-weather');
const feelsLike = document.querySelector('.js-feel-like');
const humidity = document.querySelector('.js-humidity');
const wind = document.querySelector('.js-wind');
const precipitation = document.querySelector('.js-precp');
const weekDay = document.querySelector('.weekday');

const firstDay = document.querySelector('.day-one');
const firstDayImg = document.querySelector('.one-image');
const firstDayMaxTemp = document.querySelector('.one-maxtemp');
const firstDayMinTemp = document.querySelector('.one-mintemp');

const secondDay = document.querySelector('.two');
const secondDayImg = document.querySelector('.second-img');
const secondDayMaxTemp = document.querySelector('.two-maxtemp');
const secondDayMinTemp = document.querySelector('.two-mintemp');

const thirdDay = document.querySelector('.three');
const thirdDayImg = document.querySelector('.third-image');
const thirdDayMaxTemp = document.querySelector('.three-maxtemp');
const thirdDayMinTemp = document.querySelector('.three-mintemp');

const fourthDay = document.querySelector('.four');
const fourthDayImg = document.querySelector('.fourth-image');
const fourthDayMaxTemp = document.querySelector('.fourth-maxtemp');
const fourthDayMinTemp = document.querySelector('.four-mintemp');

const fifthDay = document.querySelector('.five');
const fifthDayImg = document.querySelector('.fifth-image');
const fifthDayMaxTemp = document.querySelector('.fifth-maxtemp');
const fifthDayMinTemp = document.querySelector('.fifth-mintemp');

const sixthDay = document.querySelector('.sixth');
const sixthDayImg = document.querySelector('.six-image');
const sixthDayMaxTemp = document.querySelector('.sixth-maxtemp');
const sixthDayMinTemp = document.querySelector('.sixth-mintemp');

const sevethDay = document.querySelector('.seventh');
const sevethDayImg = document.querySelector('.seven-image');
const sevethDayMaxTemp = document.querySelector('.seventh-maxtemp');
const sevethDayMinTemp = document.querySelector('.seventh-mintemp');
const foreDay = document.querySelector('.fore-day');

async function  checkWeather(city) {
  try {
      const response = await fetch(apiUrl + `key=${apiKey}`+ `&q=${city}` + `&days= ${days}` + '&aqi=no' + '&alerts=no');
      const data = await response.json();
      const currentWeatherData = data;
    console.log(data)

      //localStorage.setItem('apiData', JSON.stringify(data));
      foreDay.innerHTML = dayjs().format('dddd')
      country.innerHTML = `${data.location.name  }, ${data.location.country}`;
      currentDate.innerHTML = todaysDate;
      weatherIcon.src = data.current.condition.icon;
      temperature.innerHTML = `${Math.round(data.current.temp_c)}&#176;`;
      feelsLike.innerHTML = `${data.current.feelslike_c} &#176;`;
      humidity.innerHTML = `${data.current.humidity}%`;
      wind.innerHTML = `${data.current.wind_mph} mph`;
      precipitation.innerHTML = `${data.current.precip_in} in`;

      
      const weekDayForecast = data.forecast.forecastday;

      firstDay.innerHTML = getShortDay(weekDayForecast[0].date);
      firstDayImg.src = weekDayForecast[0].day.condition.icon;
      firstDayMaxTemp.innerHTML = `${Math.round(weekDayForecast[0].day.maxtemp_c)}&#176;` ;
      firstDayMinTemp.innerHTML =`${ Math.round(weekDayForecast[0].day.mintemp_c)}&#176;` ;

      secondDay.innerHTML = getShortDay(weekDayForecast[1].date);
      secondDayImg.src = weekDayForecast[1].day.condition.icon;
      secondDayMaxTemp.innerHTML =`${ Math.round(weekDayForecast[1].day.maxtemp_c)}&#176;`;
      secondDayMinTemp.innerHTML =`${ Math.round(weekDayForecast[1].day.mintemp_c)}&#176;` ;

      thirdDay.innerHTML = getShortDay(weekDayForecast[2].date);
      thirdDayImg.src = weekDayForecast[2].day.condition.icon;
      thirdDayMaxTemp.innerHTML =`${Math.round(weekDayForecast[2].day.maxtemp_c)}&#176;` ;
      thirdDayMinTemp.innerHTML =`${Math.round(weekDayForecast[2].day.mintemp_c) }&#176;`;
      
      fourthDay.innerHTML = getShortDay(weekDayForecast[3].date);
      fourthDayImg.src = weekDayForecast[3].day.condition.icon;
      fourthDayMaxTemp.innerHTML =`${ Math.round(weekDayForecast[3].day.maxtemp_c)}&#176;` ;
      fourthDayMinTemp.innerHTML =`${ Math.round(weekDayForecast[3].day.mintemp_c)}&#176;` ;

      fifthDay.innerHTML = getShortDay(weekDayForecast[4].date);
      fifthDayImg.src = weekDayForecast[4].day.condition.icon;
      fifthDayMaxTemp.innerHTML =`${ Math.round(weekDayForecast[4].day.maxtemp_c)}&#176;`;
      fifthDayMinTemp.innerHTML =`${Math.round(weekDayForecast[4].day.mintemp_c)}&#176;` ;

      sixthDay.innerHTML = getShortDay(weekDayForecast[5].date);
      sixthDayImg.src = weekDayForecast[5].day.condition.icon;
      sixthDayMaxTemp.innerHTML =`${Math.round(weekDayForecast[5].day.maxtemp_c)}&#176;` ;
      sixthDayMinTemp.innerHTML =`${ Math.round(weekDayForecast[5].day.mintemp_c)}&#176;` ;

      sevethDay.innerHTML = getShortDay(weekDayForecast[6].date);
      sevethDayImg.src = weekDayForecast[6].day.condition.icon;
      sevethDayMaxTemp.innerHTML =`${Math.round(weekDayForecast[6].day.maxtemp_c) }&#176;`;
      secondDayMinTemp.innerHTML =`${ Math.round(weekDayForecast[6].day.mintemp_c) }&#176;`;


  /*let daysHTML ='';
    weekDayForecast.forEach(days => {
    daysHTML +=`
  <div class="days ">
              <a>${getShortDay(days.date)}</a>
              <img src="${days.day.condition.icon}">
              <span class="spanner">
                <a>${days.day.maxtemp_c}&#176;</a>
                <a>${days.day.mintemp_c}&#176;</a>
              </span>
            </div>`;
      weekDay.innerHTML = daysHTML;
    });*/


    // ---- HOURLY FORECAST FUNCTION ----
function renderHourly(index, data) {

  hourlyContainer.innerHTML = ''
  const hours = data.forecast.forecastday[index].hour;

  hours.forEach(h => {
    const time = dayjs(h.time).format("h A");
    const temp = Math.round(h.temp_c);
    const icon = h.condition.icon;

    const hourHTML = `
    <div class="hourly-forecast">
      <a class="hours">
        <img src="${icon}">${time}
      </a>
      <a>${temp} &#176;</a>
      </div>
    `;

    hourlyContainer.innerHTML += hourHTML;
  });
}

renderHourly(0, data);
// render default (today)

// enable switching to Mon, Tue, etc.
const daySelector = document.querySelector('.day-selector');

daySelector.querySelectorAll('.diff-days').forEach(day => {
  day.addEventListener('click', () => {
    const index = parseInt(day.value, 10); // safely convert value to number

    if (isNaN(index)) {
      console.error('Invalid day index:', day.value);
      return;
    }
    renderHourly(index, data);
  });
});



} catch(error) {
 
}
}
searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value);
  searchBox.value  = '';
});
searchBox.addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
    searchBox.value = '';
  }
});
