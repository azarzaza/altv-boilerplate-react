import { onServer, log, WebView, showCursor } from "alt-client";
import { generateViewLink } from "../utils";

const greetConsole = () => {
  log("Hello player");
};

const greetWebview = () => {
  const greetingView = new WebView(generateViewLink(""));
  showCursor(true);
  greetingView.on("close_greeting", () => {
    greetingView.destroy();
    showCursor(false);
  });
};

onServer("greet_player_console", greetConsole);
onServer("greet_player_cef", greetWebview);
