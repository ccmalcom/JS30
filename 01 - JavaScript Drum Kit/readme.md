Changes from tutorial notes:

-JS Moved to separate file
-e.keyCode is depreciated, changed to e.key
-To reflect in html, changed data-key to corresponding keyname (i.e. 'a')
-Instead of removeTransition(), used event listener on keyup (stopSound()), removes 'playing'
-Arrow functions rather than function(e){}