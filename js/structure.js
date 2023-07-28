function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    document.body.appendChild(sakura);
  
    const startX = Math.random() * window.innerWidth;

    // const delay = Math.random() * 5;
    const delay = Math.random() * 2;//increase volume

  
    // sakura.style.left = startX + 'px';
    sakura.style.right = startX + 'px';//change left to right

    // sakura.style.animationDuration = Math.random() * 4 + 5 + 's';
    // increase volume
    sakura.style.animationDuration = Math.random() * 100 + 200 + 's';

    sakura.style.animationDelay = delay + 's';
  
    sakura.addEventListener('animationiteration', () => {
      // sakura.style.left = Math.random() * window.innerWidth + 'px';
      sakura.style.right = Math.random() * window.innerWidth + 'px';//change left to right
    });
  }
  
  for (let i = 0; i < 30; i++) {
    createSakura();
  }
  
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
  