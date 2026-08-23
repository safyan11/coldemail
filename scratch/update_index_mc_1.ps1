$file = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\MCRoofingandGuttering\index.html"
$content = Get-Content $file -Raw

# Batch 2: Why Choose Us
$content = $content -replace 'With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.', 'As a trusted local business in Limerick, we deliver top-quality roofing and guttering services on every job, big or small.'
$content = $content -replace '>24/7 Availability<', '>Dedicated Support<'
$content = $content -replace 'Plumbing issues can happen anytime\. That&\#x27;s why\s*we&\#x27;re available around the clock to handle your emergencies\.', 'Roofing issues can be stressful. We&\#x27;re dedicated to responding quickly and efficiently to handle your property''s needs.'
$content = $content -replace 'No hidden fees—just honest, transparent pricing so you know exactly what\s*you&\#x27;re paying for before we start\.', 'No hidden fees—just honest, transparent pricing for all our roofing and guttering services before we start.'

# Batch 3: Get a Quote Section
$content = $content -replace 'Tell us about your plumbing project or emergency issue.', 'Tell us about your roofing or guttering project.'
$content = $content -replace 'Every repair and installation is handled by master plumbers backed by warranty.', 'Every repair and installation is handled by our skilled team backed by quality.'
$content = $content -replace 'Choose a Plumbing Service...', 'Choose a Roofing Service...'
$content = $content -replace 'Emergency Plumbing &amp; Leak Repair', 'Emergency Roof Repair'
$content = $content -replace 'Drain Cleaning &amp; Clog Removal', 'Gutter Cleaning &amp; Repair'
$content = $content -replace 'Water Heater Repair &amp; Installation', 'Roof Inspection &amp; Maintenance'
$content = $content -replace 'Pipe Repair &amp; Whole-Home Repiping', 'Flat Roof &amp; Slate Repair'
$content = $content -replace 'Bathroom &amp; Kitchen Fixture Plumbing', 'Fascia &amp; Soffit Installation'
$content = $content -replace 'Slab Leak &amp; Underground Leak Detection', 'Chimney Flashing &amp; Repair'
$content = $content -replace 'Commercial Plumbing Solutions', 'Commercial Roofing Solutions'
$content = $content -replace 'Describe Your Plumbing Need', 'Describe Your Roofing Need'
$content = $content -replace 'One of our certified plumbing specialists', 'One of our roofing specialists'

# Batch 4: About Us Image & Text
$content = $content -replace '\./assets/images/2150721551\.avif', './assets/images/roofing-01.jpg'
$content = $content -replace '>Committed to Delivering Quality and Innovation<', '>Committed to Quality Roofing in Limerick<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do\s*eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam\.', 'Located in Crossgalla Industrial Estate, MC Roofing and Guttering is dedicated to protecting your property with top-tier roofing and guttering solutions.'
$content = $content -replace 'ed do eiusmod tempor incididunt ut labore et dolore', 'Provide secure and durable roofing for Limerick.'

# Batch 5: Stats Header
$content = $content -replace '>Our Stats at a Glance<', '>Proven Roofing Experience<'
$content = $content -replace 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.', 'Our commitment to quality service across Limerick speaks for itself.'

Set-Content -Path $file -Value $content
