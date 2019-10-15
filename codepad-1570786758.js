function main(input) {
  var lines = input.split("\n");
  var t = Object.keys(lines).length;
  for (var x = 1; x <= t;)
  {
      var n=Number(lines[x]);
    var a = lines[x+1].split(" ").map(Number);
    var b = lines[x+2].split(" ").map(Number);
    var first=b[0];
    var sp=0;
// process.stdout.write(a.toString());
 //process.stdout.write(b.toString());
    
     for(var i = 1; i < a.length; i++){
    if(a[i]>=b[i]){
        first=first+b[i];
        
        if(first<=a[i]){
            sp=sp+0;
        }
        else if(first>a[i]){
            sp=sp+first-a[i];
            first=a[i];
            //process.stdout.write(first.toString()+" ");
        }
    }
  }//for loop2
   
    x=x+3;
    
    process.stdout.write(first.toString()+" ");
    process.stdout.write(sp.toString());
    process.stdout.write("\n");
  }//loop1

}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});




/*
Spilt Milk

You’re given containers lined up in a certain order holding certain volumes of milk. The milk in each container is poured into the successive container and this is continued till the last, given a total pours of one less than the number of containers. If the volume of milk poured into a container is greater than available volume it gets spilt. Find the volume of milk collected in the last container and also the volume of milk spilt during the pours.

Input Format

The first line of input consists of an integer t denoting the number of test cases. Each test case consists of three lines. The first line of each test case consists of an integer n denoting the number of containers. The second line consists of n space separated integers each (v) denoting the maximum volume of milk the container at that position can hold. The third line consists of n space separated integers each (i) denoting the initial volume of milk present in the container at that position.

Output Format

For each test case output the final the volume of milk collected in the last container and the volume of milk spilt separated by space.

Sample input
3
3
2 3 4
1 2 3
3
1 2 3
0 0 0
4
1 2 3 4
1 1 1 1

sample output
4 2
0 0
4 0

*/




















