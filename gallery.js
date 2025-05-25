// Copy text to clipboard with feedback
function copyLink(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(() => {
      alert('Failed to copy link.');
    });
}

// Display images dynamically inside #gallery element using Tailwind CSS styling
function displayImages(images, baseURL) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Clear previous content if any

  // Add a gallery title spanning all columns
  const title = document.createElement('h1');
  title.textContent = 'Image Gallery';
  title.className = 'col-span-full text-3xl font-bold mb-6';
  gallery.appendChild(title);

  images.forEach((imageName) => {
    // Container for each image card
    const container = document.createElement('div');
    container.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center';

    // Image element
    const img = document.createElement('img');
    img.src = baseURL + imageName;
    img.alt = imageName;
    img.className = 'rounded-md mb-4 max-h-48 object-contain';

    // Text showing full URL (selectable)
    const urlText = document.createElement('p');
    urlText.textContent = baseURL + imageName;
    urlText.className = 'text-gray-600 text-sm mb-3 break-all text-center select-all';

    // Copy link button
    const button = document.createElement('button');
    button.textContent = 'Copy Link';
    button.className = 'bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded cursor-pointer';
    button.addEventListener('click', () => copyLink(baseURL + imageName));

    // Append elements to container
    container.appendChild(img);
    container.appendChild(urlText);
    container.appendChild(button);

    // Append container to gallery
    gallery.appendChild(container);
  });

  gallery.classList.remove('hidden'); // Show the gallery container
}

// Base URL where your images are hosted
const baseURL = "https://aynaghor-studio.github.io/cdn_images/images/";

// Array of your image filenames and alt text
const images = [
  { filename: "album.webp", alt: "album" },
  { filename: "bengali.jpg", alt: "bengali wedding image" },
  { filename: "bihari.jpg", alt: "bihari wedding image" },
  { filename: "album.jpg", alt: "album" },
  { filename: "Contractor.jpg", alt: "Contractor image" },
  { filename: "Cover banner image.jpg", alt: "Cover banner" },
  { filename: "Cover banner image.webp", alt: "cover banner" },
  { filename: "Director.jpg", alt: "Director image" },
  { filename: "Editing.jpg", alt: "Editing service image" },
  { filename: "facebook.png", alt: "facebook icon" },
  { filename: "facial-recognition.png", alt: "" },
  { filename: "firstrice.jpg", alt: "first rice service" },
  { filename: "image selection.png", alt: "image selection service" },
  { filename: "instagram.png", alt: "instagrm icon" },
  { filename: "Junior Photographer.jpg", alt: "Junior Photographer image" },
  { filename: "logo.png", alt: "logo png" },
  { filename: "Muslim wedding.jpg", alt: "Muslim wedding service image" },
  { filename: "pngegg.png", alt: "Pngegg icon png" },
  { filename: "Pre wedding.jpg", alt: "Pre wedding service image" },
  { filename: "rice ceremony.jpg", alt: "rice ceremony service image" },
  { filename: "Senior-Editor.jpg", alt: "Senior Editor image" },
  { filename: "Senior-Photographer.jpg", alt: "Senior Photographer image" },
  { filename: "song-logo.webp", alt: "song service image" },
  { filename: "story 1.jpg", alt: "Pre wedding - dharmadeb & asha image" },
  { filename: "Webdeveloper.jpg", alt: "Webdeveloper image" },
  { filename: "Wedding.jpg", alt: "Bengali wedding service image" },
  { filename: "whatsapp.png", alt: "whattsapp icon" },
  { filename: "youtube.png", alt: "youtube icon" }
  // Add more images as needed
];

// Function to create and display image gallery
function generateGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Clear existing content

  // Create and append heading
  const heading = document.createElement('h1');
  heading.className = "col-span-full text-3xl font-bold mb-6";
  heading.textContent = "Image Gallery";
  gallery.appendChild(heading);

  images.forEach((image, index) => {
    const container = document.createElement('div');
    container.className = "shadow-lg p-4 rounded border border-gray-200";

    // Create image element
    const img = document.createElement('img');
    img.src = baseURL + image.filename;
    img.alt = image.alt;
    img.className = "w-full rounded";

    // Create paragraph for URL text
    const p = document.createElement('p');
    p.className = "mt-2 text-sm text-gray-500 select-all";
    p.id = `link${index}`;
    p.textContent = baseURL + image.filename;

    // Create copy button
    const btn = document.createElement('button');
    btn.className = "copy-btn mt-2 px-3 py-1 text-sm bg-[#4A90E2] text-white rounded hover:bg-blue-600 transition-transform duration-150";
    btn.textContent = "Copy Link";
    btn.setAttribute('onclick', `copyLink('link${index}')`);

    // Append image, URL text and button to container
    container.appendChild(img);
    container.appendChild(p);
    container.appendChild(btn);

    // Append container to gallery
    gallery.appendChild(container);
  });

  // Show the gallery div after generating content
  gallery.classList.remove('hidden');
}

// Function to copy URL text to clipboard
function copyLink(id) {
  const urlText = document.getElementById(id);
  if (!urlText) return;

  navigator.clipboard.writeText(urlText.textContent).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy link: " + err);
  });
}

// Run gallery generation when the page loads
window.addEventListener('DOMContentLoaded', generateGallery);
