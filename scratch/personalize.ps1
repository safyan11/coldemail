$htmlPath = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath)

$imagesDir = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\assets\images"
$availableImages = Get-ChildItem -Path $imagesDir -Filter "roofing-*.jpg" | Select-Object -ExpandProperty Name | Sort-Object
$usedImages = @("roofing-01.jpg") # Assuming pass 2 used 01

function Get-Image {
    foreach ($img in $availableImages) {
        if ($img -notin $usedImages) {
            $script:usedImages += $img
            return "./assets/images/$img"
        }
    }
    throw "Ran out of images!"
}

# 16. Stats Section
$content = $content -replace '<h2 class="white-heading">Our Stats at a Glance</h2>', '<h2 class="white-heading">Proven Track Record</h2>'
$content = $content -replace '<p class="secondary-pargraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\.\s*Suspendisse varius enim in eros elementum tristique\.</p>', '<p class="secondary-pargraph">USA Storm Roofing and Construction Group is a trusted local expert with an A+ BBB rating, delivering quality craftsmanship to homes in the DMV area.</p>'
$content = $content -replace '<h1 class="counter-title">Years of Experience</h1>', '<h1 class="counter-title">Years in Business</h1>'
$content = $content -replace '<h1 class="counter-title">Completed Projects</h1>', '<h1 class="counter-title">Roofs Replaced</h1>'
$content = $content -replace '<h1 class="counter-title">Total Clients</h1>', '<h1 class="counter-title">Satisfied Customers</h1>'
$content = $content -replace '<h1 class="counter-title">Team Members</h1>', '<h1 class="counter-title">Service Areas (DMV)</h1>'

# 17. Three Images
$img1 = Get-Image; $content = $content -replace 'src="./assets/images/7790.avif"', "src=`"$img1`""
$img2 = Get-Image; $content = $content -replace 'src="./assets/images/58251.avif"', "src=`"$img2`""
$img3 = Get-Image; $content = $content -replace 'src="./assets/images/2150721573.avif"', "src=`"$img3`""

# 18. Our Services
$content = $content -replace '<div class="highlight-title-2">Installation</div>', '<div class="highlight-title-2">Roofing</div>'
$content = $content -replace '<div class="highlight-title-2 second-title">Repairs</div>', '<div class="highlight-title-2 second-title">Siding</div>'

$img4 = Get-Image; $content = $content -replace 'src="./assets/images/2150990725.avif"', "src=`"$img4`""
$content = $content -replace '<h3 class="_24px-title-link">Plumbing Repairs</h3>', '<h3 class="_24px-title-link">Roof Replacements</h3>'
$content = $content -replace '<p class="service-paragraph">Whether you need a new water heater installation or\s*a repair to get hot water flowing again, our team provides fast and reliable\s*water heater services to keep your home comfortable\.</p>', '<p class="service-paragraph">We provide full-scale roof replacements using premium GAF-certified materials built to withstand the DMV climate. Protect your home with our lasting solutions.</p>'

$img5 = Get-Image; $content = $content -replace 'src="./assets/images/drain-cleaning-service.jpg"', "src=`"$img5`""
$content = $content -replace '<h3 class="_24px-title-link">Drain Cleaning</h3>', '<h3 class="_24px-title-link">Storm Damage Repair</h3>'
$content = $content -replace '<p class="service-paragraph">Stubborn clogs slowing down your drains\? We use\s*advanced tools and techniques to clear your drains and restore proper water\s*flow\. Say goodbye to slow drains and back-ups with RISS expert\s*solutions\.</p>', '<p class="service-paragraph">When harsh weather strikes, our rapid-response team is ready to repair leaks and structural roof damage safely. We restore your peace of mind and home integrity.</p>'

$img6 = Get-Image; $content = $content -replace 'src="./assets/images/55756.avif"', "src=`"$img6`""
$content = $content -replace '<h3 class="_24px-title-link">Water Heater Installation</h3>', '<h3 class="_24px-title-link">Siding &amp; Gutters</h3>'
# Wait, this same text was replaced above, but let's just make it simpler.
$content = $content -replace '(?s)<h3 class="_24px-title-link">Siding &amp; Gutters</h3>.*?<p class="service-paragraph">.*?</p>', '<h3 class="_24px-title-link">Siding &amp; Gutters</h3></a><div class="service-snippet"><p class="service-paragraph">Protect your home''s exterior with our expert siding installation and seamless gutter services. Boost curb appeal while ensuring optimal water drainage.</p>'

# 19. Our Projects
$content = $content -replace '<h2 class="white-heading-450px-width">Discover Our Completed Projects</h2>', '<h2 class="white-heading-450px-width">Discover Our Roofing Projects</h2>'
$img7 = Get-Image; $content = $content -replace 'src="./assets/images/13430.avif"', "src=`"$img7`""
$content = $content -replace '<h3 class="_30px-title">Sump Pump Installation</h3>', '<h3 class="_30px-title">Full Roof Replacement</h3>'

$img8 = Get-Image; $content = $content -replace 'src="./assets/images/project-repiping.jpg"', "src=`"$img8`""
$content = $content -replace '<h3 class="_30px-title">Whole-House Repiping</h3>', '<h3 class="_30px-title">Storm Damage Repair</h3>'

$img9 = Get-Image; $content = $content -replace 'src="./assets/images/2150746310.avif"', "src=`"$img9`""
$content = $content -replace '<h3 class="_30px-title">Kitchen Sink Installation</h3>', '<h3 class="_30px-title">Siding Replacement</h3>'

$img10 = Get-Image; $content = $content -replace 'src="./assets/images/2150746309.avif"', "src=`"$img10`""
$content = $content -replace '<h3 class="_30px-title">Shower &amp; Tub Replacements</h3>', '<h3 class="_30px-title">Gutter Installation</h3>'

