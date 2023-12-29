let count = 0
let currentDate = new Date()

const timer = () => {
    setTimeout(()=> {
        count++
        const clock = new Date(currentDate.getTime() + count*1000)
        console.log(clock.toLocaleTimeString())
        console.log(clock.toLocaleTimeString('en-US',{ hour12: false }))
        timer()
    }, 1000)
}

timer()