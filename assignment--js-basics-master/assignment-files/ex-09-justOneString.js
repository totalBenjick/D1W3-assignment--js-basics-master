/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 *
 * Hint : you will need to use the `typeof` operator
 **/

//typeof var1=== 'string' && typeof var2 ==='string'
// ++ YOUR Code below (write the 'makeGreeting' function): ++

function justOneString(var1,var2){
if ( (typeof var1==="string" && typeof var2 ==="string" ) 
	|| (typeof var1 !== "string"  && typeof var2 !=="string" ) ) {return false}
	else{return true}
}

/*-------------------TEST-1-------------------------*/
// function receives 2 strings
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.assert(justOneString('peanut', 'butter') === false)


console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString(8, true) === false)
