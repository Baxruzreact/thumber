let slideIndex = 1;
let myindex = 1;

document.querySelector( '.graybg' )?.addEventListener( 'click', closeNav );
document.querySelector( '.menu' )?.addEventListener( 'click', onpenNav );
// @ts-ignore
document.querySelector( '.close' ).addEventListener( 'click', closeNav );

function onpenNav ()
{
     // @ts-ignore
     document.querySelector( '.graybg' ).style.display = 'block';
     // @ts-ignore
     document.querySelector( '.mymenubar' ).style.display = 'block';
     // @ts-ignore
     document.querySelector( '.mymenubar' ).style.width = '300px';
}

function closeNav ()
{
     // @ts-ignore
     document.querySelector( '.mymenubar' ).style.display = 'none';
     // @ts-ignore
     document.querySelector( '.mymenubar' ).style.width = '0';
     // @ts-ignore
     document.querySelector( '.graybg' ).style.display = 'none';
}
showSlides( slideIndex );

function plusSlides ( n )
{
     showSlides( ( slideIndex += n ) );
}

function currentSlide ( n )
{
     showSlides( ( slideIndex = n ) );
}

function showSlides ( n )
{
     let i;
     let slides = document.getElementsByClassName( 'my-slides' );
     let dots = document.getElementsByClassName( 'demo' );
     let zoom = document.querySelector( '.zoom' );
     if ( n > slides.length )
     {
          slideIndex = 1;
     } else if ( n < 1 )
     {
          slideIndex = slides.length;
     }

     for ( i = 0; i < slides.length; i++ )
     {
          // @ts-ignore
          slides[ i ].style.display = 'none';
     }
     for ( i = 0; i < dots.length; i++ )
     {
          dots[ i ].className = dots[ i ].className.replace( ' active', '' );
     }

     dots[ slideIndex - 1 ].className += ' active';
     // @ts-ignore
     slides[ slideIndex - 1 ].style.display = 'block';
     // @ts-ignore
     zoom.addEventListener( 'click', () =>
     {
          let modal = document.getElementById( 'myModal' );
          let img = document.querySelector( '.my-slides img' );

          let modalImg = document.getElementById( 'img01' );
          let captionText = document.getElementById( 'caption' );
          // @ts-ignore
          document.querySelector( '.graybg' ).style.display = 'block';
          // @ts-ignore
          modal.style.display = 'block';
          // @ts-ignore
          modalImg.src = img.src;
          // @ts-ignore
          captionText.innerHTML = img.alt;
          var span = document.getElementsByClassName( 'close' )[ 1 ];
          // @ts-ignore
          modal.addEventListener( 'click', () =>
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
          // @ts-ignore
          span.onclick = function ()
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          };

          // @ts-ignore
          document.querySelector( '.graybg' ).addEventListener( 'click', () =>
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
     } );
     let img = document.querySelector( '.my-slides img' );
     // @ts-ignore
     img.addEventListener( 'click', () =>
     {
          let modal = document.getElementById( 'myModal' );
          let img = document.querySelector( '.my-slides img' );
          let modalImg = document.getElementById( 'img01' );
          let captionText = document.getElementById( 'caption' );
          // @ts-ignore
          document.querySelector( '.graybg' ).style.display = 'block';
          // @ts-ignore
          modal.style.display = 'block';
          // @ts-ignore
          modalImg.src = img.src;
          // @ts-ignore
          captionText.innerHTML = img.alt;
          var span = document.getElementsByClassName( 'close' )[ 1 ];

          // @ts-ignore
          modal.addEventListener( 'click', () =>
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
          // @ts-ignore
          span.onclick = function ()
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          };
          // @ts-ignore
          document.querySelector( '.graybg' ).addEventListener( 'click', () =>
          {
               // @ts-ignore
               modal.style.display = 'none';
               // @ts-ignore
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
     } );
}
/* chatgpt formating  and best optamize find problems  complate code*/
