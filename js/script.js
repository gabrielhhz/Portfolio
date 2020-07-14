// IMAGENS SECTION PORTFOLIO - INICIO

const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let g = 0; g < totalPortfolioItem; g++) {
            if (filterValue === portfolioItems[g].getAttribute("data-category")) {
                portfolioItems[g].classList.remove("hide");
                portfolioItems[g].classList.add("show");
            } else {
                portfolioItems[g].classList.remove("show");
                portfolioItems[g].classList.add("hide");
            }
            if (filterValue === "tudo") {
                portfolioItems[g].classList.remove("hide");
                portfolioItems[g].classList.add("show");
            }
        }
    })
}
//    IMAGENS SECTION PORTFOLIO - FINAL

// LIGHTBOX - INICIO
const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1
    } else {
        itemIndex--
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open")
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " de " + totalPortfolioItem;

}
// LIGHTBOX - FINAL

// BOTÃO DE FECHAR (CLOSE) - INICIO
lightbox.addEventListener("click", function(event) {
        if (event.target === lightboxClose || event.target === lightbox) {
            toggleLightbox();
        }
    })
    // BOTÃO DE FECHAR (CLOSE) - FINAL

//  MENU - INICIO
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);
    })

}

// SESSÂO DO PORTIFOLIO

