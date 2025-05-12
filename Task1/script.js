//#region 
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const l4 = document.getElementById("l4")
const l5 = document.getElementById("l5")
const l6 = document.getElementById("l6")

const lb1 = document.getElementById("lb1")
const lb2 = document.getElementById("lb2")
const lb3 = document.getElementById("lb3")
const lb4 = document.getElementById("lb4")
const lb5 = document.getElementById("lb5")
const lb6 = document.getElementById("lb6")
const lc1 = document.getElementById("lc1")
const lc2 = document.getElementById("lc2")
const lc3 = document.getElementById("lc3")
const lc4 = document.getElementById("lc4")
const lc5 = document.getElementById("lc5")
const lc6 = document.getElementById("lc6")

const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const h3 = document.getElementById("h3")
const h4 = document.getElementById("h4")
const h5 = document.getElementById("h5")
const h6 = document.getElementById("h6")

const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const c9 = document.getElementById("c9")
const c10 = document.getElementById("c10")
const c11 = document.getElementById("c11")
const c12 = document.getElementById("c12")

const c13 = document.getElementById("c13")
const c14 = document.getElementById("c14")
const c15 = document.getElementById("c15")
const c16 = document.getElementById("c16")
const c17 = document.getElementById("c17")
const c18 = document.getElementById("c18")

const countdown = document.getElementById("ov-timer")
const single_timer = document.getElementById("ply-timer")
const pause_btn = document.getElementById("pause");
const reset_btn = document.getElementById("reset");
const pause_div = document.getElementById("splash");
const res_btn = document.getElementById("res_btn");
const green_score_text = document.getElementById("green_score");
const red_score_text = document.getElementById("red_score");
const game_over_screen = document.getElementById("game-over");
const winner_text = document.getElementById("winner");
const final_score = document.getElementById("final-score");

