# SANYRED
=========

## sanyr-io-dpt
===================
1. create directory sanyr-io-dpt
2. create files package.json , sanyr-io-dpt.html, sanyr-io-dpt.js
	```npm init``` 
3. make a project

add to package.json
```
"node-red" : {
        "nodes": {
            "lower-case": "sanyr-io-dpt.js"
        }
    }
```


## Node-Properties
=================
 are accessable from `config`
 ```
 const min = config.min;
 const max = config.max;
 const tagno = config.tagno;
 const minalarm = config.minalarm;
 const maxalarm = config.maxalarm;
```

## Link a Node to NODERED
=======================
1. In the directory containing the node’s package.json file, run: `sudo npm link`.
```
D:\SANYR\nodered\sanyr-io-dpt> npm link
```
2. In your node-red user directory, typically `~/.node-red` `run: npm link <name of node module>`.
```
C:\Users\MrJavad\.node-red> npm link sanyr-io-dpt
```

## Sample Output
===============
```
 msg.payload = {
        id: config.id,
        tagno: config.tagno,
        min: config.min,
        max: config.max,
        x_raw: x,
        y: y,
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
```

## Error Codes
==============
```
    errorCode = 1;
    errorMsg = "Datablock number is null";

    errorCode = 2;
    errorMsg = "No Max Value";

    errorCode = 3;
    errorMsg = "No Min Value";

    errorCode = 4;
    errorMsg = "The Min Value is Greater than Min Value";

    errorCode = 5;
    errorMsg = "No Input Value";

    errorCode = 6;
    errorMsg = "No MaxAlarm Value";

    errorCode = 7;
    errorMsg = "No MinAlarm Value";

    errorCode = 8;
    errorMsg = "The MinAlarm Value is Greater than MinAlarm Value";
```