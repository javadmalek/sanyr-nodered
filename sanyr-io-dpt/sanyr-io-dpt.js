/*
*  RED: that provides the module access to the Node-RED runtime api.
*  RED.nodes.createNode function: that initialise the features shared by all nodes.
*  the node registers a listener to the input event which gets called whenever a message arrives at the node.
*
*  */
module.exports = function (RED) {
    function DifferentialPressureTransmitterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
                var errorCode = 0;
                var errorMsg = "No Error!";

                var error_min = 0;
                var error_max = 0
                var input = 0;
                var output = 0;

                if (config.datablock === null) {
                    errorCode = 1;
                    errorMsg = "Datablock number is null";
                }
                if (config.max === null) {
                    errorCode = 2;
                    errorMsg = "No Max Value";
                }
                if (config.min === null) {
                    errorCode = 3;
                    errorMsg = "No Min Value";
                }
                if (config.min > config.max) {
                    errorCode = 4;
                    errorMsg = "The Min Value is Greater than Min Value";
                }
                if (msg.payload.value[config.datablock] === null) {
                    errorCode = 5;
                    errorMsg = "No Input Value";
                }
                if (config.maxalarm === null) {
                    errorCode = 6;
                    errorMsg = "No MaxAlarm Value";
                }
                if (config.minalarm === null) {
                    errorCode = 7;
                    errorMsg = "No MinAlarm Value";
                }
                if (config.minalarm > config.maxalarm) {
                    errorCode = 8;
                    errorMsg = "The MinAlarm Value is Greater than MinAlarm Value";
                }

                if (errorCode == 0) {
                    input = parseInt(msg.payload.value[config.datablock], 10);
                    output = input * (parseInt(config.max, 10) - parseInt(config.min, 10)) / 65535 + parseInt(config.min, 10);

                    if (output <= config.min)
                        error_min = 1;
                    else if (output >= error_max)
                        error_max = 1;
                }

                msg.payload = {
                    id: config.id,
                    tagno: config.tagno,
                    min: config.min,
                    max: config.max,
                    raw_input: input,
                    output: output,
                    alarm: {
                        min: config.minalarm,
                        max: config.maxalarm,
                        error_min: error_min,
                        error_max: error_max
                    },
                    model: config.model,
                    manufacturer: config.manufacturer,
                    last_calibration: config.last_calibration,
                    unit: config.unit,
                    error: {
                        code: errorCode,
                        msg: errorMsg
                    }
                };
                node.send(msg);
            }
        );
    }

    RED.nodes.registerType("sanyr-io-dpt", DifferentialPressureTransmitterNode);
}