function result()
            {
                var res=document.getElementById("result");
                res.innerHTML="";
                var letters = /^[A-Za-z]+$/;
                var team1name=document.getElementById("name1").value;
                var score1=document.getElementById("score1").value;
                var team2name=document.getElementById("name2").value;
                var score2=document.getElementById("score2").value;
                var score=/^[0-9][0-9]{0,1}[0-9]{0,1}[/](10|\d)(\.\d{1,2})?$/;
                if(team1name=="" || team2name=="" || score1=="" || score2==""){
                    res.style.color="red";
                    res.innerHTML="Fill all Fields";
                }
                else if(!team1name.match(letters) || !team2name.match(letters) || team1name==team2name || 
                            !score1.match(score) || !score2.match(score))
                    {
                        res.style.color="red";
                        res.innerHTML="Invalid Input";
                    }
                else
                {
                    var x=score1.split("/");
                    var y=score2.split("/");
                    w1=parseInt(x[1]);
                    w2=parseInt(y[1]);
                    x=parseInt(x);
                    y=parseInt(y);
                    if(y>x+7){
                        res.style.color="red";
                        res.innerHTML="Invalid Input";
                    }
                    else{
                        res.style.color="green";
                        if(x>y){ 
                            res.innerHTML=team1name+" won by "+(x-y)+" runs";               
                        }
                        else{
                            res.innerHTML=team2name+" won by "+(11-w2)+" wickets";
                        }
                    }
                }
            }