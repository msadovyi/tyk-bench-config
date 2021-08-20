const fs = require('fs')

// const path = process.argv[2] 
// const file = fs.readFileSync(path)
// const str = file.toString();

function getAvgData(path) {
  const file = fs.readFileSync(path)
  const str = file.toString();
  const find = (reg) => {
    const reqs = (str.match(reg) || []).map(parseFloat)
    const sum = reqs.reduce((a, v) => a + v, 0)
    return parseFloat((sum / reqs.length).toFixed(4));
  }
  const avgLatency = find(/(?<=(Average:\s+))(\d+.?)+/gm)
  const avgRegSec = find(/(?<=(Requests\/sec:\s+))(\d+.?)+/gm)
  const avgReqs = find(/\d+(?=\s+responses)/gm)

  return {
    avgLatency,
    avgRegSec,
    avgReqs,
  }
}

const fileNames = ["node", "go", "go-mesh", "go-portal", "go-tyk"]

function printTable() {
  const files = [];
  const avgLatency = [];
  const responses = [];
  const reqsPerSecond = [];

  for (let i = 0; i < fileNames.length; i++) {
    const fileName = fileNames[i];
    const { avgLatency: latency, avgRegSec, avgReqs } = getAvgData("./1/" + fileName + ".md");
    files.push(fileName)
    avgLatency.push(latency)
    responses.push(avgReqs)
    reqsPerSecond.push(avgRegSec)
  }
  console.table({
    files,
    avgLatency,
    responses,
    reqsPerSecond,
  })
}

printTable()

// console.log(get(str));