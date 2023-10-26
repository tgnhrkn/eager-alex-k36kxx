import { FC } from "react";

import clsx from "clsx";

import styles from "./Chat.module.css";

export interface ChatProps {
  className?: string;
}

const Chat: FC<ChatProps> = ({ className }) => {
  // CSS MODULES VERSION
  return <div className={clsx(className, styles.chat)}>This is a chat!</div>;

  // TAILWIND VERSION
  // return (
  //   <div className="flex items-center justify-center border border-neutral-300 rounded w-80 h-96">
  //     This is a chat!
  //   </div>
  // );
};

export default Chat;
