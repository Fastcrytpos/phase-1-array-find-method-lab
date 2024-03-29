// code your solution here
function superbowlWin(record) {
    let year=record.find(findW);
     if(year){
        return year.year;}
        else{
            return undefined;
        }
    }




function findW(records){
    return records.result==="W";
}