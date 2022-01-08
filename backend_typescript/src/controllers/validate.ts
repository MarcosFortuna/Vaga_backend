export const validEmail = (email: string):boolean =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const notNull = (value: any) :boolean=> {
    return value ? true : false
}

export default {validEmail, notNull}
