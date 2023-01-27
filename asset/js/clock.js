function currentTime() {
    let date = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hh = date.getHours();
    let mm = date.getMinutes();

    let dd = date.getDate();
    let yyyy = date.getFullYear();
    let day = weekday[date.getDay()];
    let MM = month[date.getMonth()];

    dd = (dd < 10) ? "0" + dd : dd;

    let calendar = day + ", " + dd + " " + MM + " " + yyyy;

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm;

    document.getElementsByClassName("date-time__clock")[0].innerText = time;

    document.getElementsByClassName("date-time__calendar")[0].innerText = calendar;
    let t = setTimeout(function () { currentTime() }, 15000);
}
currentTime();