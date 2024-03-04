# Shurly

Shurly is a simple URL shortener package for Node.js. It allows you to generate short URLs for long ones, and also expand short URLs back to their original form.

## Installation

You can install Shurly via npm:

```bash
npm install shurly
```

## Usage

```javascript
const Shurly = require('shurly');

// Create a new instance of Shurly
const shortener = new Shurly();

// Shorten a long URL
const originalUrl = 'https://www.example.com/very-long-url-to-be-shortened';
const shortUrl = shortener.shortenUrl(originalUrl);
console.log('Shortened URL:', shortUrl);

// Expand a short URL back to its original form
const expandedUrl = shortener.expandUrl(shortUrl);
console.log('Expanded URL:', expandedUrl);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
