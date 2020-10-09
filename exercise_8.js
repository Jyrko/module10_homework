let map = new Map([["key", "value"], [1, "hash"], [true, false]]);

for (let key of map.keys()) {
  console.log(`Key - ${key}, value - ${map.get(key)}`)
}
