const cobacanvas = document.querySelector('#cobacanvas');

cobacanvas.height = window.innerHeight;
cobacanvas.width = window.innerWidth;

const z = cobacanvas.getContext('2d');

z.fillStyle = 'violet';
z.strokeStyle = 'black';
z.lineWidth = '6';
z.moveTo(25, 300);
z.lineTo(600, 20);
z.lineTo(1200, 300);
z.lineTo(600, 580);
z.closePath( );
z.fill( );
z.stroke( );

z.fillStyle = 'red';
z.strokeStyle = 'black';
z.lineWidth = '4';
z.beginPath( );
z.arc(600, 300, 220, 0, 2 * Math.PI);
z.fill( );
z.stroke( );

z.fillStyle = 'black';
z.strokeStyle = 'white';
z.lineWidth = '5';

// z.rect(500,200,200,200);
// z.fill( );
// z.stroke( );
z.beginPath( );
z.moveTo(600, 150);
z.lineTo(750, 300);
z.lineTo(600, 450);
z.lineTo(450, 300);
z.closePath( );
z.fill( );
z.stroke( );

z.fillStyle = 'red';
z.beginPath( );
z.arc(600, 300, 120, 0, 2 * Math.PI);
z.fill( );

z.fillStyle = 'white';
z.beginPath( );
z.arc(600, 300, 70, 0, 2 * Math.PI);
z.fill( );

z.fillStyle = 'black';
z.beginPath( );
z.arc(600, 300, 50, 0, 2 * Math.PI);
z.fill( );