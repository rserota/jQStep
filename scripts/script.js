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
var col = 'hi'


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[0])){
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
        },500*0)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[0])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*0)+100)

/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[1])){
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
        },500*1)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[1])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*1)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[2])){
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
        },500*2)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[2])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*2)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[3])){
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
        },500*3)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[3])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*3)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[4])){
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
        },500*4)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[4])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*4)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[5])){
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
        },500*5)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[5])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*5)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[6])){
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
        },500*6)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[6])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*6)+100)
/////////////////////////////////////////////////////////////////////////////////////


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[7])){
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
        },500*7)
    


        window.setTimeout(function(){
            setInterval(function(){
                $('.button').each(function(i){
                    if ($(this).hasClass(cols[7])){
                        $(this).css('border-color','black')
                    }         
                })
            },4000)
        },(500*7)+100)





})

var phone = new Audio('sounds/phone.wav');
var song = new Audio('sounds/asm.mp3');
//song.play();
// window.setTimeout('phone.play()',2500)
//phone.play();

