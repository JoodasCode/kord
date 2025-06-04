# KORD: AI MARKETING COORDINATOR

Kord (short for "Coordinator") is an AI-powered SaaS tool that automates and enhances the role of a marketing coordinator. Designed for marketing teams, especially in regulated or event-heavy industries like financial services, Kord executes and interprets campaign tasks with full contextual awareness of brand, legal, and strategic guidelines.

## 🌟 Core Value Proposition

> Replace your marketing coordinator with a smart AI assistant that *thinks like you*, acts proactively, and integrates seamlessly into your workflow.

Kord:

* Automates brief interpretation, email writing, task generation, and performance reporting
* Understands internal documents like brand guidelines, legal compliance docs, and tone guides
* Reads and responds to task assignments from managers
* Integrates with Asana, Google Docs, Gmail, and Adestra

## 🧰 System Architecture

Built on the [Midday AI v1](https://github.com/midday-ai/v1) framework for stability, scalability, and modularity.

### Frontend

* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS
* **UI Components**: Shadcn UI + Radix
* **Themes**: next-themes

### Backend

* **API & Functions**: Node.js (Edge Functions via Supabase)
* **Database**: Supabase (Postgres + Supabase Vector)
* **Caching & Jobs**: Upstash Redis + Trigger.dev
* **Email System**: React Email + Resend
* **Auth**: Supabase Auth
* **Analytics**: OpenPanel
* **Error Monitoring**: Sentry

## 📊 Features & Modules

### ✍️ Brief Interpreter

* Converts plain-English campaign instructions into tasks and content
* Pulls relevant context from knowledge base
* Routes instructions to correct modules (e.g., email gen, Asana task, LinkedIn post)

### 📅 Task Manager

* **Reads from Asana**: Checks for tasks assigned to "Kord" or tagged with @Kord
* **Writes to Asana**: Generates subtasks, due dates, dependencies
* Adds comments, attaches drafts, and updates statuses based on work progress

### 📈 Reporting Engine

* Ingests campaign data (via Adestra API or CSV import)
* Summarizes performance: open rate, CTR, conversions
* Suggests improvements and generates Google Docs + Slide reports

### 📚 Knowledge Base Ingestion

* Uploads PDFs, markdown, CSVs
* Tagged and embedded using Supabase Vector
* Accessible to LLM for context-aware generation and validation

### 🎨 Content Generator

* Generates Adestra-compatible emails, LinkedIn posts, website blurbs, speaker/sponsor intros
* Formats output with correct tone, legal disclaimers, CTAs, etc.

### 🌐 Dashboard UI

* Brief submission form
* Task + campaign status view
* Auto-generated outputs with editing UI
* File upload system for context
* Notifications + report summaries

## 🛋️ User Flow (Example)

1. Manager creates Asana task: "Promote EPTA Forum to member firms"
2. Kord reads the task
3. Pulls context: EPTA audience, FIA brand, 2023 campaign examples
4. Auto-generates:
   * Email draft
   * Asana subtasks (design asset, approval, send)
   * LinkedIn post draft
   * Report template
5. Links all in task comment + updates Asana status
6. Manager reviews & approves or gives feedback

## 🛋️ Plugins / Integrations

* **Asana Plugin (Bidirectional)**
* **Google Docs API** (for doc creation + editing)
* **Google Slides API** (for report slides)
* **Gmail API** (for approvals, feedback summaries)
* **React Email + Resend** (for campaign email previews)
* **Adestra** (Manual or API-based data ingest)

## 🚀 MVP Deliverables

* [ ] Next.js frontend with tailwind/shadcn layout
* [ ] Asana integration (read & write)
* [ ] Google Docs writer
* [ ] Prompt + document context pipeline (LangChain or raw embeddings)
* [ ] Email generator with output in Adestra-friendly HTML
* [ ] Dashboard interface + file upload
* [ ] 3 working workflows: Email Draft, Asana Setup, Campaign Report

## 🚫 Constraints & Rules

* Kord **must obey legal + brand guidelines** from uploaded docs
* Kord **must acknowledge task hierarchy** (managers assign, Kord executes)
* Kord **must log actions** visibly for audit trail
* All outputs should be **editable by humans** before deployment

## 🚀 Tagline Ideas

> "Your coordinator didn't quit. She scaled."
>
> "Kord doesn't take breaks. It takes briefs."
>
> "Built to replace you. Designed by you."

## Getting Started

1. Install dependencies using bun:

```sh
bun i
```

2. Copy `.env.example` to `.env` and update the variables:

```sh
# Copy .env.example to .env for each app
cp apps/api/.env.example apps/api/.env
cp apps/app/.env.example apps/app/.env
cp apps/web/.env.example apps/web/.env
```

3. Start the development server:

```sh
bun dev # starts everything in development mode (web, app, api, email)
bun dev:web # starts the web app in development mode
bun dev:app # starts the app in development mode
bun dev:api # starts the api in development mode
bun dev:email # starts the email app in development mode

# Database
bun migrate # run migrations
bun seed # run seed
```

## Color Palette

| Use                      | Color            | Hex       | Notes                               |
| ------------------------ | ---------------- | --------- | ----------------------------------- |
| **Primary**              | Charcoal Gray    | `#1A1A1A` | Neutral, modern, stable background  |
| **Accent**               | Electric Indigo  | `#5C33FF` | Smart, AI-infused touch of color    |
| **Secondary**            | Soft Lavender    | `#D8D5FF` | For light-mode accents and cards    |
| **CTA / Success**        | Emerald Green    | `#3DBA7E` | Task completed, success indicators  |
| **Warning / Highlights** | Amber            | `#FBBF24` | Attention states without aggression |
| **Error / Rejection**    | Soft Red         | `#EF4444` | Inline validation and feedback      |
| **Text (dark mode)**     | White / Gray-100 | `#F3F4F6` | Readable on charcoal backgrounds    |
| **Text (light mode)**    | Slate            | `#1E293B` | Clean and modern on light UI        |
