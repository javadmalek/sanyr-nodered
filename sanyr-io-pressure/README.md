1. create directory sanyr-io-pressure
2. create files package.json , sanyr-io-pressure.html, sanyr-io-pressure.js
	```npm init``` 
3. make a project

add to package.json
```
"node-red" : {
        "nodes": {
            "lower-case": "lower-case.js"
        }
    }
```


in the directory containing the node’s package.json file, run: sudo npm link.
in your node-red user directory, typically ~/.node-red run: npm link <name of node module>.




# Node-Properties
 are accessable from `config`
 ```
 const min = config.min;
 const max = config.max;
 const tagno = config.tagno;
 const minalarm = config.minalarm;
 const maxalarm = config.maxalarm;
```