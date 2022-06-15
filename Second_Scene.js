% % main script
var df = require ( ’ dateformat ’)
var autonomy = require ( ’ ardrone - autonomy ’) ;
var mission
= autonomy . createMission () ;
mission . log (" mission -" + df ( new Date () , " yyyy - mm - dd_hh - MM - ss ") + ". txt ") ;
mission . takeoff ()
        . zero () // Sets the current state as the reference
        . altitude (2) // Climb to altitude = 1 meter
	. wait (200)
	. forward (0.5)
	. right (1)
	. forward (0.5)
	. left (1)
	. forward (0.5)
	. right (1)
	. forward (0.5)
	. left (1)
	. forward (0.5)
	. right (1)
	. forward (0.5)
	. left (1)
	. forward (0.5)
	. right (1)
	. forward (0.5)
	. left (1)
	. forward (0.5)
	. right (1)
	. forward (0.5)
	. left (1)
	. forward (0.5)
	. hover (100)
// Hover in place for 1 second
	. wait (150)
	. land () ;
mission . run ( function ( err , result ) {
if ( err ) {
	console . trace (" Oops , something bad happened : % s " , err . message ) ;
	mission . client () . stop () ;
	mission . client () . land () ;
} else {
console . log (" Mission success !") ;
process . exit (0) ;
}
}) ;
