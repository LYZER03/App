# PowerShell script to download placeholder images for Sushi Shop

$imagesDir = ".\public\images"

# Create array of image URLs and their target filenames
$images = @(
    @{
        url = "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1200&auto=format&fit=crop"
        filename = "hero-sushi.jpg"
        description = "Hero sushi platter image"
    },
    @{
        url = "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop"
        filename = "category-sushi.jpg"
        description = "Sushi category image"
    },
    @{
        url = "https://images.unsplash.com/photo-1677010347887-530649d8c484?q=80&w=600&auto=format&fit=crop"
        filename = "category-maki.jpg"
        description = "Maki rolls category image"
    },
    @{
        url = "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=600&auto=format&fit=crop"
        filename = "category-sashimi.jpg"
        description = "Sashimi category image"
    }
)

# Download each image
foreach ($image in $images) {
    $targetPath = Join-Path -Path $imagesDir -ChildPath $image.filename
    Write-Host "Downloading $($image.description) to $targetPath..."
    
    try {
        Invoke-WebRequest -Uri $image.url -OutFile $targetPath
        Write-Host "Successfully downloaded $($image.filename)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($image.filename): $_" -ForegroundColor Red
    }
}

Write-Host "Image download completed!" -ForegroundColor Cyan
