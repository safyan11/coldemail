const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('../coldemail/RoofingSuppliesUK/index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. LINE 7 — PAGE TITLE
content = content.replace(/<title>Business template<\/title>/, '<title>Roofing Supplies UK</title>');

// 2. LINE 62 — PHONE
content = content.replace(/<p class="_14px-text">\+923347200660<\/p>/, '<p class="_14px-text">01752 466151</p>');

// 3. LINE 70 — EMAIL
content = content.replace(/<p class="_14px-text break">info@theriss\.net<\/p>/, '<p class="_14px-text break">sales@roofingsuppliesuk.co.uk</p>');

// 4. LINE 78 — BUSINESS HOURS
content = content.replace(/<p class="_14px-text">Mon to Fri: 08:00 - 19:00<\/p>/, '<p class="_14px-text">Mon to Fri: 08:00 - 16:00</p>');

// 5. LINE 163 — EMAIL
content = content.replace(/<p class="_15px-400">info@theriss\.net<\/p>/, '<p class="_15px-400">sales@roofingsuppliesuk.co.uk</p>');

// 6. LINE 170 — PHONE
content = content.replace(/<p class="_15px-400">\+923347200660<\/p>/, '<p class="_15px-400">01752 466151</p>');

// 7. LINE 177 — ADDRESS
content = content.replace(/<p class="_15px-400">9261 Candice Trail,\s*<br \/>North Carolina, United States<\/p>/, '<p class="_15px-400">Grace Mill Business Park, <br />Maxwell Road, Plymouth, PL4 0SN</p>');

// 8. LINE 516 — HERO HEADING
content = content.replace(/<h1 class="hero-title">Expert Plumbing Solutions for Every Home<\/h1>/, '<h1 class="hero-title">Your Trusted Online Roofing Supplier in the UK</h1>');

// 9. LINES 517–518 — HERO PARAGRAPH
content = content.replace(/<p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.<\/p>/, '<p class="hero-paragraph">Roofing Supplies UK is a premier online retailer offering nationwide delivery of roofing materials. From flat roofing to pitched roof accessories, we provide quality products and expert advice.</p>');

// 10. LINES 535–570 — WHY CHOOSE US SECTION
content = content.replace(/>24\/7 Availability</, '>Nationwide Delivery<');
content = content.replace(/<p class="_15px-text">Plumbing issues can happen anytime\. That&#x27;s why\s*we&#x27;re available around the clock to handle your emergencies\.<\/p>/, '<p class="_15px-text">We supply roofing materials to customers across the UK, offering reliable local and nationwide delivery options.</p>');

content = content.replace(/>Certified Experts</, '>Huge Selection<');
content = content.replace(/<p class="_15px-text">With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.<\/p>/, '<p class="_15px-text">Whether you need resins, tools, slates, or insulation, we stock a vast range of top-quality materials for all projects.</p>');

content = content.replace(/>Upfront Pricing</, '>Expert Advice<');
content = content.replace(/<p class="_15px-text">No hidden fees—just honest, transparent pricing so you know exactly what\s*you&#x27;re paying for before we start\.<\/p>/, '<p class="_15px-text">Trading since 2011, our independent team provides specialist guidance to ensure you get the right products for your roof.</p>');

// 11. LINES 986–1174 — GET A QUOTE SECTION
content = content.replace(/<h2 class="white-heading">Get a Free Estimate<\/h2>/, '<h2 class="white-heading">Request a Quote<\/h2>');
content = content.replace(/<p class="secondary-pargraph">Tell us about your plumbing project or emergency issue\. Every repair and\s*installation is handled by master plumbers backed by warranty\.<\/p>/, '<p class="secondary-pargraph">Tell us about your roofing material needs. We supply trade professionals and DIY enthusiasts with premium products.</p>');

content = content.replace(/<option value="">Choose a Plumbing Service\.\.\.<\/option>/, '<option value="">Choose a Material Category...</option>');
content = content.replace(/<option value="Emergency Plumbing &amp; Leak Repair">Emergency Plumbing &amp; Leak Repair<\/option>/, '<option value="Flat Roofing Materials">Flat Roofing Materials</option>');
content = content.replace(/<option value="Drain Cleaning &amp; Clog Removal">Drain Cleaning &amp; Clog Removal<\/option>/, '<option value="Pitched Roofing">Pitched Roofing</option>');
content = content.replace(/<option value="Water Heater Repair &amp; Installation">Water Heater Repair &amp; Installation<\/option>/, '<option value="Roof Windows &amp; Lights">Roof Windows &amp; Lights</option>');
content = content.replace(/<option value="Pipe Repair &amp; Whole-Home Repiping">Pipe Repair &amp; Whole-Home Repiping<\/option>/, '<option value="Insulation &amp; Ventilation">Insulation &amp; Ventilation</option>');
content = content.replace(/<option value="Bathroom &amp; Kitchen Fixture Plumbing">Bathroom &amp; Kitchen Fixture Plumbing<\/option>/, '<option value="Guttering &amp; Drainage">Guttering &amp; Drainage</option>');
content = content.replace(/<option value="Slab Leak &amp; Underground Leak Detection">Slab Leak &amp; Underground Leak Detection<\/option>/, '<option value="Roofing Tools &amp; Accessories">Roofing Tools &amp; Accessories</option>');
content = content.replace(/<option value="Commercial Plumbing Solutions">Commercial Plumbing Solutions<\/option>/, '<option value="Large Project Supply">Large Project Supply</option>');

content = content.replace(/<label for="Message">Describe Your Plumbing Need<\/label>/, '<label for="Message">Describe Your Material Needs</label>');
content = content.replace(/<p class="gray-text">\*One of our certified plumbing specialists will contact you within 30 minutes\.<\/p>/, '<p class="gray-text">*Our expert sales team will respond promptly with availability and pricing.</p>');

// 12. LINE 1185 — IMAGE
content = content.replace(/src="\.\/assets\/images\/2150721551\.avif"/g, 'src="./assets/images/roofing-01.jpg"');

// 13. LINE 1196 — COMPANY HOOK HEADING
content = content.replace(/<h2 class="heading">Committed to Delivering Quality and Innovation<\/h2>/, '<h2 class="heading">Leading Independent Roofing Merchant</h2>');

// 14. LINES 1198–1199 — COMPANY DESCRIPTION
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.<\/p>/, '<p class="margin-bottom-40px">Roofing Supplies UK has been supplying the construction industry since 2011. Based in Plymouth, we provide high-quality flat and pitched roofing materials with a strong focus on customer service and product knowledge.</p>');

// 15. LINES 1202–1204 AND 1210–1213 — MISSION AND VISION
content = content.replace(/<p class="_15px-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore<\/p>/, '<p class="_15px-text">To deliver an unparalleled range of high-quality roofing materials efficiently to trade and retail customers nationwide.</p>');
content = content.replace(/<p class="_15px-text">ed do eiusmod tempor incididunt ut labore et dolore\s*Lorem ipsum dolor sit amet<\/p>/, '<p class="_15px-text">To be the UK’s most trusted and reliable online superstore for all roofing solutions.</p>');

// 16. LINE 1266–1269 — STATS SECTION
content = content.replace(/<h2 class="white-heading">Our Stats at a Glance<\/h2>/, '<h2 class="white-heading">Our Growth & Supply</h2>');
content = content.replace(/<p class="secondary-pargraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.<\/p>/, '<p class="secondary-pargraph">A quick look at our track record in supplying top-tier roofing materials to the UK market.</p>');

content = content.replace(/<h2 class="counter-number">24<\/h2>/, '<h2 class="counter-number">15</h2>');
content = content.replace(/<p class="counter-text">Years Of Experience<\/p>/, '<p class="counter-text">Years Trading</p>');

content = content.replace(/<h2 class="counter-number">134<\/h2>/, '<h2 class="counter-number">5000</h2>');
content = content.replace(/<p class="counter-text">Completed Project<\/p>/, '<p class="counter-text">Orders Processed</p>');

content = content.replace(/<h2 class="counter-number">344<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Total Client<\/p>/, '<p class="counter-text">Top Brands Stocked</p>');

content = content.replace(/<h2 class="counter-number">89<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Team Member<\/p>/, '<p class="counter-text">Percent Committed</p>');

// 17. LINES 1281–1308 — THREE IMAGES
content = content.replace(/src="\.\/assets\/images\/7790\.avif"/g, 'src="./assets/images/roofing-02.jpg"');
content = content.replace(/src="\.\/assets\/images\/58251\.avif"/g, 'src="./assets/images/roofing-03.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150990725\.avif"/g, 'src="./assets/images/roofing-04.jpg"');

// 18. LINES 1441–1559 — OUR SERVICES SECTION
content = content.replace(/<h3 class="secondary-heading">Pipe Repair<\/h3>/, '<h3 class="secondary-heading">Flat Roofing Supplies</h3>');
content = content.replace(/<h3 class="secondary-heading">Water Heater<\/h3>/, '<h3 class="secondary-heading">Pitched Roofing</h3>');
content = content.replace(/<h3 class="secondary-heading">Drain Cleaning<\/h3>/, '<h3 class="secondary-heading">Tools & Accessories</h3>');

// Assuming there are multiple instances of the dummy description, replace all:
content = content.replace(/<p class="margin-bottom-24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<\/p>/g, '<p class="margin-bottom-24px">We stock everything required for a durable and reliable roof, backed by specialist product knowledge.</p>');

content = content.replace(/src="\.\/assets\/images\/2150746310\.avif"/g, 'src="./assets/images/roofing-05.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150746309\.avif"/g, 'src="./assets/images/roofing-06.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721567\.avif"/g, 'src="./assets/images/roofing-07.jpg"');

// 19. LINES 1560–1729 — OUR PROJECT SECTION
content = content.replace(/<h2 class="heading">Check Out Our Recent Projects<\/h2>/, '<h2 class="heading">Featured Roofing Materials</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Explore our extensive catalog of high-performance roofing products, trusted by trade professionals across the UK.</p>');

content = content.replace(/<h3 class="project-heading">Plumbing Maintenance<\/h3>/, '<h3 class="project-heading">GRP Fibreglass Resins</h3>');
content = content.replace(/<h3 class="project-heading">Sewer Line Repair<\/h3>/, '<h3 class="project-heading">Premium Roof Slates</h3>');
content = content.replace(/<h3 class="project-heading">Kitchen Plumbing<\/h3>/, '<h3 class="project-heading">Insulation Boards</h3>');
content = content.replace(/<h3 class="project-heading">Commercial Repiping<\/h3>/, '<h3 class="project-heading">Fascias & Soffits</h3>');
content = content.replace(/<h3 class="project-heading">Drain Unclogging<\/h3>/, '<h3 class="project-heading">Velux Roof Windows</h3>');
content = content.replace(/<h3 class="project-heading">Emergency Services<\/h3>/, '<h3 class="project-heading">Guttering Systems</h3>'); // Added this one as it usually exists

content = content.replace(/src="\.\/assets\/images\/13430\.avif"/g, 'src="./assets/images/roofing-08.jpg"');
content = content.replace(/src="\.\/assets\/images\/2148095762\.avif"/g, 'src="./assets/images/roofing-09.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721573\.avif"/g, 'src="./assets/images/roofing-10.jpg"');
content = content.replace(/src="\.\/assets\/images\/article-plumbing-tips\.jpg"/g, 'src="./assets/images/roofing-11.jpg"');
content = content.replace(/src="\.\/assets\/images\/drain-cleaning-service\.jpg"/g, 'src="./assets/images/roofing-12.jpg"');
content = content.replace(/src="\.\/assets\/images\/project-repiping\.jpg"/g, 'src="./assets/images/roofing-13.jpg"');

// 20. LINES 1889–2190 — PRICING SECTION
content = content.replace(/<h2 class="heading">Affordable Plumbing Solutions<\/h2>/, '<h2 class="heading">Quality Materials at Trade Prices</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">We offer competitive pricing on a vast array of roofing supplies. Check our store for the latest deals on bulk purchases.</p>');

content = content.replace(/<h3 class="plan-heading">Basic Plan<\/h3>/, '<h3 class="plan-heading">Flat Roofing Kit</h3>');
content = content.replace(/<p class="_15px-text">Ideal for minor repairs and basic installations\.<\/p>/, '<p class="_15px-text">Complete kits including resins and topcoats for flat roofs.</p>');
content = content.replace(/<h2 class="pricing-number">\$99<\/h2>/, '<h2 class="pricing-number">Call</h2>');

content = content.replace(/<h3 class="plan-heading">Standard Plan<\/h3>/, '<h3 class="plan-heading">Roof Tiles & Slates</h3>');
content = content.replace(/<p class="_15px-text">Perfect for standard home maintenance\.<\/p>/, '<p class="_15px-text">High quality tiles and natural slates available in bulk.</p>');
content = content.replace(/<h2 class="pricing-number">\$199<\/h2>/, '<h2 class="pricing-number">Call</h2>');

content = content.replace(/<h3 class="plan-heading">Premium Plan<\/h3>/, '<h3 class="plan-heading">Roof Windows</h3>');
content = content.replace(/<p class="_15px-text">Comprehensive coverage for large homes\.<\/p>/, '<p class="_15px-text">Premium roof lights and windows for all pitched applications.</p>');
content = content.replace(/<h2 class="pricing-number">\$299<\/h2>/, '<h2 class="pricing-number">Call</h2>');

// 21. LINES 2722–2968 — FAQ SECTION
content = content.replace(/<h2 class="heading">Frequently Asked Questions<\/h2>/, '<h2 class="heading">Frequently Asked Questions</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Find answers to common questions about ordering roofing supplies and our delivery services.</p>');

content = content.replace(/<h3 class="faq-question">What types of plumbing services do you offer\?<\/h3>/, '<h3 class="faq-question">Do you deliver nationally?</h3>');
content = content.replace(/<p class="faq-answer">We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.<\/p>/, '<p class="faq-answer">Yes, we are a major online supplier offering nationwide delivery across the UK.</p>');

content = content.replace(/<h3 class="faq-question">Do you provide emergency plumbing services\?<\/h3>/, '<h3 class="faq-question">Can I get trade pricing?</h3>');
content = content.replace(/<p class="faq-answer">Yes, we offer 24\/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.<\/p>/, '<p class="faq-answer">We offer competitive pricing for all customers. Please contact our sales team at sales@roofingsuppliesuk.co.uk to discuss large orders.</p>');

content = content.replace(/src="\.\/assets\/images\/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif"/g, 'src="./assets/images/roofing-14.jpg"');

// 22. LINE 3095 ONWARD — FOOTER
content = content.replace(/<p class="_15px-text white">We provide expert plumbing solutions for residential and commercial properties\.\s*With 24\/7 emergency service and a team of certified master plumbers, we ensure\s*your home’s water systems run smoothly and efficiently\.<\/p>/, '<p class="_15px-text white">Roofing Supplies UK is your premier online merchant for roofing materials, serving both trade professionals and DIY homeowners with reliable nationwide delivery.</p>');
content = content.replace(/<h3 class="footer-heading">Services<\/h3>[\s\S]*?(?=<\/ul>)/, `<h3 class="footer-heading">Products</h3>
                            <ul role="list" class="footer-list w-list-unstyled">
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Flat Roofing</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Pitched Roofing</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Insulation</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Roof Windows</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Tools & Accessories</a>
                                </li>`);

content = content.replace(/<p class="copyright-text">Copyright © 2024 Theriss\. All Rights Reserved\.<\/p>/, '<p class="copyright-text">Copyright © 2024 Roofing Supplies UK. All Rights Reserved.</p>');


fs.writeFileSync(targetFile, content);
console.log('Update Complete.');
