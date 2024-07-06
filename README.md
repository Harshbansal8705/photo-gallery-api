# Photo Gallery Web App Backend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This repository contains the backend for the Photo Gallery Web App, a Node.js and Express application that provides RESTful APIs for managing photo uploads, downloads, viewing, and deletion. This backend works in conjunction with the frontend repository found [here](https://github.com/harshbansal8705/photo-gallery).

## Features
- RESTful APIs for photo management
- Supports upload, download, viewing, and deletion of multiple photos
- Integration with a frontend React application

## Technologies
- Node.js
- Express
- Multer (for file uploads)

## Installation
To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Harshbansal8705/photo-gallery-api.git
    cd photo-gallery-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add the necessary environment variables:
    ```plaintext
    HOSTED_URL = <your-backend-server-url>
    ```

5. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Start the backend development server:
    ```bash
    npm start
    ```

## Project Structure
```plaintext
photo-gallery-api/
├── public/
│   └── images/
├── .gitignore
├── images.json
├── index.js
├── package-lock.json
└── package.json
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
