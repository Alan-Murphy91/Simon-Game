$(document).ready(function(){
    var power = true;
    var playing = true;
    var strict = false;
    var counter = 0;
    var order = [];
    var playerOrder = [];
    var levelArr = [];
    var playerTurn = false;
    var count = 0;
    var lvlOne = false;
    var lvlTwo = false;
    var lvlThree = false;
    var lvlFour = false;
    var lvlFive = false;
    var lvlSix = false;
    var lvlSeven = false;
    var lvlEight = false;
    var lvlNine = false;
    var lvlTen = false;
    var lvlEleven = false;
    var lvlTwelve = false;
    var lvlThirteen = false;
    var lvlFourteen = false;
    var lvlFifteen = false;
    var lvlSixteen = false;
    var lvlSeventeen = false;
    var lvlEighteen = false;
    var lvlNineteen = false;
    var lvlTwenty = false;
    
    document.querySelector('#clgreenSound').playbackRate = 4;
    document.querySelector('#clredSound').playbackRate = 4;
    document.querySelector('#clyellowSound').playbackRate = 3;
    document.querySelector('#clblueSound').playbackRate = 3;
    
    document.querySelector('#greenSound').playbackRate = 0.6;
    document.querySelector('#redSound').playbackRate = 0.6;
    document.querySelector('#yellowSound').playbackRate = 0.6;
    document.querySelector('#blueSound').playbackRate = 0.6;
    
    document.querySelector('#twogreenSound').playbackRate = 0.8;
    document.querySelector('#tworedSound').playbackRate = 0.8;
    document.querySelector('#twoyellowSound').playbackRate = 0.8;
    document.querySelector('#twoblueSound').playbackRate = 0.8;
    
    document.querySelector('#threegreenSound').playbackRate = 2;
    document.querySelector('#threeredSound').playbackRate = 2;
    document.querySelector('#threeyellowSound').playbackRate = 2;
    document.querySelector('#threeblueSound').playbackRate = 2;


//    $('.on').click(function(){
//        if(power === false){
//        power = true;
        setTimeout(function(){ $('.count').text('--'); }, 100);
//        } else {
//          power = false;
//        $('.count').text('  ');
//        levelArr = [];
//        order = [];
//        playerOrder = [];
//        lvlOne = false;
//        lvlTwo = false;
//        lvlThree = false;
//        lvlFour = false;
//        lvlFive = false;
//        lvlSix = false;
//        lvlSeven = false;
//        lvlEight = false;
//        lvlNine = false;
//        lvlTen = false;
//        lvlEleven = false;
//        lvlTwelve = false;
//        lvlThirteen = false;
//        lvlFourteen = false;
//        lvlFifteen = false;
//        lvlSixteen = false;
//        lvlSeventeen = false;
//        lvlEighteen = false;
//        lvlNineteen = false;
//        lvlTwenty = false;
//        playerTurn = false;
//        count = 0;  
//        }
//    });
    
    $('.strict').click(function(){
        if(power === true){
        if(strict === false){    
        strict = true;
        $('.strict').css('filter', 'brightness(170%)');
        } else {
            strict = false;
            $('.strict').css('filter', 'brightness(100%)');
        }
        console.log(strict);
        }
    });

    
    
    $('.start').click(function(){
       if(power === true){
            playing = true;
            setTimeout(function(){ $('.count').text('  '); }, 100);
            setTimeout(function(){ $('.count').text('--'); }, 300);
            setTimeout(function(){ $('.count').text('  '); }, 500);
            setTimeout(function(){ $('.count').text('01'); }, 700);
           levelOne();
       }
        });
        
//--------------------------------LEVEL 1 ------------------------------
            
            $('.box1Spec').mouseup(function(){$( this ).css('background', '#00A74A');}).mousedown(function(){$( this ).css('background', '#00FA6F'); $('#clgreenSound')[0].play(); }).click(function(){
               if(playerTurn === true && playing === true && lvlOne === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('--'); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    playerOrder = [];
                    $('#errorNoise')[0].play();   
                    relevelOne();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01'); 
                    $('#errorNoise')[0].play();     
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 1){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwo(); }, 1); 
                   }
               }
            });
            
    
           
            $('.box2Spec').mouseup(function(){$( this ).css('background', '#9F0F17');}).mousedown(function(){$( this ).css('background', '#EE1622'); $('#clredSound')[0].play();}).click(function(){
               if(playerTurn === true && playing === true && lvlOne === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('--'); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                     playerOrder = [];
                    $('#errorNoise')[0].play();     
                     relevelOne();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                    else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 1){
                    playerOrder = [];
                    setTimeout(function(){ levelTwo(); }, 1);
                   }   
               } 
            });
           
            $('.box3Spec').mouseup(function(){$( this ).css('background', '#094A8F');}).mousedown(function(){$( this ).css('background', '#0D6FD6'); $('#clblueSound')[0].play();}).click(function(){
               if(playerTurn === true && playing === true && lvlOne === true){
                   playerOrder.push(4);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('--'); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play();  
                     relevelOne();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 1){
                    playerOrder = [];   
                    setTimeout(function(){ levelTwo(); }, 1);
                   }
               } 
            });
           
            $('.box4Spec').mouseup(function(){$( this ).css('background', '#CCA707');}).mousedown(function(){$( this ).css('background', '#FFFA0A'); $('#clyellowSound')[0].play();}).click(function(){
               if(playerTurn === true && playing === true && lvlOne === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('--'); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play();  
                     relevelOne();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 1){
                    playerOrder = [];   
                    setTimeout(function(){ levelTwo(); }, 1);
                   }
               } 
            });  
        
        
       
