$(document).ready(function(){
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

    $("#backward-button").click(function(e){
        prevSong();
    })
    $("#forward-button").click(function(e){
        prevSong();
    })

    audio.addEventListener("timeupdate", updateProgress);
  
    $(".progress-container").click(function(e){
        setProgress(e);
    });
    });

    function setProgress(e){
        const width = $(".progress-container").width();
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width ) * duration;
        // const clickX = e.offsetX;
    }

    function updateProgress(e){
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) *100;
        // console.log(progressPercent);
        const progress = document.getElementById("progress");
        progress.style.width = `${progressPercent}%`;
    }

    function pauseSong(){
        $("#play-paused-button i").removeClass("fa-pause");    
        $("#play-paused-button i").addClass("fa-play");    
        audio.pause();
    }

    async function loadSong(){
        const audio = document.getElementById("audio");
        audio.src = `../music/song.mp3`;
        console.log(res)
    }

    function playSong(){
        $("#play-paused-button i").removeClass("fa-play");    
        $("#play-paused-button i").addClass("fa-pause");    
        
        audio.play();
    }

    function prevSong(){
    loadSong();
    playSong();
    }
