export function getAllSlugs() {
    // Sample static data for demonstration
    return [
      { slug: 'the-power-of-prayer-in-times-of-trial' },
      { slug: 'spreading-the-gospel-in-local-communities' },
      { slug: 'youth-ministry-retreat-highlights' },
      // Add other slugs as needed
    ];
  }
  
  export function getPost(slug) {
      const posts = {
      'the-power-of-prayer-in-times-of-trial': {
        title: 'The Power of Prayer in Times of Trial',
        excerpt: 'Discover how prayer strengthens us...',
        content: 'Full content of the post goes here...',
        author: 'Pastor Emmanuel',
        date: 'April 1, 2025',
      },
      // Add other posts
    };
  
    return posts[slug] || null;  
  }