let c=0;
let p1=0,p2=0;


function reset(){
    c=0;
    p1=0;
    p2=0;
    document.getElementById("ps1").innerHTML=0;
    document.getElementById("ps2").innerHTML=0;
    document.getElementById("res").innerHTML="Best of Three !"
}

function find(){
    let ar=[1,2,3,4,5,6];
    let num=Number(ar[Math.floor(Math.random()*ar.length)])
    if(c%2==0)
    {
        p1+=num
        document.getElementById("ps1").innerHTML=p1;
    }
    else{
        p2+=num
        document.getElementById("ps2").innerHTML=p2;
    }
    document.getElementById("img1").src=`images/${num}.jpg`;
    c++;
    if(c>=6)
    {
        if(p1==p2)
            document.getElementById("res").innerHTML="Draw the Match !!!"
        else if(p1>p2)
            document.getElementById("res").innerHTML="Player 1 WINS !!!"
        else
            document.getElementById("res").innerHTML="Player 2 WINS !!!"
        setTimeout(reset,5000);
    }

}

function change()
{
    setTimeout(find,500);
}

function one(){
    document.getElementById('img1').classList.toggle("shake");
    setTimeout(rt,500);
    function rt(){
        document.getElementById('img1').classList.remove("shake");
    }
}

function two(){
    document.getElementById('img1').classList.toggle("shake");
    setTimeout(rt,500);
    function rt(){
        document.getElementById('img1').classList.remove("shake");
    }
}


