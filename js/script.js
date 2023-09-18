// @ts-nocheck
let slideIndex = 1;
let myindex = 1;
document.querySelector( '.graybg' )?.addEventListener( 'click', closeNav );
document.querySelector( '.menu' )?.addEventListener( 'click', onpenNav );
document.querySelector( '.close' ).addEventListener( 'click', closeNav );

function onpenNav ()
{
     document.querySelector( '.graybg' ).style.display = 'block';
     document.querySelector( '.mymenubar' ).style.display = 'block';
     document.querySelector( '.mymenubar' ).style.width = '300px';
}

function closeNav ()
{
     document.querySelector( '.mymenubar' ).style.display = 'none';
     document.querySelector( '.mymenubar' ).style.width = '0';
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
          slides[ i ].style.display = 'none';
     }
     for ( i = 0; i < dots.length; i++ )
     {
          dots[ i ].className = dots[ i ].className.replace( ' active', '' );
     }

     dots[ slideIndex - 1 ].className += ' active';
     slides[ slideIndex - 1 ].style.display = 'block';
     zoom.addEventListener( 'click', () =>
     {
          let modal = document.getElementById( 'myModal' );
          let img = document.querySelector( '.my-slides img' );

          let modalImg = document.getElementById( 'img01' );
          let captionText = document.getElementById( 'caption' );
          document.querySelector( '.graybg' ).style.display = 'block';
          modal.style.display = 'block';
          modalImg.src = img.src;
          captionText.innerHTML = img.alt;
          var span = document.getElementsByClassName( 'close' )[ 1 ];
          modal.addEventListener( 'click', () =>
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
          span.onclick = function ()
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          };

          document.querySelector( '.graybg' ).addEventListener( 'click', () =>
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
     } );
     let img = document.querySelector( '.my-slides img' );
     img.addEventListener( 'click', () =>
     {
          let modal = document.getElementById( 'myModal' );
          let img = document.querySelector( '.my-slides img' );
          let modalImg = document.getElementById( 'img01' );
          let captionText = document.getElementById( 'caption' );
          document.querySelector( '.graybg' ).style.display = 'block';
          modal.style.display = 'block';
          modalImg.src = img.src;
          captionText.innerHTML = img.alt;
          var span = document.getElementsByClassName( 'close' )[ 1 ];

          modal.addEventListener( 'click', () =>
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
          span.onclick = function ()
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          };
          document.querySelector( '.graybg' ).addEventListener( 'click', () =>
          {
               modal.style.display = 'none';
               document.querySelector( '.graybg' ).style.display = 'none';
          } );
     } );
}
/* chatgpt formating  and best optamize find problems  complate code*/
