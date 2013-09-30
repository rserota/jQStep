var song = {
	numSteps : 0,
	notesOn : [[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	bpm : 120
}

$(document).ready(function(){
    $('#timer').text(new Date)
    var D1 = new Audio('sounds/D1.wav')
    var Gb1 = new Audio('sounds/Gb1.wav')
    var A1 = new Audio('sounds/A1.wav')
    var C1 = new Audio('sounds/C1.wav')

    $('.button.note').click(function(){
        $(this).toggleClass('on')
    })



/** Set up the step counter */
for (var i = 1; i <= 64; i++){
	$('.stepCounter').append('<div class="stepCount button">' + i + '</div')
}
$('.stepCount.button').on('click',function(){
	$('.stepCount.button').removeClass('on')
	$(this).addClass('on')
    console.log($('.rowContainer').length)
	song.numSteps = $(this).index()+1
	for (var i=1; i < $('.row').length+1; i++ ){
		console.log(i)
		while ($('.row'+i+' .button').length < song.numSteps){
			$('.row'+i).append('<div class="button stepButton"></div>')
		}
	}
	while ($('.row1 .button').length > song.numSteps){
		$('.button.stepButton:last-child').remove()
	}

})
///////////////////////////////

    setInterval(function(){
        $('#timer').text(new Date)
    },100)

/////////////////////////////////////////////////////////////////////////////////////
    var cols = ['col1','col2','col3','col4','col5','col6','col7','col8']

        var step = function(col){
            window.setTimeout(function(){
                setInterval(function(){
                    $('.button').each(function(i){
                        if ($(this).hasClass(cols[col])){
                            $(this).css('border-color','red')
                            if ($(this).hasClass('on')){
                                if ($(this).parent().hasClass('row1')){
                                    C1.play()
                                }
                                else if ($(this).parent().hasClass('row2')){
                                    A1.play()
                                }
                                else if ($(this).parent().hasClass('row3')){
                                    Gb1.play()
                                }
                                else if ($(this).parent().hasClass('row4')){
                                    D1.play()
                                }
                            }
                        }         
                    })
                },4000)
            },500*col)
            
            window.setTimeout(function(){
                setInterval(function(){
                    $('.button').each(function(i){
                        if ($(this).hasClass(cols[col])){
                            $(this).css('border-color','black')
                        }         
                    })
                },4000)
            },(500*col)+100)
        }
/////////////////////////////////////////////////////////////////////////////////////

    for (var i = 0; i < 8; i++){
        step(i)
    }

})