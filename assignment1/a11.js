var list=[];
var sum=0;
var i=0;

const btn1=document.getElementById("input-button1").addEventListener("click",displayinput);
const btn2=document.getElementById("input-button2").addEventListener("click",displayoutput);
       

        function displayinput(event){
            event.preventDefault();
            var x = document.getElementById("income").value;
            if(x==='' || x<0 ){
                alert(" Income value cannot be empty or negative");
            }
            else{
                document.getElementById("income-amount").innerHTML=x;
                document.getElementById("income").value="";
                sbalanceAmt();                           
            }
        }


    
       function displayoutput(event){
          event.preventDefault();
           var des = document.getElementById("description").value;
           var y = document.getElementById("date").value;      
           var z = document.getElementById("expense").value;
           if(des==='' || y==='' || z==='' || z<0){
            alert("Expense fields cannot be empty or negative");
        }
        else{ 
            list[i]=z;
            int = parseInt(list[i]);
            sum=sum+int;
            document.getElementById("expense-amount").innerHTML=sum;         
            showlist(); 
            document.getElementById("description").value="";
            document.getElementById("date").value="";      
            document.getElementById("expense").value="";        
            sbalanceAmt();
           

        }
    }

    
    function sbalanceAmt(){
         var a = document.getElementById("income-amount").textContent;
         var b = document.getElementById("expense-amount").textContent;
         l = parseInt(a);
         m = parseInt(b);
         document.getElementById("balance-amount").innerHTML= l - m;

     }
     
     

    function showlist(){
        var li = document.createElement("li");
        var describe = document.getElementById("description").value;
        var yy = document.getElementById("date").value;     
        var zz = document.getElementById("expense").value;

      
        var t = document.createTextNode(describe);
        var u = document.createTextNode(yy);
        var v = document.createTextNode(zz); 

      

        li.appendChild(t);
        li.appendChild(u);
        li.appendChild(v);
        document.getElementById("expense-list").appendChild(li);   
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
       span.className = "close";
       span.appendChild(txt);
       li.appendChild(span);

     var close = document.getElementsByClassName("close");
      var j;
      for (j = 0; j < close.length; j++) {
      close[j].onclick = function() {
      var div = this.parentElement;
      var abc = div.previousElementSibling.textContent;
      var d = document.getElementById("expense-amount").textContent;
      var k = document.getElementById("balance-amount").textContent;
       abcd=parseInt(abc);
       kk = parseInt(k);
       dd = parseInt(d);
      
      document.getElementById("expense-amount").innerHTML=dd-abcd;
      document.getElementById("balance-amount").innerHTML=kk+abcd;
      div.style.display = "none";
     
    }
  } 
}