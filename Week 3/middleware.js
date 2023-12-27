// const express = require('express')

// const app = express()

// app.get("/ride1",function(){
//     res.json({
//         msg : "You have successfully ridden ride1"
//     })
// })

// app.listen(3110)

const express = require('express');
const app = express();

function isOldEnough(age){
  if(age>=18){
    return true
  }
  return false
}

app.get("/ride1", function(req, res) {
    if(isOldEnough(req.query.age)){
        res.json({
            msg : "You have successfully ridden ride 1"
        })
    }else{
        res.status(411).json({
            msg : "Your age is insufficient"
        })
    }
});

app.listen(3000, function() {
    console.log('Server is running on port 3110');
});
