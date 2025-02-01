const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');

const app = express();
const PORT = 3000;

// Dummy user database
const users = [
  {
    id: 1,
    username: 'testuser',
    password: '$2b$10$ZzC/bG9b2OuoBTT9o7dPeO8KzS1pBBn8jKlufmEwzP9hlyTOt1e3C' // Hashed version of 'password123'
  }
];

// Secret key for JWT
const secretKey = 'your_jwt_secret_key';


// Passport JWT Strategy configuration
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
  };
  
  passport.use(
    new JwtStrategy(jwtOptions, (jwtPayload, done) => {
      const user = users.find(user => user.id === jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
  


// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());


// Route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Internal server error' });
      if (!isMatch) return res.status(401).json({ message: 'Invalid username or password' });
  
      const payload = { id: user.id };
      const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
      jwt.decode(token,{json:true})
  
      res.json({ message: 'Login successful', token });
    });
  });
  
  // Protected route
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'You have accessed a protected route!', user: req.user });
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });