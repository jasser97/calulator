var valeur1;
var valeur2;
var op;



function myclick(c){
   document.getElementById("out1").value+=c;
   
}


function myclickRes(){
    document.getElementById("out1").value="";
}


function opperator(x){
  valeur1=document.getElementById("out1").value;
  document.getElementById("out1").value="";
  op=x;
  
 
}


function aff(){
    console.log(valeur1);
    console.log(op);
    console.log(valeur2);

}


function eqaul(){
  
    valeur2=document.getElementById("out1").value;

    switch(op)
    
    {   case '+':
            document.getElementById("out1").value=valeur1*1+valeur2*1 ;
           
            break;

        
        case '-':
            document.getElementById("out1").value=valeur1*1-valeur2*1 ;
            break;
        case '/':
            document.getElementById("out1").value=valeur1*1/valeur2*1 ;
            break;
         case '*':
            document.getElementById("out1").value=valeur1*valeur2 ;
            break;
            
            
}

}

