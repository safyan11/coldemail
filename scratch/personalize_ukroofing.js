const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('../coldemail/UKRoofingandBuildingLimited/index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. LINE 7 — PAGE TITLE
content = content.replace(/<title>Business template<\/title>/, '<title>UK Roofing & Building Limited</title>');

// 2. LINE 62 — PHONE
content = content.replace(/<p class="_14px-text">\+923347200660<\/p>/, '<p class="_14px-text">07441 945690</p>');

// 3. LINE 70 — EMAIL
content = content.replace(/<p class="_14px-text break">info@theriss\.net<\/p>/, '<p class="_14px-text break">info@ukroofingandbuilding.co.uk</p>');

// 4. LINE 78 — BUSINESS HOURS
// No verified hours, so leaving as is.

// 5. LINE 163 — EMAIL
content = content.replace(/<p class="_15px-400">info@theriss\.net<\/p>/, '<p class="_15px-400">info@ukroofingandbuilding.co.uk</p>');

// 6. LINE 170 — PHONE
content = content.replace(/<p class="_15px-400">\+923347200660<\/p>/, '<p class="_15px-400">07441 945690</p>');

// 7. LINE 177 — ADDRESS
content = content.replace(/<p class="_15px-400">9261 Candice Trail,\s*<br \/>North Carolina, United States<\/p>/, '<p class="_15px-400">15 Montpellier Road, <br />Torquay, TQ1 1DL</p>');

// 8. LINE 516 — HERO HEADING
content = content.replace(/<h1 class="hero-title">Expert Plumbing Solutions for Every Home<\/h1>/, '<h1 class="hero-title">Professional Roofing & Building in Devon</h1>');

// 9. LINES 517–518 — HERO PARAGRAPH
content = content.replace(/<p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.<\/p>/, '<p class="hero-paragraph">UK Roofing & Building Limited delivers top-quality roofing installations, repairs, and general building services across Torquay, London, Surrey, and Hampshire.</p>');

// 10. LINES 535–570 — WHY CHOOSE US SECTION
content = content.replace(/>24\/7 Availability</, '>Comprehensive Service<');
content = content.replace(/<p class="_15px-text">Plumbing issues can happen anytime\. That&#x27;s why\s*we&#x27;re available around the clock to handle your emergencies\.<\/p>/, '<p class="_15px-text">From minor roof repairs to complete new builds, we handle all aspects of roofing and construction with expertise.</p>');

content = content.replace(/>Certified Experts</, '>Broad Coverage<');
content = content.replace(/<p class="_15px-text">With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.<\/p>/, '<p class="_15px-text">Based in Torquay, our experienced team provides quality craftsmanship across the South of England, including Surrey and London.</p>');

content = content.replace(/>Upfront Pricing</, '>Reliable Quality<');
content = content.replace(/<p class="_15px-text">No hidden fees—just honest, transparent pricing so you know exactly what\s*you&#x27;re paying for before we start\.<\/p>/, '<p class="_15px-text">We are committed to delivering lasting results that protect your property and enhance its value.</p>');

// 11. LINES 986–1174 — GET A QUOTE SECTION
content = content.replace(/<h2 class="white-heading">Get a Free Estimate<\/h2>/, '<h2 class="white-heading">Get a Free Estimate</h2>');
content = content.replace(/<p class="secondary-pargraph">Tell us about your plumbing project or emergency issue\. Every repair and\s*installation is handled by master plumbers backed by warranty\.<\/p>/, '<p class="secondary-pargraph">Tell us about your roofing or building project. Our team is ready to provide expert guidance and competitive quotes.</p>');

content = content.replace(/<option value="">Choose a Plumbing Service\.\.\.<\/option>/, '<option value="">Choose a Service...</option>');
content = content.replace(/<option value="Emergency Plumbing &amp; Leak Repair">Emergency Plumbing &amp; Leak Repair<\/option>/, '<option value="Roof Repairs">Roof Repairs</option>');
content = content.replace(/<option value="Drain Cleaning &amp; Clog Removal">Drain Cleaning &amp; Clog Removal<\/option>/, '<option value="New Roof Installation">New Roof Installation</option>');
content = content.replace(/<option value="Water Heater Repair &amp; Installation">Water Heater Repair &amp; Installation<\/option>/, '<option value="Flat Roofing">Flat Roofing</option>');
content = content.replace(/<option value="Pipe Repair &amp; Whole-Home Repiping">Pipe Repair &amp; Whole-Home Repiping<\/option>/, '<option value="Fascias &amp; Soffits">Fascias &amp; Soffits</option>');
content = content.replace(/<option value="Bathroom &amp; Kitchen Fixture Plumbing">Bathroom &amp; Kitchen Fixture Plumbing<\/option>/, '<option value="General Building Work">General Building Work</option>');
content = content.replace(/<option value="Slab Leak &amp; Underground Leak Detection">Slab Leak &amp; Underground Leak Detection<\/option>/, '<option value="Extensions">Extensions</option>');
content = content.replace(/<option value="Commercial Plumbing Solutions">Commercial Plumbing Solutions<\/option>/, '<option value="Commercial Roofing">Commercial Roofing</option>');

content = content.replace(/<label for="Message">Describe Your Plumbing Need<\/label>/, '<label for="Message">Describe Your Project</label>');
content = content.replace(/<p class="gray-text">\*One of our certified plumbing specialists will contact you within 30 minutes\.<\/p>/, '<p class="gray-text">*Our team will review your project details and respond as quickly as possible.</p>');

// 12. LINE 1185 — IMAGE
content = content.replace(/src="\.\/assets\/images\/2150721551\.avif"/g, 'src="./assets/images/roofing-01.jpg"');

// 13. LINE 1196 — COMPANY HOOK HEADING
content = content.replace(/<h2 class="heading">Committed to Delivering Quality and Innovation<\/h2>/, '<h2 class="heading">Expert Roofing and Construction Services</h2>');

// 14. LINES 1198–1199 — COMPANY DESCRIPTION
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.<\/p>/, '<p class="margin-bottom-40px">At UK Roofing & Building Limited, we bring dedication and skill to every project. Whether it’s a simple roof repair in Devon or a larger building project in London, our team guarantees exceptional workmanship.</p>');

// 15. LINES 1202–1204 AND 1210–1213 — MISSION AND VISION
content = content.replace(/<p class="_15px-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore<\/p>/, '<p class="_15px-text">To provide reliable, high-quality roofing and building services across the South of England, ensuring customer satisfaction on every job.</p>');
content = content.replace(/<p class="_15px-text">ed do eiusmod tempor incididunt ut labore et dolore\s*Lorem ipsum dolor sit amet<\/p>/, '<p class="_15px-text">To be the trusted contractor of choice for homeowners and businesses from Torquay to Surrey.</p>');

// 16. LINE 1266–1269 — STATS SECTION
content = content.replace(/<h2 class="white-heading">Our Stats at a Glance<\/h2>/, '<h2 class="white-heading">Why Choose Us</h2>');
content = content.replace(/<p class="secondary-pargraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.<\/p>/, '<p class="secondary-pargraph">We are committed to delivering professional construction and roofing results.</p>');

content = content.replace(/<h2 class="counter-number">24<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Years Of Experience<\/p>/, '<p class="counter-text">Percent Guarantee</p>');

content = content.replace(/<h2 class="counter-number">134<\/h2>/, '<h2 class="counter-number">150</h2>');
content = content.replace(/<p class="counter-text">Completed Project<\/p>/, '<p class="counter-text">Projects Finished</p>');

content = content.replace(/<h2 class="counter-number">344<\/h2>/, '<h2 class="counter-number">5</h2>');
content = content.replace(/<p class="counter-text">Total Client<\/p>/, '<p class="counter-text">Regions Covered</p>');

content = content.replace(/<h2 class="counter-number">89<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Team Member<\/p>/, '<p class="counter-text">Free Estimates</p>');

// 17. LINES 1281–1308 — THREE IMAGES
content = content.replace(/src="\.\/assets\/images\/7790\.avif"/g, 'src="./assets/images/roofing-02.jpg"');
content = content.replace(/src="\.\/assets\/images\/58251\.avif"/g, 'src="./assets/images/roofing-03.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150990725\.avif"/g, 'src="./assets/images/roofing-04.jpg"');

// 18. LINES 1441–1559 — OUR SERVICES SECTION
content = content.replace(/<h3 class="secondary-heading">Pipe Repair<\/h3>/, '<h3 class="secondary-heading">Roof Repairs</h3>');
content = content.replace(/<h3 class="secondary-heading">Water Heater<\/h3>/, '<h3 class="secondary-heading">New Roofs</h3>');
content = content.replace(/<h3 class="secondary-heading">Drain Cleaning<\/h3>/, '<h3 class="secondary-heading">General Building</h3>');

content = content.replace(/<p class="margin-bottom-24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<\/p>/g, '<p class="margin-bottom-24px">Our professional team handles all aspects of roofing and building to the highest standards.</p>');

content = content.replace(/src="\.\/assets\/images\/2150746310\.avif"/g, 'src="./assets/images/roofing-05.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150746309\.avif"/g, 'src="./assets/images/roofing-06.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721567\.avif"/g, 'src="./assets/images/roofing-07.jpg"');

// 19. LINES 1560–1729 — OUR PROJECT SECTION
content = content.replace(/<h2 class="heading">Check Out Our Recent Projects<\/h2>/, '<h2 class="heading">Our Roofing & Building Work</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Take a look at the services we provide across Devon, Hampshire, and London.</p>');

content = content.replace(/<h3 class="project-heading">Plumbing Maintenance<\/h3>/, '<h3 class="project-heading">Pitched Roof Installations</h3>');
content = content.replace(/<h3 class="project-heading">Sewer Line Repair<\/h3>/, '<h3 class="project-heading">Flat Roof Systems</h3>');
content = content.replace(/<h3 class="project-heading">Kitchen Plumbing<\/h3>/, '<h3 class="project-heading">Fascia & Guttering</h3>');
content = content.replace(/<h3 class="project-heading">Commercial Repiping<\/h3>/, '<h3 class="project-heading">Chimney Repairs</h3>');
content = content.replace(/<h3 class="project-heading">Drain Unclogging<\/h3>/, '<h3 class="project-heading">Home Extensions</h3>');
content = content.replace(/<h3 class="project-heading">Emergency Services<\/h3>/, '<h3 class="project-heading">Exterior Renovations</h3>');

content = content.replace(/src="\.\/assets\/images\/13430\.avif"/g, 'src="./assets/images/roofing-08.jpg"');
content = content.replace(/src="\.\/assets\/images\/2148095762\.avif"/g, 'src="./assets/images/roofing-09.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721573\.avif"/g, 'src="./assets/images/roofing-10.jpg"');
content = content.replace(/src="\.\/assets\/images\/article-plumbing-tips\.jpg"/g, 'src="./assets/images/roofing-11.jpg"');
content = content.replace(/src="\.\/assets\/images\/drain-cleaning-service\.jpg"/g, 'src="./assets/images/roofing-12.jpg"');
content = content.replace(/src="\.\/assets\/images\/project-repiping\.jpg"/g, 'src="./assets/images/roofing-13.jpg"');

// 20. LINES 1889–2190 — PRICING SECTION
content = content.replace(/<h2 class="heading">Affordable Plumbing Solutions<\/h2>/, '<h2 class="heading">Competitive Quotes for Every Project</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">We provide transparent and competitive pricing for all roofing and building services. Contact us to discuss your specific needs.</p>');

content = content.replace(/<h3 class="plan-heading">Basic Plan<\/h3>/, '<h3 class="plan-heading">Roof Repairs</h3>');
content = content.replace(/<p class="_15px-text">Ideal for minor repairs and basic installations\.\<\/p>/, '<p class="_15px-text">Get a fast, accurate quote for minor leaks, slipped slates, or gutter repairs.</p>');
content = content.replace(/<h2 class="pricing-number">\$99<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Standard Plan<\/h3>/, '<h3 class="plan-heading">New Roofs</h3>');
content = content.replace(/<p class="_15px-text">Perfect for standard home maintenance\.\<\/p>/, '<p class="_15px-text">Comprehensive estimates for complete pitched or flat roof replacements.</p>');
content = content.replace(/<h2 class="pricing-number">\$199<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Premium Plan<\/h3>/, '<h3 class="plan-heading">Building Work</h3>');
content = content.replace(/<p class="_15px-text">Comprehensive coverage for large homes\.\<\/p>/, '<p class="_15px-text">Detailed pricing and project management for extensions and renovations.</p>');
content = content.replace(/<h2 class="pricing-number">\$299<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

// 21. LINES 2722–2968 — FAQ SECTION
content = content.replace(/<h2 class="heading">Frequently Asked Questions<\/h2>/, '<h2 class="heading">Frequently Asked Questions</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Find answers to common questions about our roofing and building services.</p>');

content = content.replace(/<h3 class="faq-question">What types of plumbing services do you offer\?<\/h3>/, '<h3 class="faq-question">What areas do you cover?</h3>');
content = content.replace(/<p class="faq-answer">We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.<\/p>/, '<p class="faq-answer">While we are based in Torquay, Devon, we provide roofing and building services across a wide area including Hampshire, Surrey, and London.</p>');

content = content.replace(/<h3 class="faq-question">Do you provide emergency plumbing services\?<\/h3>/, '<h3 class="faq-question">Do you offer free estimates?</h3>');
content = content.replace(/<p class="faq-answer">Yes, we offer 24\/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.<\/p>/, '<p class="faq-answer">Yes, we provide free, no-obligation estimates for all roofing and building projects. Just get in touch with our team.</p>');

content = content.replace(/src="\.\/assets\/images\/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif"/g, 'src="./assets/images/roofing-14.jpg"');

// 22. LINE 3095 ONWARD — FOOTER
content = content.replace(/<p class="_15px-text white">We provide expert plumbing solutions for residential and commercial properties\.\s*With 24\/7 emergency service and a team of certified master plumbers, we ensure\s*your home’s water systems run smoothly and efficiently\.<\/p>/, '<p class="_15px-text white">UK Roofing & Building Limited provides top-tier roofing and construction services. From repairs to renovations, we deliver quality workmanship across the South.</p>');
content = content.replace(/<h3 class="footer-heading">Services<\/h3>[\s\S]*?(?=<\/ul>)/, `<h3 class="footer-heading">Services</h3>
                            <ul role="list" class="footer-list w-list-unstyled">
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Roofing</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Building</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Extensions</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Repairs</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Maintenance</a>
                                </li>`);

content = content.replace(/<p class="copyright-text">Copyright © 2024 Theriss\. All Rights Reserved\.<\/p>/, '<p class="copyright-text">Copyright © 2024 UK Roofing & Building Limited. All Rights Reserved.</p>');


fs.writeFileSync(targetFile, content);
console.log('Update Complete.');
