const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('../coldemail/UKRubberRoofingLtd/index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. LINE 7 — PAGE TITLE
content = content.replace(/<title>Business template<\/title>/, '<title>UK Rubber Roofing Ltd</title>');

// 2. LINE 62 — PHONE
content = content.replace(/<p class="_14px-text">\+923347200660<\/p>/, '<p class="_14px-text">01902 602808</p>');

// 3. LINE 70 — EMAIL
content = content.replace(/<p class="_14px-text break">info@theriss\.net<\/p>/, '<p class="_14px-text break">james@ukrubberroofing.co.uk</p>');

// 4. LINE 78 — BUSINESS HOURS
// No verified hours

// 5. LINE 163 — EMAIL
content = content.replace(/<p class="_15px-400">info@theriss\.net<\/p>/, '<p class="_15px-400">james@ukrubberroofing.co.uk</p>');

// 6. LINE 170 — PHONE
content = content.replace(/<p class="_15px-400">\+923347200660<\/p>/, '<p class="_15px-400">01902 602808</p>');

// 7. LINE 177 — ADDRESS
content = content.replace(/<p class="_15px-400">9261 Candice Trail,\s*<br \/>North Carolina, United States<\/p>/, '<p class="_15px-400">Unit 5 Neachells Lane, Wednesfield, <br />Wolverhampton, WV11 3QG</p>');

// 8. LINE 516 — HERO HEADING
content = content.replace(/<h1 class="hero-title">Expert Plumbing Solutions for Every Home<\/h1>/, '<h1 class="hero-title">Premium Rubber Roofing Suppliers & Installers</h1>');

// 9. LINES 517–518 — HERO PARAGRAPH
content = content.replace(/<p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.<\/p>/, '<p class="hero-paragraph">UK Rubber Roofing Ltd provides top-tier rubber roofing products and expert installation services across Wolverhampton and the West Midlands. Experience durable, weather-resistant flat roofing.</p>');

// 10. LINES 535–570 — WHY CHOOSE US SECTION
content = content.replace(/>24\/7 Availability</, '>Durable Materials<');
content = content.replace(/<p class="_15px-text">Plumbing issues can happen anytime\. That&#x27;s why\s*we&#x27;re available around the clock to handle your emergencies\.<\/p>/, '<p class="_15px-text">Rubber roofing is incredibly resilient, offering decades of protection against leaks and harsh weather conditions.</p>');

content = content.replace(/>Certified Experts</, '>Professional Installation<');
content = content.replace(/<p class="_15px-text">With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.<\/p>/, '<p class="_15px-text">With over a decade of experience, our team guarantees a seamless, watertight finish on every flat roof.</p>');

content = content.replace(/>Upfront Pricing</, '>Trusted Suppliers<');
content = content.replace(/<p class="_15px-text">No hidden fees—just honest, transparent pricing so you know exactly what\s*you&#x27;re paying for before we start\.<\/p>/, '<p class="_15px-text">We supply high-quality EPDM materials to both trade professionals and DIY homeowners across the UK.</p>');

// 11. LINES 986–1174 — GET A QUOTE SECTION
content = content.replace(/<h2 class="white-heading">Get a Free Estimate<\/h2>/, '<h2 class="white-heading">Get a Free Roofing Quote</h2>');
content = content.replace(/<p class="secondary-pargraph">Tell us about your plumbing project or emergency issue\. Every repair and\s*installation is handled by master plumbers backed by warranty\.<\/p>/, '<p class="secondary-pargraph">Tell us about your flat roofing project or supply needs. We provide competitive pricing on all materials and installations.</p>');

content = content.replace(/<option value="">Choose a Plumbing Service\.\.\.<\/option>/, '<option value="">Choose a Service...</option>');
content = content.replace(/<option value="Emergency Plumbing &amp; Leak Repair">Emergency Plumbing &amp; Leak Repair<\/option>/, '<option value="Rubber Roof Installation">Rubber Roof Installation</option>');
content = content.replace(/<option value="Drain Cleaning &amp; Clog Removal">Drain Cleaning &amp; Clog Removal<\/option>/, '<option value="Roofing Supplies (Trade)">Roofing Supplies (Trade)</option>');
content = content.replace(/<option value="Water Heater Repair &amp; Installation">Water Heater Repair &amp; Installation<\/option>/, '<option value="Roofing Supplies (DIY)">Roofing Supplies (DIY)</option>');
content = content.replace(/<option value="Pipe Repair &amp; Whole-Home Repiping">Pipe Repair &amp; Whole-Home Repiping<\/option>/, '<option value="Flat Roof Repairs">Flat Roof Repairs</option>');
content = content.replace(/<option value="Bathroom &amp; Kitchen Fixture Plumbing">Bathroom &amp; Kitchen Fixture Plumbing<\/option>/, '<option value="Garage/Extension Roof">Garage/Extension Roof</option>');
content = content.replace(/<option value="Slab Leak &amp; Underground Leak Detection">Slab Leak &amp; Underground Leak Detection<\/option>/, '<option value="Commercial Rubber Roofing">Commercial Rubber Roofing</option>');
content = content.replace(/<option value="Commercial Plumbing Solutions">Commercial Plumbing Solutions<\/option>/, '<option value="Other">Other</option>');

content = content.replace(/<label for="Message">Describe Your Plumbing Need<\/label>/, '<label for="Message">Describe Your Roofing Project</label>');
content = content.replace(/<p class="gray-text">\*One of our certified plumbing specialists will contact you within 30 minutes\.<\/p>/, '<p class="gray-text">*Our team will review your requirements and provide a detailed estimate.</p>');

// 12. LINE 1185 — IMAGE
content = content.replace(/src="\.\/assets\/images\/2150721551\.avif"/g, 'src="./assets/images/roofing-01.jpg"');

// 13. LINE 1196 — COMPANY HOOK HEADING
content = content.replace(/<h2 class="heading">Committed to Delivering Quality and Innovation<\/h2>/, '<h2 class="heading">The Flat Roofing Specialists</h2>');

// 14. LINES 1198–1199 — COMPANY DESCRIPTION
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.<\/p>/, '<p class="margin-bottom-40px">UK Rubber Roofing Ltd is dedicated to modernizing flat roofs. We supply and install superior EPDM rubber roofing systems that outlast traditional felt, ensuring your property stays dry and secure year-round.</p>');

// 15. LINES 1202–1204 AND 1210–1213 — MISSION AND VISION
content = content.replace(/<p class="_15px-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore<\/p>/, '<p class="_15px-text">To provide homeowners and builders with the highest quality rubber roofing materials and impeccable installation services.</p>');
content = content.replace(/<p class="_15px-text">ed do eiusmod tempor incididunt ut labore et dolore\s*Lorem ipsum dolor sit amet<\/p>/, '<p class="_15px-text">To be the leading supplier and installer of EPDM systems in Wolverhampton and the wider West Midlands.</p>');

// 16. LINE 1266–1269 — STATS SECTION
content = content.replace(/<h2 class="white-heading">Our Stats at a Glance<\/h2>/, '<h2 class="white-heading">Why Choose Us</h2>');
content = content.replace(/<p class="secondary-pargraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.<\/p>/, '<p class="secondary-pargraph">A decade of excellence in the rubber roofing industry.</p>');

content = content.replace(/<h2 class="counter-number">24<\/h2>/, '<h2 class="counter-number">13</h2>');
content = content.replace(/<p class="counter-text">Years Of Experience<\/p>/, '<p class="counter-text">Years In Business</p>');

content = content.replace(/<h2 class="counter-number">134<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Completed Project<\/p>/, '<p class="counter-text">Percent Waterproof</p>');

content = content.replace(/<h2 class="counter-number">344<\/h2>/, '<h2 class="counter-number">50</h2>');
content = content.replace(/<p class="counter-text">Total Client<\/p>/, '<p class="counter-text">Year Lifespan</p>');

content = content.replace(/<h2 class="counter-number">89<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Team Member<\/p>/, '<p class="counter-text">Percent Guaranteed</p>');

// 17. LINES 1281–1308 — THREE IMAGES
content = content.replace(/src="\.\/assets\/images\/7790\.avif"/g, 'src="./assets/images/roofing-02.jpg"');
content = content.replace(/src="\.\/assets\/images\/58251\.avif"/g, 'src="./assets/images/roofing-03.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150990725\.avif"/g, 'src="./assets/images/roofing-04.jpg"');

// 18. LINES 1441–1559 — OUR SERVICES SECTION
content = content.replace(/<h3 class="secondary-heading">Pipe Repair<\/h3>/, '<h3 class="secondary-heading">Rubber Roof Installation</h3>');
content = content.replace(/<h3 class="secondary-heading">Water Heater<\/h3>/, '<h3 class="secondary-heading">Roofing Supplies</h3>');
content = content.replace(/<h3 class="secondary-heading">Drain Cleaning<\/h3>/, '<h3 class="secondary-heading">Flat Roof Replacements</h3>');

content = content.replace(/<p class="margin-bottom-24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<\/p>/g, '<p class="margin-bottom-24px">We offer premium EPDM solutions designed for maximum durability and weather resistance.</p>');

content = content.replace(/src="\.\/assets\/images\/2150746310\.avif"/g, 'src="./assets/images/roofing-05.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150746309\.avif"/g, 'src="./assets/images/roofing-06.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721567\.avif"/g, 'src="./assets/images/roofing-07.jpg"');

// 19. LINES 1560–1729 — OUR PROJECT SECTION
content = content.replace(/<h2 class="heading">Check Out Our Recent Projects<\/h2>/, '<h2 class="heading">Our Roofing Applications</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Rubber roofing is versatile and perfect for a wide range of flat and low-pitch applications.</p>');

content = content.replace(/<h3 class="project-heading">Plumbing Maintenance<\/h3>/, '<h3 class="project-heading">Home Extensions</h3>');
content = content.replace(/<h3 class="project-heading">Sewer Line Repair<\/h3>/, '<h3 class="project-heading">Garage Roofs</h3>');
content = content.replace(/<h3 class="project-heading">Kitchen Plumbing<\/h3>/, '<h3 class="project-heading">Dormer Windows</h3>');
content = content.replace(/<h3 class="project-heading">Commercial Repiping<\/h3>/, '<h3 class="project-heading">Garden Sheds</h3>');
content = content.replace(/<h3 class="project-heading">Drain Unclogging<\/h3>/, '<h3 class="project-heading">Commercial Properties</h3>');
content = content.replace(/<h3 class="project-heading">Emergency Services<\/h3>/, '<h3 class="project-heading">Green Roofs</h3>');

content = content.replace(/src="\.\/assets\/images\/13430\.avif"/g, 'src="./assets/images/roofing-08.jpg"');
content = content.replace(/src="\.\/assets\/images\/2148095762\.avif"/g, 'src="./assets/images/roofing-09.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721573\.avif"/g, 'src="./assets/images/roofing-10.jpg"');
content = content.replace(/src="\.\/assets\/images\/article-plumbing-tips\.jpg"/g, 'src="./assets/images/roofing-11.jpg"');
content = content.replace(/src="\.\/assets\/images\/drain-cleaning-service\.jpg"/g, 'src="./assets/images/roofing-12.jpg"');
content = content.replace(/src="\.\/assets\/images\/project-repiping\.jpg"/g, 'src="./assets/images/roofing-13.jpg"');

// 20. LINES 1889–2190 — PRICING SECTION
content = content.replace(/<h2 class="heading">Affordable Plumbing Solutions<\/h2>/, '<h2 class="heading">Competitive Material & Installation Quotes</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Whether you need materials supplied or a full roof installation, we offer excellent value for top-tier EPDM products.</p>');

content = content.replace(/<h3 class="plan-heading">Basic Plan<\/h3>/, '<h3 class="plan-heading">Roofing Supplies</h3>');
content = content.replace(/<p class="_15px-text">Ideal for minor repairs and basic installations\.\<\/p>/, '<p class="_15px-text">Get a quote for EPDM membranes, adhesives, and trims for your DIY or trade project.</p>');
content = content.replace(/<h2 class="pricing-number">\$99<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Standard Plan<\/h3>/, '<h3 class="plan-heading">Garage Roof Installation</h3>');
content = content.replace(/<p class="_15px-text">Perfect for standard home maintenance\.\<\/p>/, '<p class="_15px-text">Professional installation of a seamless rubber roof on standard domestic garages.</p>');
content = content.replace(/<h2 class="pricing-number">\$199<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Premium Plan<\/h3>/, '<h3 class="plan-heading">Extension Roof Installation</h3>');
content = content.replace(/<p class="_15px-text">Comprehensive coverage for large homes\.\<\/p>/, '<p class="_15px-text">Full supply and fit service for new home extensions requiring durable flat roofing.</p>');
content = content.replace(/<h2 class="pricing-number">\$299<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

// 21. LINES 2722–2968 — FAQ SECTION
content = content.replace(/<h2 class="heading">Frequently Asked Questions<\/h2>/, '<h2 class="heading">Frequently Asked Questions</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Learn more about the benefits of rubber roofing.</p>');

content = content.replace(/<h3 class="faq-question">What types of plumbing services do you offer\?<\/h3>/, '<h3 class="faq-question">How long does a rubber roof last?</h3>');
content = content.replace(/<p class="faq-answer">We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.<\/p>/, '<p class="faq-answer">EPDM rubber roofing is incredibly durable and can last up to 50 years with minimal maintenance, far outlasting traditional felt roofs.</p>');

content = content.replace(/<h3 class="faq-question">Do you provide emergency plumbing services\?<\/h3>/, '<h3 class="faq-question">Do you supply materials for DIY?</h3>');
content = content.replace(/<p class="faq-answer">Yes, we offer 24\/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.<\/p>/, '<p class="faq-answer">Yes, we supply a wide range of rubber roofing materials, trims, and adhesives to both trade professionals and DIY enthusiasts.</p>');

content = content.replace(/src="\.\/assets\/images\/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif"/g, 'src="./assets/images/roofing-14.jpg"');

// 22. LINE 3095 ONWARD — FOOTER
content = content.replace(/<p class="_15px-text white">We provide expert plumbing solutions for residential and commercial properties\.\s*With 24\/7 emergency service and a team of certified master plumbers, we ensure\s*your home’s water systems run smoothly and efficiently\.<\/p>/, '<p class="_15px-text white">UK Rubber Roofing Ltd is your trusted supplier and installer of premium EPDM flat roofing systems in Wolverhampton and the West Midlands.</p>');
content = content.replace(/<h3 class="footer-heading">Services<\/h3>[\s\S]*?(?=<\/ul>)/, `<h3 class="footer-heading">Services</h3>
                            <ul role="list" class="footer-list w-list-unstyled">
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Rubber Roof Installation</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Roofing Supplies</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Flat Roofs</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Garage Roofs</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Extensions</a>
                                </li>`);

content = content.replace(/<p class="copyright-text">Copyright © 2024 Theriss\. All Rights Reserved\.<\/p>/, '<p class="copyright-text">Copyright © 2024 UK Rubber Roofing Ltd. All Rights Reserved.</p>');

// Clean up remaining Lorems
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\.( Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\.)?(\s*Ut enim ad minim veniam\.)?/g, 'We provide professional rubber roofing services.'); 
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\./g, 'Explore our EPDM products.'); 
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/g, 'Dedicated to durable flat roofing'); 
content = content.replace(/lorem/g, 'quality'); 
content = content.replace(/Lorem/g, 'Quality'); 

fs.writeFileSync(targetFile, content);
console.log('Update Complete.');
