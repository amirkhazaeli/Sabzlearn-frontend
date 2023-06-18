import rules from './Rules'
const validator = (value, validitation) => {
    let validitationResult = []

    validitation.forEach((validator) => { // check user value with rules
        if (validator.value === rules.requiredValue) {
            value.trim().length === 0 && validitationResult.push(false)
        }
        if (validator.value === rules.maxValue) {
            value.trim().length > validator.max && validitationResult.push(false)
        }
        if (validator.value === rules.minValue) {
            value.trim().length < validator.min && validitationResult.push(false)
        }
        if (validator.value === rules.emailValue) {
            value.trim().includes('@') && validitationResult.push(false)
        }

      
    });
    
    if (validitationResult.length) {
        return false
    } else {
        return true
    }
}


export default validator