$content = $content -replace '<h3 class="_30px-title">Water System Installation</h3>', '<h3 class="_30px-title">Commercial Roofing</h3>'

$img11 = Get-Image; $content = $content -replace 'src="./assets/images/Plumber.png"', "src=`"$img11`""
$content = $content -replace '<h3 class="_30px-title">Plumbing Rescue Mission</h3>', '<h3 class="_30px-title">Emergency Roof Patch</h3>'

$content = $content -replace '<p class="_16px-text">"Lorem ipsum dolor sit amet, consectetur\s*adipiscing elit, sed do eiusmod tempor incididunt ut labore et\s*dolore magna aliqua\. Ut enim minim\.</p>', '<p class="_16px-text">Expert execution from start to finish. Our team ensures the highest standard of quality and durability for every project.</p>'
$content = $content -replace '<p class="_16px-text">Sed ut perspiciatis unde omnis iste natus\s*error sit voluptatem accusantium doloremque laudantium, totam\s*rem aperiam, eaque ipsa quae ab illo(\s*inventore veritatis)?\.</p>', '<p class="_16px-text">Precision and care in every detail. We take pride in transforming and protecting homes throughout our service area.</p>'

# 20. Pricing
$content = $content -replace '<h2 class="heading">Our Strategic</h2>', '<h2 class="heading">Our Core</h2>'
$content = $content -replace '<div class="highlight-title-2">Pricing</div>', '<div class="highlight-title-2">Services</div>'
$content = $content -replace '<div class="highlight-title-2 second-title">Costing</div>', '<div class="highlight-title-2 second-title">Estimates</div>'
$content = $content -replace '<h2 class="_40px-title-white">Meet Our Team Members or Inquire About Our Pricing</h2>', '<h2 class="_40px-title-white">Meet Our Team Members or Inquire About Our Services</h2>'
$content = $content -replace '<div class="default-text">View Pricing</div>', '<div class="default-text">View Services</div>'
$content = $content -replace '<div class="hover-text">View Pricing</div>', '<div class="hover-text">View Services</div>'

$content = $content -replace '<h3 class="heading">Basic</h3>', '<h3 class="heading">Roof Replacements</h3>'
$content = $content -replace '<div class="_16px-600-paragraph">1 Annual Plumbing Inspection</div>', '<div class="_16px-600-paragraph">High-Quality Shingles</div>'
$content = $content -replace '<div class="_16px-600-paragraph">Priority Scheduling</div>', '<div class="_16px-600-paragraph">Expert Installation</div>'
$content = $content -replace '<div class="_16px-600-paragraph">10% Discount on All Services</div>', '<div class="_16px-600-paragraph">GAF Certified</div>'
$content = $content -replace '<div class="_16px-600-paragraph">Free Drain Cleaning</div>', '<div class="_16px-600-paragraph">Wind Resistant</div>'
$content = $content -replace '<div class="_16px-600-paragraph">24/7 Customer Support</div>', '<div class="_16px-600-paragraph">10-Year Warranty</div>'

$content = $content -replace '<h3 class="white-heading">Standard</h3>', '<h3 class="white-heading">Storm Damage Repair</h3>'
$content = $content -replace '<div class="_16px-600-paragraph secondary-paragraph">2 Annual Plumbing\s*Inspections</div>', '<div class="_16px-600-paragraph secondary-paragraph">Free Inspection</div>'
$content = $content -replace '<div class="_16px-600-paragraph secondary-paragraph">Priority Scheduling\s*</div>', '<div class="_16px-600-paragraph secondary-paragraph">Insurance Assistance</div>'
$content = $content -replace '<div class="_16px-600-paragraph secondary-paragraph">15% Discount on All\s*Services</div>', '<div class="_16px-600-paragraph secondary-paragraph">Rapid Leak Repair</div>'
$content = $content -replace '<div class="_16px-600-paragraph secondary-paragraph">Free Drain Cleaning\s*</div>', '<div class="_16px-600-paragraph secondary-paragraph">Structural Repair</div>'
$content = $content -replace '<div class="_16px-600-paragraph secondary-paragraph">1 Emergency Visit Per\s*Year</div>', '<div class="_16px-600-paragraph secondary-paragraph">Debris Cleanup</div>'

$content = $content -replace '<h3 class="heading">Premium</h3>', '<h3 class="heading">Siding &amp; Gutters</h3>'
$content = $content -replace '<div class="_16px-600-paragraph">Bi-Annual Plumbing\s*Inspections</div>', '<div class="_16px-600-paragraph">Seamless Gutters</div>'
$content = $content -replace '<div class="_16px-600-paragraph">Priority Emergency\s*Scheduling</div>', '<div class="_16px-600-paragraph">Vinyl Siding</div>'
$content = $content -replace '<div class="_16px-600-paragraph">20% Discount on All\s*Services</div>', '<div class="_16px-600-paragraph">Improved Efficiency</div>'
$content = $content -replace '<div class="_16px-600-paragraph">Free Drain Cleaning &amp;\s*Camera Inspection</div>', '<div class="_16px-600-paragraph">Weather Proofing</div>'
$content = $content -replace '<div class="_16px-600-paragraph">3 Emergency Visits Per\s*Year</div>', '<div class="_16px-600-paragraph">Curb Appeal</div>'

[System.IO.File]::WriteAllText($htmlPath, $content)
Write-Output "Applied third pass"
