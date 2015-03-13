/**
 * Created by arun.tej on 11-03-2015.
 */
//code which strips out ad popups
var strip = function(){
    var elems = document.getElementsByClassName('float-ck');
    console.log('script running');
    if(elems[0]){
        elems[0].parentNode.removeChild(elems[0]);
    }
};
strip();

//code which adds functionality to the site
var bootup = function(){

    var map = []; // Or you could call it "key"
    var keyDown = keyUp  = function(e){
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
        /*insert conditional here*/
        console.log(map);
        if(map[17] && map[39]){
            var nextBtns = document.getElementsByClassName('btnNext');
            var nextChapterRef = nextBtns[0].parentNode;
            console.log(nextChapterRef);
            nextChapterRef.click();
        }

        if(map[17] && map[37]){
            var prevBtns = document.getElementsByClassName('btnPrevious');
            var prevChapterRef = prevBtns[0].parentNode;
            prevChapterRef.click();
        }
    }

    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
};
bootup();