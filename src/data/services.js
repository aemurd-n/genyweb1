import ChatIcon from "@mui/icons-material/Chat";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";

export const services = [
  {
    id: "chatbots",
    translationKey: "chatbots",
    icon: ChatIcon
  },
  {
    id: "rag",
    translationKey: "rag",
    icon: StorageIcon
  },
  {
    id: "mcp",
    translationKey: "mcp",
    icon: BuildIcon
  },
  {
    id: "agents",
    translationKey: "agents",
    icon: SmartToyIcon
  },
  {
    id: "fine-tuning",
    translationKey: "fine-tuning",
    icon: TuneIcon
  },
  {
    id: "custom",
    translationKey: "custom",
    icon: SettingsIcon
  }
];
