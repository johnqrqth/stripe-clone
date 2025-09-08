## Sque - Stripe Clone
This project is a clone of the Sque website, built with modern web development frameworks and a component-based architecture inspired by the provided UI screenshots.

## Frameworks and Technologies
Next.js: A React framework for building server-rendered and static web applications.

React: A JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

Mesh Gradient: A library for creating animated mesh gradients, used for the hero and call-to-action sections.

React Icons: A library for including popular icon packs in your React projects.

## Installation

To run this project locally, follow these steps:

Clone the repository:

git clone [stripe-clone](https://github.com/johnqrqth/stripe-clone)

Navigate to the project directory:

`cd sque-stripe-clone`

Install the dependencies:

`npm install`

Run the development server:

`npm run dev`

Open http://localhost:3000 in your browser to see the result.

## Project Structure
The project follows a standard Next.js directory structure, with a strong emphasis on component reusability. The main components are organized within the components folder, and the pages are in the app directory.

The following is a list of key components and their locations:

## Page Sections
These components represent the major sections of the landing page:

FAQsSection.tsx: The collapsible Frequently Asked Questions section.

FindWorkSection.tsx: The section detailing the work automation process.

HeroSection.tsx: The main hero section with the title and animated image.

LastSection.tsx: The final call-to-action section with a gradient background.

MissionControlSection.tsx: The interactive section with cards and an input field.

SavingsSection.tsx: The section with the video background and savings calculator.

## Reusable Components
These are smaller, reusable components used throughout the page:

Button.tsx: A standard button component.

Card.tsx: A reusable card component for consistent styling across different sections.

Footer.tsx: The page footer with social media links and company information.

NavHeader.tsx: The navigation header.

RotatingForm.tsx: The animated form component.

SageInput.tsx: The interactive "Ask anything" input field.

VideoBackgroundWrapper.tsx: A wrapper component for video backgrounds.