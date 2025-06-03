const world = document.getElementById("world");
const ctx = world.getContext("2d");
const player_health_ele  =document.getElementById("player-health")
const sys_health_ele = document.getElementById("sys-health")
const keys_ele = document.getElementById("keys")
const shards_ele = document.getElementById("shards")
const high_score_ele = document.getElementById("high-score")
const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const reset = document.getElementById("reset")
const game_over = document.getElementById("gameover")
const red = { r: 255, g: 0, b: 0 };
const green = { r: 0, g: 255, b: 0 };

var score;
var is_pause = false;
var m;
var player_found = false
var shards = 0;
var system_health = 98;
var highscore = isNaN(parseInt(localStorage.getItem('highscore')))?0:parseInt(localStorage.getItem('highscore'));
var n_keys = 0;
var l = []
var buildings = [];
var towers = [];
var key_places = []
var shards_arr = []
const bullets = []
let rand_i = Math.floor(Math.random()*6)+1;
let rand_j = Math.floor(Math.random()*3)+1;
game_over.style.visibility = "hidden"

pause.addEventListener("mousedown" , (e) => {
    is_pause = true;
})
resume.addEventListener("mousedown" , (e) => {
    is_pause = false;
    update()
})
reset.addEventListener("mousedown", (e) => {    
    if(window.confirm("Do you want to reset the game?")){location.reload()};
})

world.addEventListener("mousedown", (e) => {
    const rect = world.getBoundingClientRect();
    const mouseX = e.clientX-rect.left;
    const mouseY = e.clientY-rect.top;

    const dx = mouseX-future_player.x
    const dy = mouseY-future_player.y

    const vx = (dx/Math.sqrt(dx*dx+dy*dy))*5
    const vy = (dy/Math.sqrt(dx*dx+dy*dy))*5
    bullets.push({
        x:player.x,
        y:player.y,
        vx,
        vy,
        radius:7.5,
        life:300,
        width: 10
    })

})
for(let i=0; i< 50; i++){
    shards_arr.push(Math.floor(Math.random()*4)+1)
}
function generate_keys(){
    for (let k=0;k<28;k++){
        l = []
        for (let i=0;i<Math.floor(Math.random()*5)+2;i++){
            rand_x = Math.floor(Math.random()*350)+10
            rand_y = Math.floor(Math.random()*350)+10
            l.push([rand_x, rand_y])
        }
        key_places.push(l)
    }
}
generate_keys()

for (let k=0;k<28;k++){
    l = []
    for (let i=0;i<Math.floor(Math.random()*5) +2;i++){
        rand_x = Math.floor(Math.random()*200)+10
        rand_y = Math.floor(Math.random()*200)+10
        l.push([rand_x,rand_y,3])
    }
    buildings.push(l)
}
for(let i=0; i<28;i++){
    rand_in = Math.floor(Math.random()*buildings[i].length)
    rand_s = Math.random()*0.02
    towers.push([buildings[i][rand_in][0]+20, buildings[i][rand_in][1]+40, Math.random()*3.14, i, rand_in])
}

var world_x = 0;
var world_y = 0;
var world_vx = 0;
var world_vy = 0;

var world_x_move = false;
var world_y_move = false;

const player = {
    x:25,
    y:25,
    width: 40,
    height: 40,
    speed: 3,
    dx: 0,
    dy: 0,
    x_move: true,
    y_move: true,
    health: 50,
    score:0
}
var future_player = player
var future_world ={
        x: world_x + world_vx,
        y: world_y + world_vy
}
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
}
function rect_collide(r1, r2) {
    return (
        r1.x-r1.width/2 < r2.x + r2.width &&
        r1.x + r1.width/2 > r2.x &&
        r1.y-r1.width/2 < r2.y + r2.height &&
        r1.y + r1.height/2 > r2.y
    );
}

