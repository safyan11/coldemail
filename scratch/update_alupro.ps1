$file = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\AluProRoofersLimerick\index.html"
$content = Get-Content $file -Raw

# Batch 1: Header to Hero
$content = $content -replace '<title>Business template</title>', '<title>AluPro Roofers Limerick</title>'
$content = $content -replace '<p class="_14px-text">\+923347200660</p>', '<p class="_14px-text">085 7700458</p>'
$content = $content -replace '<p class="_14px-text break">info@theriss\.net</p>', '<p class="_14px-text break">info@aluproroofers.com</p>'
$content = $content -replace '<p class="_15px-400">info@theriss\.net</p>', '<p class="_15px-400">info@aluproroofers.com</p>'
$content = $content -replace '<p class="_15px-400">\+923347200660</p>', '<p class="_15px-400">085 7700458</p>'
$content = $content -replace '<p class="_15px-400">9261 Candice Trail,  <br />North Carolina, United States</p>', '<p class="_15px-400">Raheen Business Park, <br />Ballykeeffe, Limerick</p>'
$content = $content -replace '<h1 class="hero-title">Expert Plumbing Solutions for Every Home</h1>', '<h1 class="hero-title">Expert Roofing Across the Munster Region</h1>'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.', 'AluPro Roofers offers over 30 years of experience in roof repairs, flat roofing, slate and tile roofing, chimney repairs, and guttering for homes and businesses across Munster.'

# Batch 2: Why Choose Us
$content = $content -replace 'With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.', 'With over 30 years of experience, we deliver top-quality roofing service on every job, big or small.'
$content = $content -replace '>24/7 Availability<', '>Munster Coverage<'
$content = $content -replace 'Plumbing issues can happen anytime\. That&\#x27;s why\s*we&\#x27;re available around the clock to handle your emergencies\.', 'Serving Limerick, Cork, Kerry, Clare, and Tipperary with reliable and professional roofing solutions.'
$content = $content -replace 'No hidden fees—just honest, transparent pricing so you know exactly what\s*you&\#x27;re paying for before we start\.', 'We provide upfront quotes for roof and chimney repairs, ensuring you know what to expect before work starts.'

# Batch 3: Get a Quote Section
$content = $content -replace 'Tell us about your plumbing project or emergency issue.', 'Tell us about your roofing project or emergency repair issue.'
$content = $content -replace 'Every repair and installation is handled by master plumbers backed by warranty.', 'Every repair and installation is handled by our skilled roofers backed by decades of experience.'
$content = $content -replace 'Choose a Plumbing Service...', 'Choose a Roofing Service...'
$content = $content -replace 'Emergency Plumbing &amp; Leak Repair', 'Emergency Roof Leak Repair'
$content = $content -replace 'Drain Cleaning &amp; Clog Removal', 'New Roof Installation'
$content = $content -replace 'Water Heater Repair &amp; Installation', 'Flat Roofing (EPDM, GRP)'
$content = $content -replace 'Pipe Repair &amp; Whole-Home Repiping', 'Slate and Tile Roofing'
$content = $content -replace 'Bathroom &amp; Kitchen Fixture Plumbing', 'Chimney Repair'
$content = $content -replace 'Slab Leak &amp; Underground Leak Detection', 'Guttering, Fascia, Soffit'
$content = $content -replace 'Commercial Plumbing Solutions', 'Commercial Roofing Solutions'
$content = $content -replace 'Describe Your Plumbing Need', 'Describe Your Roofing Need'
$content = $content -replace 'One of our certified plumbing specialists', 'One of our roofing specialists'

# Batch 4: About Us Image & Text
$content = $content -replace '\./assets/images/2150721551\.avif', './assets/images/roofing-01.jpg'
$content = $content -replace '>Committed to Delivering Quality and Innovation<', '>Over 30 Years of Roofing Expertise<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.', 'Based in Limerick, AluPro Roofers serves the entire Munster region with specialized flat roofing, slate, and tile solutions.'
$content = $content -replace 'ed do eiusmod tempor incididunt ut labore et dolore', 'Providing secure and durable roofs across Munster.'

