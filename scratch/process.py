import os
import re

html_path = r'c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\UKConstructionAndRoofingServicesLtd\index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def set_line(idx, content):
    if 0 <= idx < len(lines):
        lines[idx] = content

# Basic info
set_line(176, '                                    <p class="_15px-400">14 Potters Rd, Bedworth, <br />CV12 0DH, United Kingdom</p>\n')

# Hero
set_line(515, '                        <h1 class="hero-title">Expert Roofing &amp; Construction Solutions in Warwickshire</h1>\n')
set_line(516, '                        <p class="hero-paragraph">Top-quality roof installations, repairs, and general contracting from Bedworth\'s trusted professionals.</p>\n')

# Why Choose Us (534-569 approx)
lines[552] = '                            <p class="secondary-paragraph">Construction and roofing issues can happen anytime. That\'s why we\'re available to handle your emergencies.</p>\n'
lines[562] = '                        <p class="mb-10px">No hidden fees—just honest, transparent pricing for all our roofing and building services.</p>\n'

# 17 images tracker
images = [f'./assets/images/roofing-{i:02d}.jpg' for i in range(1, 18)]
image_idx = 0

def get_next_image():
    global image_idx
    if image_idx < len(images):
        img = images[image_idx]
        image_idx += 1
        return img
    return './assets/images/placeholder.jpg'

for i in range(len(lines)):
    pass

# Line 1185 Image
set_line(1184, f'                                <img src="{get_next_image()}" loading="eager" alt="" class="about-image" />\n')

# Line 1196 Company Hook
set_line(1195, '                                <h2 class="heading">Committed to Delivering Quality Roofing and Construction</h2>\n')
set_line(1197, '                                <p class="margin-bottom-40px">At UK Construction & Roofing Services Ltd, we pride ourselves on providing top-tier building renovations, roof installations, and general contracting in the Bedworth and Warwickshire areas.</p>\n')

# Line 1202 Mission
set_line(1202, '                                            <p class="secondary-pargraph">To provide exceptional roofing and construction services that ensure safety, durability, and complete customer satisfaction.</p>\n')
# Line 1210 Vision
set_line(1210, '                                            <p class="secondary-pargraph">To be the most trusted and reliable building and roofing contractor in Warwickshire.</p>\n')

# Stats 1266
set_line(1265, '                        <h2 class="white-heading">Our Business at a Glance</h2>\n')
set_line(1268, '                                    <p class="secondary-pargraph">Delivering high-quality roofing and home extensions across Bedworth and surrounding areas.</p>\n')

# Stats values (Lines around 1270-1280)
for i in range(1260, 1280):
    if 'data-number="25"' in lines[i]:
        lines[i] = lines[i].replace('25', '10')
    if 'data-number="150"' in lines[i]:
        lines[i] = lines[i].replace('150', '200')
    if 'data-number="50"' in lines[i]:
        lines[i] = lines[i].replace('50', '20')
    if 'data-number="12"' in lines[i]:
        lines[i] = lines[i].replace('12', '5')

# 1281-1308 Three Images
for i in range(1280, 1315):
    if '<img src="./assets/images/' in lines[i] and ('about-image' in lines[i] or 'image-block' in lines[i] or 'image-grid' in lines[i]):
        if 'image-35px' not in lines[i] and 'logo' not in lines[i] and 'icon' not in lines[i]:
            lines[i] = re.sub(r'src="./assets/images/[^"]+"', f'src="{get_next_image()}"', lines[i])

# Services 1441-1559 text & 3 images
for i in range(1440, 1565):
    if '<img src="./assets/images/' in lines[i] and 'image-35px' not in lines[i] and 'icon' not in lines[i]:
        lines[i] = re.sub(r'src="./assets/images/[^"]+"', f'src="{get_next_image()}"', lines[i])
    if 'Plumbing Repair' in lines[i] or 'Drain Cleaning' in lines[i] or 'Water Heater Installation' in lines[i]:
        lines[i] = lines[i].replace('Plumbing Repair', 'Roof Installations').replace('Drain Cleaning', 'Building Renovations').replace('Water Heater Installation', 'Home Extensions')
    if 'Expert plumbing repair' in lines[i]:
        lines[i] = lines[i].replace('Expert plumbing repair services to fix leaks, clear clogs, and restore your system\'s functionality quickly and efficiently.', 'Professional roof installations and repairs to keep your property safe, secure, and weather-resistant.')
    if 'Professional drain cleaning' in lines[i]:
        lines[i] = lines[i].replace('Professional drain cleaning to eliminate stubborn blockages and prevent future plumbing issues with advanced tools.', 'Comprehensive building renovations and general contracting services to transform and modernize your space.')
    if 'Reliable water heater' in lines[i]:
        lines[i] = lines[i].replace('Reliable water heater installation and replacement for consistent, energy-efficient hot water in your home or business.', 'High-quality home extensions and new builds customized to meet your specific space requirements and lifestyle.')

# Projects 1560-1729
for i in range(1559, 1735):
    if '<img src="./assets/images/' in lines[i] and 'image-35px' not in lines[i] and 'icon' not in lines[i]:
        lines[i] = re.sub(r'src="./assets/images/[^"]+"', f'src="{get_next_image()}"', lines[i])
    if 'Residential Plumbing Upgrade' in lines[i] or 'Commercial Pipe Repair' in lines[i]:
        lines[i] = lines[i].replace('Residential Plumbing Upgrade', 'Residential Roof Replacement').replace('Commercial Pipe Repair', 'Full House Renovation')
    if 'Modernize your home\'s plumbing' in lines[i]:
        lines[i] = lines[i].replace('Modernize your home\'s plumbing with our comprehensive residential upgrades, ensuring improved efficiency and reliability for years to come.', 'Complete residential roof replacements utilizing premium materials for enhanced durability, weather protection, and aesthetic appeal.')
    if 'Fast and reliable commercial pipe' in lines[i]:
        lines[i] = lines[i].replace('Fast and reliable commercial pipe repair services to minimize downtime and keep your business operations running smoothly.', 'Comprehensive house renovations from planning to execution, transforming outdated spaces into modern, functional living areas.')

# FAQ 2722-2968 & Image
for i in range(2720, 2970):
    if '<img src="./assets/images/' in lines[i] and 'image-35px' not in lines[i] and 'icon' not in lines[i]:
        lines[i] = re.sub(r'src="./assets/images/[^"]+"', f'src="{get_next_image()}"', lines[i])

with open(html_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Processed successfully!")
