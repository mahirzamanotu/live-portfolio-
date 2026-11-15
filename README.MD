
# Mahir Zaman Portfolio

A personal portfolio website built with Node.js, Express and the EJS templating engine.
**Live Site:** https://live-portfolio-t2bg.onrender.com/

**GitHub Repository:** https://github.com/mahirzamanotu/live-portfolio

## Features

- Four pages: Home, About Me, Projects and Contact Me
- Shared header and footer created with EJS partials
- Responsive layout that adapts to phones, tablets and desktops
- Dark navy theme built with Bootstrap and custom CSS
- Icons throughout the site provided by Font Awesome
- Projects page generated from a list of projects stored in the router
- Contact form with client-side validation and a confirmation message
- Custom error page that matches the rest of the site

## Technologies Used

- Node.js
- Express
- EJS
- Bootstrap 5
- Font Awesome 6
- Render for cloud hosting

## Project Structure

```text
LivePortfolio
├── bin
│   └── www                 Starts the server
├── public
│   ├── images              Profile photo
│   ├── javascripts         Client-side scripts
│   └── stylesheets         Custom styles
├── routes
│   └── index.js            Routes for every page
├── views
│   ├── partials
│   │   ├── header.ejs      Shared header and navigation bar
│   │   └── footer.ejs      Shared footer with social links
│   ├── index.ejs           Home page
│   ├── about.ejs           About Me page
│   ├── projects.ejs        Projects page
│   ├── contact.ejs         Contact Me page
│   └── error.ejs           Error page
├── app.js                  Express application setup
└── package.json            Project details and dependencies
```

## How Routing Works

All page routes are defined in `routes/index.js`. Each route uses `router.get` to respond to a request and `res.render` to display an EJS view, passing values such as the page title. The contact form is handled by a `router.post` route, which reads the submitted values and displays a confirmation message.

## Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/mahirzamanotu/live-portfolio.git
   ```

2. Open the project folder and install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open http://localhost:3000 in a web browser.

## AI Assistance

Approximately 10% of this project was developed with assistance from Claude AI. I mainly used it to help with some of the more challenging aspects of development, including Express routing, EJS templating and partials, responsive CSS adjustments, and contact form validation. Claude was used to explain concepts, troubleshoot errors, and suggest improvements. The majority of the coding, design decisions, customization, and overall implementation were completed independently.

## Credits

- [Express Generator](https://expressjs.com/en/starter/generator.html) was used to create the initial project structure with the EJS view option.
- [Bootstrap](https://getbootstrap.com/) provides the layout grid and interface components.
- [Font Awesome](https://fontawesome.com/) provides the icons used across the site.

## Author

**Mahir Zaman**

Networking and IT, Ontario Tech University

- GitHub: [mahirzamanotu](https://github.com/mahirzamanotu)
- LinkedIn: [Mahir Zaman](https://www.linkedin.com/in/mahir-zaman-295592346/)
- Email: mahirzaman2510@gmail.com
