$file = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\GreatIslandRoofingLtd\index.html"
$content = Get-Content $file -Raw

# Batch 1: Header to Hero
$content = $content -replace '<title>Business template</title>', '<title>Great Island Roofing Ltd.</title>'
$content = $content -replace '<p class="_14px-text">\+923347200660</p>', '<p class="_14px-text">(089) 982 4970</p>'
$content = $content -replace '<p class="_14px-text break">info@theriss\.net</p>', '<p class="_14px-text break">greatislandroofingltd@gmail.com</p>'
$content = $content -replace '<p class="_15px-400">info@theriss\.net</p>', '<p class="_15px-400">greatislandroofingltd@gmail.com</p>'
$content = $content -replace '<p class="_15px-400">\+923347200660</p>', '<p class="_15px-400">(089) 982 4970</p>'
$content = $content -replace '<p class="_15px-400">9261 Candice Trail,  <br />North Carolina, United States</p>', '<p class="_15px-400">Cobh, Co. Cork,<br />Ireland</p>'
$content = $content -replace '<h1 class="hero-title">Expert Plumbing Solutions for Every Home</h1>', '<h1 class="hero-title">Trusted Roofing Contractors in Cork</h1>'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.', 'Great Island Roofing Ltd. provides comprehensive roofing and guttering services across Cork, including emergency repairs and new installations.'

# Batch 2: Why Choose Us
$content = $content -replace 'With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.', 'With years of experience, our local roofing experts deliver top-quality service on every job in Cork.'
$content = $content -replace '>24/7 Availability<', '>Expert Local Roofers<'
$content = $content -replace 'Plumbing issues can happen anytime\. That&\#x27;s why\s*we&\#x27;re available around the clock to handle your emergencies\.', 'Based directly in Cobh, Cork, we respond quickly to handle your roofing emergencies and protect your home.'
$content = $content -replace 'No hidden fees—just honest, transparent pricing so you know exactly what\s*you&\#x27;re paying for before we start\.', 'We provide clear, honest estimates so you know exactly what you are paying for before we start your roofing project.'

# Batch 3: Get a Quote Section
$content = $content -replace 'Tell us about your plumbing project or emergency issue.', 'Tell us about your roofing project or repair issue.'
$content = $content -replace 'Every repair and installation is handled by master plumbers backed by warranty.', 'Every project is handled by our skilled team of local roofers.'
$content = $content -replace 'Choose a Plumbing Service...', 'Choose a Roofing Service...'
$content = $content -replace 'Emergency Plumbing &amp; Leak Repair', 'Roof Leak Repair'
$content = $content -replace 'Drain Cleaning &amp; Clog Removal', 'New Roof Installation'
$content = $content -replace 'Water Heater Repair &amp; Installation', 'Flat Roofing'
$content = $content -replace 'Pipe Repair &amp; Whole-Home Repiping', 'Slate and Tile Roofing'
$content = $content -replace 'Bathroom &amp; Kitchen Fixture Plumbing', 'Chimney Repair'
$content = $content -replace 'Slab Leak &amp; Underground Leak Detection', 'Guttering, Fascia, Soffit'
$content = $content -replace 'Commercial Plumbing Solutions', 'Commercial Roofing Solutions'
$content = $content -replace 'Describe Your Plumbing Need', 'Describe Your Roofing Need'
$content = $content -replace 'One of our certified plumbing specialists', 'One of our roofing specialists'

# Batch 4: About Us Image & Text
$content = $content -replace '\./assets/images/2150721551\.avif', './assets/images/roofing-01.jpg'
$content = $content -replace '>Committed to Delivering Quality and Innovation<', '>Committed to Delivering Quality Roofing in Cork<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.', 'Great Island Roofing Ltd. is dedicated to providing superior roofing solutions built to withstand the Irish weather and protect your property.'
$content = $content -replace 'ed do eiusmod tempor incididunt ut labore et dolore', 'Provide secure and durable roofing for homes across Cork.'

