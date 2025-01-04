This is a Pokemon-themed e-commerce site built with Next.js. The goal is to create a visually appealing and fully functional platform where users can explore, customize, and purchase Pokemon cards and products.

Features Implemented
Homepage:

Interactive slider showcasing promotional banners with transitions and navigational dots.
Featured product list with hover effects and pricing details.
Categories section for easy navigation.
Single Product Page:

Image carousel for product display.
Customizable product options such as quantity and specifications.
Add-to-cart functionality with inventory checks.
Cart Modal:

Displays selected items with images, descriptions, prices, and quantity.
Options to adjust cart items and proceed to checkout.
Search Functionality:

Dynamic search bar integrated into the navigation for product searches.
Responsive Design:

Fully responsive layout with specific styles for mobile, tablet, and desktop views.
Footer:

Includes company links, social media icons, subscription form, and payment methods.
Planned Backend Features
The backend will handle:

User authentication and authorization.
Product database management.
Secure checkout and payment integration.
Real-time cart updates.
Admin dashboard for product and order management.
Challenges Faced
Single Page Padding and Spacing:

The padding on the SinglePage component requires adjustments for a cleaner layout.
Some content overlaps on smaller screens, disrupting the flow.
Category List Effects:

The CategoryList needs proper spacing between items.
Scrolling effects for smoother navigation are incomplete.
Consistency Across Components:

Some buttons and interactive elements lack hover effects or visual cues.
Minor inconsistencies in font sizes and alignment need refinement.
Next Steps
Fix spacing and scrolling issues in the CategoryList and SinglePage components.
Implement backend functionality using ideas from the tutorial.
Refactor CSS classes for improved maintainability and responsiveness.
Add animations and effects to enhance user experience.
Resources Used
YouTube Tutorial: E-Commerce Website Tutorial
Technologies: Next.js, React, TailwindCSS, TypeScript
How to Run the Project
Clone the repository.
Install dependencies using:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
Open the app at http://localhost:3000.
Contact
For feedback or issues, please contact:

Email: jasonvasq@jgdproffessions.com
Phone: +1 732 485 4513
This README highlights current progress, challenges, and goals for the project. Let me know if you'd like to add or revise any specific sections!


<!-- NOTES -->

There is an issue with the .get inside of wixClientServer.ts where i am getting an error on route "/" in used cookies().get("refreshToken)
can be overlooked but just in case here are some possible solutions 
Validate the Cookie: Add explicit validation to ensure the refreshToken is a non-empty string and properly formatted.

javascript
Copy code
try {
    const cookie = cookieStore.get("refreshToken");
    refreshToken = cookie && cookie.value ? JSON.parse(cookie.value) : {};
    if (!refreshToken || typeof refreshToken !== "object") {
        throw new Error("Invalid refreshToken format");
    }
} catch (e) {
    console.error("Error handling refreshToken:", e);
    refreshToken = {};
}
If refreshToken is optional: You can overlook the issue since the code gracefully handles missing or malformed cookies by defaulting to an empty object.

If refreshToken is critical: You cannot overlook this. You must ensure:
The "refreshToken" cookie exists and contains valid JSON.

Appropriate error handling is in place to alert users or developers when it’s missing or invalid.
