document.addEventListener("DOMContentLoaded", function(event){
    var eos = new Date('January 1, 2024 00:00:00');
    var today = new Date
    var diff = today - eos
    
    document.getElementById('count').innerText = dhms(diff)
    setInterval(function(){
        var eos = new Date('January 1, 2024 00:00:00');
        var today = new Date
        var diff = today - eos
        
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
          return days + " Days, " + hours + " Hours, " + minutes + " Minutes, and " + sec + " Seconds";
        }
    document.getElementById('text').innerText = "that Alex has not done his punishment."
    document.getElementById('img').src = "https://media1.tenor.com/m/PckgvXqLzHsAAAAC/eagles-suck.gif"
})
