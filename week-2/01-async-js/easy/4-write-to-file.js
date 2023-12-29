const fs = require('fs')

fs.readFile('./1-counter.md', 'utf-8', (err, data) => {
    if(err){
        throw new Error(err)
    }
    fs.writeFile('./test.md', data, (err) =>{
        if(err)
        throw new Error(err)
    })
})
