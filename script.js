document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const imageDescription = document.getElementById("imageDescription");
    const closeBtn = document.getElementById("close");

    const images = [
        { src: "images/image1.jpg", hd: "images/image1.jpg", alt: "Baklava", description: "Baklava, Food from Turkey" },
        { src: "images/image2.jpg", hd: "images/image2.jpg", alt: "Delights", description: "Turkish-delights" },
        { src: "images/image3.jpg", hd: "images/image3.jpg", alt: "Lamps", description: "Handcrafted hanging lamps" },
        { src: "images/image4.jpg", hd: "images/image4.jpg", alt: "Tower", description: "Galata tower" },
        { src: "images/image5.jpg", hd: "images/image5.jpg", alt: "Iconic Temple", description: "Hagia Sophia" },
        { src: "images/image6.jpg", hd: "images/image6.jpg", alt: "Cofee", description: "Turkish Coffee" },
        { src: "images/image7.jpg", hd: "images/image7.jpg", alt: "Topkapi Palace", description: "Panoramic view of Istanbul" },
        { src: "images/image8.jpg", hd: "images/image8.jpg", alt: "Baked simit", description: "Traditional Turkish sesame-covered bread" },
        { src: "images/image9.jpg", hd: "images/image9.jpg", alt: "Turkish kebab dish", description: "Kebab served with golden slices of pide bread" },
        { src: "images/image10.jpg", hd: "images/image10.jpg", alt: "Blue Mosque ", description: "Sring scene in Istanbul" },
        { src: "images/image11.jpg", hd: "images/image11.jpg", alt: "iconic red tram", description: "Vibrant street scene on Istiklal Avenue" },
        { src: "images/image12.jpg", hd: "images/image12.jpg", alt: "Mevlana Museum", description: "A person leading the viewer toward Mevlana Museum " }
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.dataset.hd = image.hd;
        imgElement.dataset.description = image.description;
        gallery.appendChild(imgElement);
    });

    gallery.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = event.target.dataset.hd;
            modalImg.alt = event.target.alt;
            imageDescription.textContent = event.target.dataset.description;
        }
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
