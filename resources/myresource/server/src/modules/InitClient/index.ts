import { on, emitClient, Player } from "alt-server";
const sendClientVariables = (player: Player) => {
  emitClient(player, "init_client", {
    VIEW_URL: process.env.VIEW_URL,
  });
};

on("playerConnect", sendClientVariables);
