# Portfolio

A modern, responsive, and interactive portfolio website showcasing my professional experience, skills, and projects. Built with cutting-edge technologies to deliver a fast and seamless user experience.

## Features

- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **Interactive UI** - Smooth animations and transitions using Framer Motion
- **Project Showcase** - Individual project pages with detailed information and statistics
- **Skills Display** - Organized sections for technical, knowledge, and soft skills
- **Experience Timeline** - Detailed work experience and professional background
- **Contact Form** - Integrated messaging system to get in touch
- **Code Highlighting** - Beautiful syntax highlighting for code snippets
- **Social Links** - Quick access to social media and professional profiles

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Flowbite React](https://flowbite-react.com/) - Component library
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: 
  - [React Simple Icons](https://react-icons.github.io/react-icons/) - Popular brand icons
  - [Lucide React](https://lucide.dev/) - Consistent icon library
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) with syntax highlighting
- **Date Handling**: [date-fns](https://date-fns.org/) - Modern date utility library
- **Forms**: [Formspree](https://formspree.io/) - Form backend integration
- **Language**: TypeScript - Type-safe development

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LSN0WM4N/Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or 
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint code quality checks

## Features

### Notifier

Contact form send a notification to a telegram bot with the sender mail and the message.

Something like:
```
[john_doe@mail.com] says: This portfolio is so cool. 
```

If you want to enable it you must set some environment variable. Check it in deployment section.

## Customization

### Update Personal Information

Edit the relevant component files to update:

- **Social Links**: Modify `common/socialLinks.tsx`
- **Technologies**: Update `lib/technologies.ts`
- **Resume**: Add/update files in `public/cv/`

### Add New Projects

1. Add the project name in `app/project/[name]/page.tsx:projects`
2. Data, readme and repo will be fetched from github

## Deployment

The portfolio is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site
4. Your portfolio is live!

### Environment Variables

Create a `.env` file with

```env
TELEGRAM_CHAT_ID=XXXXXXXXXX
TELEGRAM_BOT_TOKEN=XXXXXXXXXX:YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

## Contact

If you'd like to get in touch, you can:
- Fill out the contact form on the portfolio
- Check the social links in the footer
- Send an email directly

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

Feel free to fork this project and use it as a template for your own portfolio. If you make improvements, I'd love to see them!

---

**With <3 from SN0WM4N.**