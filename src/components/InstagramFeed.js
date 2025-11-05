import React from 'react';
import './InstagramFeed.css';

const instagramPosts = [
  {
    id: 1,
    img: 'https://sp1.pixnoy.com/p/pt_6721527372285567507112_0_6df5cee0bde6cd614f8f9708ce2c3aa0.jpg?o=aHR0cHM6Ly9zY29udGVudC1hdGwzLTMuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzU0MzY1NDk1M18xMDcyODE1NzY1MDA3NDQ4Xzc2NTU3ODI0NTY5Nzc4MjUzNTNfbi5qcGc/c3RwPWMwLjI0OC42NDAuNjQwYV9kc3QtanBnX2UxNV90dDYmX25jX2h0PXNjb250ZW50LWF0bDMtMy5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA4Jl9uY19vYz1RNmNaMlFGUDFrWGRBZDRIZUpkUmtMQ2stcEk5ckNEdVByOWQ4QXc4THdhMHdESWVNbUVoYWNBNVEwLUtzUGc3WTJDSDRoTnNEODhYQVRLeTVQbXdwOGF5NE9jUCZfbmNfb2hjPVd2NkVWME5ydjBFUTdrTnZ3RTAtVEdxJl9uY19naWQ9cW9YaHdmSGg0cGRVcExWM2NsM0dQUSZlZG09QVBVODlGQUJBQUFBJmNjYj03LTUmb2g9MDBfQWZqZWF1TkN2UGQ4cFh0UUg2SHlnWkprNnkzdmVYeDNtMXlvRTdOM3p5RWpkQSZvZT02OTEwOEFBOCZfbmNfc2lkPWJjMGMyYw==&h=dc9415258150daba88addc79ef4c2395',
    url: 'https://www.pixnoy.com/post/6721527372285567507112/',
    alt: 'Wrestling at Reign JJ—wrestling, USA wrestling, and Katy wrestling drill clip.',
  },
  {
    id: 2,
    img: 'https://sp1.pixnoy.com/p/pt_6751321346503059443421_0_1bf7c9f648c35ec2b98a3cb62dc3c935.jpg?o=aHR0cHM6Ly9zY29udGVudC1hdGwzLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzQ4NjU5NzA1Ml8xODEzNTAzMTg4ODQwMjAzNl81NDc3MjE4NjA1NzI4NTk0MjcwX24uanBnP3N0cD1jMC4yODAuNzIwLjcyMGFfZHN0LWpwZ19lMTVfczY0MHg2NDBfdHQ2Jl9uY19odD1zY29udGVudC1hdGwzLTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwNCZfbmNfb2M9UTZjWjJRRlAxa1hkQWQ0SGVKZFJrTENrLXBJOXJDRHVQcjlkOEF3OEx3YTB3REllTW1FaGFjQTVRMC1Lc1BnN1kyQ0g0aE5zRDg4WEFUS3k1UG13cDhheTRPY1AmX25jX29oYz04a09FT0wwLWRsY1E3a052d0ZGazRCWCZfbmNfZ2lkPXFvWGh3ZkhoNHBkVXBMVjNjbDNHUFEmZWRtPUFQVTg5RkFCQUFBQSZjY2I9Ny01Jm9oPTAwX0FmamNUdHFCc2d5X3RRb1hyTWxibFJ1cWhIOXViS1lLR3RvZnJhY0xGNVFhdmcmb2U9NjkxMEIwOTQmX25jX3NpZD1iYzBjMmM=&h=f52dc53139d99ceca4e3cfc33d0befa6',
    url: 'https://www.pixnoy.com/post/6751321346503059443421/',
    alt: 'Reign athletes training hard on the mats with coaches reinforcing discipline.',
  },
  {
    id: 3,
    img: 'https://sp1.pixnoy.com/p/pt_6745305560585659282928_0_686d712241d5a54bbc4e719f41a1edeb.jpg?o=aHR0cHM6Ly9zY29udGVudC1hdGwzLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzQ4MTkyNjg2OF8xODEzMjI0MDU2NTQwMjAzNl81OTU4NzQ0MDYzMTQ3MTM1NDg0X24uanBnP3N0cD1jMC4yODAuNzIwLjcyMGFfZHN0LWpwZ19lMTVfczY0MHg2NDBfdHQ2Jl9uY19odD1zY29udGVudC1hdGwzLTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwNCZfbmNfb2M9UTZjWjJRRlAxa1hkQWQ0SGVKZFJrTENrLXBJOXJDRHVQcjlkOEF3OEx3YTB3REllTW1FaGFjQTVRMC1Lc1BnN1kyQ0g0aE5zRDg4WEFUS3k1UG13cDhheTRPY1AmX25jX29oYz1fRXplWTB5TXNHa1E3a052d0d2T1ZubiZfbmNfZ2lkPXFvWGh3ZkhoNHBkVXBMVjNjbDNHUFEmZWRtPUFQVTg5RkFCQUFBQSZjY2I9Ny01Jm9oPTAwX0FmaHRtbGRqNzhlNmIxamEyWGY0cldYdFE5ZUdxVnVZRzZBcWNxOTNxeXEwTncmb2U9NjkxMEFGRjEmX25jX3NpZD1iYzBjMmM=&h=b5714fc81a410aea67df8672d0998080',
    url: 'https://www.pixnoy.com/post/6745305560585659282928/',
    alt: 'Grand opening celebration inside Reign Jiu Jitsu’s expanded facility.',
  },
];


const InstagramFeed = () => {
  return (
    <section className="instagram-feed-section">
      <h2 className="section-title">Latest on Instagram</h2>
      <div className="instagram-grid">
        {instagramPosts.map(post => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="instagram-post-link">
            <img src={post.img} alt={post.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;