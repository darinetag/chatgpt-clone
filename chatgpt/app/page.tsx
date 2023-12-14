import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div>
        <div className="flex space-x-2 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">
                "What is the difference between a dog and a cat?"
              </p>
              <p className="infoText">"What is the color of the moon?"</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Change the ChatGPT model to use</p>
              <p className="infoText">
                Messages are stored in Firebase's Firestore
              </p>
              <p className="infoText">
                Hot Toast notifications when ChatGPT is thinking
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                May occasionally generate incorrect information
              </p>
              <p className="infoText">
                May occasionally produce harmful instructions or biased content
              </p>
              <p className="infoText">
                Limited Knowledge of world and events after 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
