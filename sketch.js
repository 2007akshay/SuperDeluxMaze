 var boy , boyA ,button
var gameState =0
var wall , wal_li
var backgroundIntro , bk , n1
var buttonI
var fBackground , sBackground
var button1 , button2 , b1 , b2
var button
var button3 , button4 , b3 , b4
var button5 , b5
var menu , mI
var input
var bnext , bnexti
var name
var offS
var background0
var w1 , w2 , w2 , w4 , w5 , w6 , w7 , w8 , w10 , w11 , w12 , w13 , w14 , w15 , w16 , w17 , w18 , w19 , w20 , w21 , w22 ,w23 , w24 , w25 , w26 , w27 , w28 , w29 , w30 , w31 , w32 , w33 , w34 , f1

var a1 , a2 , a3 , a4 , a5 , a6 , a7 , a8 , a9 , a10 , a11 , a12 , a13 , a14 , a15 , a16 , a17 , a18 , a19 , a20 , a21 , a22 , a23 , a24 , a25 , a26 , a27 , a28 , a28 , a29 , f2

var c1 , c2 , c3 , c4 , c5 , c6 , c7 , c8 , c9 , c10 , c11 , c12 , c13 , c14 , c15 , c16 , c17 , c18 , c19 , c20 , c21 , c22 , c23 , c24 , c25 , c26 , f3

var g2 , l2 , g3 , l3 , g4 , l4 , g5 , l5 , f4
var link
var feedback
var g1 
var l1
var player , p1
var right
var fb , fg , l3

