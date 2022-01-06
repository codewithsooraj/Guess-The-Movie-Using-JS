
    function ck1(){
        var a = document.getElementById("input1").value;
        if(a=="a" || a=="A" || a=="")
        {
            document.getElementById("b1").src="on.jpg";
            var on1 = document.getElementById("b1");
            on1.style.width="160px";
            on1.style.marginLeft="21%";

        }
        else{
            document.getElementById("b1").src="off.jpg";
            var off1 = document.getElementById("b1");
            off1.style.width="120px";
            on1.style.marginLeft="1%";
            
            
        }
    }

    function ck2(){
        var a = document.getElementById("input2").value;
        if(a=="b" || a=="B" || a=="")
        {
            document.getElementById("b2").src="on.jpg";
            var on1 = document.getElementById("b2");
            on1.style.width="160px";
            on1.style.marginLeft="5%";

        }
        else{
            document.getElementById("b2").src="off.jpg";
            var off1 = document.getElementById("b2");
            off1.style.width="120px";
            on1.style.marginLeft="6%";
        }
    }
    function ck3(){
        var a = document.getElementById("input3").value;
        if(a=="c" || a=="C"  || a=="")
        {
            document.getElementById("b3").src="on.jpg";
            var on1 = document.getElementById("b3");
            on1.style.width="160px";
            on1.style.marginLeft="5%";

        }
        else{
            document.getElementById("b3").src="off.jpg";
            var off1 = document.getElementById("b3");
            off1.style.width="120px";
            on1.style.marginLeft="6%";
        }
    }

    function ck4(){
        var a = document.getElementById("input4").value;
        if(a=="d" || a=="D"  || a=="")
        {
            document.getElementById("b4").src="on.jpg";
            var on1 = document.getElementById("b4");
            on1.style.width="160px";
            on1.style.marginLeft="5%";

        }
        else{
            document.getElementById("b4").src="off.jpg";
            var off1 = document.getElementById("b4");
            off1.style.width="120px";
            on1.style.marginLeft="6%";
            
        }
    }
    function ck5(){
        var a = document.getElementById("input5").value;
        if(a=="2"  || a=="")
        {
            document.getElementById("b5").src="on.jpg";
            var on1 = document.getElementById("b5");
            on1.style.width="160px";
            on1.style.marginLeft="5%";

        }
        else{
            document.getElementById("b5").src="off.jpg";
            var off1 = document.getElementById("b5");
            off1.style.width="120px";
            on1.style.marginLeft="6%";
        }
    }