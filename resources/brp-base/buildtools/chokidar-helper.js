const spawn = require("child_process").spawn;
const ps = require("ps-node");
const path = require("path");

let serverProcess = null;

ps.lookup(
  {
    command: "altv-server"
  },
  (err, resultList) => {
    if (err) {
      throw new Error(err);
    }
    if (resultList.length > 0) {
      console.log("Found altv-server process");
      for (let i = 0; i < resultList.length; i++) {
        ps.kill(resultList[i].pid, err => {
          if (err) {
            throw new Error(err);
          } else {
            console.log("Altv-server process has been killed");
            if (i === resultList.length - 1) {
              console.log("Starting altv-server process");
              startServerProcess();
            }
          }
        });
      }
    } else {
      console.log("No altv-server process found => Starting server");
      startServerProcess();
    }
  }
);

const startServerProcess = () => {
  spawn("cd ../../ && ./start.sh", {
    stdio: "inherit",
    shell: true
  });
};