function preload(){
  link=createA("https://forms.gle/Mb1LXT2XBTg6mH7WA","feedback link click here")
  link.position(140,200)
  feedback=loadImage("Feedback-Button-01 (1).png")
  offS=loadSound("deth sound.mp3")
  fg=loadImage("fire gun 1.png")
  fb=loadImage("Picture3.png")
  p1=loadImage("running2.png")
boyA=loadAnimation("running1.png","running2.png","running3.png","running4.png","running5.png")
  bk=loadImage("bk.png")
  ni=loadImage("Picture2.png")
wall_i=loadImage("wall1.png")
backgroundIntro=loadImage("background.jpg")
buttonI=loadImage("buttonStart.png")
fBackground=loadImage("backgroun1.jpg")
sBackground=loadImage("sunrise.png")
  mI=loadImage("menu.png")
  background0=loadImage("hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095 (1).png")
  bnexti=loadImage("PngItem_3206837.png")
  b1=loadImage("1num1.png")
  b2=loadImage("2num2.png")
  b3=loadImage("3num3.png")
  b4=loadImage("4num4.png")
  b5=loadImage("5num5.png")


}
function setup(){
  createCanvas(400,400)
    f4=createSprite(210,380,50,10)
f4.shapeColor="green"
  
  f3=createSprite(390,380,10,50)
  f3.shapeColor="green"
  
                l5=createSprite(70,310,10,50)
    l5.addImage(fb)
l5.scale=0.05


              g5=createSprite(20,310,10,50)
  g5.addImage(fg)
g5.scale=0.1


  
            l4=createSprite(335,240,10,50)
l4.addImage(fb)
l4.scale=0.05
  
          g4=createSprite(390,240,10,50)
g4.addImage(fg)
  g4.scale=-0.1

  
        l3=createSprite(70,170,10,50)
l3.addImage(fb)
  l3.scale=0.05
  
      g3=createSprite(15,170,10,50)
  g3.addImage(fg)
g3.scale=0.1
  
      l2=createSprite(340,100,10,50)
  l2.addImage(fb)
  l2.scale=-0.05

  
    g2=createSprite(390,100,10,50)
  g2.addImage(fg)
  g2.scale=-0.1

  
  c26=createSprite(320,260,10,50)
  c26.shapeColor="red"
  
  c25=createSprite(290,290,10,50)
  c25.shapeColor="red"
  
  c24=createSprite(260,260,10,50)
  c24.shapeColor="red"
  
  c23=createSprite(230,290,10,50)
  c23.shapeColor="red"
  
  c22=createSprite(170,290,10,50)
  c22.shapeColor="red"
  
  c21=createSprite(140,260,10,50)
  c21.shapeColor="red"
  
  c20=createSprite(110,290,10,50)
   c20.shapeColor="red"
  
  c19=createSprite(80,260,10,50)
   c19.shapeColor="red"
  
                    c18=createSprite(50,290,10,50)
   c18.shapeColor="red"

                    c17=createSprite(185,310,330,10)
   c17.shapeColor="red"

                    c16=createSprite(375,280,10,80)
   c16.shapeColor="red"

                  c15=createSprite(25,280,10,80)
   c15.shapeColor="red"

                  c14=createSprite(300,240,160,10)
   c14.shapeColor="red"

                c13=createSprite(100,240,160,10)
   c13.shapeColor="red"

                c12=createSprite(225,200,10,70)
   c12.shapeColor="red"

              c11=createSprite(175,200,10,70)
  c11.shapeColor="red"

            c10=createSprite(360,125,30,10)
  c10.shapeColor="red"

            c9=createSprite(330,150,30,10)
  c9.shapeColor="red"

          c8=createSprite(70,150,30,10)
  c8.shapeColor="red"

          c7=createSprite(50,125,30,10)
  c7.shapeColor="red"

        c6=createSprite(270,160,100,10)
  c6.shapeColor="red"

      c5=createSprite(130,160,100,10)
  c5.shapeColor="red"

    c4=createSprite(200,160,10,100)
  c4.shapeColor="red"

    c3=createSprite(200,110,370,10)
c3.shapeColor="red"
  
  c1=createSprite(303,80,180,10)
  c1.shapeColor="red"
  
  c2=createSprite(100,80,180,10)
  c2.shapeColor="red"

  
g1=createSprite(10,340,10,10)
  g1.addImage(fg)
  g1.scale=0.1 
  
  l1=createSprite(60,340,10,10);
   l1.addImage(fb)
 l1.scale=0.05 

                      right=createSprite(380,360,10,10)
  right.addImage(ni)
  right.scale=0.1

                    f2=createSprite(390,360,10,50)
    f2.shapeColor="green"


                  a29=createSprite(350,300,10,170)
  a29.shapeColor="red"

                  a28=createSprite(320,320,10,170)
  a28.shapeColor="red"

                  a27=createSprite(290,300,10,170)
  a27.shapeColor="red"

                  a26=createSprite(260,320,10,170)
  a26.shapeColor="red"

  
                a25=createSprite(230,300,10,170)
  a25.shapeColor="red"

                a24 =createSprite(310,215,170,10)
  a24.shapeColor="red"

                a23=createSprite(285,190,170,10)
  a23.shapeColor="red"

                a22=createSprite(310,165,170,10)
  a22.shapeColor="red"

              a21=createSprite(285,140,170,10)
  a21.shapeColor="red"

  
            a20=createSprite(205,285,10,300)
   a20.shapeColor="red"


            a19=createSprite(40,310,10,85)
    a19.shapeColor="red"


            a18=createSprite(65,330,10,85)
    a18.shapeColor="red"


            a17=createSprite(90,310,10,85)
    a17.shapeColor="red"


            a16=createSprite(115,330,10,85)
    a16.shapeColor="red"


          a15=createSprite(140,310,10,85)
    a15.shapeColor="red"


          a14=createSprite(100,372,150,10)
    a14.shapeColor="red"


          a13=createSprite(180,247,10,260)
   a13.shapeColor="red"


          a12=createSprite(70,270,140,10)
    a12.shapeColor="red"


          a11=createSprite(105,247,140,10)
    a11.shapeColor="red"


          a10=createSprite(170,230,10,40)
  a10.shapeColor="red"


          a9=createSprite(70,220,150,10)
  a9.shapeColor="red"


          a8=createSprite(50,200,60,10)
  a8.shapeColor="red"


          a7=createSprite(15,200,10,60)
  a7.shapeColor="red"


        a6=createSprite(87,170,70,10)
  a6.shapeColor="red"


        a5=createSprite(90,142,10,50)
  a5.shapeColor="red"


        a4=createSprite(170,167,10,100)
  a4.shapeColor="red"


      a3=createSprite(32,135,70,10)
  a3.shapeColor="red"


    a2=createSprite(210,113,370,10)
  a2.shapeColor="red"


  a1=createSprite(90,52,10,80)
a1.shapeColor="red"

f1=createSprite(390,370,10,30)
  f1.shapeColor="green"
  
    w34=createSprite(3,200,10,410) 
  w34.shapeColor="white"
  
          w33=createSprite(340,340,10,100)
         w33.shapeColor="red"


          w32=createSprite(310,320,10,100)
         w32.shapeColor="red"


        w31=createSprite(280,340,10,100)
         w31.shapeColor="red"


        w30=createSprite(250,320,10,100)
         w30.shapeColor="red"


      w29=createSprite(220,340,10,100)
         w29.shapeColor="red"


      w28=createSprite(45,265,10,50)
         w28.shapeColor="red"


      w27=createSprite(75,300,10,50)
         w27.shapeColor="red"


    w26=createSprite(103,265,10,50)
  
         w26.shapeColor="red"


    w25=createSprite(130,300,10,50)
         w25.shapeColor="red"


  
    w24=createSprite(115,330,160,10)
         w24.shapeColor="red"


  w23=createSprite(115,368,160,10)
         w23.shapeColor="red"


w22=createSprite(190,313,10,100)
         w22.shapeColor="red"


  w21=createSprite(160,275,10,60)
         w21.shapeColor="red"


  w20=createSprite(293,267,200,10)
       w20.shapeColor="red"


w19=createSprite(213,215,360,10)
       w19.shapeColor="red"


         w18=createSprite(190 ,240,360,10)
     w18.shapeColor="red"

  
       w17=createSprite(340,130,50,10)
       w17.shapeColor="red"


       w16=createSprite(365,160,10,70)
       w16.shapeColor="red"


     w15=createSprite(340,190,60,10)
       w15.shapeColor="red"


     w14=createSprite(310,165,50,10)
       w14.shapeColor="red"


     w13=createSprite(290,130,10,70)
       w13.shapeColor="red"


        w12=createSprite(265,150,10,70)
       w12.shapeColor="red"


   w11=createSprite(240,130,10,70)
     w11.shapeColor="red"


      w10=createSprite(215,150,10,70)
   w10.shapeColor="red"

    w9=createSprite(190,130,10,70)
   w9.shapeColor="red"

  
  w8=createSprite(165,153,10,70)
   w8.shapeColor="red"
  
  w7=createSprite(160,190,300,10)
   w7.shapeColor="red"
  
  w6=createSprite(120,150,30,10)
   w6.shapeColor="red"
  
  w5=createSprite(45,155,70,40)
   w5.shapeColor="red"
  
  w4=createSprite(140,135,10,70)
   w4.shapeColor="red"
  
 w3=createSprite(213,97,360,10)
   w3.shapeColor="red"
  
  w2=createSprite(60,125,100,10)
   w2.shapeColor="red"
  
  w1=createSprite(60,70,100,10)
  w1.shapeColor="red"
  player=createSprite(200,60,30,30)
  
         player.shapeColor="blue"

  
  player.scale=0.4
  
  bnext=createSprite(200,300,50,10)
  bnext.addImage(bnexti)
  bnext.scale=0.1 
  
  bnext.visible=true
  
  
  boy=createSprite(200,200,10,10)
  boy.addAnimation("running",boyA)
  boy.visible = false;
  
  button=createSprite(200,200,50,10)
  button.addImage(buttonI)
  button.scale=0.2
  button.visible=true
  
  button1=createSprite(150,90,50,10)
  button1.addImage(b1)
  button1.scale=1
  
  button2=createSprite(250,90,50,10)
  button2.addImage(b2)
  button2.scale=1
  
  button3=createSprite(150,175,50,10)
  button3.addImage(b3)
  button3.scale=1

  button4=createSprite(250,175,50,10)
  button4.addImage(b4)
  button4.scale=1
  
  button5=createSprite(200,250,50,10)
  button5.addImage(feedback)
  button5.scale=0.2
  
  
  
  menu=createSprite(47,20,70,30)
  menu.addImage(mI)
  menu.scale=0.2
  menu.visible=true
  
  input=createInput("")
  input.position(120,100)
  
  nicname=createElement('h4')
  nicname.fontColor="red"
  nicname.html("Username")
  
  nicname.position(40,80)
 

}
function draw(){
background("blue")
  
if(gameState===0){
  background(background0)
f4.visible=false
  f3.visible=false
   l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
   right.visible=false
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
  
    c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false



if(mousePressedOver(bnext)&&gameState===0){
   name=input.value();
   console.log(name)
   gameState=1
   nicname.hide();
 }
   menu.visible=false
  push();
  link.hide();
  pop();
} 

if (gameState === 1){
  background(fBackground)
  f3.visible=false
level0();
textSize(30)
strokeWeight(5);
stroke("red")
fill("yellow")
textFont("Calibry")
text("Welcome ",130,80)
  f4.visible=false
  l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
  bnext.visible=false
  button.visible=true;
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
   w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
  a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
  
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
 right.visible=false
  c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
  if(mousePressedOver(button)&&gameState===1){
    gameState=2
    }
  input.hide();
  push();
link.hide();
  pop();
   menu.visible=false
}

if(gameState===2){
  background(backgroundIntro)
  button.destroy()
  level1();
  f4.visible=false
  f3.visible=false
 // imageMode(CENTER)
//image(wall_i,100,200,150,20)
  //text("welcosfhghhrgkrghi   ",120,20)
  l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
  menu.visible=false
  bnext.visible=false
  button.visible=false 
  button1.visible=true
  button2.visible=true
  button3.visible=true
  button4.visible=true
  button5.visible=true
   w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
  a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
  c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
if (mousePressedOver(button2)){
  gameState=5
}
  if (mousePressedOver(button2)){
  gameState=5
}
  if (mousePressedOver(button5)){
  gameState=9
}
  if (mousePressedOver(button4)){
  gameState=8
}
  if (mousePressedOver(button3)){
  gameState=6
}
 input.hide();
  push();
  link.hide();
  pop();
  if(mousePressedOver(button1)){
    gameState=3
    button1.visible=false;
  }
   right.visible=false
  nicname.hide();
}
  
  if(gameState===3){
    createEdgeSprites();
    f3.visible=false
    l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
    f4.visible=false
   g3.visible=false
  g2.visible=false
    level2();
    bnext.visible=false
  button.visible=false  
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
//w1.visible=true
 w2.visible=true
 w3.visible=true
   w4.visible=true
 w5.visible=true
 w6.visible=true
 w7.visible=true
 w8.visible=true
 w9.visible=true
 w10.visible=true
 w11.visible=true
 w12.visible=true
 w13.visible=true
 w14.visible=true
 w15.visible=true
 w16.visible=true
 w17.visible=true
 w18.visible=true
 w19.visible=true
 w20.visible=true
 w21.visible=true
 w22.visible=true
 w23.visible=true
 w24.visible=true
 w25.visible=true
 w26.visible=true
 w27.visible=true
 w28.visible=true
 w29.visible=true
 w30.visible=true
 w31.visible=true
 w32.visible=true
 w33.visible=true
player.visible=true
 f1.visible=true 
    a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
    
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
    c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
  input.hide();
    push();
    link.hide();
    pop();
     nicname.hide();
     right.visible=false
   menu.visible=true
    if(player.isTouching(f1)){
   gameState=5
      player.x=200
      player.y=60
      
  }
  }
  if(gameState===4){
    f3.visible=false
    l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
    f4.visible=false
    level4();
    nicname.hide();
    input.hide();
    menu.visible=true
  bnext.visible=false
  button.visible=false 
  button1.visible=false
     button3.visible=false
  button2.visible=false
  button4.visible=false
  button5.visible=false
   w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=true
   f1.visible=false 
    
    a1.visible=true 
   a2.visible=true  
 a3.visible=true 
 a4.visible=true 
 a5.visible=true 
 a6.visible=true  
 a7.visible=true 
 a8.visible=true  
 a9.visible=true 
 a10.visible=true  
a11.visible=true 
a12.visible=true 
a13.visible=true 
  a14.visible=true 
  a15.visible=true 
 a16.visible=true 
 a17.visible=true  
  a18.visible=true 
  a19.visible=true 
   a20.visible=true
  a21.visible=true 
  a22.visible=true 
    a23.visible=true 
  a24.visible=true 
  a25.visible=true 
  a26.visible=true 
  a27.visible=true 
  a28.visible=true 
  a29.visible=true 
    f2.visible=true 
   right.visible=false
    c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
    push();
    link.hide();
    pop();
  }
  
  if(gameState===5){
    background(bk)
    fill("white");
textSize(15);
textFont('Algerian');
    text("Be aware of red wall because they will off you " , 10,230)
    if(mousePressedOver(right)){
      gameState=4
    }
    f3.visible=false
    l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
    f4.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
    menu.visible=false
     bnext.visible=false
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
      right.visible=true
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false 
    nicname.hide();
    input.hide();
    push();
    link.hide();
    pop();
  }
  if(gameState===6){
    
    l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
    f4.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
    background(sBackground)
    c1.visible=true
      c2.visible=true
    c3.visible=true
    c4.visible=true
    c5.visible=true
    c6.visible=true
    c7.visible=true
    c8.visible=true
    c9.visible=true
    c10.visible=true
    c11.visible=true
    c12.visible=true
    c13.visible=true
    c14.visible=true
    c15.visible=true
    c16.visible=true
    c17.visible=true
    c18.visible=true
    c19.visible=true
      c20.visible=true

    c21.visible=true
    c22.visible=true
    c23.visible=true
    c24.visible=true
    c25.visible=true
    c26.visible=true
    g1.visible=true
    l1.visible=true
    menu.visible=true
     bnext.visible=false
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
      right.visible=true
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=true
   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
    f3.visible=true
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false 
     right.visible=false 
    if(player.isTouching(f3)){
      gameState=7
    }
    nicname.hide();
    input.hide();
    push();
    link.hide();
    pop();
    level5();
  }
  if (gameState===7){
    l5.visible=false
    f3.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
    f4.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
    background(bk)
    fill("white");
textSize(25);
textFont('Algerian');
    text("new obstrical introdused",50,250)
    if(mousePressedOver(right)){
      gameState=6
    }
    menu.visible=false
     bnext.visible=false
    player.visible=false
    button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
      right.visible=true
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false

   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false 
     a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
     c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
    nicname.hide();
    input.hide(); 
    push();
    link.hide();
    pop();
  }
  if(gameState===8){
    if(player.isTouching(f4)){
     gameState = 10
    }
    f4.visible=true
    f3.visible=false
    l5.visible=true
   l4.visible=true
   l3.visible=true
  l2.visible=true
  g5.visible=true
   g4.visible=true
   g3.visible=true
  g2.visible=true
  //f3.visible=true
    w34.visible=false
    right.visible=false
   menu.visible=true
     bnext.visible=false
    player.visible=true
    button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
      //right.visible=true
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false

   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false 
     a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false
     c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
    nicname.hide();
    input.hide(); 
    push();
    link.hide();
    pop();
    level6();
  }
if(gameState===9){
  background(bk)
  f4.visible=false
  link.show();
  bnext.visible=false
  nicname.hide();
    input.hide();  
    level6();
  menu.visible=true
  f3.visible=false
   l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
   right.visible=false
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false

    c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
  if(mousePressedOver(menu)){
    gameState=2
  }

}
  if(gameState===10){
   level7();
    link.show();
    f4.visible=false
  bnext.visible=false
  nicname.hide();
    input.hide();  
    level6();
  menu.visible=false
  f3.visible=false
   l5.visible=false
   l4.visible=false
   l3.visible=false
  l2.visible=false
  g5.visible=false
   g4.visible=false
   g3.visible=false
  g2.visible=false
   right.visible=false
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
 w1.visible=false
 w2.visible=false
 w3.visible=false
   w4.visible=false
 w5.visible=false
 w6.visible=false
 w7.visible=false
 w8.visible=false
 w9.visible=false
 w10.visible=false
 w11.visible=false
 w12.visible=false
 w13.visible=false
 w14.visible=false
 w15.visible=false
 w16.visible=false
 w17.visible=false
 w18.visible=false
 w19.visible=false
 w20.visible=false
 w21.visible=false
 w22.visible=false
 w23.visible=false
 w24.visible=false
 w25.visible=false
 w26.visible=false
 w27.visible=false
 w28.visible=false
 w29.visible=false
 w30.visible=false
 w31.visible=false
 w32.visible=false
 w33.visible=false
player.visible=false
   f1.visible=false
 a1.visible=false 
   a2.visible=false 
 a3.visible=false 
 a4.visible=false 
 a5.visible=false 
 a6.visible=false 
 a7.visible=false 
 a8.visible=false 
 a9.visible=false 
 a10.visible=false 
a11.visible=false
a12.visible=false
 a13.visible=false
  a14.visible=false
  a15.visible=false
 a16.visible=false 
 a17.visible=false 
  a18.visible=false
  a19.visible=false
   a20.visible=false
  a21.visible=false
  a22.visible=false
    a23.visible=false
  a24.visible=false
  a25.visible=false
  a26.visible=false
  a27.visible=false
  a28.visible=false
  a29.visible=false
    f2.visible=false

    c1.visible=false
      c2.visible=false
    c3.visible=false
    c4.visible=false
    c5.visible=false
    c6.visible=false
    c7.visible=false
    c8.visible=false
    c9.visible=false
    c10.visible=false
    c11.visible=false
    c12.visible=false
    c13.visible=false
    c14.visible=false
    c15.visible=false
    c16.visible=false
    c17.visible=false
    c18.visible=false
    c19.visible=false
      c20.visible=false

    c21.visible=false
    c22.visible=false
    c23.visible=false
    c24.visible=false
    c25.visible=false
    c26.visible=false
    g1.visible=false
    l1.visible=false
    link.hide();
    right.visible=true
    fill("blue");
textSize(25);
textFont('Algerian');
     text("please give feedback",50,200)
    
  }
drawSprites();
}

