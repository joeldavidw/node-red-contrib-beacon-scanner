module.exports = function(RED) {
    "use strict";
    const BeaconScanner = require('node-beacon-scanner-duplicates-check');
    const scanner = new BeaconScanner();

    function Scanner(n) {
        RED.nodes.createNode(this, n);
        var node = this;

        scanner.onadvertisement = (ad) => {
            node.send({
                payload: ad
            });
        };

        scanner.startScan(n.gracePeriod).then(() => {
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