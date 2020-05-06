import { Player, emitClient, onClient } from "alt-server";

const spawnAndGreetPlayer = (player: Player): void => {
  player.model = "mp_m_freemode_01";
  player.spawn(813, -279, 66, 1000);
  emitClient(player, "greet_player_console");
  emitClient(player, "greet_player_cef");
};

onClient("initialized_client", spawnAndGreetPlayer);
