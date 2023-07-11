var http=require('http');
var ser=http.createServer(function(req,res){
    console.log(req);
    res.end('This code is sponsored by no-one');

});
ser.listen(8080, (e)=>{
    console.log("Eagle is coming");
});
