$file = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\MCRoofingandGuttering\index.html"
$content = Get-Content $file -Raw

# Batch 6: Images (3 Images Block)
$content = $content -replace '\./assets/images/7790\.avif', './assets/images/roofing-02.jpg'
$content = $content -replace '\./assets/images/58251\.avif', './assets/images/roofing-03.jpg'
$content = $content -replace '\./assets/images/2150990725\.avif', './assets/images/roofing-04.jpg'

# Batch 7: Stats
$content = $content -replace '>24<', '>10+<'
$content = $content -replace '>Years Of Experience<', '>Years Experience<'
$content = $content -replace '>134<', '>50+<'
$content = $content -replace '>Completed Project<', '>Projects Completed<'
$content = $content -replace '>344<', '>50+<'
$content = $content -replace '>Total Client<', '>Happy Clients<'
$content = $content -replace '>89<', '>10<'
$content = $content -replace '>Team Member<', '>Local Experts<'

# Batch 8: Services Section
$content = $content -replace '\./assets/images/2150746310\.avif', './assets/images/roofing-05.jpg'
$content = $content -replace '\./assets/images/2150746309\.avif', './assets/images/roofing-06.jpg'
$content = $content -replace '\./assets/images/2150721567\.avif', './assets/images/roofing-07.jpg'

$content = $content -replace '>Pipe Repair<', '>Roofing Repairs<'
$content = $content -replace '>Water Heater<', '>Guttering Services<'
$content = $content -replace '>Drain Cleaning<', '>Roof Maintenance<'

$content = $content -replace '>Lorem ipsum dolor sit amet, consectetur adipiscing elit\.<', '>Professional and reliable service for your property.<'

# Batch 9: Projects Section
$content = $content -replace '\./assets/images/13430\.avif', './assets/images/roofing-08.jpg'
$content = $content -replace '\./assets/images/2148095762\.avif', './assets/images/roofing-09.jpg'
$content = $content -replace '\./assets/images/2150721573\.avif', './assets/images/roofing-10.jpg'
$content = $content -replace '\./assets/images/article-plumbing-tips\.jpg', './assets/images/roofing-11.jpg'
$content = $content -replace '\./assets/images/drain-cleaning-service\.jpg', './assets/images/roofing-12.jpg'
$content = $content -replace '\./assets/images/project-repiping\.jpg', './assets/images/roofing-13.jpg'
$content = $content -replace '\./assets/images/article-water-heater\.jpg', './assets/images/roofing-13.jpg' # Fallback for extra images in some blocks

$content = $content -replace '>Plumbing Maintenance<', '>Roof Replacement<'
$content = $content -replace '>Sewer Line Repair<', '>Gutter Installation<'
$content = $content -replace '>Kitchen Plumbing<', '>Flat Roof Repair<'
$content = $content -replace '>Commercial Repiping<', '>Chimney Repair<'
$content = $content -replace '>Drain Unclogging<', '>Fascia and Soffit<'

# Batch 10: Pricing Section Text
$content = $content -replace '>Basic Plan<', '>Roof Repair Estimate<'
$content = $content -replace '>Standard Plan<', '>Gutter Installation Quote<'
$content = $content -replace '>Premium Plan<', '>Full Maintenance Check<'
$content = $content -replace '>Ideal for minor repairs and basic installations\.<', '>Request a quote for minor roof repairs.<'
$content = $content -replace '>Perfect for standard home maintenance\.<', '>Request an estimate for new guttering.<'
$content = $content -replace '>Comprehensive coverage for large homes\.<', '>Full property roofing and gutter inspection.<'
$content = $content -replace '>\$99<', '>Request Quote<'
$content = $content -replace '>\$199<', '>Request Quote<'
$content = $content -replace '>\$299<', '>Request Quote<'
$content = $content -replace '>/visit<', '>- Free<'

# Batch 11: FAQ Section Text & Image
$content = $content -replace '\./assets/images/vinicius-wiesehofer-UOavP_Z38lE-unsplash\.avif', './assets/images/roofing-14.jpg'
$content = $content -replace 'What types of plumbing services do you offer\?', 'What areas of Limerick do you cover?'
$content = $content -replace 'We offer a full range of plumbing services including leak repair, drain cleaning, water heater installation, pipe replacement, and emergency services for both residential and commercial properties\.', 'We provide roofing and guttering services throughout Limerick and surrounding areas.'
$content = $content -replace 'Do you provide emergency plumbing services\?', 'Do you provide emergency roof repairs?'
$content = $content -replace 'Yes, we offer 24/7 emergency plumbing services\. Our technicians are ready to respond to urgent issues like burst pipes, severe leaks, and overflowing toilets at any time of day or night\.', 'Yes, we can respond to urgent roofing issues to protect your property from leaks or storm damage.'

# Batch 12: Footer Section
$content = $content -replace '>Copyright © 2024 Theriss\. All Rights Reserved\.<', '>Copyright © 2024 MC Roofing and Guttering. All Rights Reserved.<'
$content = $content -replace '>We provide expert plumbing solutions for residential and commercial properties\.<', '>Expert roofing and guttering solutions in Limerick.<'

Set-Content -Path $file -Value $content
