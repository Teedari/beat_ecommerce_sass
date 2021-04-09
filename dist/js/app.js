(function(){
  const navbar_toggler_button = document.querySelector('.navbar-toggler');
  navbar_toggler_button.addEventListener('click', function(){
    document.querySelector('.navbar-nav').classList.toggle('show');
    console.log('clicked')
  });


    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const play = document.getElementById('play');
    const slider = document.getElementById('duration_slider');
    


    let timer;
    // let autoplay = 0;

    // let index_no = 0;
    let playing_song = false;

    let track = document.createElement('audio');


    let load = () => {
      track.src = "music/Don-Blendon-Pull-Up-Chensee.mp3";
      track.load();
      console.log(track);
      timer = setInterval(function(){
        let position = 0;

        if(!isNaN(track.duration)){
          position = track.currentTime * (100 / track.duration);
          slider.value = position;
        }
      });
    }

    load();


    //checking
    let justplay = () => {
      if(playing_song == false){
        playsong();
      }else{
        pausesong();
      }
    }

    const playsong=()=>{
      track.play();
      playing_song = true;
      play.innerHTML = ` <i class="fa fa-pause" aria-hidden="true"></i>`;
    }

    const pausesong=()=>{
      track.pause();
      playing_song = false;
      play.innerHTML = ` <i class="fa fa-play" aria-hidden="true"></i>`;
    }
    

    function change_duration(){
      const slider_position = track.duration * (slider.value / 100);
      track.currentTime = slider_position;
      console.log(track);
    }

    play.addEventListener('click', justplay);
     

})()