function onBallClick(elBall){
    elBall.style.width  = (parseInt(elBall.style.width)||100) +50 + 'px'
    elBall.style.height = (parseInt(elBall.style.height)||100)+50 + 'px'
    elBall.innerHTML = 'elBall.style.height , elBall.style.height'
}