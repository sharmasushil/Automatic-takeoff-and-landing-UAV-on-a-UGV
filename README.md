## Automatic-takeoff-and-landing-UAV-on-a-UGV

#### Introduction

The aim of this work is the control of a quadrotor with the goal of spatial stabilization.Stability is of great importance when mounting additional devices such as HD camera, transmitter and dipole antenna in the drone. The control approach searches for the autonomy of the robot taking into account internal sensors. The vision-based method is chosen for landing target detection.

By computer vision, we estimate the relative position of the quadrotor and then further control and its automatic landing. For the automatic landing of the system consisting of node.js, which allows our autonomous system to use some specific modules. An OpenCV algorithm is developed to estimate a the relative position and orientation of a quadrotor using the landpad marker that has the black and white circle called the Oriental Roundel. Finally, some tests are performed on the simulator in which an automatic landing of the frame is achieved. An automatic take-off and landing algorithm, we have implemented node.js to make a mission successful in a short time. The copter node programming libraries must manage the drone. The drone is able to track a mobile robot independently at a constant speed and land on it.


Last but not least, there is another scenario that we use the robot operating system (ROS) with artificial neural networks (ANNs) to control the drone and to stabilize the launch and landing around a fixed point. When the drone lifts, it shows a boustrophedon path with a synthetic data system
##### Main System Ideology 
<img src="https://user-images.githubusercontent.com/70905483/173815494-ec38095f-11bb-42a1-bc28-62dcd0b16a54.JPG" alt="drawing" width="400"/>

~~~
1. Connect your machine with Ardrone Wifi Network
2. Run the command line: node main.js
~~~
#### Odometry 
Odometry is the use of data from moving sensors to estimate change in position over time. Odometry is used by some robots, either with legs or with wheels, to estimate their position relative to a departure point. The publisher node and topics how many node and topics work, In figure below the odom topics use for find the position of turtlebot so if we need position record odom topic that shows rotation, position and orientation.

<img src="https://user-images.githubusercontent.com/70905483/173818353-bf651404-4a9c-400a-a1d7-6a6a2a421e8d.JPG" alt="drawing" width="400"/>

#### First Scenario 
In figure shows the synchronization between the unmanned aerial vehicle (UAV) and the unmanned ground vehicle (UGV) in a suitable manner. The scenario was drone following the turtlebot and landing on moving platform using node.js [15], to be more clear we provide a video showing our system in action at

<img src="https://user-images.githubusercontent.com/70905483/173818503-3301694a-68dd-4142-bf28-9c3dd48ef5e2.JPG" alt="drawing" width="400"/>



