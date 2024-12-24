function onBallClick(elBall){
    elBall.style.width  = (parseInt(elBall.style.width)+50) + 'px'
    elBall.style.height = (parseInt(elBall.style.height)+50) + 'px'
    elBall.innerHTML = "",elBall.style.height," ",elBall.style.width
}