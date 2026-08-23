$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$workbook = $excel.Workbooks.Open("c:\Users\safim\OneDrive\Desktop\coldemail\leads.xlsx")
$worksheet = $workbook.Worksheets.Item(1)

$lastRow = $worksheet.Cells.SpecialCells(11).Row
$newRow = $lastRow + 1

$worksheet.Cells.Item($newRow, 1).Value2 = "Roofing contractor"
$worksheet.Cells.Item($newRow, 2).Value2 = "Limerick, Ireland"
$worksheet.Cells.Item($newRow, 3).Value2 = "https://www.facebook.com/search/top?q=Alupro%20Roofers"
$worksheet.Cells.Item($newRow, 4).Value2 = "NA"
$worksheet.Cells.Item($newRow, 5).Value2 = "NA"
$worksheet.Cells.Item($newRow, 6).Value2 = "https://aluproroofers.com"
$worksheet.Cells.Item($newRow, 7).Value2 = "AluPro Roofers Limerick"
$worksheet.Cells.Item($newRow, 8).Value2 = "NA"
$worksheet.Cells.Item($newRow, 9).Value2 = "085 7700458"
$worksheet.Cells.Item($newRow, 10).Value2 = "info@aluproroofers.com"
$worksheet.Cells.Item($newRow, 11).Value2 = "aluproroofing@gmail.com"
$worksheet.Cells.Item($newRow, 12).Value2 = "NA"
$worksheet.Cells.Item($newRow, 13).Value2 = "https://coldemail-ruddy.vercel.app/coldemail/AluProRoofersLimerick/index.html"
$worksheet.Cells.Item($newRow, 14).Value2 = "2026-08-23"
$worksheet.Cells.Item($newRow, 15).Value2 = "Google Maps / Web Search"
$worksheet.Cells.Item($newRow, 16).Value2 = ""
$worksheet.Cells.Item($newRow, 17).Value2 = ""
$worksheet.Cells.Item($newRow, 18).Value2 = ""
$worksheet.Cells.Item($newRow, 19).Value2 = ""
$worksheet.Cells.Item($newRow, 20).Value2 = "New"
$worksheet.Cells.Item($newRow, 21).Value2 = ""
$worksheet.Cells.Item($newRow, 22).Value2 = "Based in Raheen Business Park, Limerick. 30+ years experience."

$workbook.Save()
$workbook.Close()
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
