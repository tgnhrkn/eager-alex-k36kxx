import { FC, useState } from "react";

import clsx from "clsx";

import styles from "./App.module.css";
import Chat from "./Chat";

export interface AppProps {
  className?: string;
}

interface ChatItem {
  id: number;
}

const App: FC<AppProps> = ({ className }) => {
  const [chats, setChats] = useState<ChatItem[]>([{ id: 1 }]);

  const handleCreate = () => {
    // Create a new chat
    setChats(prev => {
      const highestChatId = Math.max(...prev.map(x => x.id));
      return [...prev, {id: highestChatId + 1}]
    })
  };

  // CSS MODULES VERSION
  return (
    <div className={clsx(className, styles.app)}>
      <button onClick={handleCreate}>New Chat</button>
      <div className={styles.chats}>
        {chats.map((c) => (
          <Chat key={c.id} />
        ))}
      </div>
    </div>
  );

  // TAILWIND VERSION
  // return (
  //   <div className="relative p-5 w-full h-full">
  //     <button onClick={handleCreate}>New Chat</button>
  //     <div className="absolute bottom-5 left-5">
  //       {chats.map((c) => (
  //         <Chat key={c.id} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default App;
