const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('../coldemail/UKRoofSurveysLtd/index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. LINE 7 — PAGE TITLE
content = content.replace(/<title>Business template<\/title>/, '<title>UK Roof Surveys Ltd</title>');

// 2. LINE 62 — PHONE
content = content.replace(/<p class="_14px-text">\+923347200660<\/p>/, '<p class="_14px-text">0330 053 5095</p>');

// 3. LINE 70 — EMAIL
content = content.replace(/<p class="_14px-text break">info@theriss\.net<\/p>/, '<p class="_14px-text break">info@ukrss.co.uk</p>');

// 4. LINE 78 — BUSINESS HOURS
// No verified hours

// 5. LINE 163 — EMAIL
content = content.replace(/<p class="_15px-400">info@theriss\.net<\/p>/, '<p class="_15px-400">info@ukrss.co.uk</p>');

// 6. LINE 170 — PHONE
content = content.replace(/<p class="_15px-400">\+923347200660<\/p>/, '<p class="_15px-400">0330 053 5095</p>');

// 7. LINE 177 — ADDRESS
content = content.replace(/<p class="_15px-400">9261 Candice Trail,\s*<br \/>North Carolina, United States<\/p>/, '<p class="_15px-400">86-90 Paul Street, <br />London, EC2A 4NE</p>');

// 8. LINE 516 — HERO HEADING
content = content.replace(/<h1 class="hero-title">Expert Plumbing Solutions for Every Home<\/h1>/, '<h1 class="hero-title">Independent Roof Surveying Across the UK</h1>');

// 9. LINES 517–518 — HERO PARAGRAPH
content = content.replace(/<p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.<\/p>/, '<p class="hero-paragraph">UK Roof Surveys Ltd provides professional, impartial roof inspections and leak investigations nationwide. We offer expert reports without the pressure of repair sales.</p>');

// 10. LINES 535–570 — WHY CHOOSE US SECTION
content = content.replace(/>24\/7 Availability</, '>Truly Independent<');
content = content.replace(/<p class="_15px-text">Plumbing issues can happen anytime\. That&#x27;s why\s*we&#x27;re available around the clock to handle your emergencies\.<\/p>/, '<p class="_15px-text">We do not undertake remedial work, ensuring our surveys and recommendations remain completely unbiased.</p>');

content = content.replace(/>Certified Experts</, '>Nationwide Service<');
content = content.replace(/<p class="_15px-text">With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.<\/p>/, '<p class="_15px-text">Based in London but operating across the UK, our expert surveyors can reach you wherever your property is located.</p>');

content = content.replace(/>Upfront Pricing</, '>Detailed Reports<');
content = content.replace(/<p class="_15px-text">No hidden fees—just honest, transparent pricing so you know exactly what\s*you&#x27;re paying for before we start\.<\/p>/, '<p class="_15px-text">Our comprehensive surveys are trusted by homeowners, landlords, buyers, and commercial clients alike.</p>');

// 11. LINES 986–1174 — GET A QUOTE SECTION
content = content.replace(/<h2 class="white-heading">Get a Free Estimate<\/h2>/, '<h2 class="white-heading">Request a Survey Quote</h2>');
content = content.replace(/<p class="secondary-pargraph">Tell us about your plumbing project or emergency issue\. Every repair and\s*installation is handled by master plumbers backed by warranty\.<\/p>/, '<p class="secondary-pargraph">Tell us about your property and survey requirements. We provide impartial reports for residential and commercial roofs.</p>');

content = content.replace(/<option value="">Choose a Plumbing Service\.\.\.<\/option>/, '<option value="">Choose a Survey Service...</option>');
content = content.replace(/<option value="Emergency Plumbing &amp; Leak Repair">Emergency Plumbing &amp; Leak Repair<\/option>/, '<option value="Comprehensive Roof Survey">Comprehensive Roof Survey</option>');
content = content.replace(/<option value="Drain Cleaning &amp; Clog Removal">Drain Cleaning &amp; Clog Removal<\/option>/, '<option value="Leak Investigation">Leak Investigation</option>');
content = content.replace(/<option value="Water Heater Repair &amp; Installation">Water Heater Repair &amp; Installation<\/option>/, '<option value="Drone Roof Inspection">Drone Roof Inspection</option>');
content = content.replace(/<option value="Pipe Repair &amp; Whole-Home Repiping">Pipe Repair &amp; Whole-Home Repiping<\/option>/, '<option value="Chimney Inspection">Chimney Inspection</option>');
content = content.replace(/<option value="Bathroom &amp; Kitchen Fixture Plumbing">Bathroom &amp; Kitchen Fixture Plumbing<\/option>/, '<option value="Commercial Roof Survey">Commercial Roof Survey</option>');
content = content.replace(/<option value="Slab Leak &amp; Underground Leak Detection">Slab Leak &amp; Underground Leak Detection<\/option>/, '<option value="Pre-Purchase Survey">Pre-Purchase Survey</option>');
content = content.replace(/<option value="Commercial Plumbing Solutions">Commercial Plumbing Solutions<\/option>/, '<option value="Other Inspection">Other Inspection</option>');

content = content.replace(/<label for="Message">Describe Your Plumbing Need<\/label>/, '<label for="Message">Describe Your Property Details</label>');
content = content.replace(/<p class="gray-text">\*One of our certified plumbing specialists will contact you within 30 minutes\.<\/p>/, '<p class="gray-text">*Our surveying team will review your request and get back to you promptly.</p>');

// 12. LINE 1185 — IMAGE
content = content.replace(/src="\.\/assets\/images\/2150721551\.avif"/g, 'src="./assets/images/roofing-01.jpg"');

// 13. LINE 1196 — COMPANY HOOK HEADING
content = content.replace(/<h2 class="heading">Committed to Delivering Quality and Innovation<\/h2>/, '<h2 class="heading">Impartial Roof Inspections You Can Trust</h2>');

// 14. LINES 1198–1199 — COMPANY DESCRIPTION
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.<\/p>/, '<p class="margin-bottom-40px">UK Roof Surveys Ltd is dedicated to providing clear, independent analysis of your roof’s condition. We serve homeowners, buyers, and estate agents with honest reporting.</p>');

// 15. LINES 1202–1204 AND 1210–1213 — MISSION AND VISION
content = content.replace(/<p class="_15px-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore<\/p>/, '<p class="_15px-text">To deliver detailed, unbiased roof surveys that empower property owners and buyers to make informed decisions.</p>');
content = content.replace(/<p class="_15px-text">ed do eiusmod tempor incididunt ut labore et dolore\s*Lorem ipsum dolor sit amet<\/p>/, '<p class="_15px-text">To be the UK’s leading independent roof surveying firm, known for our integrity and expertise.</p>');

// 16. LINE 1266–1269 — STATS SECTION
content = content.replace(/<h2 class="white-heading">Our Stats at a Glance<\/h2>/, '<h2 class="white-heading">Our Nationwide Reach</h2>');
content = content.replace(/<p class="secondary-pargraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.<\/p>/, '<p class="secondary-pargraph">Providing professional roof reporting to clients across the entire UK.</p>');

content = content.replace(/<h2 class="counter-number">24<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Years Of Experience<\/p>/, '<p class="counter-text">Percent Impartial</p>');

content = content.replace(/<h2 class="counter-number">134<\/h2>/, '<h2 class="counter-number">500</h2>');
content = content.replace(/<p class="counter-text">Completed Project<\/p>/, '<p class="counter-text">Surveys Conducted</p>');

content = content.replace(/<h2 class="counter-number">344<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Total Client<\/p>/, '<p class="counter-text">Commercial Clients</p>');

content = content.replace(/<h2 class="counter-number">89<\/h2>/, '<h2 class="counter-number">100</h2>');
content = content.replace(/<p class="counter-text">Team Member<\/p>/, '<p class="counter-text">Detailed Reports</p>');

// 17. LINES 1281–1308 — THREE IMAGES
content = content.replace(/src="\.\/assets\/images\/7790\.avif"/g, 'src="./assets/images/roofing-02.jpg"');
content = content.replace(/src="\.\/assets\/images\/58251\.avif"/g, 'src="./assets/images/roofing-03.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150990725\.avif"/g, 'src="./assets/images/roofing-04.jpg"');

// 18. LINES 1441–1559 — OUR SERVICES SECTION
content = content.replace(/<h3 class="secondary-heading">Pipe Repair<\/h3>/, '<h3 class="secondary-heading">Comprehensive Surveys</h3>');
content = content.replace(/<h3 class="secondary-heading">Water Heater<\/h3>/, '<h3 class="secondary-heading">Leak Investigations</h3>');
content = content.replace(/<h3 class="secondary-heading">Drain Cleaning<\/h3>/, '<h3 class="secondary-heading">Drone Inspections</h3>');

content = content.replace(/<p class="margin-bottom-24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<\/p>/g, '<p class="margin-bottom-24px">In-depth analysis and reporting to accurately determine the condition of your roof.</p>');

content = content.replace(/src="\.\/assets\/images\/2150746310\.avif"/g, 'src="./assets/images/roofing-05.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150746309\.avif"/g, 'src="./assets/images/roofing-06.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721567\.avif"/g, 'src="./assets/images/roofing-07.jpg"');

// 19. LINES 1560–1729 — OUR PROJECT SECTION
content = content.replace(/<h2 class="heading">Check Out Our Recent Projects<\/h2>/, '<h2 class="heading">Our Inspection Services</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">We offer a variety of surveying methods to suit different property types and roofing systems.</p>');

content = content.replace(/<h3 class="project-heading">Plumbing Maintenance<\/h3>/, '<h3 class="project-heading">Residential Surveys</h3>');
content = content.replace(/<h3 class="project-heading">Sewer Line Repair<\/h3>/, '<h3 class="project-heading">Commercial Roofs</h3>');
content = content.replace(/<h3 class="project-heading">Kitchen Plumbing<\/h3>/, '<h3 class="project-heading">Pre-Purchase Reports</h3>');
content = content.replace(/<h3 class="project-heading">Commercial Repiping<\/h3>/, '<h3 class="project-heading">Drone Mapping</h3>');
content = content.replace(/<h3 class="project-heading">Drain Unclogging<\/h3>/, '<h3 class="project-heading">Chimney Assessment</h3>');
content = content.replace(/<h3 class="project-heading">Emergency Services<\/h3>/, '<h3 class="project-heading">Dilapidation Reports</h3>');

content = content.replace(/src="\.\/assets\/images\/13430\.avif"/g, 'src="./assets/images/roofing-08.jpg"');
content = content.replace(/src="\.\/assets\/images\/2148095762\.avif"/g, 'src="./assets/images/roofing-09.jpg"');
content = content.replace(/src="\.\/assets\/images\/2150721573\.avif"/g, 'src="./assets/images/roofing-10.jpg"');
content = content.replace(/src="\.\/assets\/images\/article-plumbing-tips\.jpg"/g, 'src="./assets/images/roofing-11.jpg"');
content = content.replace(/src="\.\/assets\/images\/drain-cleaning-service\.jpg"/g, 'src="./assets/images/roofing-12.jpg"');
content = content.replace(/src="\.\/assets\/images\/project-repiping\.jpg"/g, 'src="./assets/images/roofing-13.jpg"');

// 20. LINES 1889–2190 — PRICING SECTION
content = content.replace(/<h2 class="heading">Affordable Plumbing Solutions<\/h2>/, '<h2 class="heading">Impartial Survey Quotes</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">We offer transparent quotes for our independent surveys. Prices depend on property size and location.</p>');

content = content.replace(/<h3 class="plan-heading">Basic Plan<\/h3>/, '<h3 class="plan-heading">Leak Investigation</h3>');
content = content.replace(/<p class="_15px-text">Ideal for minor repairs and basic installations\.\<\/p>/, '<p class="_15px-text">Targeted survey to identify the source of water ingress.</p>');
content = content.replace(/<h2 class="pricing-number">\$99<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Standard Plan<\/h3>/, '<h3 class="plan-heading">Full Roof Survey</h3>');
content = content.replace(/<p class="_15px-text">Perfect for standard home maintenance\.\<\/p>/, '<p class="_15px-text">Comprehensive reporting ideal for home buyers and landlords.</p>');
content = content.replace(/<h2 class="pricing-number">\$199<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

content = content.replace(/<h3 class="plan-heading">Premium Plan<\/h3>/, '<h3 class="plan-heading">Drone Inspection</h3>');
content = content.replace(/<p class="_15px-text">Comprehensive coverage for large homes\.\<\/p>/, '<p class="_15px-text">High-resolution aerial imagery for hard-to-reach roofs.</p>');
content = content.replace(/<h2 class="pricing-number">\$299<\/h2>/, '<h2 class="pricing-number">Quote</h2>');

// 21. LINES 2722–2968 — FAQ SECTION
content = content.replace(/<h2 class="heading">Frequently Asked Questions<\/h2>/, '<h2 class="heading">Frequently Asked Questions</h2>');
content = content.replace(/<p class="margin-bottom-40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\.<\/p>/, '<p class="margin-bottom-40px">Find answers to common questions about our independent surveying services.</p>');

content = content.replace(/<h3 class="faq-question">What types of plumbing services do you offer\?<\/h3>/, '<h3 class="faq-question">Do you perform roof repairs?</h3>');
content = content.replace(/<p class="faq-answer">We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.<\/p>/, '<p class="faq-answer">No, we strictly provide independent surveying. We do not undertake any repair or remedial work, which guarantees our reports are completely impartial.</p>');

content = content.replace(/<h3 class="faq-question">Do you provide emergency plumbing services\?<\/h3>/, '<h3 class="faq-question">Where do you operate?</h3>');
content = content.replace(/<p class="faq-answer">Yes, we offer 24\/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.<\/p>/, '<p class="faq-answer">Our headquarters is in London, but we offer our professional roof surveying services nationwide across the UK.</p>');

content = content.replace(/src="\.\/assets\/images\/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif"/g, 'src="./assets/images/roofing-14.jpg"');

// 22. LINE 3095 ONWARD — FOOTER
content = content.replace(/<p class="_15px-text white">We provide expert plumbing solutions for residential and commercial properties\.\s*With 24\/7 emergency service and a team of certified master plumbers, we ensure\s*your home’s water systems run smoothly and efficiently\.<\/p>/, '<p class="_15px-text white">UK Roof Surveys Ltd provides professional, independent roof inspections and leak investigations nationwide.</p>');
content = content.replace(/<h3 class="footer-heading">Services<\/h3>[\s\S]*?(?=<\/ul>)/, `<h3 class="footer-heading">Services</h3>
                            <ul role="list" class="footer-list w-list-unstyled">
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Roof Surveys</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Leak Investigations</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Drone Inspections</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Chimney Reports</a>
                                </li>
                                <li class="footer-list-item">
                                    <a href="#" class="footer-link">Pre-Purchase Surveys</a>
                                </li>`);

content = content.replace(/<p class="copyright-text">Copyright © 2024 Theriss\. All Rights Reserved\.<\/p>/, '<p class="copyright-text">Copyright © 2024 UK Roof Surveys Ltd. All Rights Reserved.</p>');

// Clean up remaining Lorems
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\.( Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\.)?(\s*Ut enim ad minim veniam\.)?/g, 'We provide professional surveying services.'); 
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\./g, 'Explore our inspection services.'); 
content = content.replace(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/g, 'Dedicated to accurate surveying'); 
content = content.replace(/lorem/g, 'quality'); 
content = content.replace(/Lorem/g, 'Quality'); 

fs.writeFileSync(targetFile, content);
console.log('Update Complete.');
