const fs = require('fs')

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if(err){
        throw new Error(err)
    }
    const trimmedData = data.replace(/\s+/g, ' ').trim()
    fs.writeFile('./data.txt', trimmedData, (err) => {
        if(err)
        throw new Error(err)
    })
})