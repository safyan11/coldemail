$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$workbook = $excel.Workbooks.Open("c:\Users\safim\OneDrive\Desktop\coldemail\leads.xlsx")
$worksheet = $workbook.Worksheets.Item(1)

$lastRow = $worksheet.Cells.SpecialCells(11).Row

$duplicate = $false
for ($i = 2; $i -le $lastRow; $i++) {
    $name = $worksheet.Cells.Item($i, 7).Value2
    $email = $worksheet.Cells.Item($i, 10).Value2
    if ($name -match "USA Storm Roofing" -or $email -match "info@usastormroofing.com") {
        $duplicate = $true
        Write-Output "DUPLICATE FOUND at row $i"
        break
    }
}

if (-not $duplicate) {
    $newRow = $lastRow + 1
    $worksheet.Cells.Item($newRow, 1).Value2 = "Roofing"
    $worksheet.Cells.Item($newRow, 2).Value2 = "Fairfax, VA"
    $worksheet.Cells.Item($newRow, 3).Value2 = "https://www.facebook.com/usastormroofing/"
    $worksheet.Cells.Item($newRow, 4).Value2 = "https://www.instagram.com/usastormroofing"
    $worksheet.Cells.Item($newRow, 5).Value2 = "NA"
    $worksheet.Cells.Item($newRow, 6).Value2 = "https://usastormroofing.com"
    $worksheet.Cells.Item($newRow, 7).Value2 = "USA Storm Roofing and Construction Group"
    $worksheet.Cells.Item($newRow, 8).Value2 = "Bob Bulgan"
    $worksheet.Cells.Item($newRow, 9).Value2 = "571-653-1241"
    $worksheet.Cells.Item($newRow, 10).Value2 = "info@usastormroofing.com"
    $worksheet.Cells.Item($newRow, 11).Value2 = "johnny@usastormroofing.com"
    $worksheet.Cells.Item($newRow, 12).Value2 = "NA"
    $worksheet.Cells.Item($newRow, 13).Value2 = "https://coldemail-ruddy.vercel.app/coldemail/USAStormRoofingandConstructionGroup/index.html"
    $worksheet.Cells.Item($newRow, 14).Value2 = "2026-08-25"
    $worksheet.Cells.Item($newRow, 15).Value2 = "Google Maps / Web Search"
    $worksheet.Cells.Item($newRow, 16).Value2 = ""
    $worksheet.Cells.Item($newRow, 17).Value2 = ""
    $worksheet.Cells.Item($newRow, 18).Value2 = ""
    $worksheet.Cells.Item($newRow, 19).Value2 = ""
    $worksheet.Cells.Item($newRow, 20).Value2 = "New"
    $worksheet.Cells.Item($newRow, 21).Value2 = ""
    $worksheet.Cells.Item($newRow, 22).Value2 = "Services: roof replacements, repairs, siding, gutters, windows, storm damage. Owner: Bob Bulgan. A+ BBB."
    $workbook.Save()
    Write-Output "ADDED TO EXCEL"
}

$workbook.Close()
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