//     ----------------------LEVEL 2 --------------------------------   
        
        
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwo === true){
                   playerOrder.push(1);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('02'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelTwo();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 2){
//                    console.log('strict');
                    playerOrder = [];   
                   setTimeout(function(){ levelThree(); }, 1); 
                   }
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwo === true){
                   playerOrder.push(2);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('02'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwo();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 2){
                    playerOrder = [];   
                   setTimeout(function(){ levelThree(); }, 1); 
                   }
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwo === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('02'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelTwo();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 2){
                    playerOrder = [];   
                   setTimeout(function(){ levelThree(); }, 1); 
                   }
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwo === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('02'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwo();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 2){
                    playerOrder = [];   
                   setTimeout(function(){ levelThree(); }, 1); 
                   }
               } 
            });        

    
    
//     ----------------------LEVEL 3 --------------------------------      
    
 
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThree === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('03'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelThree();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01'); 
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 3){
                    playerOrder = [];   
                   setTimeout(function(){ levelFour(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThree === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('03'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelThree();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01'); 
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 3){
                    playerOrder = [];   
                   setTimeout(function(){ levelFour(); }, 1); 
                   } 
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThree === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('03'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelThree();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01'); 
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 3){
                   playerOrder = [];   
                   setTimeout(function(){ levelFour(); }, 1); 
                   } 
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThree === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('03'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelThree();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play(); 
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 3){
                   playerOrder = [];   
                   setTimeout(function(){ levelFour(); }, 1); 
                   }
               } 
            });    
    
    
  //     ----------------------LEVEL 4 --------------------------------  
    
              $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFour === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('04'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelFour();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 4){
                    playerOrder = [];   
                   setTimeout(function(){ levelFive(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFour === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('04'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFour();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 4){
                    playerOrder = [];   
                   setTimeout(function(){ levelFive(); }, 1); 
                   } 
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFour === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('04'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelFour();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                 $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 4){
                    playerOrder = [];   
                   setTimeout(function(){ levelFive(); }, 1); 
                   } 
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFour === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('04'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFour();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01'); 
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 4){
                    playerOrder = [];   
                   setTimeout(function(){ levelFive(); }, 1); 
                   }
               } 
            });    

    
  //     ----------------------LEVEL 5 -------------------------------- 
    
              $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFive === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('05'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelFive();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 5){
                    playerOrder = [];   
                   setTimeout(function(){ levelSix(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFive === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('05'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFive();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 5){
                    playerOrder = [];   
                   setTimeout(function(){ levelSix(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFive === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('05'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelFive();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 5){
                    playerOrder = [];   
                   setTimeout(function(){ levelSix(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFive === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('05'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFive();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 5){
                    playerOrder = [];   
                   setTimeout(function(){ levelSix(); }, 1); 
                   }  
               } 
            });    
    
    
  //     ----------------------LEVEL 6 --------------------------------   
    
      $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSix === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('06'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelSix();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 6){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeven(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSix === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('06'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSix();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 6){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeven(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSix === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('06'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSix();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 6){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeven(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSix === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('06'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSix();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 6){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeven(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 7 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeven === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('07'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelSeven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 7){
                    playerOrder = [];   
                   setTimeout(function(){ levelEight(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeven === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('07'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSeven();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 7){
                    playerOrder = [];   
                   setTimeout(function(){ levelEight(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeven === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('07'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSeven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 7){
                    playerOrder = [];   
                   setTimeout(function(){ levelEight(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeven === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('07'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSeven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 7){
                    playerOrder = [];   
                   setTimeout(function(){ levelEight(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 8 --------------------------------
    
        $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEight === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('08'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelEight();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 8){
                    playerOrder = [];   
                   setTimeout(function(){ levelNine(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEight === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('08'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEight();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 8){
                    playerOrder = [];   
                   setTimeout(function(){ levelNine(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEight === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('08'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEight();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 8){
                    playerOrder = [];   
                   setTimeout(function(){ levelNine(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEight === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('08'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEight();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 8){
                    playerOrder = [];   
                   setTimeout(function(){ levelNine(); }, 1); 
                   }  
               } 
            });
    
    
  //     ----------------------LEVEL 9 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNine === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('09'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelNine();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 9){
                    playerOrder = [];   
                   setTimeout(function(){ levelTen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNine === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('09'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelNine();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 9){
                    playerOrder = [];   
                   setTimeout(function(){ levelTen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNine === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('09'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelNine();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 9){
                   playerOrder = [];   
                   setTimeout(function(){ levelTen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNine === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('09'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelNine();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 9){
                    playerOrder = [];   
                   setTimeout(function(){ levelTen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 10 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('10'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelTen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 10){
                    playerOrder = [];   
                   setTimeout(function(){ levelEleven(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('10'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTen();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 10){
                    playerOrder = [];   
                   setTimeout(function(){ levelEleven(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('10'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 10){
                   playerOrder = [];   
                   setTimeout(function(){ levelEleven(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('10'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 10){
                    playerOrder = [];   
                   setTimeout(function(){ levelEleven(); }, 1); 
                   }  
               } 
            });    
    
  //     ----------------------LEVEL 11 --------------------------------  
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEleven === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('11'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelEleven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 11){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwelve(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEleven === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('11'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEleven();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 11){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwelve(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEleven === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('11'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEleven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 11){
                   playerOrder = [];   
                   setTimeout(function(){ levelTwelve(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEleven === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('11'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEleven();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 11){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwelve(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 12 --------------------------------
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwelve === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('12'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelTwelve();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 12){
                    playerOrder = [];   
                   setTimeout(function(){ levelThirteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwelve === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('12'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwelve();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 12){
                    playerOrder = [];   
                   setTimeout(function(){ levelThirteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwelve === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('12'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelTwelve();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 12){
                   playerOrder = [];   
                   setTimeout(function(){ levelThirteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwelve === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('12'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwelve();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 12){
                    playerOrder = [];   
                   setTimeout(function(){ levelThirteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 13 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThirteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('13'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelThirteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 13){
                    playerOrder = [];   
                   setTimeout(function(){ levelFourteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThirteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('13'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelThirteen();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 13){
                    playerOrder = [];   
                   setTimeout(function(){ levelFourteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThirteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('13'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelThirteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 13){
                   playerOrder = [];   
                   setTimeout(function(){ levelFourteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlThirteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('13'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelThirteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 13){
                    playerOrder = [];   
                   setTimeout(function(){ levelFourteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 14 --------------------------------  
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFourteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('14'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelFourteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 14){
                    playerOrder = [];   
                   setTimeout(function(){ levelFifteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFourteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('14'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFourteen();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 14){
                    playerOrder = [];   
                   setTimeout(function(){ levelFifteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFourteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('14'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelFourteen(); 
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 14){
                   playerOrder = [];   
                   setTimeout(function(){ levelFifteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFourteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('14'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFourteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 14){
                    playerOrder = [];   
                   setTimeout(function(){ levelFifteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 15 --------------------------------   
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFifteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('15'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelFifteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 15){
                    playerOrder = [];   
                   setTimeout(function(){ levelSixteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFifteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('15'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFifteen();       
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 15){
                    playerOrder = [];   
                   setTimeout(function(){ levelSixteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFifteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('15'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelFifteen();
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 15){
                   playerOrder = [];   
                   setTimeout(function(){ levelSixteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlFifteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('15'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelFifteen();  
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play(); 
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 15){
                    playerOrder = [];   
                   setTimeout(function(){ levelSixteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 16 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSixteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('16'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelSixteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play(); 
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 16){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeventeen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSixteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('16'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSixteen();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play(); 
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 16){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeventeen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSixteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('16'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelSixteen();  
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 16){
                   playerOrder = [];   
                   setTimeout(function(){ levelSeventeen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSixteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('16'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSixteen();    
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 16){
                    playerOrder = [];   
                   setTimeout(function(){ levelSeventeen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 17 --------------------------------    
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeventeen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('17'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelSeventeen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 17){
                    playerOrder = [];   
                   setTimeout(function(){ levelEighteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeventeen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('17'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSeventeen();          
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 17){
                    playerOrder = [];   
                   setTimeout(function(){ levelEighteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeventeen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('17'); }, 800);
                     playerOrder = [];  
                       $('#errorNoise')[0].play(); 
                     relevelSeventeen();  
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 17){
                   playerOrder = [];   
                   setTimeout(function(){ levelEighteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlSeventeen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('17'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelSeventeen();     
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                  $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 17){
                    playerOrder = [];   
                   setTimeout(function(){ levelEighteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 18 -------------------------------- 
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEighteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('18'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelEighteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 18){
                    playerOrder = [];   
                   setTimeout(function(){ levelNineteen(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEighteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('18'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEighteen();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 18){
                    playerOrder = [];   
                   setTimeout(function(){ levelNineteen(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEighteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('18'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelEighteen();
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 18){
                   playerOrder = [];   
                   setTimeout(function(){ levelNineteen(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlEighteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('18'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelEighteen();     
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 18){
                    playerOrder = [];   
                   setTimeout(function(){ levelNineteen(); }, 1); 
                   }  
               } 
            });
    
  //     ----------------------LEVEL 19 --------------------------------     
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNineteen === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('19'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelNineteen();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                   $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 19){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwenty(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNineteen === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('19'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelNineteen();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                  $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 19){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwenty(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNineteen === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('19'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelNineteen(); 
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 19){
                   playerOrder = [];   
                   setTimeout(function(){ levelTwenty(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlNineteen === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('19'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelNineteen();      
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                   $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 19){
                    playerOrder = [];   
                   setTimeout(function(){ levelTwenty(); }, 1); 
                   }  
               } 
            });
    
    
//     ----------------------LEVEL 20 --------------------------------      
    
            $('.box1Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwenty === true){
                   playerOrder.push(1);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('20'); }, 800);
                    playerOrder = [];
                       $('#errorNoise')[0].play(); 
                    relevelTwenty();   
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');   
                  $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 20){
                    playerOrder = [];   
                   setTimeout(function(){ endGame(); }, 1); 
                   } 
               } 
            });
           
            $('.box2Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwenty === true){
                   playerOrder.push(2);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('20'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwenty();        
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                    $('#errorNoise')[0].play();  
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 20){
                    playerOrder = [];   
                   setTimeout(function(){ endGame(); }, 1); 
                   }  
               }
            });
           
            $('.box3Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwenty === true){
                   playerOrder.push(4);
                   count++; 
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('20'); }, 800);
                     playerOrder = []; 
                       $('#errorNoise')[0].play(); 
                     relevelTwenty(); 
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');
                  $('#errorNoise')[0].play();   
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                   else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 20){
                   playerOrder = [];   
                   setTimeout(function(){ endGame(); }, 1); 
                   }   
               } 
            });
           
            $('.box4Spec').click(function(){
               if(playerTurn === true && playing === true && lvlTwenty === true){
                   playerOrder.push(3);
                   count++;
                   console.log(count);
                   if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === false){
                setTimeout(function(){ $('.count').text('!!'); }, 200);       
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('20'); }, 800);
                     playerOrder = [];
                       $('#errorNoise')[0].play(); 
                     relevelTwenty();      
                   }
                   else if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] && strict === true){
                setTimeout(function(){ $('.count').text('!!'); }, 200);
                setTimeout(function(){ $('.count').text('  '); }, 400);       
                setTimeout(function(){ $('.count').text('!!'); }, 600);       
                setTimeout(function(){ $('.count').text('01'); }, 800);
                    $('.count').text('01');  
                    $('#errorNoise')[0].play();    
                    setTimeout(function(){ levelOne(); }, 1000);   
                   }
                  else if(playerOrder[playerOrder.length-1] == order[playerOrder.length-1] && count == 20){
                    playerOrder = [];   
                   setTimeout(function(){ endGame(); }, 1); 
                   }  
               } 
            });
    
    
//    ------------------------------- Functions -----------------------

  
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} 
    
    
function endGame(){
    setTimeout(function(){ $('#winTheme')[0].play();
        $('.count').text('WIN');        
                         }, 1000);
    
    setTimeout(function(){ $('.box1Spec').css('background', '#00FA6F'); }, 1000);
    setTimeout(function(){ $('.box1Spec').css('background', '#FFFA0A'); }, 2000);
    setTimeout(function(){ $('.box1Spec').css('background', '#0D6FD6'); }, 3000);
    setTimeout(function(){ $('.box1Spec').css('background', '#EE1622'); }, 4000);
    setTimeout(function(){ $('.box1Spec').css('background', '#00FA6F'); }, 5000);
    setTimeout(function(){ $('.box1Spec').css('background', '#FFFA0A'); }, 6000);
    setTimeout(function(){ $('.box1Spec').css('background', '#0D6FD6'); }, 7000);
    setTimeout(function(){ $('.box1Spec').css('background', '#EE1622'); }, 8000);
    
    setTimeout(function(){ $('.box2Spec').css('background', '#EE1622'); }, 1000); 
    setTimeout(function(){ $('.box2Spec').css('background', '#00FA6F'); }, 2000); 
    setTimeout(function(){ $('.box2Spec').css('background', '#FFFA0A'); }, 3000); 
    setTimeout(function(){ $('.box2Spec').css('background', '#0D6FD6'); }, 4000);
    setTimeout(function(){ $('.box2Spec').css('background', '#EE1622'); }, 5000);
    setTimeout(function(){ $('.box2Spec').css('background', '#00FA6F'); }, 6000);
    setTimeout(function(){ $('.box2Spec').css('background', '#FFFA0A'); }, 7000);
    setTimeout(function(){ $('.box2Spec').css('background', '#0D6FD6'); }, 8000);
    
    setTimeout(function(){ $('.box4Spec').css('background', '#0D6FD6'); }, 1000); 
    setTimeout(function(){ $('.box4Spec').css('background', '#EE1622'); }, 2000); 
    setTimeout(function(){ $('.box4Spec').css('background', '#00FA6F'); }, 3000); 
    setTimeout(function(){ $('.box4Spec').css('background', '#FFFA0A'); }, 4000);
    setTimeout(function(){ $('.box4Spec').css('background', '#0D6FD6'); }, 5000);
    setTimeout(function(){ $('.box4Spec').css('background', '#EE1622'); }, 6000);
    setTimeout(function(){ $('.box4Spec').css('background', '#00FA6F'); }, 7000);
    setTimeout(function(){ $('.box4Spec').css('background', '#FFFA0A'); }, 8000);
    
    setTimeout(function(){ $('.box3Spec').css('background', '#FFFA0A'); }, 1000);
    setTimeout(function(){ $('.box3Spec').css('background', '#0D6FD6'); }, 2000);
    setTimeout(function(){ $('.box3Spec').css('background', '#EE1622'); }, 3000);
    setTimeout(function(){ $('.box3Spec').css('background', '#00FA6F'); }, 4000);
    setTimeout(function(){ $('.box3Spec').css('background', '#FFFA0A'); }, 5000);
    setTimeout(function(){ $('.box3Spec').css('background', '#0D6FD6'); }, 6000);
    setTimeout(function(){ $('.box3Spec').css('background', '#EE1622'); }, 7000);
    setTimeout(function(){ $('.box3Spec').css('background', '#00FA6F'); }, 8000);
    
    setTimeout(function(){
        
     $('.box1Spec').css('background', '#00A74A');   
     $('.box2Spec').css('background', '#9F0F17');   
     $('.box3Spec').css('background', '#094A8F');   
     $('.box4Spec').css('background', '#CCA707');   
     $('.count').text('01');    
    levelOne(); }, 9000);
}    
    
//   ---------------------------FLASH FUNCTIONS ------------------------------
    
//    -----------------------FLASH 1-5-------------------------------------
    
function flasher() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#greenSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 1800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#redSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 1800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#yellowSound')[0].play();    
      }, 1000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 1800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#blueSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 1800);
    } 
}
    
function flasher2() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#greenSound')[0].play();                    
      }, 2300);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 3100); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#redSound')[0].play();                    
      }, 2300);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 3100);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#yellowSound')[0].play();                    
      }, 2300);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 3100); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#blueSound')[0].play();                    
      }, 2300);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 3100);
    } 
}
    
function flasher3() {
    if(levelArr[0] === 1){
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#greenSound')[0].play();                    
      }, 3900);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4700); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#redSound')[0].play();                    
      }, 3900);     
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4700);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#yellowSound')[0].play();                    
      }, 3900);   
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4700); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#blueSound')[0].play();                    
      }, 3900);   
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4700);
    } 
}
    
function flasher4() {
    if(levelArr[0] === 1){
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#greenSound')[0].play();                    
      }, 5500);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6300); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#redSound')[0].play();                    
      }, 5500);     
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6300);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#yellowSound')[0].play();                    
      }, 5500);   
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6300); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#blueSound')[0].play();                    
      }, 5500);   
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6300);
    } 
}   
    
function flasher5() {
    if(levelArr[0] === 1){
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#greenSound')[0].play();                    
      }, 7100);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7900); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#redSound')[0].play();                    
      }, 7100);     
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7900);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#yellowSound')[0].play();                    
      }, 7100);   
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7900); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#blueSound')[0].play();                    
      }, 7100);   
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7900);
    } 
}     
    
    
 //    -----------------------FLASH 6-9-------------------------------------   
    
    
function incflasher() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 1600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 1600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 1000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 1600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 1600);
    } 
}    
    
    
function incflasher2() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 2200);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 2800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 2200);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 2800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 2200);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 2800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 2200);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 2800);
    } 
}    
    
    
function incflasher3() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 3400);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 3400);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 3400);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 3400);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4000);
    } 
}  
    

function incflasher4() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 4600);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 5200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 4600);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 5200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 4600);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 5200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 4600);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 5200);
    } 
}
    
    
function incflasher5() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 5800);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 5800);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 5800);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 5800);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6400);
    } 
}     
    
    
function incflasher6() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 7000);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 7000);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 7000);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 7000);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7600);
    } 
}   
    

function incflasher7() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 8200);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 8800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 8200);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 8800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 8200);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 8800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 8200);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 8800);
    } 
}      
    
    
function incflasher8() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 9400);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 10000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 9400);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 10000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 9400);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 10000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 9400);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 10000);
    } 
} 
    
    
function incflasher9() {
    if(levelArr[0] === 1){
      setTimeout(function(){ 
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();                    
      }, 10600);
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 11200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){
      $('.box2Spec').css('background', '#EE1622');
      $('#tworedSound')[0].play();                    
      }, 10600);   
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 11200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();                    
      }, 10600);     
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 11200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){
      $('.box3Spec').css('background', '#0D6FD6');
      $('#twoblueSound')[0].play();                    
      }, 10600);    
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 11200);
    } 
}       
    
    
 //    -----------------------FLASH 10-13------------------------------------- 
    
    function xincflasher() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 1400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 1400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 1000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 1400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 1400);
    } 
} 
    
    
    function xincflasher2() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 2200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 2200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 1800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 2200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 2200);
    } 
}   
    
    
function xincflasher3() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 3000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 3000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 2600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 3000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 3000);
    } 
} 
    
    
function xincflasher4() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 3800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 3800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 3400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 3800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 3800);
    } 
}  
    
    
function xincflasher5() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 4200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4600);
    } 
}       
   
    
function xincflasher6() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 5400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 5400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 5000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 5400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 5400);
    } 
}    
    
    
function xincflasher7() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 5800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6200);
    } 
} 
    
    
function xincflasher8() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 6600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7000);
    } 
}   
    
    
function xincflasher9() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 7400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7800);
    } 
}
    
    
function xincflasher10() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 8600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 8600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 8200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 8600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 8600);
    } 
}   
    
    
function xincflasher11() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 9000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 9400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 9000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 9400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 9000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 9400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 9000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 9400);
    } 
}     
    
    
function xincflasher12() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 9800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 10200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 9800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 10200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 9800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 10200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 9800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 10200);
    } 
}     
    
    
function xincflasher13() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#twogreenSound')[0].play();
      }, 10600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 11000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#tworedSound')[0].play();
      }, 10600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 11000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#twoyellowSound')[0].play();    
      }, 10600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 11000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#twoblueSound')[0].play();
      }, 10600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 11000);
    } 
}    
    
 //    -----------------------FLASH 13-20-------------------------------------   
    
    function finalflasher() {     
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 1200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 1200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 1000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 1200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 1000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 1200);
    } 
}
    
    
    
    function finalflasher2() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 1400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 1600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 1400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 1600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 1400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 1600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 1400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 1600);
    } 
}
    
    
    function finalflasher3() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 2000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 2000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 1800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 2000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 1800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 2000);
    } 
}
    
    
    function finalflasher4() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 2200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 2400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 2200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 2400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 2200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 2400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 2200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 2400);
    } 
}
    
    
    
    function finalflasher5() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 2800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 2800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 2600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 2800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 2600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 2800);
    } 
}
    
    
    
    
    function finalflasher6() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 3000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 3200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 3000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 3200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 3000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 3200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 3000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 3200);
    } 
}
    
    
    
    
    function finalflasher7() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 3600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 3600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 3400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 3600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 3400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 3600);
    } 
}
    
    
    function finalflasher8() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 3800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 3800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 3800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 3800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4000);
    } 
}
    
    
    
    function finalflasher9() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 4200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 4200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4400);
    } 
}
    
    
    function finalflasher10() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 4600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 4800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 4600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 4800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 4600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 4800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 4600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 4800);
    } 
}
    
    
    function finalflasher11() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 5200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 5200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 5000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 5200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 5000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 5200);
    } 
}
    
    
    function finalflasher12() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 5400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 5600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 5400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 5600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 5400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 5600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 5400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 5600);
    } 
}
    
    
    function finalflasher13() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 5800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 5800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6000);
    } 
}
    
    
    function finalflasher14() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 6200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 6200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 6200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 6200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6400);
    } 
}
    
    
    function finalflasher15() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 6800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 6800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 6600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 6800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 6600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 6800);
    } 
}
    
    
    function finalflasher16() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 7000);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7200); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 7000);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7200);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 7000);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7200); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 7000);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7200);
    } 
}
    
    
    function finalflasher17() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 7600); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 7600);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 7400);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 7600); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 7400);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 7600);
    } 
}
    
    
    function finalflasher18() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 7800);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 8000); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 7800);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 8000);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 7800);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 8000); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 7800);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 8000);
    } 
}
    
    
    function finalflasher19() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 8400); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 8400);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 8200);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 8400); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 8200);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 8400);
    } 
}
    
    
    function finalflasher20() {
    if(levelArr[0] === 1){   
      setTimeout(function(){
      $('.box1Spec').css('background', '#00FA6F');
      $('#threegreenSound')[0].play();
      }, 8600);  
      setTimeout(function(){ $('.box1Spec').css('background', '#00A74A'); }, 8800); 
    }
    else if(levelArr[0] === 2){
      setTimeout(function(){ 
      $('.box2Spec').css('background', '#EE1622'); 
      $('#threeredSound')[0].play();
      }, 8600);  
      setTimeout(function(){ $('.box2Spec').css('background', '#9F0F17'); }, 8800);   
    }
    else if(levelArr[0] === 3){
      setTimeout(function(){
      $('.box4Spec').css('background', '#FFFA0A');
      $('#threeyellowSound')[0].play();    
      }, 8600);  
      setTimeout(function(){ $('.box4Spec').css('background', '#CCA707'); }, 8800); 
    }
    else if(levelArr[0] === 4){
      setTimeout(function(){ 
      $('.box3Spec').css('background', '#0D6FD6'); 
      $('#threeblueSound')[0].play();
      }, 8600);  
      setTimeout(function(){ $('.box3Spec').css('background', '#094A8F'); }, 8800);
    } 
}
    
    
    
