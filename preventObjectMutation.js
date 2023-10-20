//Prevent Object Mutation
/* Use Object.freeze to prevent mathematical constants from changing.
Freeze the MATH.CONTANTS object so that no one is able to alter 
the value of PI, add, or delete properties.*/
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();