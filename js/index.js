const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAV

const services = document.getElementsByTagName('a')[0];
services.innerHTML = 'Services';
services.style.color = 'green';

const product = document.getElementsByTagName ('a')[1];
product.innerHTML = 'Product';
product.style.color = 'green';

const vision = document.getElementsByTagName('a')[2];
vision.innerHTML = 'Vision';
vision.style.color = 'green';

const features = document.getElementsByTagName('a')[3];
features.innerHTML = 'Features';
features.style.color = 'green';

const about = document.getElementsByTagName('a')[4];
about.innerHTML = 'About';
about.style.color = 'green';

const contact = document.getElementsByTagName('a')[5];
contact.innerHTML = 'Contact';
contact.style.color = 'green';

const store = document.createElement("a");
store.textContent = "Store";
nav.prepend(store);


// HEADER

const headerText = document.getElementsByTagName('h1')[0];
headerText.innerHTML = "Dom is Awesome";

const button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";

const middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg";


// MAIN HEADERS

const featuresHeader = document.getElementsByTagName('h4')[0];
featuresHeader.innerText = siteContent['main-content']['features-h4'];

const aboutHeader = document.getElementsByTagName('h4')[1];
aboutHeader.innerText = siteContent['main-content']['about-h4'];

const servicesHeader = document.getElementsByTagName('h4')[2];
servicesHeader.innerText = siteContent['main-content']['services-h4'];

const productHeader = document.getElementsByTagName('h4')[3];
productHeader.innerText = siteContent['main-content']['product-h4'];

const visionHeader = document.getElementsByTagName('h4')[4];
visionHeader.innerText = siteContent['main-content']['vision-h4'];


// MAIN CONTENT

const featuresPage = document.getElementsByTagName('p')[0];
featuresPage.innerText = siteContent['main-content']['features-content'];

const aboutPage = document.getElementsByTagName('p')[1];
aboutPage.innerText = siteContent['main-content']['about-content'];

const servicesPage = document.getElementsByTagName('p')[2];
servicesPage.innerText = siteContent['main-content']['services-content'];

const productPage = document.getElementsByTagName('p')[3];
productPage.innerText = siteContent['main-content']['product-content'];

const visionPage = document.getElementsByTagName('p')[4];
visionPage.innerText = siteContent['main-content']['vision-content'];


// CONTACT

const contactHeader = document.getElementsByTagName('h4')[5];
contactHeader.innerText = siteContent['contact']['contact-h4'];

const contactAddress = document.getElementsByTagName('p')[5];
contactAddress.innerText = siteContent['contact']['address'];

const contactPhone = document.getElementsByTagName('p')[6];
contactPhone.innerText = siteContent['contact']['phone'];

const contactEmail = document.getElementsByTagName('p')[7];
contactEmail.innerText = siteContent['contact']['email'];


// FOOTER

const footerFTR = document.getElementsByTagName('p')[8];
footerFTR.innerText = siteContent['footer']['copyright'];
