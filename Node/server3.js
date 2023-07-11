var http=require('http');
var date=require('./datemodu.js');
var prosnc=require('prompt-sync');
var prompt=prosnc();
var ser=http.createServer(function(req,res){
    res.write("DateTime Module Usage\n");
    res.write("Current Date and Time:"+date.currentDate());
    var crdt=date.currentDate();
    var usrdt=prompt("Enter Date:(MM/DD/YYYY)");
    var days_left=date.dateDiff(new Date(crdt),new Date(usrdt));
    res.write("\n Date Difference:"+days_left);
    res.end();

});
ser.listen(8080, (e)=>{
    console.log("Eagle is coming");
});
