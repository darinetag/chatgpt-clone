# ChatGPT Clone

Welcome to the ChatGPT Clone, a powerful chat application built with TypeScript, Next.js (React), Firebase, Firestore, Tailwind CSS, and ChatGPT's Open AI API.

![chatgpt homepage](https://github.com/darinetag/chatgpt-clone/assets/137963187/45e5b2ba-fb70-45af-b73e-fa4fba50dd6a)

![chatgpt page](https://github.com/darinetag/chatgpt-clone/assets/137963187/b3145f33-b478-4442-8864-daa4eb01466b)


## Tech Stack

- **Frontend:**
  - Next.js (React)
  - TypeScript
  - Tailwind CSS
  - useSWR for data fetching
  - NextAuth for Firebase authentication
  
- **Backend:**
  - Firebase
  - Firestore for real-time database
  
- **AI Integration:**
  - ChatGPT's AI for intelligent conversations

## Live Demo

Explore the live demo of the ChatGPT Clone: [ChatGPT Clone Live](https://chatgpt-delta-vert.vercel.app/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:darinetag/chatgpt-clone.git  

   cd chatgpt-clone 

 2. Install dependencies:<br>

          npm install 

## Set up Firebase:
- Create a Firebase project: Firebase Console
- Add your Firebase config in `src/firebase/firebaseConfig.ts`

## Start the development server:
npm run dev

## Open the application:
Navigate to http://localhost:3000 in your web browser.

## Features
- Real-time chat with intelligent responses powered by ChatGPT.
- Secure authentication with Firebase Auth through NextAuth.
- Persistent chat history stored in Firestore.
- Modern and fully responsive UI using Tailwind CSS.
## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.<br>
<b>PS:</b><br>
You will can't add a new chat because firebase was in test mode and the openai api key is revoked, however the code is entirely correct and can work just fine.
