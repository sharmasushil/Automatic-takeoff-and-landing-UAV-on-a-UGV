% % First Scenario
var df = require ( ’ dateformat ’)
var autonomy = require ( ’ ardrone - autonomy ’) ;
var mission = autonomy . createMission () ;


// mission . client () . config ( ’ general : navdata_demo ’ , true ) ;
// mission . client () . config ( ’ video : video_channel ’ , 1) ;
// mission . client () . config ( ’ detect : detect_type ’ , 12) ;
mission . log (" mission -" + df ( new Date () , " yyyy - mm - dd_hh - MM - ss ") + ". txt ") ;
mission . takeoff ()
. altitude (2)
// Climb to
. altitude = 2 meter
. wait (200)
. forward (1)
. left (1)
. backward (1)
. right (1)
. wait (200)
. land () ;
mission . run ( function ( err , result ) {
if ( err ) {
// mission . client () . stop () ;
mission . client () . land () ;
} else {
process . exit (0) ;
}
}) ;
