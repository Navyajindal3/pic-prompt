
// ==============================
// Gemini API Example (Commented)
// ==============================

// Import Gemini client
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini model
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");

// Example function to generate text (e.g., summarizing a comment)
async function analyzeComment(commentText) {
  // Load model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Generate response
  const result = await model.generateContent(`
    Analyze the comment sentiment and classify it as Positive, Negative, or Neutral.
    Comment: ${commentText}
  `);

  // Output
  console.log(result.response.text());
}

// Example usage
// analyzeComment("This app is amazing!");
// analyzeComment("Worst experience ever!");
