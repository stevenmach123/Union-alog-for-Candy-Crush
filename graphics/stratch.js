 
 //DON'T CARE ABOUT THIS JS, IT IS JUST MINE NOTE BRAINSTORM 
 
 
 while(true){
      var crushable = rules.getCandyCrushes();
       rules.removeCrushes(crushable);
         setTimeout(function(){rules.moveCandiesDown();},70000);

     }
      r][c].color 
   }    
   
   
but_left {
   my_field.disable = true 
   what_disable( )
}
but_crush{
   rules.removeCrushes(seq_remove);
   if(seq_remove.length>0){
      seq_empty=false;
   }
   else{
    seq_empty=true;
    what_disable(my_left,my_down,my_up,my_down,text_field)
   
}
  
  var dchi = dboard.children;
  for(var i=0;i<dchi.length ;i++){
   var chi = dchi[i].children ;
   for(var y=0;y<chi.length ;y++){
      if(chi[y].style.backgroundColor != "yellow"){
         chi[y].style.color = "#e6f3ff";
      }
      else{
         chi[y].style.color ="black";
      }
   }
  }


   var letter  = ["a","b","c","d","e","f","g","h"];
   var num  = [1,2,3,4,5,6,7,8];
   var my_left =  document.querySelector("#but_left"); 
   var my_right = document.querySelector("#but_right"); 
   var my_up  =  document.querySelector("#but_up"); 
   var my_down =  document.querySelector("#but_down");



   var  text_pos  = document.querySelector("#fname").textContent 
   function what_disable(arr){
      for(var x=0;x<arr.length; x++){
         arr[x].disable = true; 
         arr[x].style.backgroundColor ="none";
      }
   }
   function one_enable(arrow) {
      arrow.disable =false; 
      arrow.style.backgroundColor ="pink"; 
   }
   
if(text_pos.length ==2){
     
          
      var r_row =false;
      var r_col =false; 
   
      for(var x in letter){
         if(text_pos[0] == letter[x]){
            r_col =true;
         }
      }
      for(var x in num){
         if(parseInt(text_pos[1]) == num[x]){
            r_row =true;
         }
      }
      
      if(r_row ==true &&r_col ==true ){
         
         fromCandy =  getfromCandy(); 
         
         if(rules.isMoveTypeValid(fromCandy,"up")){ 
            one_enable(my_up);
         }
         else{
            what_disable([my_up]); 
         }

         if(rules.isMoveTypeValid(fromCandy,"down")){
            one_enable(my_down);
         }
         else{
            what_disable([my_down]); 
         }

         if(rules.isMoveTypeValid(fromCandy,"left")){
            one_enable(my_left);
         }
         else{
            what_disable([my_left]); 
         }

         if(rules.isMoveTypeValid(fromCandy,"right")){
            one_enable(my_right);
         }
         else{
            what_disable([my_right]); 
         }
      }
      else{
         what_disable([my_left,my_right,my_up,my_down]);
      }


   }
   else{
      what_disable([my_left,my_right,my_up,my_down]);
      
   }
   

     if(!rules.isMoveTypeValid(fromCandy,"left")){
        document.querySelector("#but_left").disable = true;
     }else{
         document.querySelector("#but_left").disable = false; 
     }


     if(!rules.isMoveTypeValid(fromCandy,"right")){
        document.querySelector("#but_right").disable = true;
     }
     else{
         document.querySelector("#but_right").disable = false; 
     }


     if(!rules.isMoveTypeValid(fromCandy,"up")){
        document.querySelector("#but_up").disable = true;
     }
     else{
         document.querySelector("#but_up").disable = false; 
     }

     if(!rules.isMoveTypeValid(fromCandy,"down")){
        document.querySelector("#but_down").disable = true;
     }
      else{
         document.querySelector("#but_down").disable = false; 
     }
    