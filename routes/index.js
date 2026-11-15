/*
  Index Router
  This file defines the routes for every page of the portfolio. Each route
  responds to a browser request by rendering an EJS view with res.render and
  passing it values such as the page title, which the view uses to build
  the page.
*/
var express = require('express');
var router = express.Router();

/*
  Project List
  The projects are stored in this array and passed to the Projects view,
  which loops through them to create one card for each project. A new project
  can be added here without making any changes to the view.
*/
const projects = [
  {
    title: 'Live Portfolio Website',
    description: 'This website, built with Node.js, Express and EJS and deployed to the cloud.',
    icon: 'fa-solid fa-laptop-code',
    tech: ['Node.js', 'Express', 'EJS', 'Bootstrap'],
    link: 'https://github.com/mahirzamanotu'
  },
  {
    title: 'Small Office Network Design',
    description: 'A network for a small office built in Cisco Packet Tracer with VLANs, inter VLAN routing, DHCP and access control lists.',
    icon: 'fa-solid fa-network-wired',
    tech: ['Cisco Packet Tracer', 'VLANs', 'DHCP', 'ACLs'],
    link: ''
  },
  {
    title: 'Subnet Calculator',
    description: 'A Python program that takes an IP address and subnet mask and returns the network address, broadcast address and usable host range.',
    icon: 'fa-brands fa-python',
    tech: ['Python', 'Subnetting'],
    link: ''
  },
  {
    title: 'Home Lab Server',
    description: 'An Ubuntu Server virtual machine set up with SSH access, a UFW firewall and an Apache web server.',
    icon: 'fa-brands fa-linux',
    tech: ['Ubuntu Server', 'SSH', 'UFW', 'Apache'],
    link: ''
  }
];

/* The Home page is shown for both the root address and the home address. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* The About Me page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', page: 'about' });
});

/* The Projects page receives the project list so it can display each project. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', page: 'projects', projects: projects });
});

/* The Contact Me page is shown with the form ready to be filled in. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me', page: 'contact', success: false });
});

/*
  Contact Form Submission
  When the form is submitted, the values arrive in req.body because app.js
  uses the express.urlencoded middleware. The message is logged to the server
  console and the Contact page is shown again with a thank you message. The
  site does not send emails, so the message is not delivered anywhere else.
*/
router.post('/contact', function (req, res, next) {
  console.log('New contact message:', req.body);
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact',
    success: true,
    name: req.body.name
  });
});

module.exports = router;