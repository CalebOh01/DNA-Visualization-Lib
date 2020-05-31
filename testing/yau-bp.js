function yau_bp(sequence) {
    let x = [0.0]
    let y = [0.0]
    let xCoord = 0.0
    let yCoord = 0.0

    for (let _i = 0; _i < sequence.length; _i++) {
        let character = sequence[_i]
        xCoord++
        x.push(xCoord)
        if (character == "A") {
            y.push(yCoord - 1)
        } else if (character == "C") {
            y.push(yCoord + 0.5)
        } else if (character == "T") {
            y.push(yCoord + 1)
        } else if (character == "G") {
            y.push(yCoord - 0.5)
        } else {
            y.push(yCoord)
        }
    }
    let result = []
    result.push(x)
    result.push(y)
    return result
}

console.log(yau_bp('ACATCTGTCTGGGTATGTC'))