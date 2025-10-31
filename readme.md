🚀 Professional Landing Page Template - Complete Guide
📦 Welcome!
Thank you for your purchase! This guide will show you step-by-step how to customize your new website.
⏱️ Estimated customization time: 30-60 minutes

📁 Files Included
your-landing-page/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── script.js       ← JavaScript functions
├── img/                ← Put your images here
└── README.md           ← This file

🎯 Quick Start (15 minutes)
1️⃣ Change Your Business Name
File: index.html
Line: 30
Find: <h1>Web Page Creator</h1>
Replace with: <h1>Your Business Name</h1>
2️⃣ Change Browser Title
File: index.html
Line: 10
Find: <title>Your Business - Professional Web Development</title>
Replace with: <title>Your Business - What You Do</title>
3️⃣ Change Main Text
File: index.html
Lines to change:
LineWhat to changeExample52Hero Title"Transform Your Business..."53Hero SubtitleYour main message128About Me Title"About Us" or "Who We Are"132Your bioYour story/experience
4️⃣ Change Brand Colors
File: css/style.css
Find and replace these colors:
css/* Main purple color */
#667eea  →  Replace with your color (e.g., #ff0000 for red)

/* Secondary color */
#764ba2  →  Your second color

/* Green button color */
#4CAF50  →  Your button color
🎨 Recommended tool: Coolors.co for choosing colors

🖼️ How to Add Your Images
Step 1: Prepare Your Images

Format: JPG or PNG
Recommended size: Maximum 500KB each
Optimize here: TinyPNG.com (free)

Step 2: Save Them in the Folder
img/
├── logo.png          ← Your logo
├── profile-photo.jpg ← Your photo
└── hero-bg.jpg       ← Background image (optional)
Step 3: Update the Code
File: index.html
Line 130:
html<!-- Change the emoji to your image -->
<div class="sobre-mi-imagen">
    <img src="img/profile-photo.jpg" alt="Your Name">
</div>

🔤 Change Fonts (Optional)
Current Fonts
The template uses Inter (body text) and Poppins (headings) - modern, professional fonts.
To Change Fonts
Step 1: Choose your font at Google Fonts
Step 2: Open css/style.css
Line 2: Replace the import URL
Step 3: Find and replace throughout the file:

'Inter' → Your main font
'Poppins' → Your font for titles


🎨 Customize Services
Change Services You Offer
File: index.html
Find the services section (around line 168)
Each service has this structure:
html<div class="servicio-card">
    <div class="servicio-icon">🎨</div>  ← Change the emoji
    <h3>Web Design</h3>                  ← Your service
    <p>Service description...</p>         ← Your description
</div>
Change Service Emojis
Copy emojis from Emojipedia.com
Examples:

Design: 🎨 ✏️ 🖌️
Marketing: 📈 📊 💼
Photography: 📷 📸 🎥
Consulting: 💡 🎯 ⭐


📱 Update Social Media Links
In the Footer
File: index.html
Find around line 255:
html<a href="#">Facebook</a>        ← Change # to your URL
<a href="#">Instagram</a>       ← your.instagram.com
<a href="#">LinkedIn</a>        ← your.linkedin.com
Add More Networks
Copy and paste a line:
html<a href="https://twitter.com/yourusername">Twitter</a>
<a href="https://tiktok.com/@yourusername">TikTok</a>

🌐 How to Upload Your Website to the Internet
Option 1: Netlify (Recommended - Free & Easy)
Step 1: Go to Netlify.com and sign up
Step 2: Click "Add new site" → "Deploy manually"
Step 3: Drag your entire project folder
Step 4: Done! Your page will be at yourname.netlify.app
Step 5 (Optional): Connect your custom domain

Purchase a domain at Namecheap.com ($10-15/year)
In Netlify: "Domain settings" → "Add custom domain"
Follow the instructions to connect


Option 2: Vercel (Similar to Netlify)

Go to Vercel.com
Click "Add New Project"
Drag your folder
Done!


Option 3: Your Own Hosting
If you already have hosting (GoDaddy, Hostinger, etc.):

Access via FTP
Upload all files to public_html
Make sure index.html is in the root directory


✉️ How to Make Forms Work (Optional)
IMPORTANT: Forms currently show a success message but DON'T send real emails.
Option 1: EmailJS (Recommended - Free)
Step 1: Sign up at EmailJS.com
Step 2: Create an email service

Go to "Email Services"
Connect your Gmail, Outlook, or Yahoo
Copy your SERVICE ID

Step 3: Create a template

Go to "Email Templates"
Create new template
Copy your TEMPLATE ID

Step 4: Get your Public Key

Go to "Account" → "General"
Copy your PUBLIC KEY

Step 5: Edit js/script.js
javascript// Find around line 47
// Replace with your data:

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
Video Tutorial: Watch on YouTube

Option 2: Formspree (Easier)
Step 1: Sign up at Formspree.io
Step 2: Create a form and get your URL
Step 3: In index.html, add to each <form>:
html<form action="https://formspree.io/f/YOUR_CODE_HERE" method="POST">

Option 3: Leave As Is
If you don't need working forms, you can:

Leave them as they are (they show a success message)
Or remove them entirely from the page


🔧 Advanced Customization
Add More Service Cards
Copy and paste a service block:
html<div class="servicio-card">
    <div class="servicio-icon">🎯</div>
    <h3>New Service</h3>
    <p>Description</p>
</div>
Change Background Colors
In css/style.css, find:
css.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
Replace the color codes with your brand colors.

✅ Final Checklist
Before publishing, verify:

 ✏️ Changed my business name
 📝 Updated all text
 🎨 Adjusted my brand colors
 🖼️ Added my images
 🔗 Updated social media links
 📱 Tested on mobile (open on your phone)
 🌐 Uploaded to Netlify/Vercel
 ✨ Tested all buttons and links


🆘 Troubleshooting
❓ Colors Won't Change

Solution: Clear browser cache (Ctrl + F5)

❓ Images Don't Show

Solution: Verify they're in the img/ folder and the filename is correct

❓ Menu Doesn't Work on Mobile

Solution: Make sure js/script.js is linked correctly

❓ Forms Don't Send

Solution: You need to configure EmailJS or Formspree (see Forms section above)


📚 Useful Resources

Google Fonts - Free fonts
Coolors.co - Color palette generator
TinyPNG - Optimize images
Emojipedia - All emojis
Unsplash - Free high-quality photos
Canva - Design images and logos


📧 Need Help?
Free Support Included:

Complete documentation (this file)
All files with comments in the code

Additional Services Available:

✅ Form configuration: Contact me
✅ Complete customization: Contact me
✅ Upload to hosting + domain: Contact me
✅ Add functionalities: Custom quote


🎉 Congratulations!
Your professional website is ready! If you followed this guide, you now have a professional site online.
📣 If you liked this product:

⭐ Leave me a 5-star review
📢 Recommend me to your friends
💼 Contact me for future projects


🌟 What's Included
✅ Modern, responsive design
✅ Works on mobile, tablet, and desktop
✅ Clean HTML5/CSS3/JavaScript code
✅ Easy to customize
✅ Complete documentation
✅ SEO optimized
✅ Fast loading
✅ Professional animations

Version: 1.0
Last updated: 2025
© Your Name - All rights reserved

🚀 Quick Reference
TaskFileApprox. LineChange business nameindex.html30Change colorsstyle.cssThroughoutAdd imagesindex.html130Update social linksindex.html255Change servicesindex.html168

Need more help? Re-read this guide - everything you need is here! 📖