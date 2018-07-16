# ZoraCabrera-Writing Website
**Domain:** www.zoracreates.github.io/writing-portfolio

## Strategy
### Goals:

ZoraCabrera-Writing is creative writing portfolio website, with the main purpose of showcasing my writing samples for potential agents, publishers, and readers.

### Audiences:

#### Primary Audiences

The primary audience consists of publishers and agents seeking to work with me. They will most likely be looking to read more of my work, learn about places I have published, see who is reading these stories, and find out if I am working on anything new. 

#### Secondary Audiences

Although primarily a business website, it also must welcome readers who are not seeking a business opportunity. They might be looking for something new to read, or a chance to get to know more about me as a writer.

## Scope and Structure

The first version of the site includes the following:

1. A Home page with links to at least two writing sample pages
2. An About page with a brief biography
3. A Contact page with a contact form, my professional email, and links to my social media accounts

## Skeleton Design

Before building the site, I planned out its layout by sketching each page several times. After a few sketches, I began to see some common design ideas:

+ My name appeared on the navigation as the logo.
+ The home page was titled Works on the navigation to make clear what it contained.
+ There was a call to action button on the home page to encourage users to reach out.
+ The About page contained not just a biography, but also a picture.
+ On the Contact page the links to my social media accounts and email appeared to the right side of the contact form.

## Implementation

The website uses custom HTML, CSS, and JavaScript combined with the Simple Grid CSS, the HTML5 Boiler Plate, and the jQuery validation plugin. It also utilizes Formspree.io to handle contact form submissions.

### Simple Grid:

To keep a consistent and responsive layout throughout the site, I needed a CSS grid. Rather than spending extra time and effort building one, I considered several established solutions. I had used Bootstrap as an alternative on other projects. However, Bootstrap comes with a variety of built in styles that are not always easy to override.  Simple Grid seemed the best fit. Not only is it light weight, it is also easy to implement with just a few lines of HTML. 

### HTML5 Boiler Plate:

While Simple Grid provides a good layout, it does not regulate the appearance of the site any further. The HTML5 Boiler Plate includes a Normalize.css file, which helps maintain consistent CSS throughout browsers. To further improve user experience and site appearance, the boilerplate uses the JavaScript Modernizer library to detect which JavaScript and CSS features are available in different browsers.

Aside from these features, the boilerplate includes the jQuery CDN and a minified version of jQuery, to which it defaults if the CDN cannot be reached. This way it improves page load times and provides a backup in case of emergencies.
One final reason for building on top of the HTML5 Boiler Plate is that it provides a .htacess file, which includes several server configurations, such as caching rules and configuration for a 404.html page.

### JavaScript:
As jQuery was already included in my files, it was easy to add the jQuery Validate plugin on my Contact page. The plugin allows me to assure all information needed to properly communicate with the user is provided before a message submission improving the experience of the user trying to get in touch, as well as my experience as a message receiver.

The site also uses JavaScript to create a better mobile experience. JavaScript implemented on the navigation bar, creates a hamburger menu when users are viewing their page from a small screen, such as that of a phone. 

### Formspree:
Formspree.io takes away the complications of building a contact form with PHP or another server-side programming language. After confirming an email and adding as simple line to the contact form’s HTML, I can receive messages from users directly to my inbox. Fromspree also includes  reCAPTCHA to help prevent spam emails from bots.
