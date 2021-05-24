var title,t1,t2,t3;
var obj1,obj2,obj3,obj4,obj5 , obj6;
var cb1 = 0 , cb2 = 0 , cb3 = 0, cb4 = 0,cb5 = 0,cb6 = 0;
var b1, b1,b3,b4;
var h1, h2 ,h3;
var i1, i2,i3,i4,i5,i6;
var l1, l2, l3 ,l4,l5,l6;
var array = [];



function setup() {
  createCanvas(window.innerWidth - 100 , window.innerHeight - 100);
  title = createElement("h1");
  title.html("THE FAMOUS BAKERY")
  title.position( 550 , 50);  


  t1 = createElement("h1");
  t1.html("Since 1992")
  t1.position( 1000, 50);

  t2 = createElement("h2");
  t2.html("The best CAKES of Hyderabad");
  t2.position( 550, 120);

  t3 = createElement("h2");
  t3.html("Click on menu to explore and order tasty food now......")
  t3.position( 350, 300);
  
  h1= createButton();
  h1.html("MENU");
  h1.style( "backgroundColor" , "yellow");
  h1.style( "borderRadius", "10px");
  h1.style("width", "80px");
  h1.style("height", "30px");
  h1.position( 200,180);

  h2= createButton();
  h2.html("ORDER");
  h2.style( "backgroundColor" , "yellow");
  h2.style( "borderRadius", "10px");
  h2.style("width", "80px");
  h2.style("height", "30px");
  h2.position( 425,600);

  h3= createButton();
  h3.html("PLACE ORDER");
  h3.style( "backgroundColor" , "yellow");
  h3.style( "borderRadius", "10px");
  h3.style("width", "80px");
  h3.style("height", "50px");
  h3.position( 600,530);

  h4= createButton();
  h4.html("CANCEL ORDER");
  h4.style( "backgroundColor" , "yellow");
  h4.style( "borderRadius", "10px");
  h4.style("width", "80px");
  h4.style("height", "50px");
  h4.position( 400,530);

  
  h1.mouseClicked(menu , t3);
 // h2.mouseClicked(order , hidemenu);
  //h2.mouseClicked(order , menu)
  h3.mousePressed(alert("Do you want to place the order??"));
  h4.mousePressed(alert("Do you really want to cancel the order?? yout cart will be cleared.."));
  h2.mousePressed(function (){
    for(var i = 0; i<7 ;i++){
     // obj +i.hide();
     // cb(i).hide();
    }
  })
  order();
}

function draw() {
 background("lightblue");
  
   

}

function menu(){
  

  object(obj1 ,"Samosa  :  rs 20" , 300, 250);
  boxes(cb1 , 275,275); 

  object(obj2 , "Veg Puff:  rs 30" , 300,300);
  boxes(cb2 ,275,325);
  
  object(obj3 ,"Cake :  rs 300" , 300,350 );
  boxes(cb3 , 275,375);
  
  object(obj4 ,"Ice cream (single scoop):  rs 60" , 300,400 )
  boxes(cb4 , 275,425);
  
  object(obj5 ,"Indian spicy pizza (6pieces):  rs 100" , 300,450 );
  boxes(cb5 , 275,475);
  
  object(obj6 ,"Pani puri(8 per plate):  rs 20" , 300,500 );
  boxes(cb6,275,525);
  
 //cb1.changed(xyz);
 for(var i =0; i<7 ; i++){
   array.push(cb + i);
   array.push(obj + i);
 }
 
  t3.hide();
}

function order(){
  input( i1, 450,270)
  object(l1,"Name  : " , 300,250 );
  input(i2, 450,310);
  object(l2,"Mobile.No  : " ,300,290);
  input(i3,450,350);
  object(l3,"Address  : " , 300, 330 );
  input(i4,450,390);
  object(l4 ,"Pincode  : " , 300,370);
  input(i5,450,430); 
  object(l5, "Time of del. :" ,300, 410);
  input(i6,450,470);
  object(l6 , "Pay Mode  : " , 300 , 450);


  
}

function xyz(){
 if(this.checked()){
   this.value = 10;
 } else{
  this.value = 0;
 }
   
}

function object(name ,hii ,xpos,ypos ){ 
  name = createElement("h2");
  name.html(hii)
  name.position( xpos, ypos);  
}

function boxes(varname, xposis , yposis){
  varname =createCheckbox();
  varname.position(xposis,yposis);
}

function input(nm , x, y){
  nm = createInput();
  nm.style("textAlign", "center");
  nm.style("width", "300px");
  nm.style("height", "20px");
  nm.position(x,y);
}

function mouseClicked( future, previous){
  previous.hide();
  future();
}

