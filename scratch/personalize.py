import os
import re

html_path = r'c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

images_dir = r'c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\assets\images'
# Get roofing images
available_images = [f"./assets/images/{img}" for img in sorted(os.listdir(images_dir)) if img.startswith('roofing-')]
used_images = set()

def get_image():
    for img in available_images:
        if img not in used_images:
            used_images.add(img)
            return img
    raise Exception("Ran out of images!")

# 1. Page title
content = re.sub(r'<title>Business template</title>', '<title>USA Storm Roofing and Construction Group</title>', content)

# 2. Phone 1
content = re.sub(r'<p class="_14px-text">\+923347200660</p>', '<p class="_14px-text">571-653-1241</p>', content)

# 3. Email 1
content = re.sub(r'<p class="_14px-text break">info@theriss\.net</p>', '<p class="_14px-text break">info@usastormroofing.com</p>', content)

# 5. Email 2
content = re.sub(r'<p class="_15px-400">info@theriss\.net</p>', '<p class="_15px-400">info@usastormroofing.com</p>', content)

# 6. Phone 2
content = re.sub(r'<p class="_15px-400">\+923347200660</p>', '<p class="_15px-400">571-653-1241</p>', content)

# 7. Address
content = re.sub(r'<p class="_15px-400">9261 Candice Trail,  <br />North Carolina, United States</p>', '<p class="_15px-400">10306 Eaton Pl, Suite 300,  <br />Fairfax, VA 22030</p>', content)

# 8. Hero heading
content = re.sub(r'<h1 class="hero-title">Expert Plumbing Solutions for Every Home</h1>', '<h1 class="hero-title">Expert Roofing Solutions for the DMV Area</h1>', content)

# 9. Hero paragraph
content = re.sub(r'<p class="hero-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Suspendisse\s*varius enim in eros elementum tristique\. Duis cursus, mi quis viverra ornare\.</p>', '<p class="hero-paragraph">USA Storm Roofing and Construction Group specializes in roof replacements, repairs, and storm damage restoration. We provide trusted exterior home improvement services with an A+ BBB rating.</p>', content)

# 10. Why Choose Us (Lines 535-570)
content = re.sub(r'<h3 class="_24px-700-text">Trusted Expertise</h3>', '<h3 class="_24px-700-text">GAF-Certified Expertise</h3>', content)
content = re.sub(r'<p class="mb-10px">With years of experience, our certified plumbers deliver top-quality service\s*on every job, big or small\.</p>', '<p class="mb-10px">With years of experience, our GAF-certified roofers deliver top-quality service on every exterior home project, big or small.</p>', content)
content = re.sub(r'<h3 class="_24px-700-text white-text">24/7 Availability</h3>', '<h3 class="_24px-700-text white-text">Storm Damage Specialists</h3>', content)
content = re.sub(r'<p class="secondary-paragraph">Plumbing issues can happen anytime\. That&#x27;s why\s*we&#x27;re available around the clock to handle your emergencies\.</p>', '<p class="secondary-paragraph">Storm damage can happen anytime. We respond with expertise and efficiency to restore your roof safely and quickly.</p>', content)
content = re.sub(r'<p class="mb-10px">No hidden fees—just honest, transparent pricing so you know exactly what\s*you&#x27;re paying for before we start\.</p>', '<p class="mb-10px">No hidden fees—just honest, transparent pricing and positive customer feedback so you know exactly what you&#x27;re paying for.</p>', content)

# Write back so we can check progress
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Replaced {len(used_images)} images so far.")
