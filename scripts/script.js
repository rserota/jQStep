$(document).ready(function(){
    $('#timer').text(new Date)
    var D = new Audio('sounds/D.wav')
    var Gb = new Audio('sounds/Gb.wav')
    var A = new Audio('sounds/A.wav')
    var C = new Audio('sounds/C.wav')

    $('.button').click(function(){
        $(this).toggleClass('on')
    })

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
                                    C.play()
                                }
                                else if ($(this).parent().hasClass('row2')){
                                    A.play()
                                }
                                else if ($(this).parent().hasClass('row3')){
                                    Gb.play()
                                }
                                else if ($(this).parent().hasClass('row4')){
                                    D.play()
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