//   ---------------------------END FLASH FUNCTIONS ------------------------------    
    
    
    
    
//    Three arrays. The order array records the original moves as the game progresses, the levelarr empties itself and refills every time a level functn is invoked so as to avoid duplicates and the player order is used to dynamically compare the current position of order w/ the current position of the players move. Alan - 1:44pm 29-Jun-17
  
    
    
//    -------------------------------1---------------------------------------
    
    
function levelOne() {
    levelArr = [];
    order = [];
    playerOrder = [];
    lvlOne = false;
    lvlTwo = false;
    lvlThree = false;
    lvlFour = false;
    lvlFive = false;
    lvlSix = false;
    lvlSeven = false;
    lvlEight = false;
    lvlNine = false;
    lvlTen = false;
    lvlEleven = false;
    lvlTwelve = false;
    lvlThirteen = false;
    lvlFourteen = false;
    lvlFifteen = false;
    lvlSixteen = false;
    lvlSeventeen = false;
    lvlEighteen = false;
    lvlNineteen = false;
    lvlTwenty = false;
    playerTurn = false;
    count = 0;
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    setTimeout(function(){ playerTurn = true; }, 1800);
    lvlOne = true;
    levelArr = [];
}
  
function relevelOne() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();  
    setTimeout(function(){ playerTurn = true; }, 1800);
    lvlOne = true;
    levelArr = [];
}       
    
      
//    -------------------------------2---------------------------------------

