$htmlPath = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath)

# 23, 24, 25. Footer Text Replacements
$content = $content -replace 'The USA —785 15h Street, Office 478Boston, MA 02130', '10306 Eaton Pl, Suite 300, Fairfax, VA 22030'
$content = $content -replace '<div>info@theriss.net</div>', '<div>info@usastormroofing.com</div>'
$content = $content -replace '<div>\+923347200660</div>', '<div>571-653-1241</div>'
$content = $content -replace 'Copyright © 2026 RISS. All Rights Reserved.', 'Copyright © 2026 USA Storm Roofing and Construction Group. All Rights Reserved.'

# Replace remaining images to use available roofing images
$imagesDir = "c:\Users\safim\OneDrive\Desktop\coldemail\coldemail\USAStormRoofingandConstructionGroup\assets\images"
$availableImages = Get-ChildItem -Path $imagesDir -Filter "roofing-*.jpg" | Select-Object -ExpandProperty Name | Sort-Object
$usedImages = @("roofing-01.jpg", "roofing-02.jpg", "roofing-03.jpg", "roofing-04.jpg", "roofing-05.jpg", "roofing-06.jpg", "roofing-07.jpg", "roofing-08.jpg", "roofing-09.jpg", "roofing-10.jpg", "roofing-11.jpg") 

function Get-Image {
    foreach ($img in $availableImages) {
        if ($img -notin $usedImages) {
            $script:usedImages += $img
            return "./assets/images/$img"
        }
    }
    # return a fallback if exhausted
    return "./assets/images/roofing-17.jpg"
}

# The Blogs section has some images (article-plumbing-tips, 46945, article-water-heater)
$img12 = Get-Image; $content = $content -replace 'src="./assets/images/article-plumbing-tips.jpg"', "src=`"$img12`""
$img13 = Get-Image; $content = $content -replace 'src="./assets/images/46945.avif"', "src=`"$img13`""
$img14 = Get-Image; $content = $content -replace 'src="./assets/images/article-water-heater.jpg"', "src=`"$img14`""

# The Plumbers section (hero-contractor.png, team-andrew-mark, wepik...)
$img15 = Get-Image; $content = $content -replace 'src="./assets/images/hero-contractor.png"', "src=`"$img15`""
$img16 = Get-Image; $content = $content -replace 'src="./assets/images/team-andrew-mark.jpg"', "src=`"$img16`""
$img17 = Get-Image; $content = $content -replace 'src="./assets/images/wepik-export-20230912063007F2fv-1.avif"', "src=`"$img17`""

# I also need to replace the hero image (Lines 528-530): 
# Wait, hero-contractor.png is used there too. It's replaced!

[System.IO.File]::WriteAllText($htmlPath, $content)
Write-Output "Applied fourth pass"
