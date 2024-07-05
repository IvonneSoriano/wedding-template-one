$(document).ready(function(){
    const apiKey = "AIzaSyBpsa2cQXnkT8cdwdj10V6D1QaM-jKbZSM";
    if($("body").hasClass("clemente-bojorquez")){
        // loadSong(apiKey);
        $("#play-paused-button").click(function (e) { 
            // e.preventDefault();
            const isPlaying = $(".album-art").hasClass("active");   
            $(".album-art").toggleClass("active");    
            $(".player-track").toggleClass("active");
            if(isPlaying){
                pauseSong();
            }    
            else{
                playSong();
            }
            
        });
    }
  
    });

    function pauseSong(){
        $("#play-paused-button i").removeClass("fa-pause");    
        $("#play-paused-button i").addClass("fa-play");    
    }

    async function loadSong(apiKey){
        const res = await fetch(`https://www.youtube.com/watch?v=YwodhCjFbQ8${apiKey}`)
        console.log(res)
    }

    function playSong(){
        $("#play-paused-button i").removeClass("fa-play");    
        $("#play-paused-button i").addClass("fa-pause");    
        
        audio.play();
    }