const places =[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18];
const edges = [l1,l2,l3,l4,l5,l6, lb1,lb2,lb3,lb4,lb5,lb6,lc1,lc2,lc3,lc4,lc5,lc6,h1,h2,h3,h4,h5,h6];
//#endregion
//#region
if (document.documentElement.clientWidth < 1200){
    countdown.style['font-size'] = "50px";
    green_score_text.style['position'] = 'absolute';
    red_score_text.style['position'] = 'relative';
    single_timer.style['position'] = 'absolute';
    pause_btn.getElementsByTagName("h2")[0].style['margin-top'] = "12px";
    pause_btn.getElementsByTagName("h2")[0].style['margin-left'] = "-2px";
    reset_btn.getElementsByTagName("h2")[0].style['margin-top'] = "-8px";
    reset_btn.getElementsByTagName("h2")[0].style['margin-left'] = "3px";
    for (let i=0; i<edges.length; i++){
        edges[i].getElementsByTagName("h2")[0].style['font-size'] = "17px";
    }
    l2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    l2.getElementsByTagName("div")[0].style['margin-right'] = "-10px"
    l4.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
    l4.getElementsByTagName("div")[0].style['margin-left'] = "5px"
    l6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

    lb2.getElementsByTagName("div")[0].style['margin-left'] = "-10px"
    lb2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    lb4.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    lb4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
    lb6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

    lc2.getElementsByTagName("div")[0].style['margin-left'] = "0px"
    lc2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    lc4.getElementsByTagName("div")[0].style['margin-top'] = "-45px"
    lc4.getElementsByTagName("div")[0].style['margin-left'] = "0px"
    lc6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

    h1.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    h3.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    h5.getElementsByTagName("div")[0].style['margin-top'] = "-40px"



    l1.style['width'] = "150px"
    l2.style['width'] = "150px"
    l3.style['width'] = "150px"
    l4.style['width'] = "150px"
    l5.style['width'] = "150px"
    l6.style['width'] = "150px"
    lb1.style['width'] = "100px"
    lb2.style['width'] = "100px"
    lb3.style['width'] = "100px"
    lb4.style['width'] = "100px"
    lb5.style['width'] = "100px"
    lb6.style['width'] = "100px"
    lc1.style['width'] = "50px"
    lc2.style['width'] = "50px"
    lc3.style['width'] = "50px"
    lc4.style['width'] = "50px"
    lc5.style['width'] = "50px"
    lc6.style['width'] = "50px"
    h1.style['width'] = "50px"
    h2.style['width'] = "50px"
    h3.style['width'] = "50px"
    h4.style['width'] = "50px"
    h5.style['width'] = "50px"
    h6.style['width'] = "50px"
    for (let i =0; i<places.length; i++){
        places[i].style['width'] = "12.5px";
        places[i].style['height'] = "12.5px"
    }
 

    c1.style.top = "143px"
    c2.style.top = "143px"
    c3.style.top = "273px"
    c4.style.top = "402px"
    c5.style.top = "402px"
    c6.style.top = "273px"
    
    c7.style.top = "188px"
    c8.style.top = "188px"
    c9.style.top = "273px"
    c10.style.top = "358px"
    c11.style.top = "358px"
    c12.style.top = "273px"

    c13.style.top = "231px"
    c14.style.top = "231px"
    c15.style.top = "273px"
    c16.style.top = "315px"
    c17.style.top = "315px"
    c18.style.top = "273px"

    l1.style.top = "150px"
    l2.style.top = "215px"
    l3.style.top = "215px"
    l4.style.top = "345px"
    l5.style.top = "345px"
    l6.style.top = "410px"

    lb1.style.top = "195px"
    lb2.style.top = "239px"
    lb3.style.top = "239px"
    lb4.style.top = "325px"
    lb5.style.top = "325px"
    lb6.style.top = "368px"

    lc1.style.top = "238px"
    lc2.style.top = "260px"
    lc3.style.top = "260px"
    lc4.style.top = "303px"
    lc5.style.top = "303px"
    lc6.style.top = "325px"

    h1.style.top = "281px"
    h2.style.top = "174px"
    h3.style.top = "389px"
    h4.style.top = "281px"
    h5.style.top = "347px"
    h6.style.top = "216px"

    c1.style.left = document.documentElement.clientWidth/2 - 82 + 'px'
    c2.style.left = document.documentElement.clientWidth/2 + 66 + 'px'
    c3.style.left = document.documentElement.clientWidth/2 + 137 + 'px'
    c4.style.left = document.documentElement.clientWidth/2 + 67 + 'px'
    c5.style.left = document.documentElement.clientWidth/2 - 82 + 'px'
    c6.style.left = document.documentElement.clientWidth/2 - 157 + 'px'

    c7.style.left = document.documentElement.clientWidth/2 - 56 + 'px'
    c8.style.left = document.documentElement.clientWidth/2 + 42 + 'px'
    c9.style.left = document.documentElement.clientWidth/2 + 88 + 'px'
    c10.style.left = document.documentElement.clientWidth/2 + 43 + 'px'
    c11.style.left = document.documentElement.clientWidth/2 - 57 + 'px'
    c12.style.left = document.documentElement.clientWidth/2 - 104 + 'px'

    c13.style.left = document.documentElement.clientWidth/2 - 32 + 'px'
    c14.style.left = document.documentElement.clientWidth/2 + 17 + 'px'
    c15.style.left = document.documentElement.clientWidth/2 + 37 + 'px'
    c16.style.left = document.documentElement.clientWidth/2 + 18 + 'px'
    c17.style.left = document.documentElement.clientWidth/2 - 32 + 'px'
    c18.style.left = document.documentElement.clientWidth/2 - 55 + 'px'

    l1.style.left = document.documentElement.clientWidth/2 -75 + 'px';
    l2.style.left = document.documentElement.clientWidth/2 -187 + 'px';
    l3.style.left = document.documentElement.clientWidth/2 +37 + 'px';
    l4.style.left = document.documentElement.clientWidth/2 -187 + 'px';
    l5.style.left = document.documentElement.clientWidth/2 +37 + 'px';
    l6.style.left = document.documentElement.clientWidth/2 -75 + 'px';

    lb1.style.left = document.documentElement.clientWidth/2 -50 + 'px';
    lb2.style.left = document.documentElement.clientWidth/2 -125 + 'px';
    lb3.style.left = document.documentElement.clientWidth/2 + 25 + 'px';
    lb4.style.left = document.documentElement.clientWidth/2 -125 + 'px';
    lb5.style.left = document.documentElement.clientWidth/2 + 25 + 'px';
    lb6.style.left = document.documentElement.clientWidth/2 -50 + 'px';

    lc1.style.left = document.documentElement.clientWidth/2 -25 + 'px';
    lc2.style.left = document.documentElement.clientWidth/2 -62 + 'px';
    lc3.style.left = document.documentElement.clientWidth/2 + 12 + 'px';
    lc4.style.left = document.documentElement.clientWidth/2 -62 + 'px';
    lc5.style.left = document.documentElement.clientWidth/2 + 12 + 'px';
    lc6.style.left = document.documentElement.clientWidth/2 -25 + 'px';

    h1.style.left = document.documentElement.clientWidth/2 -150 + 'px';
    h2.style.left = document.documentElement.clientWidth/2 +37 + 'px';
    h3.style.left = document.documentElement.clientWidth/2 +37 + 'px';
    h4.style.left = document.documentElement.clientWidth/2 +50 + 'px';
    h5.style.left = document.documentElement.clientWidth/2 -62 + 'px';
    h6.style.left = document.documentElement.clientWidth/2 -62 + 'px';

    single_timer.style.top = "-150px";
    green_score_text.style.top = "500px";
    red_score_text.style.top = `${400 - red_score_text.offsetHeight/2}px`;

    single_timer.style.left = document.documentElement.clientWidth/2 - single_timer.offsetWidth/2+ 'px';
    pause_btn.style.top = "550px";
    pause_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
    reset_btn.style.top = "620px";
    reset_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
    pause_div.style.visibility = "hidden";
    game_over_screen.style.visibility = "hidden";
}
else {
    green_score_text.style['position'] = '';
    red_score_text.style['position'] = '';
    single_timer.style['position'] = '';
    pause_btn.getElementsByTagName("h2")[0].style['margin-top'] = "";
    pause_btn.getElementsByTagName("h2")[0].style['margin-left'] = "";
    reset_btn.getElementsByTagName("h2")[0].style['margin-top'] = "";
    reset_btn.getElementsByTagName("h2")[0].style['margin-left'] = "";
    for (let i=0; i<edges.length; i++){
        edges[i].getElementsByTagName("h2")[0].style['font-size'] = "";
    }
    
    l2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    l2.getElementsByTagName("div")[0].style['margin-right'] = "-10px"
    
    l4.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    l4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
        
    l6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

    lb2.getElementsByTagName("div")[0].style['margin-left'] = "-10px"
    lb2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    
    lb4.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    lb4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
        
    lb6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
    l1.style['width'] = "300px"
    l2.style['width'] = "300px"
    l3.style['width'] = "300px"
    l4.style['width'] = "300px"
    l5.style['width'] = "300px"
    l6.style['width'] = "300px"
    lb1.style['width'] = "200px"
    lb2.style['width'] = "200px"
    lb3.style['width'] = "200px"
    lb4.style['width'] = "200px"
    lb5.style['width'] = "200px"
    lb6.style['width'] = "200px"
    lc1.style['width'] = "100px"
    lc2.style['width'] = "100px"
    lc3.style['width'] = "100px"
    lc4.style['width'] = "100px"
    lc5.style['width'] = "100px"
    lc6.style['width'] = "100px"
    h1.style['width'] = "100px"
    h2.style['width'] = "100px"
    h3.style['width'] = "100px"
    h4.style['width'] = "100px"
    h5.style['width'] = "100px"
    h6.style['width'] = "100px"

    for (let i =0; i<places.length; i++){
        places[i].style['width'] = "25px";
        places[i].style['height'] = "25px"
    }

    c1.style.top = "87.5px";
    c2.style.top = "87.5px";
    c3.style.top = "347.5px";
    c4.style.top = "600.5px";
    c5.style.top = "600.5px";
    c6.style.top = "347.5px";
    c7.style.top = "175.5px";
    c8.style.top = "175.5px";
    c9.style.top = "347.5px";
    c10.style.top = "520.5px";
    c11.style.top = "520.5px";
    c12.style.top = "347.5px";

    c13.style.top = "260.5px";
    c14.style.top = "260.5px";
    c15.style.top = "347.5px";
    c17.style.top = "423.5px";
    c16.style.top = "423.5px";
    c18.style.top = "347.5px";

    c1.style.left = document.documentElement.clientWidth/2 + -165 + "px";
    c2.style.left = document.documentElement.clientWidth/2 + 134 + "px";
    c3.style.left = document.documentElement.clientWidth/2 + 280 + "px";
    c4.style.left = document.documentElement.clientWidth/2 + 134 + "px";
    c5.style.left = document.documentElement.clientWidth/2 -165 + "px";
    c6.style.left = document.documentElement.clientWidth/2 - 310 + "px";

    c7.style.left = document.documentElement.clientWidth/2 + -112.5 + "px";
    c8.style.left = document.documentElement.clientWidth/2 + 85.5 + "px";
    c9.style.left = document.documentElement.clientWidth/2 + 180 + "px";
    c10.style.left = document.documentElement.clientWidth/2 + 85.5 + "px";
    c11.style.left = document.documentElement.clientWidth/2 -112.5 + "px";
    c12.style.left = document.documentElement.clientWidth/2 - 210 + "px";

    c13.style.left = document.documentElement.clientWidth/2 + -60.5 + "px";
    c14.style.left = document.documentElement.clientWidth/2 + 37.5 + "px";
    c15.style.left = document.documentElement.clientWidth/2 + 81.5 + "px";
    c16.style.left = document.documentElement.clientWidth/2 + 37.5 + "px";
    c17.style.left = document.documentElement.clientWidth/2 -60.5 + "px";
    c18.style.left = document.documentElement.clientWidth/2 - 107.5 + "px";

    l1.style.top = "100px";

    l1.style.left = document.documentElement.clientWidth/2 - 150 + 'px';
    l2.style.left = document.documentElement.clientWidth/2 -375 + "px";
    l3.style.left = document.documentElement.clientWidth/2 + 73.6 + "px";
    l4.style.left = document.documentElement.clientWidth/2 - 375 + 'px';
    l5.style.left = document.documentElement.clientWidth/2 + 73.6 + 'px';
    l6.style.left = document.documentElement.clientWidth/2 - 150 + 'px';

    lb1.style.left =  document.documentElement.clientWidth/2+ -100+ 'px';
    lb2.style.left =  document.documentElement.clientWidth/2+ -249+ 'px';
    lb3.style.left =  document.documentElement.clientWidth/2+ 50+ 'px';
    lb4.style.left =  document.documentElement.clientWidth/2-249+ 'px';
    lb5.style.left =  document.documentElement.clientWidth/2+50+ 'px';
    lb6.style.left =  document.documentElement.clientWidth/2+ -100+ 'px';

    lc1.style.left =  document.documentElement.clientWidth/2+ -50+ 'px';
    lc2.style.left =  document.documentElement.clientWidth/2+ -124+ 'px';
    lc3.style.left =  document.documentElement.clientWidth/2+ 25+ 'px';
    lc4.style.left =  document.documentElement.clientWidth/2- 124+ 'px';
    lc5.style.left =  document.documentElement.clientWidth/2+ 25+ 'px';
    lc6.style.left =  document.documentElement.clientWidth/2+ -50+ 'px';

    h1.style.left = document.documentElement.clientWidth/2 + -300+ "px";
    h2.style.left = document.documentElement.clientWidth/2 +74+ "px";
    h3.style.left = document.documentElement.clientWidth/2 +74+ "px";
    h4.style.left = document.documentElement.clientWidth/2 +100+ "px";
    h5.style.left = document.documentElement.clientWidth/2 -125+ "px";
    h6.style.left = document.documentElement.clientWidth/2 -124+ "px";
    
    single_timer.style.left = document.documentElement.clientWidth/2 - single_timer.offsetWidth/2+ 'px';

    pause_btn.style.top = "750px";
    pause_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
    reset_btn.style.top = "820px";
    reset_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
    pause_div.style.visibility = "hidden";
    game_over_screen.style.visibility = "hidden";
}
//#endregion

var turn = 0;
var selected_ele;
var green_titan = 4;
var red_titan = 4;
var select = 0;
var ply_timer = 20-1;
var green_score = 0;
var red_score = 0;
var is_pause = false;
var captured_edges = [];
var is_hex2 = false;
var is_hex3 = false;


