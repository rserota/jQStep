
var C1 = new Audio('sounds/C1.wav'),
    D1 = new Audio('sounds/D1.wav'),
    E1 = new Audio('sounds/E1.wav'),
    F1 = new Audio('sounds/F1.wav'),
    G1 = new Audio('sounds/G1.wav'),
    A1 = new Audio('sounds/A1.wav'),
    B1 = new Audio('sounds/B1.wav'),
    C2 = new Audio('sounds/C2.wav'),
    D2 = new Audio('sounds/D2.wav'),
    E2 = new Audio('sounds/E2.wav'),
    F2 = new Audio('sounds/F2.wav'),
    G2 = new Audio('sounds/G2.wav'),
    A2 = new Audio('sounds/A2.wav'),
    B2 = new Audio('sounds/A2.wav')



var song = {
	numSteps : 0,
	notesOn : [[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	bpm : 120,
	notes : [B2, A2, G2, F2, E2, D2, C2, B1, A1, G1, F1, E1, D1, C1],
    noteNames : ['B', 'A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'E', 'D', 'C'],
	intervalID : undefined,
	TimeoutIDs : []
}
$(document).ready(function(){


    var setStepHandlers = function(){
    	$('.button.stepButton').on("click",function(){
            $(this).toggleClass('on')
            var col = $(this).index()
            var row = $(this).parent().index()
            song.notesOn[row][col] = !song.notesOn[row][col]
            console.log(song.notesOn)
        })
    }
    
    setStepHandlers()


/** Set up the step counter */
	for (var i = 1; i <= 64; i++){
		$('.stepCounter').append('<div class="stepCount button">' + i + '</div')
	}
	$('.stepCount.button').on('click',function(){
		$('.button.stepButton').off('click')
		$('.stepCount.button').removeClass('on')
		$(this).addClass('on')
		song.numSteps = $(this).index()+1
		$('.rowContainer').width(32 * song.numSteps + 200 + 'px')
		for (var i=1; i < $('.row').length+1; i++ ){
			while ($('.row'+i+' .button').length < song.numSteps){
				$('.row'+i).append('<div class="button stepButton">' + song.noteNames[i-1] + '</div>')
				song.notesOn[i-1].push(false)
			}
		}
		while ($('.row1 .button').length > song.numSteps){
			$('.button.stepButton:last-child').remove()
			for (var i=1; i < $('.row').length+1; i++){
			    song.notesOn[i-1].pop()
		    }
		}
		setStepHandlers()
		console.log(song.notesOn[0].length)

	})
/*////////////////////////**/

/** Set up the bpm counter */
    for (var i = 1; i <= 240; i++){
        $('.bpmCounter').append('<div class="bpmCount button">' + i + '</div')
    }
    $('.bpmCount.button').on('click',function(){
        $('.button.bpmButton').off('click')
        $('.bpmCount.button').removeClass('on')
        $(this).addClass('on')
        song.bpm = $(this).index()+1
    })

/*///////////////////////*/

    setInterval(function(){
        $('#timer').text(new Date)
    },10)




/** Main step function */
    var oneStep = function(){
    	$('.stepButton').each(function(){
            var $this = $(this)
            song.TimeoutIDs.push(setTimeout(function(){
                if ($this.hasClass('on')){
                    $this.addClass('playing')
                    song.notes[$this.parent().index()].currentTime = 0
                    song.notes[$this.parent().index()].play()
                    setTimeout(function(){
                        $this.removeClass('playing')
                    }, 300)
                }
            }, (60/song.bpm*1000)*$this.index()))
        })
    }
    var step = function(){
    	oneStep()
       song.intervalID = setInterval(function(){
            oneStep()
        }, (60/song.bpm*1000)*song.numSteps)
    }


/*///////////////////**/


    $('.steppingToggle').on('click',function(){
    	$(this).toggleClass('on')
    	if($(this).hasClass('on')){
    	    step()
    	}
    	else {
    		clearInterval(song.intervalID)
    		for (var i = 0; i < song.TimeoutIDs.length; i++){
    		    clearTimeout(song.TimeoutIDs[i])
    	    }

    	}
    })


})

