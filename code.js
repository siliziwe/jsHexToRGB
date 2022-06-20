function calc() 
		{
                        var r,g,b,a="";
			var hex = document.getElementById("hex").value;
			if( hex=="" ) hex="000000";
			if( hex.charAt(0)=="#" ) hex=hex.substring(1,hex.length);
			if( hex.length!=6 && hex.length!=8 && hex.length!=3 )
			{
				alert("Please enter 6 digits color code !");
				return;
			}
			if( hex.length==3 )
			{
				r = hex.substring(0,1);
				g = hex.substring(1,2);
				b = hex.substring(2,3);
				r=r+r;
				g=g+g;
				b=b+b;
			}
			else
			{
				r = hex.substring(0,2);
				g = hex.substring(2,4);
				b = hex.substring(4,6);
			}
			if( hex.length==8 )
			{
            a = hex.substring(6,8);
            a = (parseInt(a, 16)/255.0).toFixed(2);
         }
			r = parseInt(r, 16);
			g = parseInt(g, 16);
			b = parseInt(b, 16);
         var css="rgb("+r+", "+g+", "+b+")";
			if( hex.length==8 )
            css="rgba("+r+", "+g+", "+b+", "+a+")";

			return hex;
		}