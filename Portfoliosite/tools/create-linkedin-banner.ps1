Add-Type -AssemblyName System.Drawing

$width = 1584
$height = 396
$outPath = Join-Path (Get-Location) "linkedin-banner-wale-owootori-v6.png"

$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function New-Color($hex) {
    $hex = $hex.TrimStart("#")
    return [System.Drawing.Color]::FromArgb(
        [Convert]::ToInt32($hex.Substring(0, 2), 16),
        [Convert]::ToInt32($hex.Substring(2, 2), 16),
        [Convert]::ToInt32($hex.Substring(4, 2), 16)
    )
}

function New-Argb($alpha, $hex) {
    $base = New-Color $hex
    return [System.Drawing.Color]::FromArgb($alpha, $base.R, $base.G, $base.B)
}

function Draw-RoundRect($g, $brush, $x, $y, $w, $h, $r) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    $g.FillPath($brush, $path)
    $path.Dispose()
}

$rect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    (New-Color "#0f172a"),
    (New-Color "#241827"),
    18
)
$graphics.FillRectangle($bgBrush, $rect)

$accentBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Rectangle 0, 0, $width, $height),
    (New-Argb 200 "#f59e0b"),
    (New-Argb 30 "#ffffff"),
    0
)
$graphics.FillRectangle($accentBrush, 0, 0, 14, $height)

$linePen = New-Object System.Drawing.Pen (New-Argb 32 "#ffffff"), 1
for ($x = -100; $x -lt $width; $x += 78) {
    $graphics.DrawLine($linePen, $x, $height, $x + 430, 0)
}

$glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$glowPath.AddEllipse(1030, -190, 700, 700)
$glowBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush($glowPath)
$glowBrush.CenterColor = New-Argb 90 "#f59e0b"
$glowBrush.SurroundColors = @((New-Argb 0 "#f59e0b"))
$graphics.FillPath($glowBrush, $glowPath)

$cardBrush = New-Object System.Drawing.SolidBrush (New-Argb 46 "#ffffff")
Draw-RoundRect $graphics $cardBrush 980 58 520 250 28

$white = New-Object System.Drawing.SolidBrush (New-Color "#ffffff")
$muted = New-Object System.Drawing.SolidBrush (New-Color "#e5e7eb")
$teal = New-Object System.Drawing.SolidBrush (New-Color "#fbbf24")
$softTeal = New-Object System.Drawing.SolidBrush (New-Argb 44 "#f59e0b")
$softWhite = New-Object System.Drawing.SolidBrush (New-Argb 30 "#ffffff")

$titleFont = [System.Drawing.Font]::new("Segoe UI", 58, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$titleFont2 = [System.Drawing.Font]::new("Segoe UI", 54, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$bodyFont = [System.Drawing.Font]::new("Segoe UI", 27, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$smallFont = [System.Drawing.Font]::new("Segoe UI", 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$badgeFont = [System.Drawing.Font]::new("Segoe UI", 18, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$nameFont = [System.Drawing.Font]::new("Segoe UI", 50, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$roleFont = [System.Drawing.Font]::new("Segoe UI", 25, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$graphics.DrawString("I Build Fast,", $titleFont, $white, 118, 24)
$graphics.DrawString("Responsive Web Platforms", $titleFont2, $teal, 118, 86)
$graphics.DrawString("that help businesses get found, engage customers,", $bodyFont, $muted, 122, 166)
$graphics.DrawString("increase bookings, drive sales, and streamline operations.", $bodyFont, $muted, 122, 200)

$badges = @("Visibility", "Engagement", "Bookings", "Sales", "Operations")
$badgeX = 188
foreach ($badge in $badges) {
    $size = $graphics.MeasureString($badge, $badgeFont)
    $bw = [int]$size.Width + 34
    Draw-RoundRect $graphics $softTeal $badgeX 278 $bw 38 19
    $graphics.DrawString($badge, $badgeFont, $white, $badgeX + 17, 286)
    $badgeX += $bw + 12
}

$graphics.DrawString("Wale Owootori", $nameFont, $white, 1032, 91)
$graphics.DrawString("Frontend Developer", $roleFont, $muted, 1035, 157)
$graphics.DrawString("React | JavaScript | MERN", $roleFont, $muted, 1035, 190)

$dividerPen = New-Object System.Drawing.Pen (New-Argb 135 "#fbbf24"), 3
$graphics.DrawLine($dividerPen, 1036, 242, 1410, 242)

$graphics.DrawString("waleowootori.netlify.app", $smallFont, $white, 1035, 264)

$cornerBrush = New-Object System.Drawing.SolidBrush (New-Argb 26 "#ffffff")
Draw-RoundRect $graphics $cornerBrush 1385 20 150 20 10
Draw-RoundRect $graphics $softWhite 1430 350 110 14 7

$bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()

Write-Output $outPath