# Batch 5: Stats Header & Numbers & 3 Images Block
$content = $content -replace '>Our Stats at a Glance<', '>Proven Roofing Experience<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.', 'Our commitment to quality local service in Cork speaks for itself.'
$content = $content -replace '\./assets/images/7790\.avif', './assets/images/roofing-02.jpg'
$content = $content -replace '\./assets/images/58251\.avif', './assets/images/roofing-03.jpg'
$content = $content -replace '\./assets/images/2150990725\.avif', './assets/images/roofing-04.jpg'
$content = $content -replace '>24<', '>10+<'
$content = $content -replace '>Years Of Experience<', '>Years Experience<'
$content = $content -replace '>134<', '>500+<'
$content = $content -replace '>Completed Project<', '>Projects Completed<'
$content = $content -replace '>344<', '>500+<'
$content = $content -replace '>Total Client<', '>Happy Clients<'
$content = $content -replace '>89<', '>100%<'
$content = $content -replace '>Team Member<', '>Local Service<'

# Batch 6: Services Section
$content = $content -replace '\./assets/images/2150746310\.avif', './assets/images/roofing-05.jpg'
$content = $content -replace '\./assets/images/2150746309\.avif', './assets/images/roofing-06.jpg'
$content = $content -replace '\./assets/images/2150721567\.avif', './assets/images/roofing-07.jpg'
$content = $content -replace '>Pipe Repair<', '>Roof Replacements<'
$content = $content -replace '>Water Heater<', '>Flat Roofing<'
$content = $content -replace '>Drain Cleaning<', '>Emergency Repairs<'
$content = $content -replace '>Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<', '>Professional and reliable service for your property.<'

# Batch 7: Projects Section
$content = $content -replace '\./assets/images/13430\.avif', './assets/images/roofing-08.jpg'
$content = $content -replace '\./assets/images/2148095762\.avif', './assets/images/roofing-09.jpg'
$content = $content -replace '\./assets/images/2150721573\.avif', './assets/images/roofing-10.jpg'
$content = $content -replace '\./assets/images/article-plumbing-tips\.jpg', './assets/images/roofing-11.jpg'
$content = $content -replace '\./assets/images/drain-cleaning-service\.jpg', './assets/images/roofing-12.jpg'
$content = $content -replace '\./assets/images/project-repiping\.jpg', './assets/images/roofing-13.jpg'
$content = $content -replace '\./assets/images/article-water-heater\.jpg', './assets/images/roofing-15.jpg'
$content = $content -replace '>Plumbing Maintenance<', '>Roof Maintenance<'
$content = $content -replace '>Sewer Line Repair<', '>New Roof Installations<'
$content = $content -replace '>Kitchen Plumbing<', '>Leak Repairs<'
$content = $content -replace '>Commercial Repiping<', '>Flat Roofing<'
$content = $content -replace '>Drain Unclogging<', '>Guttering & Fascia<'

# Batch 8: Pricing Section Text
$content = $content -replace '>Basic Plan<', '>Roof Repair Quote<'
$content = $content -replace '>Standard Plan<', '>New Roof Quote<'
$content = $content -replace '>Premium Plan<', '>Flat Roof Quote<'
$content = $content -replace '>Ideal for minor repairs and basic installations\.<', '>Request an estimate for minor roof repairs and leaks.<'
$content = $content -replace '>Perfect for standard home maintenance\.<', '>Request a comprehensive quote for a brand new roof.<'
$content = $content -replace '>Comprehensive coverage for large homes\.<', '>Get an assessment and quote for flat roofing work.<'
$content = $content -replace '>\$99<', '>Request Quote<'
$content = $content -replace '>\$199<', '>Request Quote<'
$content = $content -replace '>\$299<', '>Request Quote<'
$content = $content -replace '>/visit<', '>- Free<'

# Batch 9: FAQ Section Text & Image
$content = $content -replace '\./assets/images/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif', './assets/images/roofing-14.jpg'
$content = $content -replace 'What types of plumbing services do you offer\?', 'What areas do you cover?'
$content = $content -replace 'We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.', 'We provide roofing and guttering services across Cork, including Cobh and surrounding areas.'
$content = $content -replace 'Do you provide emergency plumbing services\?', 'Do you provide emergency roofing services?'
$content = $content -replace 'Yes, we offer 24/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.', 'Yes, we offer emergency repair services for storm damage and urgent leaks to protect your home.'

# Batch 10: Footer Section
$content = $content -replace '>Copyright © 2024 Theriss\. All Rights Reserved\.<', '>Copyright © 2024 Great Island Roofing Ltd. All Rights Reserved.<'
$content = $content -replace '>We provide expert plumbing solutions for residential and commercial properties\.<', '>Expert roofing and guttering solutions in Cork.<'

Set-Content -Path $file -Value $content
