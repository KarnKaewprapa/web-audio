audio = new (window.AudioContext || window.webkitAudioContext)()
    osci = audio.createOscillator()
    gain = audio.createGain()
    osci.connect(gain)
    gain.connect(audio.destination)
      
    function note(f){
      //เล่น โน๊ต
      let time = audio.currentTime
		let note_osci = audio.createOscillator()
      let note_gain = audio.createGain()
      note_osci.connect(note_gain)
      note_gain.connect(audio.destination)
      note_osci.frequency.value = f
      note_osci.start()
      note_gain.gain.value = 1;
      note_gain.gain.linearRampToValueAtTime(0,time+0.4)
    }
      
    document.body.onkeydown = function(event){
		console.log(event)
      // white key
      let key = event.key
      if(key == 'a'){
			event_key_a.click()
      }
      if(key == 's'){
			event_key_s.click()
      }
      if(key == 'd'){
			event_key_d.click()
      }
      if(key == 'f'){
			event_key_f.click()
      }
      if(key == 'g'){
			event_key_g.click()
      }
      if(key == 'h'){
			event_key_h.click()
      }
      if(key == 'j'){
			event_key_j.click()
      }
      if(key == 'k'){
			event_key_k.click()
      }
      // black key
      if(key == 'w'){
			event_key_w.click()
      }
      if(key == 'e'){
			event_key_e.click()
      }
      if(key == 't'){
			event_key_t.click()
      }
      if(key == 'y'){
			event_key_y.click()
      }
      if(key == 'u'){
			event_key_u.click()
      }
    }