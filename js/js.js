function start(){timer=setInterval(function(){moverNave()},1e3*dt)}function stop(){clearInterval(timer)}function moverNave(){v+=a*dt,document.getElementById("velocidad").innerHTML=v.toFixed(2),y+=v*dt,document.getElementById("altura").innerHTML=y.toFixed(2),y<70?document.getElementById("nave").style.top=y+"%":(stop(),finalizarJuego())}function eventosOff(){document.getElementById("izquierda").style.pointerEvents="none",document.getElementById("derecha").style.pointerEvents="none"}function eventosOn(){document.getElementById("izquierda").style.pointerEvents="auto",document.getElementById("derecha").style.pointerEvents="auto"}function finalizarJuego(){if(v>5)switch(modeloNave){case 1:eventosOff(),document.getElementById("imgNave").src="img/nave_rota.gif",document.getElementById("gameOver").style.display="block",document.getElementById("intentos").innerHTML=intentos;break;case 2:eventosOff(),document.getElementById("imgNave").src="img/mod2rota.gif",document.getElementById("gameOver").style.display="block",document.getElementById("intentos").innerHTML=intentos}else document.getElementById("userWin").style.display="block",eventosOff()}function encenderMotor(){a=-g,document.getElementById("fuel").innerHTML=porcentajeGasolina(),document.getElementById("fuel").style.color="rgb(0"+(100-porcentajeGasolina())+"%, 0%, 0%)",document.getElementById("imgMotor").style.display="block",null==timerFuel&&(timerFuel=setInterval(function(){actualizarGasolina()},100)),gasolina<=0&&(apagarMotor(),document.getElementById("fuel").innerHTML=0)}function porcentajeGasolina(){var a=100*gasolina/gasolinaTotal;return a.toFixed(0)}function actualizarGasolina(){gasolina-=1,document.getElementById("fuel").innerHTML=porcentajeGasolina(),document.getElementById("fuel").style.color="rgb(0"+(100-porcentajeGasolina())+"%, 0%, 0%)",gasolina<=0&&(apagarMotor(),document.getElementById("fuel").innerHTML=0)}function apagarMotor(){a=g,document.getElementById("imgMotor").style.display="none",clearInterval(timerFuel),timerFuel=null}function mostrarAjustes(){pausar(),eventosOff(),document.getElementById("settings").style.display="block"}function ocultarAjustes(){document.getElementById("settings").style.display="none",eventosOn()}function mostrarInstrucciones(){pausar(),eventosOff(),document.getElementById("menuInstrucciones").style.display="block"}function ocultarInstrucciones(){document.getElementById("menuInstrucciones").style.display="none",eventosOn()}function restart(){stop(),y=5,v=0,g=1.622,a=g,dt=.016683,gasolina=gasolinaTotal,document.getElementById("fuel").innerHTML=porcentajeGasolina(),document.getElementById("fuel").style.color="black"}function reiniciarJuego(){stop(),document.getElementById("reanudar").style.display="none",document.getElementById("pausa").style.display="inline-block",intentos++,y=5,v=0,g=1.622,a=g,dt=.016683,gasolina=gasolinaTotal,document.getElementById("fuel").innerHTML=porcentajeGasolina(),document.getElementById("fuel").style.color="black",reanudar(),clearInterval(timer),start(),eventosOn(),document.getElementById("intentos").innerHTML=intentos,document.getElementById("gameOver").style.display="none",document.getElementById("userWin").style.display="none",1==modeloNave?document.getElementById("imgNave").src="img/nave.png":document.getElementById("imgNave").src="img/mod2nave.gif"}function reanudar(){stop(),start(),document.getElementById("reanudar").style.display="none",document.getElementById("pausa").style.display="inline-block"}function pausar(){stop(),document.getElementById("pausa").style.display="none",document.getElementById("reanudar").style.display="inline-block"}function reanudarSmartphone(){start(),document.getElementById("reanudaSmartphone").style.display="none",document.getElementById("pausaSmartphone").style.display="inline-block",document.getElementById("reiniciaSmartphone").style.display="none",document.getElementById("ayudaSmartphone").style.display="none",document.getElementById("botonAjustesSmartphone").style.display="none",document.getElementById("izquierda").style.display="inline-block",document.getElementById("nave").style.display="inline-block",document.getElementById("zonaAterrizaje").style.display="inline-block",document.getElementById("derechaSmartphone").style.backgroundImage="url(img/sol.png)",document.getElementById("derechaSmartphone").style.backgroundSize="60%",document.getElementById("derechaSmartphone").style.backgroundRepeat="no-repeat",document.getElementById("derechaSmartphone").style.width="35%"}function pausarSmartphone(){stop(),document.getElementById("pausaSmartphone").style.display="none",document.getElementById("reanudaSmartphone").style.display="inline-block",document.getElementById("reiniciaSmartphone").style.display="inline-block",document.getElementById("ayudaSmartphone").style.display="inline-block",document.getElementById("botonAjustesSmartphone").style.display="inline-block",document.getElementById("derechaSmartphone").style.backgroundImage="url(img/fondo_menu.jpg)",document.getElementById("derechaSmartphone").style.backgroundSize="auto",document.getElementById("derechaSmartphone").style.backgroundRepeat="repeat",document.getElementById("derechaSmartphone").style.width="100%"}function reiniciarJuegoSmartphone(){stop(),intentos++,y=5,v=0,g=1.622,a=g,dt=.016683,gasolina=gasolinaTotal,document.getElementById("fuel").innerHTML=porcentajeGasolina(),document.getElementById("fuel").style.color="black",reanudarSmartphone(),clearInterval(timer),start(),eventosOn(),document.getElementById("intentos").innerHTML=intentos,document.getElementById("gameOver").style.display="none",document.getElementById("userWin").style.display="none",1==modeloNave?document.getElementById("imgNave").src="img/nave.png":document.getElementById("imgNave").src="img/mod2nave.gif"}function mostrarAjustesSmartphone(){pausarSmartphone(),document.getElementById("settings").style.display="block"}function mostrarInstruccionesSmartphone(){pausarSmartphone(),document.getElementById("menuInstrucciones").style.display="block"}var y=5,v=0,g=1.622,a=g,dt=.016683,timer,gasolina=100,dificultad=1,gasolinaTotal=100,intentos=1,modeloNave=1,modeloLuna=1,timerFuel=null;window.onload=function(){function b(){"ontouchstart"in window&&(document.getElementById("botonOn").style.display="inline-block")}function d(a){encenderMotor()}function e(a){apagarMotor()}b(),document.getElementById("reanudar").onclick=function(){reanudar()},document.getElementById("pausa").onclick=function(){pausar()},document.getElementById("reinicia").onclick=function(){reiniciarJuego()},document.getElementById("instrucciones").onclick=function(){mostrarInstrucciones()},document.getElementById("botonAjustes").onclick=function(){mostrarAjustes()},document.getElementById("reanudaSmartphone").onclick=function(){reanudarSmartphone()},document.getElementById("pausaSmartphone").onclick=function(){pausarSmartphone()},document.getElementById("reiniciaSmartphone").onclick=function(){reiniciarJuegoSmartphone()},document.getElementById("ayudaSmartphone").onclick=function(){mostrarInstruccionesSmartphone()},document.getElementById("botonAjustesSmartphone").onclick=function(){mostrarAjustesSmartphone()},document.getElementById("jugarOtraVez").onclick=function(){reiniciarJuego()},document.getElementById("jugarOtraVezSmartphone").onclick=function(){reiniciarJuegoSmartphone()},document.getElementById("jugarAgain").onclick=function(){reiniciarJuego()},document.getElementById("jugarAgainSmartphone").onclick=function(){reiniciarJuegoSmartphone()},document.getElementById("dificultad").onclick=function(){switch(dificultad){case 1:gasolina=50,gasolinaTotal=50,document.getElementById("dificultad").innerHTML="Media",dificultad=2,restart();break;case 2:gasolina=25,gasolinaTotal=35,document.getElementById("dificultad").innerHTML="Difícil",dificultad=3,restart();break;case 3:gasolina=100,gasolinaTotal=100,document.getElementById("dificultad").innerHTML="Fácil",dificultad=1,restart()}},document.getElementById("modeloLuna").onclick=function(){switch(modeloLuna){case 1:document.getElementById("luna").src="img/mod2luna.png",document.getElementById("modeloLuna").innerHTML="Gris",modeloLuna=2;break;case 2:document.getElementById("luna").src="img/luna.png",document.getElementById("modeloLuna").innerHTML="Amarilla",modeloLuna=1}},document.getElementById("modeloNave").onclick=function(){switch(modeloNave){case 1:document.getElementById("imgNave").src="img/mod2nave.gif",document.getElementById("imgMotor").src="img/mod2motor.gif",document.getElementById("modeloNave").innerHTML="Modelo PodRacer",modeloNave=2,restart();break;case 2:document.getElementById("imgNave").src="img/nave.png",document.getElementById("imgMotor").src="img/motor.gif",document.getElementById("modeloNave").innerHTML="Modelo Estándar",modeloNave=1,restart()}},start();var c=document.getElementById("botonOn");c.addEventListener("touchstart",d,!1),c.addEventListener("touchend",e,!1),window.onkeydown=function(a){var b;window.event?b=window.event.keyCode:a&&(b=a.which),32==b&&encenderMotor()},window.onkeyup=apagarMotor};