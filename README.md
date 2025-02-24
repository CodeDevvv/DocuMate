# DocuMate

DocuMate is a real-time collaborative document editor that offers seamless editing and instant updates for all users. Built with modern web technologies, it leverages Next.js 15, React 19, and TypeScript along with powerful tools like Convex for a real-time database, Clerk for authentication, Liveblocks for collaborative editing, TipTap for rich text capabilities, Tailwind CSS for styling, and Zustand for state management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Features

- **Real-Time Collaboration:**  
  Utilizing Convex, document changes are instantly propagated to all users.

- **Rich Text Editing:**  
  Integrated TipTap provides a dynamic and extensible editor experience.

- **User Authentication:**  
  Clerk handles authentication with sign-in components, pagination, and organization support.

- **Live Collaboration:**  
  Liveblocks integration manages real-time user presence and collaboration within the editor.

- **State Management:**  
  Zustand is used for efficient and straightforward state management.

- **Responsive Design:**  
  Tailwind CSS ensures a fast, modern, and responsive user interface.

## Technologies Used

- **Next.js 15** – Framework for building the app.
- **React 19** – UI library for building component-based interfaces.
- **TypeScript** – For type-safe coding practices.
- **Convex (v1.17.3)** – Real-time database ensuring live updates.
- **Clerk (@clerk/nextjs@6.5.1)** – Authentication and user management.
- **Liveblocks (v2.12.2 series)** – Enables real-time collaborative features.
- **TipTap** – Rich text editor integration (via iptap for Docs editor).
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Zustand** – Lightweight state management.
- **Additional Tools:**
  - `nuqs@2.2.3` for additional functionality.
  - Use of `--legacy-peer-deps` flag during installations to prevent peer dependency errors.

## Installation & Setup

### Prerequisites

- Node.js (v14 or later recommended)
- npm (or yarn)

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd DocuMate
   ```

2. **Install dependencies:**
   When installing, use the `--legacy-peer-deps` flag to avoid any installation errors:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up Convex:**
   - Install Convex:
     ```bash
     npm install convex@1.17.3
     ```
   - Start Convex in development mode (login if prompted):
     ```bash
     npx convex dev
     ```
   *Convex serves as a real-time database where updates are immediately reflected across all connected users.*

4. **Configure Clerk for Authentication:**
   ```bash
   npm install @clerk/nextjs@6.5.1 --legacy-peer-deps
   ```
   Clerk provides the sign-in component and supports pagination and organizational features.

5. **Install and Initialize Liveblocks:**
   ```bash
   npm install @liveblocks/client@2.12.2 @liveblocks/react@2.12.2 @liveblocks/react-ui@2.12.2 @liveblocks/react-tiptap@2.12.2 --legacy-peer-deps
   ```
   Initialize a Liveblocks application:
   ```bash
   npx create-liveblocks-app@2.20240816 --init --framework react
   ```

6. **Build the project:**
   ```bash
   npm run build
   ```

## Folder Structure

```plaintext
DocuMate/
├── convex/
│   ├── documents.ts       # Document schema and operations for Convex.
│   ├── auth.config.ts     # Authentication configuration.
│   └── schema.ts          # Schema definitions for real-time data.
├── public/
│   └── (static assets)    # Contains images, fonts, etc.
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   └── page.tsx   # Home page component.
│   │   └── documents/
│   │       └── [documentId]/
│   │           └── room.tsx   # Document editing room.
│   ├── components/
│   │   ├── convex-client-provider.tsx  # Convex client integration.
│   │   ├── DocumentEditor.tsx          # Main document editor.
│   │   ├── fullscreen-loader.tsx       # Fullscreen loader component.
│   │   ├── navbar.tsx                  # Navigation bar.
│   │   ├── template-gallery.tsx        # Document template gallery.
│   │   └── documents-table.tsx         # Table for listing documents.
│   ├── constants/
│   │   └── templates.ts                # Predefined document templates.
│   └── hooks/
│       └── use-search-params.ts        # Custom hook for URL search parameters.
├── README.md              # Project overview and instructions.
└── package.json           # Project dependencies and scripts.
```

## Environment Variables

Create a `.env.local` file in the root directory with the following keys:

```env
CONVEX_DEPLOYMENT=<your_convex_deployment>
NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
LIVEBLOCK_SECRET_KEY=<your_liveblocks_secret_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
```

Replace the placeholder values with your actual configuration keys.

## Usage

After installing dependencies and setting up environment variables, start the development server with:

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) to begin using DocuMate.


