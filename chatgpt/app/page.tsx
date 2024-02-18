import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "ChatGPT Clone",
};

function HomePage() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen lg:h-screen px-2 text-white">
        <h1 className="lg:text-5xl text-3xl font-bold lg:mb-20 mb-5">
          ChatGPT
        </h1>
        <div>
          <div className="flex space-x-2 text-center">
            <div>
              <div className="flex flex-col items-center justify-center lg:mb-5 mb-1">
                <SunIcon className="lg:h-8 lg:w-8 h-6 w-6" />
                <h2>Examples</h2>
              </div>
              <div className="lg:space-y-2 space-y-1">
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs ">
                  "Explain something to me"
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  "What is the difference between a dog and a cat?"
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  "What is the difference between a framework and a library?"
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center lg:mb-5 mb-1">
                <BoltIcon className="lg:h-8 lg:w-8 h-6 w-6" />
                <h2>Capabilities</h2>
              </div>
              <div className="lg:space-y-2 space-y-1">
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  Change the ChatGPT model to use
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  Messages are stored in Firebase's Firestore
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  Hot Toast notifications when ChatGPT is thinking
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center lg:mb-5 mb-1">
                <ExclamationTriangleIcon className="lg:h-8 lg:w-8 h-6 w-6" />
                <h2>Limitations</h2>
              </div>
              <div className="lg:space-y-2 space-y-1">
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  May generate incorrect information
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  May occasionally produce harmful instructions or biased
                  content
                </p>
                <p className="lg:infoText p-2 bg-gray-700/50 rounded-lg max-w-[100px] text-xs">
                  Limited Knowledge of world and events after 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