function levelTwo() {
    $('.count').text('02');
    lvlOne = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    setTimeout(function(){ playerTurn = true; }, 3100);
    lvlTwo = true;
    levelArr = [];
}
    
function relevelTwo() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    setTimeout(function(){ playerTurn = true; }, 3100);
    lvlTwo = true;
    levelArr = [];
}  
    
//    -------------------------------3---------------------------------------

function levelThree() {
    $('.count').text('03');
    lvlTwo = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    setTimeout(function(){ playerTurn = true; }, 4700);
    lvlThree = true;
    levelArr = [];
}
    
function relevelThree() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    setTimeout(function(){ playerTurn = true; }, 4700);
    lvlThree = true;
    levelArr = [];
}   
    
    
//    -------------------------------4---------------------------------------
    
function levelFour() {
    $('.count').text('04');
    lvlThree = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    levelArr.splice(0,1);
    flasher4();
    setTimeout(function(){ playerTurn = true; }, 6300);
    lvlFour = true;
    levelArr = [];
}
    
function relevelFour() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    levelArr.splice(0,1);
    flasher4();
    setTimeout(function(){ playerTurn = true; }, 6300);
    lvlFour = true;
    levelArr = [];
}     
    
    
//    -------------------------------5---------------------------------------    
    
    
function levelFive() {
    $('.count').text('05');
    lvlFour = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    levelArr.splice(0,1);
    flasher4();
    levelArr.splice(0,1);
    flasher5();
    setTimeout(function(){ playerTurn = true; }, 7900);
    lvlFive = true;
    levelArr = [];
}
    
