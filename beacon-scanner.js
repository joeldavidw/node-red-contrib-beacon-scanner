module.exports = function(RED) {
    "use strict";
    const BeaconScanner = require('node-beacon-scanner-duplicates-check');
    const scanner = new BeaconScanner();
    let _gracePeriod = 0

    function Scanner(n) {
        RED.nodes.createNode(this, n);
        var node = this;

        scanner.onadvertisement = (ad) => {
            node.send({
                payload: ad
            });
        };

        if (typeof n.gracePeriod !== 'undefined') {
            _gracePeriod = n.gracePeriod
        }

        scanner.startScan(_gracePeriod).then(() => {
            node.status({
                fill: "green",
                shape: "dot",
                text: "Scanning Started"
            });
        }).catch((error) => {
            node.status({
                fill: "red",
                shape: "dot",
                text: error
            });
        });

        node.on('close', function(done) {
            scanner.stopScan();
            done();
        });
    }
    RED.nodes.registerType("BeaconScanner", Scanner);
};