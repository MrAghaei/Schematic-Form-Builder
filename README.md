# 📝 Schematic Form Builder

A modern, responsive frontend application for visually building forms and automatically generating Zod validation schemas. Designed to eliminate manual and repetitive schema writing.

<img width="1916" height="957" alt="image" src="https://github.com/user-attachments/assets/ad21ab70-0ec2-4211-85c9-87ab93d482af" />


## 🚀 Live Demo
[**View Deployed App**](https://schematic-form-builder.vercel.app/) 

## 🛠 Tech Stack
* **Framework:** React + Vite 
* **Language:** TypeScript
* **State Management:** Zustand (for Canvas state)
* **Schema Generation:** Zod
* **Styling:** Tailwind CSS
* **Drag & Drop / Interactions:** dnd kit

## ✨ Features
* **Interactive Canvas:** Visually construct forms by adding components from the Toolbox (Text Input, Number, Email, Textarea, Checkbox, Select).
* **Live Output Generation:** Real-time generation of the Zod schema (`schema.ts`) as you build and modify the form layout.
* **Dynamic Properties Panel:** Select any field on the canvas to configure its specific validation rules, placeholders, and requirements.
* **Versatile Export Options:** Instantly copy the generated code to your clipboard, export the configuration as a JSON file, or download the exact `schema.ts` file.


## 🏃‍♂️ Getting Started

1.  **Clone the Repository**
```bash
git clone https://github.com/MrAghaei/Schematic-Form-Builder.git
cd Schematic-Form-Builder
```
2. **Install Dependencies**
```bash
pnpm install
```
3. **Run Development Server**
```bash
pnpm run dev
```
