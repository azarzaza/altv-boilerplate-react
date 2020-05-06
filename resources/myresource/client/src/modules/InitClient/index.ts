import { onServer, emitServer } from "alt-client";
import config from "../utils/config";

const setClientConfig = ({ VIEW_URL }: { VIEW_URL: string }) => {
  config.VIEW_URL = VIEW_URL;
  emitServer("initialized_client");
};

onServer("init_client", setClientConfig);
