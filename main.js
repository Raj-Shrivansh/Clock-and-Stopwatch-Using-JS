let timeinterval=setInterval(()=>{
    let dateTime=new Date();
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds=dateTime.getSeconds();
    let am_pm="AM";
    if(hours>12){
        hours=hours-12;  
        am_pm="PM" 
    }
    if(hours< 10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds
    }
    let day=dateTime.getUTCDay()
    let day_string="Sunday"
    switch (day){
        case 1:
            day_string="Monday";
            break;
        case 2:
            day_string="Tuesday";
            break;
        case 3:
            day_string="Wednesday"
            break;
        case 4:
            day_string="Thursday"
            break;
        case 5:
            day_string="Friday"
            break;
        case 6:
            day_string="Saturday"
            break;
        case 7:
            day_string="Sunday"
            break;   
    }
    document.getElementById("date").textContent=`${dateTime.toLocaleDateString()}(${day_string})`;
    document.getElementById("time").innerHTML=`${hours}:${minutes}:${seconds}:${am_pm}`
},1000);




