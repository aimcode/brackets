module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(el => el.join(""))

    while (true) {
        let length = str.length
        for(let i = 0; i < brackets.length; i++) {
            str = str.replace(brackets[i], "")
        }

        if (length === str.length) return false
        if (str.length === 0) return true
    }
}
