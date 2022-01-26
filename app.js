const fs = require('fs');


const userName = 'North';

fs.writeFile('ap.txt', 'Name: ' + userName, (err) => {
    if(err) {
        console.log(err);
        return;
    } 
    console.log('WROTE FILE') 
});