function relevelFive() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    flasher();
    levelArr.splice(0,1);
    flasher2();
    levelArr.splice(0,1);
    flasher3();
    levelArr.splice(0,1);
    flasher4();
    levelArr.splice(0,1);
    flasher5();
    setTimeout(function(){ playerTurn = true; }, 7900);
    lvlFive = true;
    levelArr = [];
}        
    
    
//    -------------------------------6--------------------------------------- 
    
function levelSix() {
    $('.count').text('06');
    lvlFive = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    setTimeout(function(){ playerTurn = true; }, 7600);
    lvlSix = true;
    levelArr = [];
}
    
function relevelSix() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    setTimeout(function(){ playerTurn = true; }, 7600);
    lvlSix = true;
    levelArr = [];
}     
    
    
//    -------------------------------7---------------------------------------     
    
function levelSeven() {
    $('.count').text('07');
    lvlSix = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    setTimeout(function(){ playerTurn = true; }, 8800);
    lvlSeven = true;
    levelArr = [];
}
    
function relevelSeven() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    setTimeout(function(){ playerTurn = true; }, 8800);
    lvlSeven = true;
    levelArr = [];
}      
      
//    -------------------------------8---------------------------------------     
    
  function levelEight() {
    $('.count').text('08');
    lvlSeven = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    levelArr.splice(0,1);
    incflasher8();  
    setTimeout(function(){ playerTurn = true; }, 10000);
    lvlEight = true;
    levelArr = [];
}
    
