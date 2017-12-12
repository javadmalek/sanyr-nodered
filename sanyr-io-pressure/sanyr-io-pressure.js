/*
*  RED: that provides the module access to the Node-RED runtime api.
*  RED.nodes.createNode function: that initialise the features shared by all nodes.
*  the node registers a listener to the input event which gets called whenever a message arrives at the node.
*
*  */
module.exports = function (RED) {
    function PressureNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {

            // coding
            // console.log(msg.payload);
            // msg.payload = {
            //     payload: "hi",
            //     msgpayload: msg.payload,
            //     this: this,
            //     config: config
            // };


            const x = 100; // msg.payload.value
            var y = 0;
            y = x * (config.max - config.min) / 65535 + config.min;

            var error_min = 0;
            var error_max = 0
            if (y <= config.min)
                error_min = 1;
            else if (y >= error_max)
                error_max = 1;

            msg.payload = {
                id: config.id,
                tagno:config.tagno,
                min:config.min,
                max:config.max,
                x_raw: x,
                y:y,
                alarm:{
                    min: config.minalarm,
                    max: config.maxalarm,
                    error_min:error_min,
                    error_max:error_max
                }
            };

            // const min = config.min;
            // const max = config.max;
            // const tagno = config.tagno;
            // const minalarm = config.minalarm;
            // const maxalarm = config.maxalarm;

            node.send(msg);
        });
    }

    RED.nodes.registerType("sanyr-io-pressure", PressureNode);
}