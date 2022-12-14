    setInterval(()=>{
        let time = new Date();
        let date = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
    
        if(date<10){
            date = "0" + date;
        }else{
            date = date;
        }
        if(hours<10){
         hours = "0" + hours;
        }else{
            hours = hours;
        }
    
        if(minutes<10){
            minutes = "0" + minutes;
        }else{
            minutes = minutes;
        }
    
        if(seconds<10){
            seconds = "0" + seconds;
        }else{
            seconds = seconds;
        }
    
        document.querySelector(".days").innerHTML = date;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
    },1000);