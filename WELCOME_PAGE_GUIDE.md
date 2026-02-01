# Welcome Page Customization Guide

## Location
The welcome page is located at `/welcome` and can be accessed at:
- Development: `http://localhost:3000/welcome`
- Production: `https://yourdomain.com/welcome`

## File Location
`src/app/welcome/page.tsx`

## Customizing the Page

### 1. Replace Placeholder Name and Designation

Find these lines in the code:
```tsx
<h2 className="text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">
  [Full Name]
</h2>
```

Replace `[Full Name]` with the actual team member's name.

For the designation badge:
```tsx
<span className="text-indigo-300 text-sm font-medium">[Designation]</span>
```

Replace `[Designation]` with their actual role (e.g., "Senior Software Engineer", "Product Designer", etc.).

### 2. Add a Profile Photo

Replace the placeholder icon with an actual image. Find this section:
```tsx
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-white/10 flex items-center justify-center mb-6 overflow-hidden">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" className="text-white/40">
    <!-- SVG icon code -->
  </svg>
</div>
```

Replace with:
```tsx
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 mb-6 overflow-hidden">
  <img 
    src="/path-to-image.jpg" 
    alt="Team Member Name" 
    className="w-full h-full object-cover"
  />
</div>
```

Add the image to the `public` folder and reference it like `/images/team-member.jpg`.

### 3. Customize the Welcome Message

The welcome message is in the first glass panel. You can modify the paragraphs to personalize them for your team member.

### 4. Update Company Values

The values are defined in the `companyValues` array. You can:
- Add or remove values
- Change the titles and descriptions
- Update the icons

### 5. Modify the Culture Section

Edit the "What to Expect" section to match your company's specific culture and working style.

## Sharing the URL

This page is standalone (no navigation or footer) and can be easily shared via:
- Direct link: `https://yourdomain.com/welcome`
- QR code generated from the URL
- Email or messaging apps

## Building for Production

Before deploying:
1. Replace all placeholder text
2. Add the profile image
3. Test the page: `npm run build && npm start`
4. Deploy to your hosting platform

## Notes

- The page uses the same background animation as the main website
- The styling automatically matches your existing theme
- The page is fully responsive and works on all devices
- No navigation is included to keep it focused and shareable
