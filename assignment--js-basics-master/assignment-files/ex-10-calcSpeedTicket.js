/**
 * calcSpeedTicket()
 * ------------------------------------------------------
 * Write a function that calculates a speeding ticket:
 *
 * The function should take 3 arguments:
 *    (1) the speed limit
 *    (2) the user's reported speed
 *    (3) a boolean value for whether the user was in
 *        a protected area (like a school-zone or work-zone)
 *
 * fine schedule:
 *   less than speed limit             : $0
 *   speeding ticket (< 20mph)         : $150
 *   speeding ticket (>= 20mph)        : $250
 *
 * If the user is in a protected area, the fine doubles.
 *
 * Examples:
 *  calcSpeedTicket(40, 30, false)
 *    => 0
 *
 *  calcSpeedTicket(20, 30, false)
 *    => 150
 *
 *  calcSpeedTicket(20, 43, false)
 *    => 250
 *
 *  calcSpeedTicket(20, 31, true)
 *    => 300
 *
 *  calcSpeedTicket(50, 100, true)
 *    => 500
 *
 **/

// ++ YOUR Code below (write the 'makeGreeting' function): ++

function calcSpeedTicket(var1,var2,var3){
if (var2<=var1) {return 0}
	else if ( (var2-var1)<20 && var3===false ) {return 150}
		else if ( (var2-var1)<20 && var3===true) {return 300}
			else if ((var2-var1)>=20 && var3===false) {return 250}
				else{return 500}

}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
// function returns 0
//   if 2nd arg (user speed) is less than 1st arg (speed limit)
/*--------------------------------------------------*/
console.log("==== ex-10-calcSpeedTicket : TEST 1 ====");

console.assert( calcSpeedTicket(30, 27, true) === 0  )
console.assert( calcSpeedTicket(60, 60, true) === 0  )
console.assert( calcSpeedTicket(80, 60, false) === 0  )



/*-------------------TEST-2-------------------------*/
//    function returns 150
//      if 2nd arg (user speed) is greater than 1st arg (speedlimit)
//         but less than 20
//
//      and 3rd arg (boolean value for protected area) is false
/*--------------------------------------------------*/
console.log("==== ex-10-calcSpeedTicket : TEST 2 ====");

console.assert( calcSpeedTicket(30, 38, false) === 150  )
console.assert( calcSpeedTicket(50, 63, false) === 150  )

/*-------------------TEST-3-------------------------*/
//    function returns 250
//      if 2nd arg (user speed) is greater than equal to
//        1st arg (speedlimit) by 20
//
//      and 3rd arg (boolean value for protected area)
//      has balue false
/*--------------------------------------------------*/
console.log("==== ex-10-calcSpeedTicket : TEST 3 ====");

console.assert( calcSpeedTicket(30, 55, false) === 250 )
console.assert( calcSpeedTicket(75, 97, false) === 250 )


/*-------------------TEST-4-------------------------*/
//    function returns double the value
//       when 3rd arg (true/false for protected area)
//       has a boolean value of `true`
/*--------------------------------------------------*/
console.log("==== ex-10-calcSpeedTicket : TEST 4 ====");

console.assert( calcSpeedTicket(30, 27, true) === 0  )
console.assert( calcSpeedTicket(30, 38, true) === 300  )
console.assert( calcSpeedTicket(30, 55, true) === 500 )
