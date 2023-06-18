const requiredValue = 'REQUIRED_VALUE';
const minValue = 'MIN_VALUE';
const maxValue = 'MAX_VALUE';
const emailValue = 'EMAIL_VALUE';

export const requiredValueValidator = () =>({
    value: requiredValue
})
export const minValueValidator = (min) =>({
    value: minValue,
    min
})
export const maxValueValidator = (max) =>({
    value: maxValue,
    max
})
export const emailValueValidator = () =>({
    value: emailValue,
})

export default {requiredValue,minValue,maxValue,emailValue}