function relevelEight() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    levelArr.splice(0,1);
    incflasher8(); 
    setTimeout(function(){ playerTurn = true; }, 10000);
    lvlEight = true;
    levelArr = [];
}   

    
//    -------------------------------9---------------------------------------  
    
   function levelNine() {
    $('.count').text('09');
    lvlEight = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    levelArr.splice(0,1);
    incflasher8();
    levelArr.splice(0,1);
    incflasher9();
    setTimeout(function(){ playerTurn = true; }, 11200);
    lvlNine = true;
    levelArr = [];
}
    
function relevelNine() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    incflasher();
    levelArr.splice(0,1);
    incflasher2();
    levelArr.splice(0,1);
    incflasher3();
    levelArr.splice(0,1);
    incflasher4();
    levelArr.splice(0,1);
    incflasher5();
    levelArr.splice(0,1);
    incflasher6();
    levelArr.splice(0,1);
    incflasher7();
    levelArr.splice(0,1);
    incflasher8();
    levelArr.splice(0,1);
    incflasher9();
    setTimeout(function(){ playerTurn = true; }, 11200);
    lvlNine = true;
    levelArr = [];
}     
    

//    -------------------------------10---------------------------------------     
   function levelTen() {
    $('.count').text('10');
    lvlNine = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();   
    setTimeout(function(){ playerTurn = true; }, 8600);
    lvlTen = true;
    levelArr = [];
}
    
