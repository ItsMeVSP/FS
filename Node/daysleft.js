var http=require('http');
var date=require('./datemodu.js');
var prosnc=require('prompt-sync');
var prompt=prosnc();
var ser=http.createServer(function(req,res){
    res.write("DateTime Module Usage\n");
    res.write("Current Date and Time:"+date.currentDate());
    //var crdt=date.currentDate();
    var usrdt1=prompt("Enter Date:(MM/DD/YYYY)");
    var usrdt2=prompt("Enter Date:(MM/DD/YYYY)");
    var days_left=date.dateDiff(new Date(usrdt1),new Date(usrdt2));
    res.write("\n Date Difference:"+days_left);
    res.end();

});
ser.listen(8080, (e)=>{
    console.log("Eagle is coming");
});
