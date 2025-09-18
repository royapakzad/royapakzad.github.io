// Update these URLs with your actual links
const links = {
    cv: '#', // Add your CV URL here
    linkedin: '#', // Add your LinkedIn URL here
    newsletter: '#', // Add your newsletter URL here
    bluesky: '#' // Add your BlueSky URL here
};

// Set the href attributes when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cv-link').href = links.cv;
    document.getElementById('linkedin-link').href = links.linkedin;
    document.getElementById('newsletter-link').href = links.newsletter;
    document.getElementById('bluesky-link').href = links.bluesky;

    // Add target="_blank" to external links
    const externalLinks = document.querySelectorAll('.nav-link:not([href^="mailto:"])');
    externalLinks.forEach(link => {
        if (link.href !== '#') {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});