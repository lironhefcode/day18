function onBallClick(elBall){
    elBall.style.width  = (parseInt(elBall.style.width)||100) +getRandomInt(20,60) + 'px'
    elBall.style.height = (parseInt(elBall.style.height)||100)+getRandomInt(20,60) + 'px'
    if(parseInt(elBall.style.height)>400){
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    elBall.innerHTML = elBall.style.height , elBall.style.height
}