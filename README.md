# KBR Accountants & Tax Consultants Ltd - Web Platform

A modern, fully responsive frontend web application built for KBR Accountants & Tax Consultants Ltd, a financial consultancy based in Middlesbrough, UK.

The site presents the firm's full portfolio of accounting and corporate tax services, highlights professional accreditations and software partnerships, and provides direct communication channels for prospective clients.

---

## Core Features

- Responsive Navigation: Desktop header with quick links and a collapsible mobile dropdown menu.
- Complete Service Portfolio: Dedicated displays for all 12 core statutory and management accounting offerings.
- Corporate Overview: Detailed background covering firm leadership credentials (ACMA, CGMA) and partner integrations (Xero, Moneypex).
- Direct Contact Integration: Click-to-call phone linking, auto-opening mailto handlers, and direct-to-WhatsApp messaging pre-filled with client inquiry details.
- Single-Page Routing: Client-side routing managed through React Router for smooth transitions without browser reloads.

---

## Service Catalog

The platform outlines 12 core professional services:

1. Confirmation Statement: Statutory annual compliance filing with Companies House.
2. VAT Quarterly: Calculation, reconciliation, and digital submission of quarterly VAT returns.
3. MTD Self Assessment: Making Tax Digital compliant reporting for sole traders and individuals.
4. Annual Accounts: Statutory year-end account preparation and reporting.
5. Self Assessment: Individual income tax calculation, deduction optimization, and HMRC filing.
6. PAYE (Monthly): Monthly payroll administration, payslip generation, and RTI submissions.
7. PAYE (Weekly): Weekly payroll execution and compliance reporting.
8. PAYE (Fortnightly): Scheduled fortnightly wage processing and reporting.
9. Partnership Return: Income, allocation, and tax return management for business partnerships.
10. Corporation Tax: CT600 preparation, liability forecasting, and corporate tax compliance.
11. Staging Date Auto-Enrolment: Workplace pension compliance and employee enrolment tracking.
12. Business Setup: Company registration, structure advice, and initial statutory registrations.

---

## Technology Stack

- Runtime & Framework: React 19
- Build Tool: Vite
- Routing: React Router v7
- Styling: Tailwind CSS v4
- Deployment Target: Static Single-Page Application (SPA)

---

## Project Structure

```text
my-react-app/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- ContactForm.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   `-- ServiceCard.jsx
|   |-- pages/
|   |   |-- About.jsx
|   |   |-- Home.jsx
|   |   `-- Services.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js