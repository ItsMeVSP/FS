exports.currentDate=function(){
    return Date();
};
exports.dateDiff=function(cd,ud){
    var diff_time=ud.getTime()-cd.getTime();
    var diff_date=diff_time/(1000*3600*24);
    return Math.round(diff_date);
}