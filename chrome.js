var fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
var debug = true;

module.exports = {
  log: function(message) {
    debug && fs.writeFileSync("./log.txt", message);
  },
  chromeExec: async function(command) {
    try {
      const { stdout } = await exec(`/usr/local/bin/chrome-cli ${command}`);
      return stdout;
    } catch (err) {
      this.log(err);
    }
  },
  getTabID: async function() {
    const stdout = await this.chromeExec("list links |grep 'music.yandex.ru'");
    if (stdout) {
      let tabID = stdout.match(/^\[\d.*\]/g);
      if (tabID.length > 0) {
        tabID = tabID[0].replace(/\[|\]/g, "");
        return tabID;
      }
    } else {
      const stdout = await this.chromeExec(`open https://music.yandex.ru/`);
      let tabID = stdout.match(/\d.*/g);
      if (tabID.length > 0) {
        tabID = tabID[0].replace(/\[|\]/g, "");
        return tabID;
      }
    }
  },
  toggle: async function() {
    this.chromeExec(
      `execute 'document.querySelector(".player-controls__btn_play").click();' -t ${await this.getTabID()}`
    );
  },
  next: async function() {
    this.chromeExec(
      `execute 'document.querySelector(".player-controls__btn_next").click();' -t ${await this.getTabID()}`
    );
  },
  prev: async function() {
    this.chromeExec(
      `execute 'document.querySelector(".player-controls__btn_prev").click();' -t ${await this.getTabID()}`
    );
  },
  like: async function() {
    this.chromeExec(`execute 'document.querySelector(".d-like_theme-player").click();' -t ${await this.getTabID()}`);
  }
};