function relevelTen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();   
    setTimeout(function(){ playerTurn = true; }, 8600);
    lvlTen = true;
    levelArr = [];
}     
    
//    -------------------------------11---------------------------------------     
   function levelEleven() {
    $('.count').text('11');
    lvlTen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10(); 
    levelArr.splice(0,1);
    xincflasher11();   
    setTimeout(function(){ playerTurn = true; }, 9400);
    lvlEleven = true;
    levelArr = [];
}
    
function relevelEleven() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10(); 
    levelArr.splice(0,1);
    xincflasher11();   
    setTimeout(function(){ playerTurn = true; }, 9400);
    lvlEleven = true;
    levelArr = [];
}   
    
//    -------------------------------12---------------------------------------     
   function levelTwelve() {
    $('.count').text('12');
    lvlEleven = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();
    levelArr.splice(0,1);
    xincflasher11();
    levelArr.splice(0,1);
    xincflasher12();   
    setTimeout(function(){ playerTurn = true; }, 10200);
    lvlTwelve = true;
    levelArr = [];
}
    
function relevelTwelve() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();
    levelArr.splice(0,1);
    xincflasher11();
    levelArr.splice(0,1);
    xincflasher12();   
    setTimeout(function(){ playerTurn = true; }, 10200);
    lvlTwelve = true;
    levelArr = [];
}     
    
//    -------------------------------13---------------------------------------    
   function levelThirteen() {
    $('.count').text('13');
    lvlTwelve = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();
    levelArr.splice(0,1);
    xincflasher11();
    levelArr.splice(0,1);
    xincflasher12(); 
    levelArr.splice(0,1); 
    xincflasher13();   
    setTimeout(function(){ playerTurn = true; }, 11000);
    lvlThirteen = true;
    levelArr = [];
}
    
function relevelThirteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    xincflasher();
    levelArr.splice(0,1);
    xincflasher2();
    levelArr.splice(0,1);
    xincflasher3();
    levelArr.splice(0,1);
    xincflasher4();
    levelArr.splice(0,1);
    xincflasher5();
    levelArr.splice(0,1);
    xincflasher6();
    levelArr.splice(0,1);
    xincflasher7();
    levelArr.splice(0,1);
    xincflasher8();
    levelArr.splice(0,1);
    xincflasher9();
    levelArr.splice(0,1);
    xincflasher10();
    levelArr.splice(0,1);
    xincflasher11();
    levelArr.splice(0,1);
    xincflasher12(); 
    levelArr.splice(0,1); 
    xincflasher13();   
    setTimeout(function(){ playerTurn = true; }, 11000);
    lvlThirteen = true;
    levelArr = [];
}      
    
//    -------------------------------14---------------------------------------     
function levelFourteen() {
    $('.count').text('14');
    lvlThirteen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    setTimeout(function(){ playerTurn = true; }, 6400);
    lvlFourteen = true;
    levelArr = [];
}
    
function relevelFourteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    setTimeout(function(){ playerTurn = true; }, 6400);
    lvlFourteen = true;
    levelArr = [];
}     
    
//    -------------------------------15---------------------------------------     
    function levelFifteen() {
    $('.count').text('15');
    lvlFourteen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15();     
    setTimeout(function(){ playerTurn = true; }, 6800);
    lvlFifteen = true;
    levelArr = [];
}
    
function relevelFifteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15();     
    setTimeout(function(){ playerTurn = true; }, 6800);
    lvlFifteen = true;
    levelArr = [];
}
    
//    -------------------------------16---------------------------------------     
  function levelSixteen() {
    $('.count').text('16');
    lvlFifteen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    setTimeout(function(){ playerTurn = true; }, 7200);
    lvlSixteen = true;
    levelArr = [];
}
    
function relevelSixteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    setTimeout(function(){ playerTurn = true; }, 7200);
    lvlSixteen = true;
    levelArr = [];
} 
    
//    -------------------------------17---------------------------------------     
 function levelSeventeen() {
    $('.count').text('17');
    lvlSixteen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    setTimeout(function(){ playerTurn = true; }, 7600);
    lvlSeventeen = true;
    levelArr = [];
}
    
function relevelSeventeen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    setTimeout(function(){ playerTurn = true; }, 7600);
    lvlSeventeen = true;
    levelArr = [];
}   
    
//    -------------------------------18---------------------------------------     
function levelEighteen() {
    $('.count').text('18');
    lvlSeventeen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    setTimeout(function(){ playerTurn = true; }, 8000);
    lvlEighteen = true;
    levelArr = [];
}
    
function relevelEighteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    setTimeout(function(){ playerTurn = true; }, 8000);
    lvlEighteen = true;
    levelArr = [];
}    
    
    
//    -------------------------------19---------------------------------------     
    
function levelNineteen() {
    $('.count').text('19');
    lvlEighteen = false;
    playerTurn = false;
    count = 0;
    console.log(count);
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    levelArr.splice(0,1);
    finalflasher19();
    setTimeout(function(){ playerTurn = true; }, 8400);
    lvlNineteen = true;
    levelArr = [];
}
    
function relevelNineteen() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    levelArr.splice(0,1);
    finalflasher19();
    setTimeout(function(){ playerTurn = true; }, 8400);
    lvlNineteen = true;
    levelArr = [];
}    
    
    
//    -------------------------------20---------------------------------------    
    function levelTwenty() {
    $('.count').text('20');
    lvlNineteen = false;
    playerTurn = false;
    count = 0;
    order.push(Math.floor((Math.random() * 4) + 1));
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    levelArr.splice(0,1);
    finalflasher19();
    levelArr.splice(0,1); 
    finalflasher20(); 
    setTimeout(function(){ playerTurn = true; }, 8800);
    lvlTwenty = true;
    levelArr = [];
}
    
function relevelTwenty() {
    playerTurn = false;
    count = 0;
    for(var i=0; i<order.length; i++){
        levelArr.push(order[i]);
    }
    finalflasher();
    levelArr.splice(0,1);
    finalflasher2();
    levelArr.splice(0,1);
    finalflasher3();
    levelArr.splice(0,1);
    finalflasher4();
    levelArr.splice(0,1);
    finalflasher5();
    levelArr.splice(0,1);
    finalflasher6();
    levelArr.splice(0,1);
    finalflasher7();
    levelArr.splice(0,1);
    finalflasher8();
    levelArr.splice(0,1);
    finalflasher9();
    levelArr.splice(0,1);
    finalflasher10();
    levelArr.splice(0,1);
    finalflasher11();
    levelArr.splice(0,1);
    finalflasher12(); 
    levelArr.splice(0,1); 
    finalflasher13(); 
    levelArr.splice(0,1); 
    finalflasher14(); 
    levelArr.splice(0,1); 
    finalflasher15(); 
    levelArr.splice(0,1);
    finalflasher16();   
    levelArr.splice(0,1);
    finalflasher17();
    levelArr.splice(0,1);
    finalflasher18();
    levelArr.splice(0,1);
    finalflasher19();
    levelArr.splice(0,1); 
    finalflasher20();    
    setTimeout(function(){ playerTurn = true; }, 8800);
    lvlTwenty = true;
    levelArr = [];
}
    
        
});