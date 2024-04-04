// menyiapkan canvas
const mycanvas = document.getElementById( 'mycanvas' );

// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//tentukan konteks
const c = mycanvas.getContext( '2d' );

//manipulasi canvas

// membuat Rectangel
// c . fillStyle = 'black' ;
// c . strokeStyle = '#999' ;
// c . lineWidth = 5;

// c . rect(50, 50, 300, 300);
// c . fill( );
// c . stroke( );

//membuat lingkaran / circel / arc
c . fillStyle = 'red' ;
c . strokeStyle = '#110' ;
c.lineWidth = '5'; 
c . beginPath( );
c . arc(600, 200, 150, 0, 2 * Math.PI);
c . fill( );
c . stroke ( );

// membuat path (segitiga)
c.fillStyle = 'black';
c.strokeStyle = '#999';
c.beginPath( );
c.moveTo(600, 100);
c.lineTo(700, 250);
c.lineTo(500, 250);
c.closePath( );
c.fill( );
// c.stroke( );

c.fillStyle = 'black';
c.strokeStyle = '#999';
c.beginPath( );
c.moveTo(600, 300);
c.lineTo(500, 150);
c.lineTo(700, 150);
c.closePath( );
c.fill( );
// c.stroke( );

//membuat animasi lingkaran

// let x = 200;
// let speedX = 50;
// let speedY = 50;
// let radius = 50;
// let y = 200;

// function draw( ) {
//     window.requestAnimationFrame(draw);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     console.log('ok!');
//     c . fillStyle = 'red' ;
//     c . strokeStyle = '#000' ;
//     c.lineWidth = '10'; 
//     c . beginPath( );
//     c . arc(x, y, radius, 0, 2 * Math.PI);
//     c . fill( );
//     c . stroke ( );

//     if (x + radius > innerWidth || x - radius < 0) {
//         speedX = -speedX;
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         speedY = -speedY;
//     }
    
//     x+= speedX;
//     y+= speedY;
// }

// draw( );