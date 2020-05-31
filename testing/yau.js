function yau(sequence) {
    let x = [0.0]
    let y = [0.0]
    let xCoord = 0.0
    let yCoord = 0.0

    for (let _i = 0; _i < sequence.length; _i++) {
        let character = sequence[_i]
        if (character == "A") {
            x.push(xCoord + 0.5)
            y.push(yCoord - ((3**0.5)/2))
        } else if (character == "C") {
            x.push(xCoord + ((3**0.5)/2))
            y.push(yCoord + 0.5)
        } else if (character == "T") {
            x.push(xCoord + 0.5)
            y.push(yCoord + ((3**0.5)/2))
        } else if (character == "G") {
            x.push(xCoord + ((3**0.5)/2))
            y.push(yCoord - 0.5)
        } else {
            y.push(yCoord)
            y.push(yCoord)
        }
    }
    let result = []
    result.push(x)
    result.push(y)
    return result
}

console.log(yau('ACTCGCTGCTTCGGGCTAGCTAGCTA'))