function level0(){
  
  if (mousePressedOver(button)){
   //button.visible=false
gameState=1



  }
}


function   level1(){
  fill("white");
textSize(25);
textFont('Algerian');
  text("Select the level of",75,24) 
  text("your choice",125,50)
  fill("yellow")
  textFont('Blackadder ITC');
  text("Hi  "+name,100,350)
  
    if(mousePressedOver(button1)){
    gameState=3
    button1.visible=false;
  }
}

function level2(){
  background(sBackground) 
  edges=createEdgeSprites();
  player.bounceOff(w1)
  //player.bounceOff(edges[1])
    //player.bounceOff(edges[2])
  //player.bounceOff(edges[3])
 player.bounceOff(edges)
    player.bounceOff(w2)
      player.bounceOff(w3)
    player.bounceOff(w4)
    player.bounceOff(w5)
    player.bounceOff(w6)
    player.bounceOff(w7)
    player.bounceOff(w8)
    player.bounceOff(w9)
    player.bounceOff(w10)
    player.bounceOff(w11)
    player.bounceOff(w12)
    player.bounceOff(w13)
    player.bounceOff(w14)
    player.bounceOff(w15)
    player.bounceOff(w16)
    player.bounceOff(w17)
    player.bounceOff(w18)
    player.bounceOff(w19)
    player.bounceOff(w20)
    player.bounceOff(w21)
    player.bounceOff(w22)
    player.bounceOff(w23)
    player.bounceOff(w24)
    player.bounceOff(w25)
    player.bounceOff(w26)
    player.bounceOff(w27)
    player.bounceOff(w28)
    player.bounceOff(w29)
    player.bounceOff(w30)
    player.bounceOff(w31)
    player.bounceOff(w32)
    player.bounceOff(w33)
      player.bounceOff(w34)


  
  if(mousePressedOver(menu)){
    gameState=2
  }
  if(keyDown("right")){
      
   player.x = player.x + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
 if(keyDown("left")){
      
   player.x = player.x - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }if(keyDown("up")){
      
   player.y = player.y - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  if(keyDown("down")){
      
   player.y = player.y + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  
}
function level4 (){
   edges=createEdgeSprites();
   player.bounceOff(edges)
  if(player.isTouching(a1)||player.isTouching(a2)||player.isTouching(a3)||player.isTouching(a4)||player.isTouching(a5)||player.isTouching(a6)||player.isTouching(a7)||player.isTouching(a8)||player.isTouching(a9)||player.isTouching(a10)||player.isTouching(a11)||player.isTouching(a12)||player.isTouching(a13)||player.isTouching(a14)||player.isTouching(a15)||player.isTouching(a16)||player.isTouching(a17)||player.isTouching(a18)||player.isTouching(a19)||player.isTouching(a20)||player.isTouching(a21)||player.isTouching(a22)||player.isTouching(a23)||player.isTouching(a24)||player.isTouching(a25)||player.isTouching(a26)||player.isTouching(a27)||player.isTouching(a28)||player.isTouching(a29)){
    offS.play();
    player.x=200
    player.y=60
  }
  background(sBackground)
 if (mousePressedOver(menu)){
   //button.visible=false
gameState=2
   

  } 
  if (player.isTouching(f2)){
   //button.visible=false
gameState=7
   

  } 
  if(keyDown("right")){
      
   player.x = player.x + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
 if(keyDown("left")){
      
   player.x = player.x - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }if(keyDown("up")){
      
   player.y = player.y - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  if(keyDown("down")){
      
   player.y = player.y + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  
}
function level5(){
  if(mousePressedOver(menu)){
      gameState=2
    }
  edges=createEdgeSprites();
   player.bounceOff(edges)
  if(player.isTouching(c1)||player.isTouching(c2)||player.isTouching(c3)||player.isTouching(c4)||player.isTouching(c5)||player.isTouching(c6)||player.isTouching(c7)||player.isTouching(c8)||player.isTouching(c9)||player.isTouching(c10)||player.isTouching(c11)||player.isTouching(c12)||player.isTouching(c13)||player.isTouching(c14)||player.isTouching(c15)||player.isTouching(c16)||player.isTouching(c17)||player.isTouching(c18)||player.isTouching(c19)||player.isTouching(c20)||player.isTouching(c21)||player.isTouching(c22)||player.isTouching(c23)||player.isTouching(c24)||player.isTouching(c25)||player.isTouching(c26)||player.isTouching(l1)){
    offS.play();
    player.x=200
    player.y=60
  }
  if(keyDown("right")){
      
   player.x = player.x + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
    if(keyDown("left")){
      
   player.x = player.x - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }if(keyDown("up")){
      
   player.y = player.y - 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  if(keyDown("down")){
      
   player.y = player.y + 2 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  } 
  l1.velocityX=4
  if(l1.x >  410 ){
    l1.x=60
    l1.y=340
  }
  //console.log(l1.x)
  }
function level6(){
background(sBackground);
  if(player.isTouching(l2)||player.isTouching(l3)||player.isTouching(l4)||player.isTouching(l5)){
  offS.play();
    player.x=200
    player.y=60  
  }
 edges=createEdgeSprites();
   player.bounceOff(edges)
  
  if(keyDown("up")){
      
   player.y = player.y - 4 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  if(keyDown("down")){
      
   player.y = player.y + 4 
    //player.addAnimation("clumbing",boyA)
    //player.scale=0.2

  }
  //if (player.isTouching(f4)){
   // gameState=9
  //}
  
  if(mousePressedOver(menu)){
    gameState=2
  }
  l2.velocityX=-15
  if(l2.x <  0 ){
    l2.x=340
    l2.y=100
  }
  l3.velocityX=16
  if(l3.x >  401 ){
    l3.x=70
    l3.y=170
  }
  
  l4.velocityX=-14
  if(l4.x <  0 ){
    l4.x=335
    l4.y=240
  }
   l5.velocityX=18
  if(l5.x >  401 ){
    l5.x=70
    l5.y=310
  }
  
}
function level7(){
   background(bk) 
 if(mousePressedOver(right)){
   gameState=9
 }
  }