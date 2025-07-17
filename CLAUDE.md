# Project Brief for Claude: Helix CMS Development

## 1. High-Level Goal

Your primary objective is to help build a web application from the ground up to serve as a Content Management System (CMS) for an aerospace project team called "Team Helix." The final application will be hosted on the `progressi.ai` domain. The project's mission is to use drones for advanced weather data collection.

## 2. Core Requirements & Tech Stack

*   **Framework:** We will use **Next.js** with **React**.
*   **Language:** **TypeScript** should be used for type safety.
*   **Styling:** We will use **Tailwind CSS** for a clean, modern, and minimal utility-first styling approach.
*   **UI/UX:** The user interface must be intuitive, clean, and minimalist. Focus on a great user experience with a simple, uncluttered layout.

## 3. Initial Setup & Scaffolding

Please start by setting up the initial Next.js project.

**Action:**
Use `create-next-app` with the following specifications:
*   TypeScript
*   ESLint
*   Tailwind CSS
*   App Router (`Would you like to use App Router? (recommended)` -> Yes)
*   No custom import aliases for now.

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
