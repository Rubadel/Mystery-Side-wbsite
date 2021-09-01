
function play(){
			var audio = document.getElementById("audio");
			audio.play();
								}
								function play(){
											var audio = document.getElementById("audio");
									if(audio.paused){
									    audio.play();
									    play.style.background = url('pause1.png') ;
								    } else {
									    audio.pause();
									    play.style.background = url('play.png');
								    }
								}
