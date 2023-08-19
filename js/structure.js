function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    document.body.appendChild(sakura);
  
    const startX = Math.random() * window.innerWidth;

    // const delay = Math.random() * 5;
    const delay = Math.random() * 1;
    
    // const delay = Math.random() * 100;

    
    //change left to right
    sakura.style.left = startX + 'px';
    // sakura.style.right = startX + 'px';

   


    // sakura.style.animationDuration = Math.random() * 4 + 5 + 's';

    // sakura.style.animationDuration = Math.random() * 100 + 200 + 's';

    // more speed animation 
    sakura.style.animationDuration = Math.random() * 1 + 1 + 's';
    


    sakura.style.animationDelay = delay + 's';
  
    sakura.addEventListener('animationiteration', () => {
      // sakura.style.left = Math.random() * window.innerWidth + 'px';

      //change left to right
      sakura.style.right = Math.random() * window.innerWidth + 'px';
    });
  }
  
  for (let i = 0; i < 30; i++) {
    createSakura();
  }
  
  // increase volume but see same a static
  // for (let i = 0; i < 150; i++) {
  //   createSakura();
  // }
  
  setTimeout(function() {
          $('#help').animate({
            'right': '0px' 
          }, 3000);
        }, 1000); 
   var nouvelleDiv = $('<div>BaNaNa!!!!!!</div>');
        nouvelleDiv.addClass('bubble');
  
        setTimeout(function() {
          $('body').append(nouvelleDiv);
        }, 5000);
  