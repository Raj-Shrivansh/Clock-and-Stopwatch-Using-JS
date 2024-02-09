// This function for clock
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
            day_string="Wednesday";
            break;
        case 4:
            day_string="Thursday";
            break;
        case 5:
            day_string="Friday";
            break;
        case 6:
            day_string="Saturday";
            break;
        case 7:
            day_string="Sunday";
            break;   
    }
    document.getElementById("date").textContent=`${dateTime.toLocaleDateString()}(${day_string})`;
    document.getElementById("time").innerHTML=`${hours}:${minutes}:${seconds}:${am_pm}`
},1000);

// For Stopwatch
let [miliseconds,seconds, minutes, hours] =[0,0,0,0];
let timerElement=document.getElementById('stopwatch')
let time=null;
    
    document.getElementById('start').addEventListener('click',()=>{
        console.log('start click')
        if(time!=null){
            clearInterval(time)
        }
        time=setInterval(Timer,10)
    })
    document.getElementById('stop').addEventListener('click',()=>{
        clearInterval(time)
    })
    document.getElementById('reset').addEventListener('click',()=>{
        clearInterval(time);
        console.log(miliseconds,seconds,minutes,hours)
        // [miliseconds,seconds, minutes, hours] =[0,0,0,0]
        timerElement.textContent='00:00:00:00'
    })
    function Timer(){
        miliseconds+=10
        if(miliseconds>=1000){
            miliseconds=0
            seconds++;
            if (seconds>=60){
                minutes++
                seconds=0;
                if(minutes>=60){
                    minutes=0;
                    hours++;
                }
            }
        }
        if(hours< 10){
            h="0"+hours;
        }
        if(minutes<10){
            m="0"+minutes;
        }
        if(seconds<10){
            s="0"+seconds
        }
        ms=miliseconds
        console.log(hours,minutes,seconds)
        timerElement.textContent=`${h}:${m}:${s}:${ms.toString().slice(0,2)}`
    }



function sum(a,b){
    return a+b;
}
console.log(2,4)