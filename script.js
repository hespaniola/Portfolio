document.getElementById("year").textContent = new Date().getFullYear();

const projectImages = [
  {
    src: "assets/snap-fitness.svg",
    alt: "Snap Fitness Cedar City exterior"
  },
  {
    src: "assets/apex-visuals.svg",
    alt: "Apex Visuals real estate photography of a modern home at twilight"
  },
  {
    src: "assets/pain-free-home-solutions.svg",
    alt: "Aerial home image used for Pain-Free Home Solutions marketing"
  }
];

document.querySelectorAll(".project-visual").forEach((visual, index) => {
  const projectImage = projectImages[index];
  if (!projectImage) return;

  const image = document.createElement("img");
  image.src = projectImage.src;
  image.alt = projectImage.alt;
  image.loading = "lazy";
  image.decoding = "async";
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.display = "block";
  image.style.objectFit = "cover";

  visual.style.minHeight = "0";
  visual.style.aspectRatio = "16 / 9";
  visual.style.overflow = "hidden";
  visual.replaceChildren(image);
});
