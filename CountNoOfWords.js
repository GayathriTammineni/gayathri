var str="SaveChangesInTheEditor";
var result=str.split(/(?=[A-Z])/);
var count=0;
for(var i=0;i<result.length;i++){
    count++;
    console.log(count+". "+result[i]);
}
console.log(count);