const employee = {
    name: "Noah",
    streetAddress: 545-23568,
  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value,
    }
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employee1 = {
        ...employee1,
        key: key
    }
    return employee1
} 

function destructivelyDeleteFromEmployeeByKey(employee,key){
    employee[key] = undefined;
    return employee;
}
