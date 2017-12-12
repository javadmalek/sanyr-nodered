/*
*  RED: that provides the module access to the Node-RED runtime api.
*  RED.nodes.createNode function: that initialise the features shared by all nodes.
*  the node registers a listener to the input event which gets called whenever a message arrives at the node.
*
*  */
module.exports = function (RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {

            // coding
            msg.payload = msg.payload.toLowerCase();

            node.send(msg);
        });
    }

    RED.nodes.registerType("lowercase", LowerCaseNode);
}