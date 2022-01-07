const validEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const notNull = (value) => {
    return value ? true : false
}

module.exports = {validEmail, notNull}
