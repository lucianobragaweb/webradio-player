function carregaCSS(){
	var file = location.pathname.split( "/" ).pop();

	var link = document.createElement( "link" );
	link.href = "https://lucianobragaweb.github.io/webradio-player/style.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	link.media = "screen,print";

	document.getElementsByTagName( "head" )[0].appendChild( link );
}

function getInfo(info) {
    var script = document.querySelectorAll("script[src='https://lucianobragaweb.github.io/webradio-player/player.js']");
    var info = script[0].getAttribute(info);

    return info;
}

function getById(id){
	var el = document.getElementById(id);
	return el;
}

function montar(){
	var tytle 	= getInfo('player-tytle');
	var ip 		= getInfo('player-ip');
	var porta 	= getInfo('player-porta');
	var autoplay 	= getInfo('player-autoplay');

	if (autoplay == "true") {
		autoplay = "autoplay";
	} else {
		autoplay = "";
	}

	var montagem = '' +
	'<div id="bragaRadio">' +
		'<div class="bragaTitulo">' +
			'<h2>' + tytle + '</h2>' +
		'</div>' + // #bragaTitulo
		'<audio controls id="bragaPlayer" ' + autoplay + '>' +
			'<source src="http://' + ip + ':' + porta + '/;stream.mp3" type="audio/mp3">' +
			'Seu navegador não suporta o elemento de áudio.' +
		'</audio>' + // #bragaPlayer
		'<div class="footer">' +
			'<p>' +
				// 'Player desenvolvido por <a target="_blank" href="https://lucianobragaweb.github.io" title="Programador Web Luciano Braga" alt="Programador Web Luciano Braga">Luciano Braga</a>' +
				'<span id="abrir" class="bt"></span>' +
				'<span id="fechar" class="bt"></span>' +
			'</p>' +
			'<div id="bragaPanel">' +
		  		'<textarea onclick="this.focus();this.select()" readonly="readonly">' +
		  			'<script type="text/javascript" player-tytle="' + tytle + '" player-ip="' + ip + '" player-porta="' + porta + '" player-autoplay="' + getInfo('player-autoplay') + '" src="https://lucianobragaweb.github.io/webradio-player/player.js"></script>' +
		  		'</textarea>' +
			'</div>' +
		'</div>' + // #footer
	'</div>'; // #bragaRadio

	return document.write( montagem );
}

function carregaPlayer(){
	montar();

	var abrir = document.getElementById('abrir');
	var fechar = document.getElementById('fechar');
	abrir.addEventListener('click', function() { abrirtx()}, false);
	fechar.addEventListener('click', function() { fechartx()}, false);

	function abrirtx() {
	    getById("bragaPanel").style.display = "block";
	    getById("abrir").style.display = "none";
	    getById("fechar").style.display = "block";
	}
	function fechartx() {
	    getById("bragaPanel").style.display = "none";
	    getById("abrir").style.display = "block";
	    getById("fechar").style.display = "none";
	}

	carregaCSS();
}

window.onload = carregaPlayer();
