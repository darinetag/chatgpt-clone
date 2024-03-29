"use client";

import { FormEvent, useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const [messagesArray, setMessagesArray] = useState<
    Array<{ role: string; content: string } | undefined>
  >([undefined]);


  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const myArray = messagesArray;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    if (chatId == "") {
      const doc = await addDoc(
        collection(db, "users", session?.user?.email!, "chats"),
        {
          userId: session?.user?.email!,
          createdAt: serverTimestamp(),
        }
      );

      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          doc.id,
          "messages"
        ),
        message
      );

      router.push(`/chat/${doc.id}`);

      // Toast notification to say Loading!
      const notification = toast.loading("ChatGPT is thinking...");

      await fetch("/api/askQuestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          //chatId model
          chatId,
          model: "text-davinci-003",
          session,
        }),
      }).then(() => {
        // Toast notification to say successful!
        toast.success("ChatGPT has responded!", {
          id: notification,
        });
      });
    } else {
      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        message
      );

      // Toast notification to say Loading!
      const notification = toast.loading("ChatGPT is thinking...");

      await fetch("/api/askQuestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: input,
          messages: myArray,
          chatId,
          session,
        }),
      }).then(() => {
        // Toast notification to say successful!
        toast.success("ChatGPT has responded!", {
          id: notification,
        });
      });
    }
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm border-t-[1px] border-t-gray-600">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div className="md:hidden">
        {" "}
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