document.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
})
document.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
})
function is_collide(future_player, future_world){
    let n=0
    for (let j=0; j <4*399;j +=399){
        for (let i=0; i <7*399;i +=399){
            for (let k=0; k<buildings[n].length; k++){
                if(buildings[n][k][2] > 0){
                    if (rect_collide(future_player, {x: future_world.x+i+ 50 + buildings[n][k][0], y:future_world.y+j+50+buildings[n][k][1], width: 100, height:100})) {
                        return true;
                    }
                }
            }
            n+=1;
        }
    }
}
function key_collide(future_player, future_world){
    let n=0;
    for (let j=0; j <4*399;j +=399){
        for (let i=0; i <7*399;i +=399){
            for (let k=0; k<key_places[n].length; k++){
                cx = key_places[n][k][0] + i + world_x
                cy = key_places[n][k][1] + j + world_y
                d_ = Math.sqrt((future_player.x-cx)**2 + (future_player.y-cy)**2)
                if (d_ <= future_player.width/2 + 10){
                    key_places[n].splice(k, 1)
                    n_keys += 1
                }
            }
            n+=1
        }
    }
    d = Math.sqrt((player.x-(world_x+50+rand_i*399+buildings[m][0][0]+30))**2 + (player.y-(world_y+50+rand_j*399+buildings[m][0][1]+30))**2)
    if(d < 80 && shards > 0){
        shards -= 1;
        system_health += 4;
    }

}
function arc_collide(future_player, arcCenter, arcRadius, startAngle, endAngle ){
    const x = future_player.x - arcCenter.x;
    const y = future_player.y - arcCenter.y;
    var distance = Math.sqrt(x*x + y*y)
    if (distance > arcRadius + future_player.width/2) return false

    var angle = Math.atan2(y, x);
    var angle_norm = angle < 0 ? angle + 2 * Math.PI : angle;
    const start = startAngle % (2 * Math.PI);
    const end = endAngle % (2 * Math.PI);
    if (start < end) {
        return angle_norm >= start && angle_norm <= end;
    } 
    else {
        return angle_norm >= start || angle_norm <= end;
    }
}
function reduce_player_health() {
    if (player_found){
        player.health -= 5
        player_found = false
    }
}
function bounceBulletOffRect(bullet, rect, damping) {
    const closestX = Math.max(rect.x, Math.min(bullet.x, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(bullet.y, rect.y + rect.height));

    const dx = bullet.x - closestX;
    const dy = bullet.y - closestY;

    const distS = dx **2 + dy **2;
    if (distS < bullet.radius ** 2) {
        const overlapX = Math.min(
        Math.abs(bullet.x - rect.x),
        Math.abs(bullet.x - (rect.x + rect.width))
        );
        const overlapY = Math.min(
            Math.abs(bullet.y - rect.y),
            Math.abs(bullet.y - (rect.y + rect.height))
        );
        if (bullet.x <= 0){
            bullet.vx *= -damping
            bullet.x = bullet.vx;
        }
        if (overlapX < overlapY) {
            bullet.vx *= -damping;
            bullet.x += bullet.vx;
            return true
        }
        else {
            bullet.vy *= -damping;
            bullet.y += bullet.vy;
            return true
        }
    }
}

function update_bullets() {
    const damping = 0.5;
    for(let bullet of bullets){
        bullet.vx = bullet.vx
        bullet.x += bullet.vx
        bullet.y += bullet.vy
        bullet.life -= 1;

        if (bullet.x - bullet.radius <=0 && world_x <=0 || bullet.x +bullet.radius > document.documentElement.clientWidth && world_x <= document.documentElement.clientWidth-2794-3){
            bullet.vx *= -damping
            bullet.x += bullet.vx;
        }
        if (bullet.y - bullet.radius <=0 && world_y <= 0|| bullet.y + bullet.radius > document.documentElement.clientHeight-3 && world_y <= document.documentElement.clientHeight-1594-3){
            bullet.vy *= -damping
            bullet.y += bullet.vy;
        }
    
        let n=0
        for (let j=0; j <4*399;j +=399){
            for (let i=0; i <7*399;i +=399){
                for (let k=0; k<buildings[n].length; k++){
                    if (buildings[n][k][2] > 0) {
                        c = bounceBulletOffRect(bullet, {x: future_world.x+i+ 50 + buildings[n][k][0], y:future_world.y+j+50+buildings[n][k][1], width: 100, height:100}, damping);
                        if(c) {
                            buildings[n][k][2] -= 1;
                        }
                    }
                }
                n+=1
            }
        }
    }
    for(let i=bullets.length-1; i >=0; i--){
        if(bullets[i].life <= 0){
            bullets.splice(i, 1)
        }
    }
}
function draw_bullet() {
    for (let bullet of bullets) {
        ctx.beginPath()
        ctx.arc(bullet.x, bullet.y, bullet.radius, 0, 2*Math.PI);
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.fill();
    }
}
function updatePlayerMovement() {
    world_vx = 0;
    world_vy = 0;
    player.dx = 0;
    player.dy = 0;

    if (player.x_move){
        if (keys.a) {player.dx = -player.speed};
        if (keys.d) {player.dx = player.speed};
    }
    if (player.y_move){
        if (keys.w) {player.dy = -player.speed};
        if (keys.s) {player.dy = player.speed};
    }
    if (world_x_move) {
        if (keys.a) {world_vx = (player.speed-1)};
        if (keys.d) {world_vx = -(player.speed-1)};
    }
    if(world_y_move){
        if (keys.w) {world_vy = (player.speed-1)};
        if (keys.s) {world_vy = -(player.speed-1)};
    }
    var future_player = {
        x: player.x + player.dx,
        y: player.y + player.dy,
        width: player.width,
        height: player.height
    }
    future_world ={
        x: world_x + world_vx,
        y: world_y + world_vy
    }
    
    if (!is_collide(future_player, future_world)){
        if (future_player.x-player.width/2 >= 1 && future_player.x + player.width/2+4<= document.documentElement.clientWidth) {
            player.x = future_player.x;
        }
        if (future_player.y-player.width/2 >= 1 && future_player.y + player.height/2+ 4 <= document.documentElement.clientHeight) {
            player.y = future_player.y;
        }
    }
    if(!is_collide(future_player, future_world)){
        world_x += world_vx;
        world_y += world_vy;
    }

    key_collide(future_player,future_world)
    
    let n=0
    for(let j=0;j<4;j++){
        for(let i=0; i<7;i++){
            if (arc_collide(future_player, {x:world_x+towers[n][0]+50+i*399, y: world_y+towers[n][1]+50+j*399}, 200, towers[n][2]+0.01, towers[n][2]+(Math.PI/3)+0.01)) {
                if(buildings[towers[n][3]][towers[n][4]][2] > 0){
                    player_found = true
                }
            }
            n+=1
        }
    }

    //#region 
    if(future_player.x >= document.documentElement.clientWidth*0.5 && player.dx >0 && world_y > document.documentElement.clientWidth-2794-3){
        player.x_move = false;
        world_x_move = true;
    }
    if (world_x>0 && world_vx > 0){
        world_x=0;
        world_x_move=false;
        player.x_move = true;
    }
    if (world_x < document.documentElement.clientWidth-2794-3){   
        world_x = document.documentElement.clientWidth-2794-3
        world_x_move = false;
        player.x_move = true;
    }
    if(future_player.x <= document.documentElement.clientWidth*0.5 && player.dx <0 && world_x === document.documentElement.clientWidth-2794-3){
        player.x_move = false;
        world_x_move = true;
    }

    if(future_player.y >= document.documentElement.clientHeight*0.5 && player.dy >0 && world_y > document.documentElement.clientHeight-1594-3){
        player.y_move = false;
        world_y_move = true;
    }
    if (world_y>0 && world_vy > 0){
        world_y=0;
        world_y_move=false;
        player.y_move = true;
    }
    if (world_y < document.documentElement.clientHeight-1594-3){
        world_y = document.documentElement.clientHeight-1594-3
        world_y_move = false;
        player.y_move = true;
    }
    if(future_player.y <= document.documentElement.clientHeight*0.5 && player.dy <0 && world_y === document.documentElement.clientHeight-1594-3){
        player.y_move = false;
        world_y_move = true;
    }
    //#endregion
}
function generate_world() {
    let n = 0;
    let l=0;
    for (let j=0; j <4*399;j +=399){
        for (let i=0; i <7*399;i +=399){
            ctx.fillStyle = "rgb(0, 255, 0)"
            ctx.fillRect(world_x+i,world_y+j,400,400);
            ctx.fillStyle = "rgb(0, 0, 0)"
            ctx.fillRect(world_x+2 + i,world_y+2+j,396,396);
            if (i/399 == rand_i && j/399 == rand_j){
                ctx.fillStyle = "rgb(0, 247, 255)"
                ctx.fillRect(world_x+50+ i,world_y+50+j,300,300);
            }
            else{
                ctx.fillStyle = "rgb(0, 255, 0)"
                ctx.fillRect(world_x+50+ i,world_y+50+j,300,300);
            }
            ctx.fillStyle = "rgb(0,0,0)"
            for (let k=0; k<buildings[n].length;k++){
                if(buildings[n][k][2] > 0){
                    ctx.fillRect(world_x+50+i+buildings[n][k][0], world_y+50+j+buildings[n][k][1], 100,100)  
                }
                if (i/399 == rand_i && j/399 == rand_j){
                    m=n;
                }   
            }
            n+=1
            for (let k=0; k<key_places[l].length;k++){
                ctx.fillStyle = "rgb(255, 0, 238)"
                ctx.beginPath();
                ctx.arc(world_x+i+key_places[l][k][0], world_y+j+key_places[l][k][1], 10, 0, 2*Math.PI)
                ctx.fill();
            }
            
            l+=1
        }
    }
    
    ctx.fillStyle = "rgb(96, 33, 255)"
    ctx.beginPath();
    ctx.arc(world_x+50+rand_i*399+buildings[m][0][0]+30, world_y+50+rand_j*399+buildings[m][0][1]+30, 30, 0, 2*Math.PI);
    ctx.fill();
}
function generate_towers() {
    let n = 0
    for(let j=0; j<4; j++){
        for(let i=0; i<7; i++){
            if (buildings[towers[n][3]][towers[n][4]][2] > 0){
                startAngle = towers[n][2];
                endAngle = towers[n][2] + Math.PI/3;
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.25)";
                ctx.moveTo(world_x+towers[n][0]+50+(i*399), world_y+towers[n][1]+(j*399)+50);
                ctx.arc(world_x+towers[n][0]+50+(i*399), world_y+towers[n][1]+(j*399)+50, 200, startAngle, endAngle);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = "rgb(255,0,0)";
                ctx.stroke();
                ctx.closePath();
                towers[n][2] += 0.01
            }
            n+=1
        }
    }
    

    
}
var key_len = 0
setInterval(reduce_player_health, 150)
setInterval(function(){system_health-=2}, 2000)
const start_time = new Date().getTime()
function update() {
    if (!is_pause){
        ctx.clearRect(0,0,world.width, world.height)
    
        generate_world();
        updatePlayerMovement();
        update_bullets();
        draw_bullet();
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.width/2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fill();
        ctx.beginPath();
        generate_towers()
        for(let i=0; i<28; i++){
            key_len += key_places[i].length
        }
        if(key_len < 20){
            generate_keys()
        }
        if (future_player.x >= 5 && future_player.x <= 50 && future_player.y >=0 && future_player.y <= 50){
            if(n_keys >= shards_arr[0]){
                n_keys -= shards_arr[0]
                shards_arr.shift()
                shards += 1
            }
        }
        d = Math.sqrt((player.x-(world_x+50+rand_i*399+buildings[m][0][0]+30))**2 + (player.y-(world_y+50+rand_j*399+buildings[m][0][1]+30))**2)
        if(player.health <=0 || system_health >=100 || system_health < 20) {
            is_pause = true
            const end_time = new Date().getTime()
            const dt = (end_time-start_time)/1000
            if (player.health <= 0){
                score = Math.floor(dt)*1.5
            }
            else if (system_health >= 100) {
                score = Math.floor(dt)*(dt > 20 && dt < 30 ? 10:(dt > 30 && dt < 60) ? 4 : (dt > 60 && dt < 100) ? 2 : 1.4)
            }
            else if (system_health < 20){
                score = Math.floor(dt)*1.5
            }
            score = Math.floor(score)
            game_over.style.visibility = "visible"
            document.getElementById('score').innerHTML = `Score: ${score}`
            if(score > highscore){
                localStorage.setItem('highscore', score)
            }
        }
        player_health_ele.innerHTML = `Player health: ${player.health}`
        sys_health_ele.innerHTML = `System health: ${system_health}`
        keys_ele.innerHTML = `Keys: ${n_keys}`
        shards_ele.innerHTML = `Shards: ${shards}`
        high_score_ele.innerText = `High Score: ${highscore}`
        pause.style.top = document.documentElement.clientHeight-60 + "px"
        pause.style.left = document.documentElement.clientWidth/2 -120 + "px"
        resume.style.top = document.documentElement.clientHeight-60 + "px"
        resume.style.left = document.documentElement.clientWidth/2 -20+ "px"
        reset.style.top = document.documentElement.clientHeight-60 + "px"
        reset.style.left = document.documentElement.clientWidth/2 +90 + "px"
        requestAnimationFrame(update);
    }
}
update();  
