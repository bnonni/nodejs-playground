#! /usr/bin/env node
/*
In-Memory Feature Flag Library: 
    Feature flags are a software development technique that allows to turn
    certain functionality on and off during runtime, or to provide a different
    value based of certain parameters without deploying new code.

    Function signature just for reference
        set(featureFlag: String, value: String)
        get(featureFlag: String) --> String

    Example:
        Feature Flag name: window-position
        Feature Flag value: any string, for example center | left | right
        One test case:
        set("window-position", "right")
        get("window-position") --> "right"

        Specify a value at the feature flag + attributes level.

        Function signature for reference:
            setWithAttrs(featureFlag: String, attrs: Map<String, String>, value: String)

            setWithAttrs("window-position", {"country": "US", "state": "WA"}, "upper-left")
            getWithAttrs("window-position", {"country": "US", "state": "WA"}) --> "upper-left"
            getWithAttrs("window-position", {"state": "WA", "country": "US"}) --> "upper-left"

            getWithAttrs("window-position", {"country": "US", "state": "CA"}) --> "right"
*/

class FeatureLib {
    constructor(lib) {
        this.lib = lib;
    }

    error(e) {
        console.log(e);
    }

    print(x) {
        console.log(x);
    }

    printLib() {
        console.log('FeatureLib:', this.lib);
    }

    sort(x) {
        return Object.entries(x).sort();
    }

    listToObject(x) {
        return Object.fromEntries(x);
    }

    objToString(x) {
        return JSON.stringify(x);
    }

    set(name, value) {
        this.lib.set(name, value);
    }

    createSortedAttrsObj(x){
     return this.listToObject(this.sort(x));
    }

    get(name) {
        try {
            if (!this.lib.has(name))
                throw new Error('This feature does not exist!');
            return this.lib.get(name);
        } catch (error) {
            this.error(`FeatureLib: ${error.stack}`);
        }
    }

    setWithAttrs(name, attrs, value) {
        try {
            attrs = JSON.parse(attrs)
            if (attrs.constructor !== Object)
                throw new Error('Attrs must be an object');
            const sorted = Object.fromEntries(Object.entries(attrs).sort())
            this.set(name, sorted)
            this.set(this.get(name), value);
            // const sub = this
            // this
            return this.get(name);
        } catch (error) {
            this.error(`FeatureLib: ${error.stack}`);
        }
    }

    getWithAttrs(name, attrs) {
        try {
            if (!this.lib.get(name))
                throw new Error('This feature does not exist!');
            if (typeof attrs !== typeof {}.constructor())
                throw new Error('Attrs must be an object');
            
            const sortedAttrsObj = this.createSortedAttrsObj(attrs);
            return this.lib.get(name)[sortedAttrsObj];
        } catch (error) {
            this.error(`FeatureLib: ${error.stack}`);
        }
    }
}

const map = new Map()
const lib = new FeatureLib(map);

lib.setWithAttrs("window-position", '{"country": "US", "state": "WA"}', "upper-left")
lib.printLib()

// const args = process.argv
// const flag = args[2]
// const feature = args[3]
// let attrs, value, featureValue;

// switch(flag) {
//     case '-s' || '--set':
//         value = args[4];
//         lib.set(feature, value);
//         lib.printLib()
//         break;

//     case '-sa' || '--set-attrs':
//         attrs = args[4],
//         value = args[5];
//         lib.setWithAttrs(feature, attrs, value)
//         lib.printLib()
//         break;

//     case '-g' || '--get':
//         featureValue = lib.get(feature);
//         lib.print(featureValue)
//         break;

//     case '-ga' || '--get-attrs':
//         attrs = args[4]
//         featureValue = lib.getWithAttrs(feature, attrs);
//         lib.print(featureValue)
//         break;

//     case '-p' || '--print':
//         lib.printLib();
//         break;

//     default:
//         lib.error(`FeatureLib Error\n>>>> Unknown flag: ${flag}`)
//         break;
// }