# Batch 5: Stats Header & Numbers & 3 Images Block
$content = $content -replace '>Our Stats at a Glance<', '>Proven Roofing Experience<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.', 'Our 30+ years of commitment to quality service speaks for itself.'
$content = $content -replace '\./assets/images/7790\.avif', './assets/images/roofing-02.jpg'
$content = $content -replace '\./assets/images/58251\.avif', './assets/images/roofing-03.jpg'
$content = $content -replace '\./assets/images/2150990725\.avif', './assets/images/roofing-04.jpg'
$content = $content -replace '>24<', '>30+<'
$content = $content -replace '>Years Of Experience<', '>Years Experience<'
$content = $content -replace '>134<', '>1000+<'
$content = $content -replace '>Completed Project<', '>Projects Completed<'
$content = $content -replace '>344<', '>1000+<'
$content = $content -replace '>Total Client<', '>Happy Clients<'
$content = $content -replace '>89<', '>5<'
$content = $content -replace '>Team Member<', '>Munster Regions<'

# Batch 6: Services Section
$content = $content -replace '\./assets/images/2150746310\.avif', './assets/images/roofing-05.jpg'
$content = $content -replace '\./assets/images/2150746309\.avif', './assets/images/roofing-06.jpg'
$content = $content -replace '\./assets/images/2150721567\.avif', './assets/images/roofing-07.jpg'
$content = $content -replace '>Pipe Repair<', '>Flat Roofing<'
$content = $content -replace '>Water Heater<', '>Slate & Tile Roofing<'
$content = $content -replace '>Drain Cleaning<', '>Chimney Repairs<'
$content = $content -replace '>Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<', '>Professional and reliable service for your property.<'

# Batch 7: Projects Section
$content = $content -replace '\./assets/images/13430\.avif', './assets/images/roofing-08.jpg'
$content = $content -replace '\./assets/images/2148095762\.avif', './assets/images/roofing-09.jpg'
$content = $content -replace '\./assets/images/2150721573\.avif', './assets/images/roofing-10.jpg'
$content = $content -replace '\./assets/images/article-plumbing-tips\.jpg', './assets/images/roofing-11.jpg'
$content = $content -replace '\./assets/images/drain-cleaning-service\.jpg', './assets/images/roofing-12.jpg'
$content = $content -replace '\./assets/images/project-repiping\.jpg', './assets/images/roofing-13.jpg'
$content = $content -replace '\./assets/images/article-water-heater\.jpg', './assets/images/roofing-13.jpg'
$content = $content -replace '>Plumbing Maintenance<', '>Roof Repairs<'
$content = $content -replace '>Sewer Line Repair<', '>New Roof Installations<'
$content = $content -replace '>Kitchen Plumbing<', '>Torch-On Felt Roofing<'
$content = $content -replace '>Commercial Repiping<', '>GRP Fiberglass<'
$content = $content -replace '>Drain Unclogging<', '>Guttering & Fascia<'

# Batch 8: Pricing Section Text
$content = $content -replace '>Basic Plan<', '>Roof Repair Quote<'
$content = $content -replace '>Standard Plan<', '>New Roof Quote<'
$content = $content -replace '>Premium Plan<', '>Chimney Repair Quote<'
$content = $content -replace '>Ideal for minor repairs and basic installations\.<', '>Request an estimate for minor or emergency roof repairs.<'
$content = $content -replace '>Perfect for standard home maintenance\.<', '>Request a comprehensive quote for a brand new roof.<'
$content = $content -replace '>Comprehensive coverage for large homes\.<', '>Get an assessment and quote for chimney repair work.<'
$content = $content -replace '>\$99<', '>Request Quote<'
$content = $content -replace '>\$199<', '>Request Quote<'
$content = $content -replace '>\$299<', '>Request Quote<'
$content = $content -replace '>/visit<', '>- Free<'

# Batch 9: FAQ Section Text & Image
$content = $content -replace '\./assets/images/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif', './assets/images/roofing-14.jpg'
$content = $content -replace 'What types of plumbing services do you offer\?', 'What areas of Munster do you cover?'
$content = $content -replace 'We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.', 'We provide roofing and guttering services across Limerick, Cork, Kerry, Clare, and Tipperary.'
$content = $content -replace 'Do you provide emergency plumbing services\?', 'Do you handle flat roofing?'
$content = $content -replace 'Yes, we offer 24/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.', 'Yes, we specialize in flat roofing solutions including torch-on felt, EPDM, and GRP fiberglass.'

# Batch 10: Footer Section
$content = $content -replace '>Copyright © 2024 Theriss\. All Rights Reserved\.<', '>Copyright © 2024 AluPro Roofers. All Rights Reserved.<'
$content = $content -replace '>We provide expert plumbing solutions for residential and commercial properties\.<', '>Expert roofing and guttering solutions in Munster.<'

Set-Content -Path $file -Value $content
