import React from 'react';
import './InstagramFeed.css';

const instagramPosts = [
  { id: 1, img: 'https://www.instagram.com/p/DP4mjeTj4JV/media/?size=l', url: 'https://www.instagram.com/p/DP4mjeTj4JV/' },
  { id: 2, img: 'https://www.instagram.com/p/C29d_7_A_aL/media/?size=l', url: 'https://www.instagram.com/p/C29d_7_A_aL/' },
  { id: 3, img: 'https://www.instagram.com/p/C28s_rqg_q3/media/?size=l', url: 'https://www.instagram.com/p/C28s_rqg_q3/' },
  { id: 4, img: 'https://www.instagram.com/p/C27b_7_g_qZ/media/?size=l', url: 'https://www.instagram.com/p/C27b_7_g_qZ/' },
  { id: 5, img: 'https://www.instagram.com/p/C26e_7_g_qY/media/?size=l', url: 'https://www.instagram.com/p/C26e_7_g_qY/' },
  { id: 6, img: 'https://www.instagram.com/p/C25d_7_g_qZ/media/?size=l', url: 'https://www.instagram.com/p/C25d_7_g_qZ/' },
];


const InstagramFeed = () => {
  return (
    <section className="instagram-feed-section">
      <h2 className="section-title">Latest on Instagram</h2>
      <div className="instagram-grid">
        {instagramPosts.map(post => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="instagram-post-link">
            <img src={post.img} alt={`Instagram post ${post.id}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;