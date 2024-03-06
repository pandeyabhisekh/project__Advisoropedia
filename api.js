import express, { json } from 'express';
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(json());

// Sample user data storage (replace with database implementation)
let users = [];

// POST /signup endpoint
app.post('/signup', (req, res) => {
  // Extract registration data from request body
  const { username, email, password, name, profilePicture } = req.body;

  // Example: Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required.' });
  }

  // Example: Check for duplicate username or email
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists.' });
  }
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'Email already exists.' });
  }

  // Example: Hash password (use bcrypt or another library for secure hashing)
  const hashedPassword = password; // Replace with actual hashing

  // Example: Store user data
  const newUser = { username, email, password: hashedPassword, name, profilePicture };
  users.push(newUser);

  // Example: Generate JWT token (use jsonwebtoken library)
  const token = 'sample_jwt_token'; // Replace with actual token generation

  // Return success message and JWT token
  res.status(200).json({ message: 'Registration successful.', token });
});

// GET /posts endpoint
app.get('/posts', (req, res) => {
  // Example: Fetch posts data from database (replace with actual database query)
  const posts = [{ id: 1, title: 'Post 1', content: 'Content of post 1' }];

  // Return posts data
  res.status(200).json(posts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
