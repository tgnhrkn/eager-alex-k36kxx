import { FC, useState } from "react";
import moment from "moment-timezone";

import clsx from "clsx";

import styles from "./Chat.module.css";

export interface ChatProps {
  className?: string;
}

interface ChatMessage {
  value: string;
  timestamp: moment.Moment;
}

const Chat: FC<ChatProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { value: "first message to test", timestamp: moment() },
  ]);

  // CSS MODULES VERSION
  return (
    <div className={clsx(className, styles.chat)}>
      <div className={styles.chat_messages}>
        {messages.map((message, idx) => {
          return (
            <div key={`message-${idx}`} className={styles.chat_message}>
              <div>
                <div>{message.value}</div>
                <div>{message.timestamp.toLocaleString()}</div>
              </div>
              <button
                onClick={() => {
                  setMessages((prev) => [
                    ...prev.slice(0, idx),
                    ...prev.slice(idx + 1),
                  ]);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.chat_control}>
        <form
          onSubmit={(formEvent) => {
            formEvent.preventDefault();
            const newMessageValue = formEvent.currentTarget.message_input.value;
            const newMessage: ChatMessage = {
              value: newMessageValue,
              timestamp: moment(),
            };
            if (newMessage != null) {
              setMessages((prev) => [...prev, newMessage]);
            }
          }}
        >
          <input id="message_input" type="text" placeholder="Send a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );

  // TAILWIND VERSION
  // return (
  //   <div className="flex items-center justify-center border border-neutral-300 rounded w-80 h-96">
  //     This is a chat!
  //   </div>
  // );
};

export default Chat;
