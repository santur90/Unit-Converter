# WZ Project

This is a multi-platform project containing web, iOS, and design assets.

## Project Structure

```
WZ/
├─ web/                       # Website & Frontend
│  ├─ public/
│  │  └─ assets/
│  │     ├─ logos/            # Brand/Product Logos (SVG/PNG)
│  │     ├─ icons/            # UI Icons (SVG/PNG, kebab-case naming)
│  │     ├─ images/           # Illustrations/Covers/Screenshots (WebP/AVIF preferred)
│  │     └─ brand/
│  │        ├─ colors.json    # Brand Colors Definition
│  │        └─ typography.css # Typography/Font Weight/Line Height Standards
│  └─ src/                    # Web Application Source
│
├─ ios/
│  ├─ ShamelessApp.xcodeproj
│  ├─ ShamelessApp/
│  │  └─ Assets.xcassets/     # iOS Resources (Icons/Color Sets/AppIcon)
│  └─ Package.swift
│
├─ design/
│  ├─ source/                 # Source Files (AI/PSD/Sketch/Figma Exports)
│  └─ exports/                # Raw Exports/Full Resolution (Git LFS)
│
├─ .gitattributes             # LFS Configuration
├─ .gitignore
└─ README.md
```

## Getting Started

### Web Development
```bash
cd web
npm install
npm run dev
```

### iOS Development
```bash
cd ios
open ShamelessApp.xcodeproj
```

## Asset Guidelines

### Icons
- Use kebab-case naming (e.g., `arrow-right.svg`)
- Prefer SVG format for scalability
- Keep consistency with the brand palette

### Images
- Use WebP or AVIF for web
- PNG/JPG for fallback
- Optimize for different screen sizes

### Design Files
- Large design files (PSD, AI, Sketch) are managed with Git LFS
- Keep exports organized by resolution/type
- Document all export settings

## Brand Guidelines
See `web/public/assets/brand/` for color definitions and typography standards.

## License
[Your License Here]
