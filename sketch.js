var p,pi,pi2,di,si
var jc=0,bc=0
var allBlocks
var bg,bsc,sc=1
var sg,sbi,bcc=0

function preload(){
    pi=loadImage('assets/player.png')
    di=loadImage('assets/dirt.png')
    si=loadImage('assets/stone.png')
    pi2=loadImage('assets/player2.png')
    dpi=loadImage('assets/dp.png')
    li=loadImage('assets/log.png')
    lvi=loadImage('assets/leaf.png')
    brk=loadImage('assets/brick.png')
}

function setup(){
    createCanvas(1500,700)
    sbi=di
    p=createSprite(width/2,height/2-100,10,10)
    p.addImage(pi)
    p.scale=0.1
    bs=createSprite(p.x,p.y,5,5)
    bs.addImage(dpi)
    bs.scale=0.06
    selblcki=createSprite(p.x,p.y-20,30,9)
    selblcki.shapeColor='brown'
    dsb=createSprite(p.x,p.y-20,8,8)
    dsb.addImage(di)
    dsb.scale=0.05
    ssb=createSprite(p.x+5,p.y-20,8,8)
    ssb.addImage(si)
    ssb.scale=0.05
    lsb=createSprite(p.x-5,p.y-20,8,8)
    lsb.addImage(li)
    lsb.scale=0.05
    lvsb=createSprite(p.x-10,p.y-20,8,8)
    lvsb.addImage(lvi)
    lvsb.scale=0.05
    bsb=createSprite(p.x+10,p.y-20,8,8)
    bsb.addImage(brk)
    bsb.scale=0.05
    bsc=createSprite(dsb.x,dsb.y,5,5)
    bsc.addImage(dpi)
    bsc.scale=0.05
    v1=createSprite(width/2-490,height/2-100,10,500)
    v2=createSprite(width/2+500,height/2-100,10,500)
    v3=createSprite(width/2+5,height/2+50,1000,10)
    v4=createSprite(width/2+5,height/2-350,1000,10)
    v1.shapeColor=0
    v2.shapeColor=0
    v3.shapeColor=0
    v4.shapeColor=0
    allBlocks=createGroup()
    bg=createGroup()
    sg=createGroup()
    createWorld()
}
function draw(){
    background(0,200,255)
    drawSprites()
    camera.position.x=p.x
    camera.position.y=p.y
    //camera.zoom=15
    controls()
    if(keyDown('c')&&bcc<0){
        sc+=1
        bcc=5
    }
    if(sc>5){
        sc=1
    }
}

function controls(){
    p.y+=1
    jc-=1
    bc-=1
    bcc-=1
    dsb.x=p.x
    dsb.y=p.y-20
    ssb.x=p.x+5
    ssb.y=p.y-20
    lsb.x=p.x-5
    lsb.y=p.y-20
    lvsb.x=p.x-10
    lvsb.y=p.y-20
    bsb.x=p.x+10
    bsb.y=p.y-20
    selblcki.x=p.x
    selblcki.y=p.y-20
    if(sc===3){
            sbi=di
            bsc.x=dsb.x
            bsc.y=dsb.y
    }
    if(sc===4){   
            sbi=si
            bsc.x=ssb.x
            bsc.y=ssb.y
    }
    if(sc===2){
            sbi=li
            bsc.x=lsb.x
            bsc.y=lsb.y
    }          
    if(sc===1){
            sbi=lvi
            bsc.x=lvsb.x
            bsc.y=lvsb.y
    }
    if(sc===5){
            sbi=brk
            bsc.x=bsb.x
            bsc.y=bsb.y
    }     

        if(keyDown('right')){
            p.x+=5
            p.addImage(pi)
            bs.x=p.x
            bs.y=p.y
        }
       
        if(keyDown('left')){
            p.x-=5
            p.addImage(pi2)
            bs.x=p.x
            bs.y=p.y
        }
        if(keyDown('up')&&jc<0){
            p.y-=12
            jc=15  
            bs.x=p.x
            bs.y=p.y 
        }
        if(p.isTouching(allBlocks)){
            if(keyWentDown('d')){
                bs.x+=10
                bs.y=p.y-1
            } 
            if(keyWentUp('d')){
                bs.x=p.x
                bs.y=p.y  
            }
            if(keyWentDown('a')){
                bs.x-=10
                bs.y=p.y-1  
            } 
            if(keyWentUp('a')){
            bs.x=p.x
            bs.y=p.y
        }
            if(keyWentDown('w')){
                bs.y-=11
                
            } 
            if(keyWentUp('w')){
            bs.x=p.x
            bs.y=p.y  
        }
            if(keyWentDown('s')){
                bs.y+=9
                
            }
            if(keyWentUp('s')){
                bs.y=p.y
                
            }
            if(keyWentDown('e')){
                bs.y-=11
                bs.x+=10
                
            }
            if(keyWentUp('e')){
                bs.x=p.x
                bs.y=p.y
            }
            if(keyWentDown('q')){
                bs.y-=11
                bs.x-=10
                
            }
            if(keyWentUp('q')){
                bs.x=p.x
                bs.y=p.y
            }
            if(keyWentDown('shift')){
                bs.y+=9
                bs.x-=10
                
            }
            if(keyWentUp('shift')){
                bs.x=p.x
                bs.y=p.y
            }
            if(keyWentDown('x')){
                bs.y+=9
                bs.x+=10
                
            }
            if(keyWentUp('x')){
                bs.x=p.x
                bs.y=p.y
        }
    }else{
        bs.x=p.x
        bs.y=p.y
    }
    p.bounceOff(v1)
    p.bounceOff(v2)
    p.bounceOff(v3)
    p.bounceOff(v4)
    p.bounceOff(allBlocks)
    for(var i=0;i<allBlocks.length;i++){
        if(bs.isTouching(allBlocks.get(i))&&keyCode===13){
            allBlocks.get(i).destroy()
        }
    }
    for(var i=0;i<allBlocks.length;i++){
        if(keyDown('space')&&bc<0&&p.x%10===0){
            b=new Block(bs.x,bs.y,sbi)
            allBlocks.add(b.sprite)
            bc=5
        }
    }
    for(var i=0;i<allBlocks.length;i++){
        lvsb.depth=allBlocks.depth+1
        selblcki.depth=allBlocks.depth+1
        bs.depth=allBlocks.get(i).depth+1
        dsb.depth=allBlocks.get(i).depth+1
        ssb.depth=allBlocks.get(i).depth+1
        lsb.depth=allBlocks.get(i).depth+1
        bsc.depth=dsb.depth+1
        bsc.depth=ssb.depth+1
        bsc.depth=lsb.depth+1
    }    
}
    

function createWorld(){
    for(var i=width/2-480;i<width/2+500;i+=10){
    
        r=Math.round(random(10))
        switch(r){
        case 10:t=new Tree(i,height/2-100,height/2-130)
        default:break
        }
        for(var j=height/2-90;j<height/2-60;j+=10){
            r=Math.round(random(10))
            b1=new Block(i,j,di)
            switch(r){
                case 10:b1.sprite.destroy()
                default:break
            }
            bg.add(b1.sprite)                  
            allBlocks.add(b1.sprite)
        }  
        for(var b=height/2-60;b<height/2+50;b+=10){
            s1=new Block(i,b,si)
            r=Math.round(random(10))
            switch(r){
                case 10:s1.sprite.destroy()
                break
                case 7:s1.sprite.destroy()
                break
                case 9:s1.sprite.destroy()
                break
                default:break
            }
            sg.add(s1.sprite)
            allBlocks.add(s1.sprite)
       } 
    }
}