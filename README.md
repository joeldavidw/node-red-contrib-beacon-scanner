# node-red-contrib-beacon-scanner

Node to allow Node-RED scan for the following beacons:
- iBeacons
- EddyStones
- Estimote

Dependencies 
-------
- Node.js 6 to 8.14.0
- Noble
- node-beacon-scanner

Installation
-------

#### Raspberry Pi

Install Bluetooth drivers required by Noble.

    sudo apt-get install libbluetooth-dev libudev-dev pi-bluetooth
    sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)

Run the following command in your Node-RED directory
	
    npm i noble

Usage
-----

### Beacon Scanner

Messages emitted are stated in [Futomi's repo](https://github.com/futomi/node-beacon-scanner#beaconscanneradvertisement-object).