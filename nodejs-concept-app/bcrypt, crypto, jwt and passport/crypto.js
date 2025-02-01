const crypto = require('crypto');


// Example 1: Hashing a Password with crypto

const password  = 'some text';
const algorithm  = 'sha256';

const hash  = crypto.createHash(algorithm).update(password).digest('hex')
console.log('generated hash here ...')

// Example 2: Encrypting and Decrypting Text with crypto

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)


const text = 'some text here';

function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  
  // Decryption function
  function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
  
  const encryptedText = encrypt(text);
  console.log('Encrypted Text:', encryptedText);
  
  const decryptedText = decrypt(encryptedText);
  console.log('Decrypted Text:', decryptedText);

//   Example 3: Generating and Verifying HMAC

// Key for HMAC
const key2 = 'my_secret_key';

// Message to hash
const message = 'This is a secure message';

// Generate HMAC
const hmac = crypto.createHmac('sha256', key2).update(message).digest('hex');

console.log('HMAC:', hmac);