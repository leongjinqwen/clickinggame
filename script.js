const randomX = () => {
    let left = Math.floor(Math.random()*$(window).innerWidth()-100);
    if (left < 0){
        left = 0
    }
    return left+'px'
}

const createCircle = () => {
    let newCircle = document.createElement('div')
    $(newCircle).addClass('circle')
    $(newCircle).css( { left:randomX(), top:"-100px" } )
    $(newCircle).animate({top:`${$(window).innerHeight()+100}px`},{
        duration: 5000,
        step: function() {
            if ($(newCircle).position().top > $(window).innerHeight()){
                $(newCircle).remove()
            }
        }
    })
    $('#container').append(newCircle)
}
$("#container").on('click', ".circle",function(e){
    $('#score').text(parseInt($('#score').text())+1)
    $(e.target).remove()
})
const startGame = () => {
    let second = 30
    let timer = setInterval(function(){
        $('#timer').text(second)
        if (second === 0) {
            clearInterval(timer)
        } else {
            createCircle()
            second--
        }
    }, 1000)
}
startGame()
