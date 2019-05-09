const AlfredNode = require("alfred-workflow-nodejs");
const actionHandler = AlfredNode.actionHandler;
const workflow = AlfredNode.workflow;
const Item = AlfredNode.Item;

workflow.setName("Yandex Music");

(function main() {
  actionHandler.onAction("action", function(query) {
    const Item = AlfredNode.Item;
    workflow.addItem(
      new Item({
        title: "Play / Pause",
        arg: "toggle",
        valid: true,
        icon: "./icon.png"
      })
    );
    workflow.addItem(
      new Item({
        title: "Next",
        arg: "next",
        valid: true,
        icon: "./icon.png"
      })
    );
    workflow.addItem(
      new Item({
        title: "Prev",
        arg: "prev",
        valid: true,
        icon: "./icon.png"
      })
    );
    workflow.addItem(
      new Item({
        title: "Like ❤️",
        arg: "like",
        valid: true,
        icon: "./icon.png"
      })
    );
    workflow.feedback();
  });
  AlfredNode.run();
})();