const starting_min = 20;
let time = starting_min*60-1;

setInterval(timer, 1000);
setInterval(player_timer, 1000);
function game_over(){
    if (green_score > red_score){
            winner_text.innerHTML = "Blue Won!!";
            winner_text.style['color'] = "rgb(6, 151, 255)"
            winner_text.style['font-weight'] = "light";
            winner_text.style['text-shadow'] = "0px 0px 10px rgb(0, 187, 255)";
            final_score.innerHTML = green_score;
            final_score.style['color'] = "rgb(6, 151, 255)";
            final_score.style['text-shadow'] = "0px 0px 10px rgb(0, 187, 255)"
        }
    else if(green_score < red_score) {
        winner_text.innerHTML = "Red won!!";
        winner_text.style['color'] = "rgb(255, 44, 44)"
        winner_text.style['font-weight'] = "light";
        winner_text.style['text-shadow'] = "0px 0px 10px rgb(228, 0, 0)";
        final_score.innerHTML = red_score;
        final_score.style['color']  ="rgb(255, 44, 44)";
        final_score.style['text-shadow'] = "0px 0px 10px rgb(228, 0, 0)"
    }
    else if (green_score === red_score){
        winner_text.innerHTML = "Tie!!";
        winner_text.style['color'] = "white";
        winner_text.style['text-shadow']= "0px 0px 10px white";
        final_score.innerHTML = "";
    }
    if ((!is_grey(c13) && !is_grey(c14) && !is_grey(c15) && !is_grey(c16) && !is_grey(c17) && !is_grey(c18)) || time === 0 || time < 0){
        game_over_screen.style.visibility = "visible";
        if (is_pause === false){
            var a1 = new Audio('game_over.mp3');
        a1.play();
        }
        is_pause = true;
        return true;
    }
}
function timer() {
    var min = Math.floor(time/60);
    min = (min < 10) ? '0' + min : min;
    var seconds = time % 60;
    seconds = (seconds <10) ? '0' + seconds : seconds;
    if (!is_pause){
        time --;
    }
    countdown.innerHTML = `${min}:${seconds}`;
    if (time === 0 || time < 0){
        is_pause = 0 ;
    }
    game_over();
}

