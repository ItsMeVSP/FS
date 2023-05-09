var i=0;
function reload()
{
    var refresh=1000;
    myTime=setTimeout('date()',refresh);
}

function date()
{
    var dt=new Date();
    var day=dt.getDate().toString();
    var month=(dt.getMonth()+1).toString();
    var year=dt.getFullYear().toString();
    var hrs=dt.getHours().toString();
    var mins=dt.getMinutes().toString();
    var secs=dt.getSeconds().toString();

    var a=document.getElementById("datetime");
    a.innerHTML=day+"-"+month+"-"+year+"\t"+hrs+":"+mins+":"+secs;
    //generateRandomColor();
    c=generateRandomColor();
    a.style.backgroundColor=c; 
    reload();
    if (i%3==0) 
    {
        myTime2=setInterval('yearColor(c)',3000);   
    }
    i++;
}

function generateRandomColor()
{
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    //console.log(randomNumber); 
    randomNumber = Math.floor(randomNumber);
    //console.log(randomNumber);
    randomNumber = randomNumber.toString(16);
    //console.log(randomNumber);
    let randColor = randomNumber.padStart(6, 0);
    //console.log(randColor);   
    return `#${randColor.toUpperCase()}`
}

function yearColor(d)
{
    y=document.getElementById("year");
    y.style.color=d;
}
