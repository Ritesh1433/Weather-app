const submitbtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName")
const city_n = document.getElementById("city_name")
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const sday = document.getElementById("day");
const sdate = document.getElementById("today_date");
const datahide = document.querySelector(".middle_layer");
const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_n.innerText = "pls first enter the city";
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=0bd4643ca58e570f2b8d6917582aa186`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(data);
            temp_real_val.innerText = arrdata[0].main.temp;
            const tempmod = arrdata[0].weather[0].main;
            const cname = arrdata[0].name;
            city_name.innerText = cname + " " + "," + arrdata[0].sys.country;;
            if (tempmod == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68; ' ></i > ";
            }
            else if (tempmod == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6; ' ></i > ";
            }
            else if (tempmod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style = 'color: #a4b0be; ' ></i > ";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6; ' ></i > ";
            }
            datahide.classList.remove("data_hide")
        } catch {
            city_n.innerText = "pls enter city name";
            datahide.classList.add("data_hide")
        }



    }
}
submitbtn.addEventListener("click", getinfo)
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};
sday.innerText = getCurrentDay();




const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month} ${date} | ${hours}:${mins}${periods}`;
};
sdate.innerText = getCurrentTime();