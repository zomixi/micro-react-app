import { APP_NAME } from "@/config/constants";
import styles from "./index.module.less";

export default function AppLogo() {
  return <div className={styles.logo}>{APP_NAME}</div>;
}
