var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('hello.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
   });
});