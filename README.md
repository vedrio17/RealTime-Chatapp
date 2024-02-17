# Realtime Chat App

This is a real-time chat application built using Node.js/Express for the backend and React for the frontend, with ChatEngine API for the chat functionality.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [ScreenShot](#ScreenShot)
- [Contributing](#contributing)


## Features

- Real-time chat functionality
- User authentication
- Create and join chat rooms
- Send and receive messages instantly
- Responsive design

## Demo

[Insert Demo Link or GIF here]

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
```

2. Navigate to the project directory:

```bash
cd realtime-chat-app
```

3. Install dependencies for both the backend and frontend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

4. Configure environment variables:

```bash
# Create a .env file in the backend directory
touch backend/.env
```

Add the following environment variables to the `.env` file:

```
PORT=3001
CHATENGINE_PROJECT_ID=your_chatengine_project_id
CHATENGINE_USER_SECRET=your_chatengine_user_secret
```

Replace `your_chatengine_project_id` and `your_chatengine_user_secret` with your ChatEngine project ID and user secret.

5. Start the backend server:

```bash
cd ../backend
npm start
```

6. Start the frontend development server:

```bash
cd ../frontend
npm start
```

7. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

[Insert instructions on how to use the app here]

## Technologies Used

- Node.js
- Express.js
- React
- ChatEngine

## ScreenShot
[![Screenshot-2024-02-17-115605.png](https://i.postimg.cc/pTRLPXtg/Screenshot-2024-02-17-115605.png)](https://postimg.cc/zL2rjNvj)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request


