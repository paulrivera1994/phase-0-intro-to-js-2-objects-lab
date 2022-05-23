// Write your solution in this file!
const employee = {
    name : 'Jorge',
    streetAddress : '10th street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,[key]: value}  
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    return {...employee[key]}
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}