function update_timer(){
    if (turn === 0){
        single_timer.style['font-weight'] = "bold";
        single_timer.style['color'] ="rgb(6, 151, 255)";
        single_timer.style['text-shadow'] = "0px 0px 10px rgb(0, 187, 255)";

    }
    else if (turn === 1){
        single_timer.style['font-weight'] = "bold";
        single_timer.style['color'] ="#ff2c2c";
        single_timer.style['text-shadow'] = "0px 0px 10px #ff2c2c";

    }
}
update_timer()
function player_timer() {
    var min = Math.floor(ply_timer/60);
    min = (min < 10) ? '0' + min : min;
    var seconds = ply_timer % 60;
    seconds = (seconds <10) ? '0' + seconds : seconds;
    if (!is_pause){
        ply_timer --;
    }
    if (ply_timer === -1){
        ply_timer = 20-1;
        turn = (turn === 0) ? 1:0;
        update_turn();
    }
    single_timer.innerHTML = `${min}:${seconds}`;
}
function is_grey(c){
    if (window.getComputedStyle(c).getPropertyValue("background-color") === "rgb(142, 142, 142)") {
        return true;
    }
    else {return false}
}
function get_color(c){
    return c.style['background-color'];
}
game_over();
function revoke_controlled_edge(selected_ele){
    if (captured_edges.includes("l1")) {
        if (selected_ele === c1 || selected_ele === c2) {
            captured_edges.splice(captured_edges.indexOf("l1"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l1").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l1").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("l2")) {
        if (selected_ele === c1 || selected_ele === c6) {
            captured_edges.splice(captured_edges.indexOf("l2"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l2").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l2").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("l3")) {
        if (selected_ele === c2 || selected_ele === c3) {
            captured_edges.splice(captured_edges.indexOf("l3"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l3").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l3").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }
    if (captured_edges.includes("l4")) {
        if (selected_ele === c6 || selected_ele === c5) {
            captured_edges.splice(captured_edges.indexOf("l4"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l4").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l4").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("l5")) {
        if (selected_ele === c3 || selected_ele === c4) {
            captured_edges.splice(captured_edges.indexOf("l5"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l5").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l5").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("l6")) {
        if (selected_ele === c4 || selected_ele === c5) {
            captured_edges.splice(captured_edges.indexOf("l6"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("l6").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("l6").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb1")) {
        if (selected_ele === c7 || selected_ele === c8) {
            captured_edges.splice(captured_edges.indexOf("lb1"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb1").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb1").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb2")) {
        if (selected_ele === c7 || selected_ele === c12) {
            captured_edges.splice(captured_edges.indexOf("lb2"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb2").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb2").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb3")) {
        if (selected_ele === c8 || selected_ele === c9) {
            captured_edges.splice(captured_edges.indexOf("lb3"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb3").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb3").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb4")) {
        if (selected_ele === c12 || selected_ele === c11) {
            captured_edges.splice(captured_edges.indexOf("lb4"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb4").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb4").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb5")) {
        if (selected_ele === c9 || selected_ele === c10) {
            captured_edges.splice(captured_edges.indexOf("lb5"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb5").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb5").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lb6")) {
        if (selected_ele === c10 || selected_ele === c11) {
            captured_edges.splice(captured_edges.indexOf("lb6"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lb6").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lb6").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc1")) {
        if (selected_ele === c13 || selected_ele === c14) {
            captured_edges.splice(captured_edges.indexOf("lc1"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc1").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc1").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc2")) {
        if (selected_ele === c13 || selected_ele === c18) {
            captured_edges.splice(captured_edges.indexOf("lc2"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc2").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc2").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc3")) {
        if (selected_ele === c14 || selected_ele === c15) {
            captured_edges.splice(captured_edges.indexOf("lc3"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc3").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc3").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc4")) {
        if (selected_ele === c18 || selected_ele === c17) {
            captured_edges.splice(captured_edges.indexOf("lc4"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc4").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc4").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc5")) {
        if (selected_ele === c15 || selected_ele === c16) {
            captured_edges.splice(captured_edges.indexOf("lc5"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc5").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc5").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }

    if (captured_edges.includes("lc6")) {
        if (selected_ele === c16 || selected_ele === c17) {
            captured_edges.splice(captured_edges.indexOf("lc6"), 1);
            if (turn === 1) {
                green_score -= parseInt(document.getElementById("lc6").getElementsByTagName("h2")[0].innerHTML);
            } else if (turn === 0) {
                red_score -= parseInt(document.getElementById("lc6").getElementsByTagName("h2")[0].innerHTML);
            }
        }
    }




    green_score_text.innerHTML = `Blue: ${green_score}`;
    red_score_text.innerHTML = `Red: ${red_score}`;

}
function update_score() {
    if (is_grey(c6) === false && get_color(c6) === get_color(c12)) {
        if (get_color(c6) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h1")) {
                green_score += parseInt(h1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h1");
            }
        } 
        else if (get_color(c6) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h1")) {
                red_score += parseInt(h1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h1");
            }
        }
    }
    if (is_grey(c2) === false && get_color(c2) === get_color(c8)) {
        if (get_color(c2) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h2")) {
                green_score += parseInt(h2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h2");
            }
        } 
        else if (get_color(c2) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h2")) {
                red_score += parseInt(h2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h2");
            }
        }
    }
    if (is_grey(c4) === false && get_color(c4) === get_color(c10)) {
        if (get_color(c4) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h3")) {
                green_score += parseInt(h3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h3");
            }
        } 
        else if (get_color(c4) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h3")) {
                red_score += parseInt(h3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h3");
            }
        }
    }
    if (is_grey(c9) === false && get_color(c9) === get_color(c15)) {
        if (get_color(c9) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h4")) {
                green_score += parseInt(h4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h4");
            }
        } 
        else if (get_color(c9) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h4")) {
                red_score += parseInt(h4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h4");
            }
        }
    }
    if (is_grey(c11) === false && get_color(c11) === get_color(c17)) {
        if (get_color(c11) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h5")) {
                green_score += parseInt(h5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h5");
            }
        } 
        else if (get_color(c11) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h5")) {
                red_score += parseInt(h5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h5");
            }
        }
    }
    if (is_grey(c7) === false && get_color(c7) === get_color(c13)) {
        if (get_color(c7) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("h6")) {
                green_score += parseInt(h6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h6");
            }
        } 
        else if (get_color(c7) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("h6")) {
                red_score += parseInt(h6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("h6");
            }
        }
    }
    if (is_grey(c1) === false && get_color(c1) === get_color(c2)) {
        if (get_color(c1) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l1")) {
                green_score += parseInt(l1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l1");
            }
        } 
        else if (get_color(c1) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l1")) {
                red_score += parseInt(l1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l1");
            }
        }
    }
    if (is_grey(c1) === false && get_color(c1) === get_color(c6)) {
        if (get_color(c1) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l2")) {
                green_score += parseInt(l2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l2");
            }
        } else if (get_color(c1) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l2")) {
                red_score += parseInt(l2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l2");
            }
        }
    }
    if (is_grey(c2) === false && get_color(c2) === get_color(c3)) {
        if (get_color(c2) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l3")) {
                green_score += parseInt(l3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l3");
            }
        } else if (get_color(c2) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l3")) {
                red_score += parseInt(l3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l3");
            }
        }
    }
    if (is_grey(c6) === false && get_color(c6) === get_color(c5)) {
        if (get_color(c6) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l4")) {
                green_score += parseInt(l4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l4");
            }
        } else if (get_color(c6) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l4")) {
                red_score += parseInt(l4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l4");
            }
        }
    }
    if (is_grey(c3) === false && get_color(c3) === get_color(c4)) {
        if (get_color(c3) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l5")) {
                green_score += parseInt(l5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l5");
            }
        } else if (get_color(c3) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l5")) {
                red_score += parseInt(l5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l5");
            }
        }
    }
    if (is_grey(c5) === false && get_color(c5) === get_color(c4)) {
        if (get_color(c5) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("l6")) {
                green_score += parseInt(l6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l6");
            }
        } else if (get_color(c5) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("l6")) {
                red_score += parseInt(l6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("l6");
            }
        }
    }
    if (is_grey(c7) === false && get_color(c7) === get_color(c8)) {
        if (get_color(c7) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb1")) {
                green_score += parseInt(lb1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb1");
            }
        } else if (get_color(c7) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb1")) {
                red_score += parseInt(lb1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb1");
            }
        }
    }
    if (is_grey(c7) === false && get_color(c7) === get_color(c12)) {
        if (get_color(c7) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb2")) {
                green_score += parseInt(lb2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb2");
            }
        } else if (get_color(c7) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb2")) {
                red_score += parseInt(lb2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb2");
            }
        }
    }
    if (is_grey(c8) === false && get_color(c8) === get_color(c9)) {
        if (get_color(c8) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb3")) {
                green_score += parseInt(lb3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb3");
            }
        } else if (get_color(c8) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb3")) {
                red_score += parseInt(lb3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb3");
            }
        }
    }
    if (is_grey(c12) === false && get_color(c12) === get_color(c11)) {
        if (get_color(c12) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb4")) {
                green_score += parseInt(lb4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb4");
            }
        } else if (get_color(c12) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb4")) {
                red_score += parseInt(lb4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb4");
            }
        }
    }
    if (is_grey(c9) === false && get_color(c9) === get_color(c10)) {
        if (get_color(c9) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb5")) {
                green_score += parseInt(lb5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb5");
            }
        } else if (get_color(c9) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb5")) {
                red_score += parseInt(lb5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb5");
            }
        }
    }
    if (is_grey(c10) === false && get_color(c10) === get_color(c11)) {
        if (get_color(c10) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lb6")) {
                green_score += parseInt(lb6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb6");
            }
        } else if (get_color(c10) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lb6")) {
                red_score += parseInt(lb6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lb6");
            }
        }
    }
    if (is_grey(c13) === false && get_color(c13) === get_color(c14)) {
        if (get_color(c13) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc1")) {
                green_score += parseInt(lc1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc1");
            }
        } else if (get_color(c13) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc1")) {
                red_score += parseInt(lc1.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc1");
            }
        }
    }
    if (is_grey(c13) === false && get_color(c13) === get_color(c18)) {
        if (get_color(c13) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc2")) {
                green_score += parseInt(lc2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc2");
            }
        } else if (get_color(c13) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc2")) {
                red_score += parseInt(lc2.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc2");
            }
        }
    }
    if (is_grey(c14) === false && get_color(c14) === get_color(c15)) {
        if (get_color(c14) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc3")) {
                green_score += parseInt(lc3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc3");
            }
        } else if (get_color(c14) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc3")) {
                red_score += parseInt(lc3.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc3");
            }
        }
    }
    if (is_grey(c18) === false && get_color(c18) === get_color(c17)) {
        if (get_color(c18) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc4")) {
                green_score += parseInt(lc4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc4");
            }
        } else if (get_color(c18) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc4")) {
                red_score += parseInt(lc4.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc4");
            }
        }
    }
    if (is_grey(c15) === false && get_color(c15) === get_color(c16)) {
        if (get_color(c15) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc5")) {
                green_score += parseInt(lc5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc5");
            }
        } else if (get_color(c15) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc5")) {
                red_score += parseInt(lc5.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc5");
            }
        }
    }
    if (is_grey(c16) === false && get_color(c16) === get_color(c17)) {
        if (get_color(c16) === "rgb(6, 151, 255)") {
            if (!captured_edges.includes("lc6")) {
                green_score += parseInt(lc6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc6");
            }
        } else if (get_color(c16) === "rgb(255, 44, 44)") {
            if (!captured_edges.includes("lc6")) {
                red_score += parseInt(lc6.getElementsByTagName("h2")[0].innerHTML);
                captured_edges.push("lc6");
            }
        }
    }


    green_score_text.innerHTML = `Blue: ${green_score}`;
    red_score_text.innerHTML = `Red: ${red_score}`;

}
function pause_screen() {
    is_pause = true;
    pause_div.style.visibility = "visible";
}
function resume_screen() {
    is_pause = false;
    pause_div.style.visibility = "hidden";
}
function reset_screen(){
    if (confirm("Do you want to reset the game?") == true){
        location.reload();
    }
}
function check_piece() {
    if (is_grey(c1) === false && (get_color(c1) === get_color(c5) && get_color(c1) === get_color(c12) && get_color(c6) != get_color(c1))) {
        c6.style['background-color'] = "rgb(142, 142, 142)";
        c6.style['box-shadow'] = "";
    }
    if (is_grey(c6) === false && (get_color(c6) === get_color(c2)  && get_color(c1) != get_color(c2))) {
        c1.style['background-color'] = "rgb(142, 142, 142)";
        c1.style['box-shadow'] = "";
    }
    if (is_grey(c1) === false && (get_color(c1) === get_color(c3) && get_color(c1) === get_color(c8) && get_color(c2) != get_color(c3))) {
        c2.style['background-color'] = "rgb(142, 142, 142)";
        c2.style['box-shadow'] = "";
    }
    if (is_grey(c2) === false && (get_color(c2) === get_color(c4) && get_color(c2) != get_color(c3))) {
        c3.style['background-color'] = "rgb(142, 142, 142)";
        c3.style['box-shadow'] = "";
    }
    if (is_grey(c3) === false && (get_color(c3) === get_color(c5) && get_color(c3) === get_color(c10) && get_color(c3) != get_color(c4))) {
        c4.style['background-color'] = "rgb(142, 142, 142)";
        c4.style['box-shadow'] = "";
    }
    if (is_grey(c4) === false && (get_color(c4) === get_color(c6) && get_color(c4) != get_color(c5))) {
        c5.style['background-color'] = "rgb(142, 142, 142)";
        c5.style['box-shadow'] = "";
    }
    /////////////////////////
    if (is_grey(c7) === false && (get_color(c7) === get_color(c11) && get_color(c7) === get_color(c6) && get_color(c7) != get_color(c12))) {
        c12.style['background-color'] = "rgb(142, 142, 142)";
        c12.style['box-shadow'] = "";
    }
    if (is_grey(c12) === false && (get_color(c12) === get_color(c8) && get_color(c12) === get_color(c13) && get_color(c7) != get_color(c8))) {
        c7.style['background-color'] = "rgb(142, 142, 142)";
        c7.style['box-shadow'] = "";
    }
    if (is_grey(c7) === false && (get_color(c7) === get_color(c9) && get_color(c7) === get_color(c2) && get_color(c8) != get_color(c7))) {
        c8.style['background-color'] = "rgb(142, 142, 142)";
        c8.style['box-shadow'] = "";
    }
    if (is_grey(c8) === false && (get_color(c8) === get_color(c10) && get_color(c8) === get_color(c15) && get_color(c9) != get_color(c8))) {
        c9.style['background-color'] = "rgb(142, 142, 142)";
        c9.style['box-shadow'] = "";
    }
    if (is_grey(c9) === false && (get_color(c9) === get_color(c11) && get_color(c9) === get_color(c4) && get_color(c10) != get_color(c9))) {
        c10.style['background-color'] = "rgb(142, 142, 142)";
        c10.style['box-shadow'] = "";
    }
    if (is_grey(c10) === false && (get_color(c10) === get_color(c12) && get_color(c10) === get_color(c17) && get_color(c11) != get_color(c10))) {
        c11.style['background-color'] = "rgb(142, 142, 142)";
        c11.style['box-shadow'] = "";
    }
    /////////////
    if (is_grey(c18) === false && (get_color(c18) === get_color(c14) && get_color(c18) === get_color(c7) && get_color(c13) != get_color(c18))) {
        c13.style['background-color'] = "rgb(142, 142, 142)";
        c13.style['box-shadow'] = "";
    }
    if (is_grey(c13) === false && (get_color(c13) === get_color(c15)  && get_color(c14) != get_color(c13))) {
        c14.style['background-color'] = "rgb(142, 142, 142)";
        c14.style['box-shadow'] = "";
    }
    if (is_grey(c14) === false && (get_color(c14) === get_color(c16) && get_color(c14) === get_color(c9) && get_color(c15) != get_color(c14))) {
        c15.style['background-color'] = "rgb(142, 142, 142)";
        c15.style['box-shadow'] = "";
    }
    if (is_grey(c15) === false && (get_color(c2) === get_color(c4) && get_color(c2) != get_color(c3))) {
        c16.style['background-color'] = "rgb(142, 142, 142)";
        c16.style['box-shadow'] = "";
    }
    if (is_grey(c3) === false && (get_color(c3) === get_color(c5) && get_color(c3) === get_color(c10) && get_color(c3) != get_color(c4))) {
        c4.style['background-color'] = "rgb(142, 142, 142)";
        c4.style['box-shadow'] = "";
    }
    if (is_grey(c4) === false && (get_color(c4) === get_color(c6) && get_color(c4) != get_color(c5))) {
        c5.style['background-color'] = "rgb(142, 142, 142)";
        c5.style['box-shadow'] = "";
    }
}
function check_hex() {
    if (!is_grey(c1) && !is_grey(c2) && !is_grey(c3) && !is_grey(c4) && !is_grey(c5) && !is_grey(c6)){
        is_hex2 = true;
    }
    if (!is_grey(c11) && !is_grey(c12) && !is_grey(c12) && !is_grey(c14) && !is_grey(c15) && !is_grey(c16)){
        is_hex3 = true;
    }
}

function update_turn(){
    if (turn === 1){
        ele = document.getElementById("turn");
        ele.innerHTML = "Red's Turn";
        ele.style['width'] = "220px";
        ele.style.backgroundColor = "rgb(255, 44, 44)";
        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(228, 0, 0)";
        update_timer()

    }
    else{
        ele = document.getElementById("turn");
        ele.innerHTML = "Blue's Turn";
        ele.style['width'] = "250px";
        ele.style.backgroundColor = "rgb(6, 151, 255)";
        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(0, 187, 255)";
        update_timer()
    }
}
update_turn()




function on_click(c){
    if (!game_over()){
        if (turn===0){
            if (window.getComputedStyle(c).getPropertyValue("background-color") === "rgb(142, 142, 142)"){
                if (select === 0 &&  green_titan >0){
                    check_hex()
                    if (c === c7 || c === c8 || c === c9 || c=== c10 || c === c11 || c === c12){
                        if (is_hex2){
                            ele = document.getElementById("turn");
                            ele.innerHTML = "Red's Turn";
                            ele.style['width'] = "220px";
                            ele.style.backgroundColor = "rgb(255, 44, 44)";
                            ele.style["box-shadow"] = "0px 0px 10px 2px rgb(228, 0, 0)";
                            
                            c.style['background-color'] = "rgb(6, 151, 255)";
                            c.style['box-shadow']="0px 0px 10px 2px rgb(0, 187, 255)";
                            green_titan -= 1;
                            turn=1;
                            ply_timer = 20;
                            update_timer()
                            check_hex();
                            var audio = new Audio('place.mp3');
                            audio.play();
                        }
                    }
                    else if (c === c13 || c === c14 || c === c15 || c=== c16 || c === c17 || c === c18){
                        if (is_hex3){
                            ele = document.getElementById("turn");
                            ele.innerHTML = "Red's Turn";
                            ele.style['width'] = "220px";
                            ele.style.backgroundColor = "rgb(255, 44, 44)";
                            ele.style["box-shadow"] = "0px 0px 10px 2px rgb(228, 0, 0)";
                            
                            c.style['background-color'] = "rgb(6, 151, 255)";
                            c.style['box-shadow']="0px 0px 10px 2px rgb(0, 187, 255)";
                            green_titan -= 1;
                            turn=1;
                            ply_timer = 20;
                            update_timer()
                            check_hex();
                            var audio = new Audio('place.mp3');
                            audio.play();
                        }
                    }
                    else {
                        ele = document.getElementById("turn");
                        ele.innerHTML = "Red's Turn";
                        ele.style['width'] = "220px";
                        ele.style.backgroundColor = "rgb(255, 44, 44)";
                        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(228, 0, 0)";
                        
                        c.style['background-color'] = "rgb(6, 151, 255)";
                        c.style['box-shadow']="0px 0px 10px 2px rgb(0, 187, 255)";
                        green_titan -= 1;
                        turn=1;
                        ply_timer = 20;
                        update_timer()
                        check_hex();
                        var audio = new Audio('place.mp3');
                        audio.play();
                    }
                        

                }
                else {
                    if (selected_ele.id === "c1" && (c.id == "c2" || c.id == "c6") || 
                    (selected_ele.id === "c2" && (c.id === "c1" || c.id === "c3" || c.id === "c8")) || 
                    (selected_ele.id === "c3" && (c.id === "c2" || c.id === "c4")) || 
                    (selected_ele.id === "c4" && (c.id === "c3" || c.id === "c5" || c.id === "c10")) || 
                    (selected_ele.id === "c5" && (c.id === "c4" || c.id === "c6")) || 
                    (selected_ele.id === "c6" && (c.id === "c5" || c.id === "c1" || c.id === "c12")) || 
                    (selected_ele.id === "c7" && (c.id === "c8" || c.id === "c12" || c.id === "c13")) || 
                    (selected_ele.id === "c8" && (c.id === "c7" || c.id === "c9" || c.id === "c2")) || 
                    (selected_ele.id === "c9" && (c.id === "c8" || c.id === "c10" || c.id === "c15")) || 
                    (selected_ele.id === "c10" && (c.id === "c9" || c.id === "c11" || c.id === "c4")) || 
                    (selected_ele.id === "c11" && (c.id === "c10" || c.id === "c12" || c.id === "c17")) || 
                    (selected_ele.id === "c12" && (c.id === "c11" || c.id === "c7" || c.id === "c6")) ||
                    (selected_ele.id === "c13" && (c.id === "c14" || c.id === "c18" || c.id === "c7")) || 
                    (selected_ele.id === "c14" && (c.id === "c13" || c.id === "c15")) || 
                    (selected_ele.id === "c15" && (c.id === "c14" || c.id === "c16" || c.id === "c9")) || 
                    (selected_ele.id === "c16" && (c.id === "c15" || c.id === "c17")) || 
                    (selected_ele.id === "c17" && (c.id === "c16" || c.id === "c18" || c.id === "c11")) || 
                    (selected_ele.id === "c18" && (c.id === "c17" || c.id === "c13"))){
                        ele = document.getElementById("turn");
                        ele.innerHTML = "Red's Turn";
                        ele.style['width'] = "220px";
                        ele.style.backgroundColor = "rgb(255, 44, 44)";
                        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(228, 0, 0)";
                        selected_ele.style['background-color'] = "rgb(142, 142, 142)";
                        selected_ele.style['box-shadow'] = "";
                        c.style['background-color'] = "rgb(6, 151, 255)";
                        c.style['box-shadow']="0px 0px 10px 2px rgb(0, 187, 255)";
                        turn = 1;
                        select = 0;
                        ply_timer = 20;
                        update_timer();
                        revoke_controlled_edge(selected_ele);
                        var audio = new Audio('place.mp3');
                        audio.play();
                    }
                }
            }
            else if (window.getComputedStyle(c).getPropertyValue("background-color") === "rgb(6, 151, 255)" ){
                selected_ele = c;
                select = 1;
            }
            
        }
        else if (turn===1){
            if (window.getComputedStyle(c).getPropertyValue("background-color") === "rgb(142, 142, 142)" ){
                if (select === 0 && red_titan >0){
                    check_hex();
                    if (c === c7 || c === c8 || c === c9 || c=== c10 || c === c11 || c === c12){
                        if (is_hex2){
                            ele = document.getElementById("turn");
                            ele.innerHTML = "Blue's Turn";
                            ele.style['width'] = "250px"
                            ele.style.backgroundColor = "rgb(6, 151, 255)";
                            ele.style["box-shadow"] = "0px 0px 10px 2px rgb(0, 187, 255)";
                            
                            c.style['background-color'] = "rgb(255, 44, 44)";
                            c.style['box-shadow']="0px 0px 10px 2px rgba(255, 0, 0, 0.82)";
                            red_titan -= 1;
                            turn=0;
                            ply_timer = 20;
                            update_timer()
                            check_hex();
                            var audio = new Audio('place.mp3');
                            audio.play();
                        }
                    }
                    else if (c === c13 || c === c14 || c === c15 || c=== c16 || c === c17 || c === c18){
                        if (is_hex3){
                            ele = document.getElementById("turn");
                            ele.innerHTML = "Blue's Turn";
                            ele.style['width'] = "250px"
                            ele.style.backgroundColor = "rgb(6, 151, 255)";
                            ele.style["box-shadow"] = "0px 0px 10px 2px rgb(0, 187, 255)";
                            
                            c.style['background-color'] = "rgb(255, 44, 44)";
                            c.style['box-shadow']="0px 0px 10px 2px rgba(255, 0, 0, 0.82)";
                            red_titan -= 1;
                            turn=0;
                            ply_timer = 20;
                            update_timer()
                            check_hex();
                            var audio = new Audio('place.mp3');
                            audio.play();
                        }
                    }
                    else {
                        ele = document.getElementById("turn");
                        ele.innerHTML = "Blue's Turn";
                        ele.style['width'] = "250px"
                        ele.style.backgroundColor = "rgb(6, 151, 255)";
                        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(0, 187, 255)";
                        
                        c.style['background-color'] = "rgb(255, 44, 44)";
                        c.style['box-shadow']="0px 0px 10px 2px rgba(255, 0, 0, 0.82)";
                        red_titan -= 1;
                        turn=0;
                        ply_timer = 20;
                        update_timer()
                        check_hex();
                        var audio = new Audio('place.mp3');
                        audio.play();
                    }
                    
                }
                else {
                    if (selected_ele.id === "c1" && (c.id == "c2" || c.id == "c6") || 
                    (selected_ele.id === "c2" && (c.id === "c1" || c.id === "c3" || c.id === "c8")) || 
                    (selected_ele.id === "c3" && (c.id === "c2" || c.id === "c4")) || 
                    (selected_ele.id === "c4" && (c.id === "c3" || c.id === "c5" || c.id === "c10")) || 
                    (selected_ele.id === "c5" && (c.id === "c4" || c.id === "c6")) || 
                    (selected_ele.id === "c6" && (c.id === "c5" || c.id === "c1" || c.id === "c12")) || 
                    (selected_ele.id === "c7" && (c.id === "c8" || c.id === "c12" || c.id === "c13")) || 
                    (selected_ele.id === "c8" && (c.id === "c7" || c.id === "c9" || c.id === "c2")) || 
                    (selected_ele.id === "c9" && (c.id === "c8" || c.id === "c10" || c.id === "c15")) || 
                    (selected_ele.id === "c10" && (c.id === "c9" || c.id === "c11" || c.id === "c4")) || 
                    (selected_ele.id === "c11" && (c.id === "c10" || c.id === "c12" || c.id === "c17")) || 
                    (selected_ele.id === "c12" && (c.id === "c11" || c.id === "c7" || c.id === "c6")) ||
                    (selected_ele.id === "c13" && (c.id === "c14" || c.id === "c18" || c.id === "c7")) || 
                    (selected_ele.id === "c14" && (c.id === "c13" || c.id === "c15")) || 
                    (selected_ele.id === "c15" && (c.id === "c14" || c.id === "c16" || c.id === "c9")) || 
                    (selected_ele.id === "c16" && (c.id === "c15" || c.id === "c17")) || 
                    (selected_ele.id === "c17" && (c.id === "c16" || c.id === "c18" || c.id === "c11")) || 
                    (selected_ele.id === "c18" && (c.id === "c17" || c.id === "c13"))){
                        ele = document.getElementById("turn");
                        ele.innerHTML = "Blue's Turn";
                        ele.style['width'] = "250px"
                        ele.style.backgroundColor = "rgb(6, 151, 255)";
                        ele.style["box-shadow"] = "0px 0px 10px 2px rgb(0, 187, 255)";
                        selected_ele.style['background-color'] = "rgb(142, 142, 142)";
                        selected_ele.style['box-shadow'] = "";
                        c.style['background-color'] = "rgb(255, 44, 44)";
                        c.style['box-shadow']="0px 0px 10px 2px rgba(255, 0, 0, 0.82)";
                        turn=0;
                        select=0;
                        ply_timer = 20;
                        update_timer();
                        revoke_controlled_edge(selected_ele);
                        var audio = new Audio('place.mp3');
                        audio.play();
                    }
                }
            }
            else if (window.getComputedStyle(c).getPropertyValue("background-color") === "rgb(255, 44, 44)" ){
                selected_ele = c;
                select = 1;
            }
        }
    }
    else {
        game_over();
        game_over_screen.style.visibility = "visible";
        
        console.log("fewnnuui")
    }

    check_piece();
    update_score();
    
}
function on_hover(c){
        c.style['cursor'] = 'pointer';
}

function update(){
    if (document.documentElement.clientWidth < 1200){
        countdown.style['font-size'] = "50px";
        green_score_text.style['position'] = 'absolute';
        red_score_text.style['position'] = 'relative';
        single_timer.style['position'] = 'absolute';
        pause_btn.getElementsByTagName("h2")[0].style['margin-top'] = "12px";
        pause_btn.getElementsByTagName("h2")[0].style['margin-left'] = "-2px";
        reset_btn.getElementsByTagName("h2")[0].style['margin-top'] = "-8px";
        reset_btn.getElementsByTagName("h2")[0].style['margin-left'] = "3px";
        for (let i=0; i<edges.length; i++){
            edges[i].getElementsByTagName("h2")[0].style['font-size'] = "17px";
        }
        l2.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        l2.getElementsByTagName("div")[0].style['margin-right'] = "-10px"
        l4.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        l4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
        l6.getElementsByTagName("div")[0].style['margin-top'] = "-30px"

        lb2.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lb2.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        lb4.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        lb4.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lb6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        lc2.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lc2.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        lc4.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        lc4.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lc6.getElementsByTagName("div")[0].style['margin-top'] = "-30px"

        h1.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        h3.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        h5.getElementsByTagName("div")[0].style['margin-top'] = "-30px"

        l3.getElementsByTagName("div")[0].style['margin-top'] = "-7px"
        l5.getElementsByTagName("div")[0].style['margin-top'] = "-7px"

        lb1.getElementsByTagName("div")[0].style['margin-top'] = "-5px"
        lb3.getElementsByTagName("div")[0].style['margin-top'] = "-8px"
        lb5.getElementsByTagName("div")[0].style['margin-top'] = "-10px"
        lb6.getElementsByTagName("div")[0].style['margin-top'] = "-27px"

        lc1.getElementsByTagName("div")[0].style['margin-top'] = "-5px"
        lc3.getElementsByTagName("div")[0].style['margin-top'] = "-8px"
        lc5.getElementsByTagName("div")[0].style['margin-top'] = "-10px"
        lc6.getElementsByTagName("div")[0].style['margin-top'] = "-27px"
        h2.getElementsByTagName("div")[0].style['margin-top'] = "-30px"
        h4.getElementsByTagName("div")[0].style['margin-top'] = "-25px"
        h4.getElementsByTagName("div")[0].style['margin-left'] = "-5px"
        h5.getElementsByTagName("div")[0].style['margin-top'] = "-25px"
        h5.getElementsByTagName("div")[0].style['margin-left'] = "5px"
        h6.getElementsByTagName("div")[0].style['margin-top'] = "-25px"
        l1.style['width'] = "150px"
        l2.style['width'] = "150px"
        l3.style['width'] = "150px"
        l4.style['width'] = "150px"
        l5.style['width'] = "150px"
        l6.style['width'] = "150px"
        lb1.style['width'] = "100px"
        lb2.style['width'] = "100px"
        lb3.style['width'] = "100px"
        lb4.style['width'] = "100px"
        lb5.style['width'] = "100px"
        lb6.style['width'] = "100px"
        lc1.style['width'] = "50px"
        lc2.style['width'] = "50px"
        lc3.style['width'] = "50px"
        lc4.style['width'] = "50px"
        lc5.style['width'] = "50px"
        lc6.style['width'] = "50px"
        h1.style['width'] = "50px"
        h2.style['width'] = "50px"
        h3.style['width'] = "50px"
        h4.style['width'] = "50px"
        h5.style['width'] = "50px"
        h6.style['width'] = "50px"
        for (let i =0; i<places.length; i++){
            places[i].style['width'] = "12.5px";
            places[i].style['height'] = "12.5px"
        }
    

        c1.style.top = "143px"
        c2.style.top = "143px"
        c3.style.top = "273px"
        c4.style.top = "402px"
        c5.style.top = "402px"
        c6.style.top = "273px"
        
        c7.style.top = "188px"
        c8.style.top = "188px"
        c9.style.top = "273px"
        c10.style.top = "358px"
        c11.style.top = "358px"
        c12.style.top = "273px"

        c13.style.top = "231px"
        c14.style.top = "231px"
        c15.style.top = "273px"
        c16.style.top = "315px"
        c17.style.top = "315px"
        c18.style.top = "273px"

        l1.style.top = "150px"
        l2.style.top = "215px"
        l3.style.top = "215px"
        l4.style.top = "345px"
        l5.style.top = "345px"
        l6.style.top = "410px"

        lb1.style.top = "195px"
        lb2.style.top = "239px"
        lb3.style.top = "239px"
        lb4.style.top = "325px"
        lb5.style.top = "325px"
        lb6.style.top = "368px"

        lc1.style.top = "238px"
        lc2.style.top = "260px"
        lc3.style.top = "260px"
        lc4.style.top = "303px"
        lc5.style.top = "303px"
        lc6.style.top = "325px"

        h1.style.top = "281px"
        h2.style.top = "174px"
        h3.style.top = "389px"
        h4.style.top = "281px"
        h5.style.top = "347px"
        h6.style.top = "216px"

        c1.style.left = document.documentElement.clientWidth/2 - 82 + 'px'
        c2.style.left = document.documentElement.clientWidth/2 + 66 + 'px'
        c3.style.left = document.documentElement.clientWidth/2 + 137 + 'px'
        c4.style.left = document.documentElement.clientWidth/2 + 67 + 'px'
        c5.style.left = document.documentElement.clientWidth/2 - 82 + 'px'
        c6.style.left = document.documentElement.clientWidth/2 - 157 + 'px'

        c7.style.left = document.documentElement.clientWidth/2 - 56 + 'px'
        c8.style.left = document.documentElement.clientWidth/2 + 42 + 'px'
        c9.style.left = document.documentElement.clientWidth/2 + 88 + 'px'
        c10.style.left = document.documentElement.clientWidth/2 + 43 + 'px'
        c11.style.left = document.documentElement.clientWidth/2 - 57 + 'px'
        c12.style.left = document.documentElement.clientWidth/2 - 104 + 'px'

        c13.style.left = document.documentElement.clientWidth/2 - 32 + 'px'
        c14.style.left = document.documentElement.clientWidth/2 + 17 + 'px'
        c15.style.left = document.documentElement.clientWidth/2 + 37 + 'px'
        c16.style.left = document.documentElement.clientWidth/2 + 18 + 'px'
        c17.style.left = document.documentElement.clientWidth/2 - 32 + 'px'
        c18.style.left = document.documentElement.clientWidth/2 - 55 + 'px'

        l1.style.left = document.documentElement.clientWidth/2 -75 + 'px';
        l2.style.left = document.documentElement.clientWidth/2 -187 + 'px';
        l3.style.left = document.documentElement.clientWidth/2 +37 + 'px';
        l4.style.left = document.documentElement.clientWidth/2 -187 + 'px';
        l5.style.left = document.documentElement.clientWidth/2 +37 + 'px';
        l6.style.left = document.documentElement.clientWidth/2 -75 + 'px';

        lb1.style.left = document.documentElement.clientWidth/2 -50 + 'px';
        lb2.style.left = document.documentElement.clientWidth/2 -125 + 'px';
        lb3.style.left = document.documentElement.clientWidth/2 + 25 + 'px';
        lb4.style.left = document.documentElement.clientWidth/2 -125 + 'px';
        lb5.style.left = document.documentElement.clientWidth/2 + 25 + 'px';
        lb6.style.left = document.documentElement.clientWidth/2 -50 + 'px';

        lc1.style.left = document.documentElement.clientWidth/2 -25 + 'px';
        lc2.style.left = document.documentElement.clientWidth/2 -62 + 'px';
        lc3.style.left = document.documentElement.clientWidth/2 + 12 + 'px';
        lc4.style.left = document.documentElement.clientWidth/2 -62 + 'px';
        lc5.style.left = document.documentElement.clientWidth/2 + 12 + 'px';
        lc6.style.left = document.documentElement.clientWidth/2 -25 + 'px';

        h1.style.left = document.documentElement.clientWidth/2 -150 + 'px';
        h2.style.left = document.documentElement.clientWidth/2 +37 + 'px';
        h3.style.left = document.documentElement.clientWidth/2 +37 + 'px';
        h4.style.left = document.documentElement.clientWidth/2 +50 + 'px';
        h5.style.left = document.documentElement.clientWidth/2 -62 + 'px';
        h6.style.left = document.documentElement.clientWidth/2 -62 + 'px';

        single_timer.style.top = "-150px";
        green_score_text.style.top = "500px";
        red_score_text.style.top = `${400 - red_score_text.offsetHeight/2}px`;

        single_timer.style.left = document.documentElement.clientWidth/2 - single_timer.offsetWidth/2+ 'px';
        pause_btn.style.top = "550px";
        pause_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
        reset_btn.style.top = "620px";
        reset_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
        pause_div.style.visibility = "hidden";
        game_over_screen.style.visibility = "hidden";
    }
    else {
        green_score_text.style['position'] = '';
        red_score_text.style['position'] = '';
        single_timer.style['position'] = '';
        countdown.style['font-size'] = "50px"
        pause_btn.getElementsByTagName("h2")[0].style['margin-top'] = "";
        pause_btn.getElementsByTagName("h2")[0].style['margin-left'] = "";
        reset_btn.getElementsByTagName("h2")[0].style['margin-top'] = "";
        reset_btn.getElementsByTagName("h2")[0].style['margin-left'] = "";
        for (let i=0; i<edges.length; i++){
            edges[i].getElementsByTagName("h2")[0].style['font-size'] = "";
        }
        l2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        l2.getElementsByTagName("div")[0].style['margin-right'] = "-10px"
        l4.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        l4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
        l6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        lb2.getElementsByTagName("div")[0].style['margin-left'] = "-10px"
        lb2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        lb4.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        lb4.getElementsByTagName("div")[0].style['margin-left'] = "15px"
        lb6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        lc2.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lc2.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        lc4.getElementsByTagName("div")[0].style['margin-top'] = "-45px"
        lc4.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        lc6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        h1.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        h3.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        h5.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        l3.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        l5.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        
        lb1.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lb3.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lb5.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lb6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"

        lc1.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lc3.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lc5.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        lc6.getElementsByTagName("div")[0].style['margin-top'] = "-40px"
        h2.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        h4.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        h4.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        h5.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        h5.getElementsByTagName("div")[0].style['margin-left'] = "0px"
        h6.getElementsByTagName("div")[0].style['margin-top'] = "0px"
        
        l1.style['width'] = "300px"
        l2.style['width'] = "300px"
        l3.style['width'] = "300px"
        l4.style['width'] = "300px"
        l5.style['width'] = "300px"
        l6.style['width'] = "300px"
        lb1.style['width'] = "200px"
        lb2.style['width'] = "200px"
        lb3.style['width'] = "200px"
        lb4.style['width'] = "200px"
        lb5.style['width'] = "200px"
        lb6.style['width'] = "200px"
        lc1.style['width'] = "100px"
        lc2.style['width'] = "100px"
        lc3.style['width'] = "100px"
        lc4.style['width'] = "100px"
        lc5.style['width'] = "100px"
        lc6.style['width'] = "100px"
        h1.style['width'] = "100px"
        h2.style['width'] = "100px"
        h3.style['width'] = "100px"
        h4.style['width'] = "100px"
        h5.style['width'] = "100px"
        h6.style['width'] = "100px"

        for (let i =0; i<places.length; i++){
            places[i].style['width'] = "25px";
            places[i].style['height'] = "25px"
        }

        c1.style.top = "87.5px";
        c2.style.top = "87.5px";
        c3.style.top = "347.5px";
        c4.style.top = "600.5px";
        c5.style.top = "600.5px";
        c6.style.top = "347.5px";
        c7.style.top = "175.5px";
        c8.style.top = "175.5px";
        c9.style.top = "347.5px";
        c10.style.top = "520.5px";
        c11.style.top = "520.5px";
        c12.style.top = "347.5px";

        c13.style.top = "260.5px";
        c14.style.top = "260.5px";
        c15.style.top = "347.5px";
        c17.style.top = "423.5px";
        c16.style.top = "423.5px";
        c18.style.top = "347.5px";

        c1.style.left = document.documentElement.clientWidth/2 + -165 + "px";
        c2.style.left = document.documentElement.clientWidth/2 + 134 + "px";
        c3.style.left = document.documentElement.clientWidth/2 + 280 + "px";
        c4.style.left = document.documentElement.clientWidth/2 + 134 + "px";
        c5.style.left = document.documentElement.clientWidth/2 -165 + "px";
        c6.style.left = document.documentElement.clientWidth/2 - 310 + "px";

        c7.style.left = document.documentElement.clientWidth/2 + -112.5 + "px";
        c8.style.left = document.documentElement.clientWidth/2 + 85.5 + "px";
        c9.style.left = document.documentElement.clientWidth/2 + 180 + "px";
        c10.style.left = document.documentElement.clientWidth/2 + 85.5 + "px";
        c11.style.left = document.documentElement.clientWidth/2 -112.5 + "px";
        c12.style.left = document.documentElement.clientWidth/2 - 210 + "px";

        c13.style.left = document.documentElement.clientWidth/2 + -60.5 + "px";
        c14.style.left = document.documentElement.clientWidth/2 + 37.5 + "px";
        c15.style.left = document.documentElement.clientWidth/2 + 81.5 + "px";
        c16.style.left = document.documentElement.clientWidth/2 + 37.5 + "px";
        c17.style.left = document.documentElement.clientWidth/2 -60.5 + "px";
        c18.style.left = document.documentElement.clientWidth/2 - 107.5 + "px";

        l1.style.top = "100px";
        l2.style.top = "229.5px";
        l3.style.top = "229.5px";
        l4.style.top = "489px";
        l5.style.top = "489px";
        l6.style.top = "618px";
        lb1.style.top = "186px";
        lb2.style.top = "273px";
        lb3.style.top = "273px";
        lb4.style.top = "445.5px";
        lb5.style.top = "445.5px";
        lb6.style.top = "531.5px";
        lc1.style.top = "273px";
        lc2.style.top = "316px";
        lc3.style.top = "316px";
        lc4.style.top = "402px";
        lc5.style.top = "402px";
        lc6.style.top = "445px";
        h1.style.top = "359px"
        h2.style.top = "144px"
        h3.style.top = "574px"
        h4.style.top = "359px"
        h5.style.top = "489px"
        h6.style.top = "230px"
        
        for (let i =0; i<places.length; i++){
            places[i].style.top = parseInt(places[i].style.top.slice(0,3)) + 40 + "px";

        }
        for (let i =0; i<edges.length; i++){
            edges[i].style.top = parseInt(edges[i].style.top.slice(0,3)) + 40 + "px";

        }
        


        l1.style.left = document.documentElement.clientWidth/2 - 150 + 'px';
        l2.style.left = document.documentElement.clientWidth/2 -375 + "px";
        l3.style.left = document.documentElement.clientWidth/2 + 73.6 + "px";
        l4.style.left = document.documentElement.clientWidth/2 - 375 + 'px';
        l5.style.left = document.documentElement.clientWidth/2 + 73.6 + 'px';
        l6.style.left = document.documentElement.clientWidth/2 - 150 + 'px';

        lb1.style.left =  document.documentElement.clientWidth/2+ -100+ 'px';
        lb2.style.left =  document.documentElement.clientWidth/2+ -249+ 'px';
        lb3.style.left =  document.documentElement.clientWidth/2+ 50+ 'px';
        lb4.style.left =  document.documentElement.clientWidth/2-249+ 'px';
        lb5.style.left =  document.documentElement.clientWidth/2+50+ 'px';
        lb6.style.left =  document.documentElement.clientWidth/2+ -100+ 'px';

        lc1.style.left =  document.documentElement.clientWidth/2+ -50+ 'px';
        lc2.style.left =  document.documentElement.clientWidth/2+ -124+ 'px';
        lc3.style.left =  document.documentElement.clientWidth/2+ 25+ 'px';
        lc4.style.left =  document.documentElement.clientWidth/2- 124+ 'px';
        lc5.style.left =  document.documentElement.clientWidth/2+ 25+ 'px';
        lc6.style.left =  document.documentElement.clientWidth/2+ -50+ 'px';

        h1.style.left = document.documentElement.clientWidth/2 + -300+ "px";
        h2.style.left = document.documentElement.clientWidth/2 +74+ "px";
        h3.style.left = document.documentElement.clientWidth/2 +74+ "px";
        h4.style.left = document.documentElement.clientWidth/2 +100+ "px";
        h5.style.left = document.documentElement.clientWidth/2 -125+ "px";
        h6.style.left = document.documentElement.clientWidth/2 -124+ "px";
        
        single_timer.style.left = document.documentElement.clientWidth/2 - single_timer.offsetWidth/2+ 'px';

        pause_btn.style.top = "780px";
        pause_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
        reset_btn.style.top = "850px";
        reset_btn.style.left = document.documentElement.clientWidth/2 -25 + 'px';
        pause_div.style.visibility = "hidden";
        game_over_screen.style.visibility = "hidden";
    }
    if (is_pause === true){
        pause_div.style.visibility = "visible";
    }
    else {
        pause_div.style.visibility = "hidden"
    }
}
update()
function resize_pause() {
    pause_div.style['height'] = "120%"
}
for (let i =0; i<places.length; i++){
    places[i].addEventListener('click', function(){on_click(places[i])})
    places[i].addEventListener('mouseenter', function(){on_hover(places[i])})

}
pause_btn.addEventListener('mouseenter', function(){on_hover(pause_btn)})
pause_btn.addEventListener('click', pause_screen)
res_btn.addEventListener('click', resume_screen)
reset_btn.addEventListener('mouseenter', function(){on_hover(reset_btn)})
reset_btn.addEventListener('click', reset_screen)

window.addEventListener('resize', update)
window.onscroll = resize_pause