const fs = require('fs')

fs.readFile('./3-read-from-file.md', 'utf-8', (err, data) => {
    if(err){
        throw new Error(err)
    }
    console.log(data)
})

// for (let index = 0; index < 1000000000; index++) {   
// }