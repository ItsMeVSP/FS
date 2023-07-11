var http=require('http');
var fs=require('fs');
var ser=http.createServer(function(req,res){
    res.write("File Module Usage\n");
    res.write("CWD:"+__dirname);
    fs.readFile('input.txt','utf-8',(err,data)=>{
        if(err)
        {
            console.error(err);
            return;
        }
        console.log(data);
    });
    res.end();

});
ser.listen(8080, (e)=>{
    console.log("Eagle is coming");
});
