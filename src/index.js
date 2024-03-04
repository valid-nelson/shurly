// Define a simple URL shortener class
class Shurly {
    constructor() {
        this.urlMap = {}; // Map to store original URLs and their corresponding short URLs
        this.baseUrl = 'https://example.com/'; // Base URL for short URLs
        this.shortUrlLength = 6; // Length of short URLs
        this.characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Characters to use for short URLs
    }

    // Method to generate a random short URL
    generateShortUrl() {
        let shortUrl = '';
        for (let i = 0; i < this.shortUrlLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.characters.length);
            shortUrl += this.characters[randomIndex];
        }
        return shortUrl;
    }

    // Method to shorten a given URL
    shortenUrl(originalUrl) {
        let shortUrl = this.generateShortUrl();
        while (this.urlMap.hasOwnProperty(shortUrl)) {
            // Regenerate if short URL already exists
            shortUrl = this.generateShortUrl();
        }
        this.urlMap[shortUrl] = originalUrl;
        return this.baseUrl + shortUrl;
    }

    // Method to expand a short URL
    expandUrl(shortUrl) {
        const shortCode = shortUrl.replace(this.baseUrl, '');
        if (this.urlMap.hasOwnProperty(shortCode)) {
            return this.urlMap[shortCode];
        } else {
            return 'Short URL not found';
        }
    }
}

// Export the class for use in other modules if needed
module.exports = Shurly;
