setInterval(function(){
    let eos = new Date('January 1, 2024 00:00:00');
    let today = new Date
    let diff = today - eos
    
    document.getElementById('count').innerText = dhms(diff)
    }, 1000)
    
    function dhms(ms){
      const days = Math.floor(ms / (24*60*60*1000));
      const daysms = ms % (24*60*60*1000);
      const hours = Math.floor(daysms / (60*60*1000));
      const hoursms = ms % (60*60*1000);
      const minutes = Math.floor(hoursms / (60*1000));
      const minutesms = ms % (60*1000);
      const sec = Math.floor(minutesms / 1000);
      return days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + sec + " Seconds.";
    }