const select = document.querySelector(".filter-select")
const selectMenu = document.querySelector(".select-menu")
const selectItems = document.querySelectorAll(".select-item");
const searchInput = document.querySelector(".search-form input");
const form = document.querySelector(".search-form")
function template(data) {
    population = data.population.toString().replace(/[^0-9]/g, 's');
    let template = `

        <div class="card">
          <div class="card-image" style="background-image: url(${data.flags.svg})"></div>
          <div class="card-content">
          ${data.name.common == undefined ? 
            ` <span class="title">${data.name}</span>` : ` <span class="title">${data.name.common}</span>`}
            <div class="card-sub-container">
              <div class="card-row">
                <span class="main-text">population:</span>
                <span>${population.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </div>
              <div class="card-row">
                <span class="main-text">region:</span>
                <span>${data.region}</span>
              </div>
              <div class="card-row">
                <span class="main-text">capital:</span>
                <span>${data.capital}</span>
              </div>
            </div>
          </div>
        </div>
 
    `;

    return template;
}


// gsap animation stagger
function animation(element, time) {
  gsap.set(`${element}`, {
    autoAlpha: 0,
    transformOrigin: "50% 50%",
    scale: 0.4
    
  });
  let TL = gsap.timeline({
    defaults: {
      stagger: {
        amount: 1.0

      },
      autoAlpha: 1,
      scale: 1,
      ease: `back.out(${time})`,
      stagger: {
        grid: [4,15],
        from: "center",
        amount: 1.5
      }
    }
  });
  TL.to(`${element}`, {});
}


function getElements() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card =>{
        card.addEventListener("click",(e)=>{
          const countryName = card.querySelector(".card-content .title").textContent.trim().toLowerCase();
            window.location.href = `/page/${countryName}`;
     });
    })
     
}
window.addEventListener("load", () => {
    getElements();
    animation(`.card`, 1.9)
    
    form.addEventListener("keypress", (e) => {
      if (e.key === 'Enter') {
        const countryRegex = /^[A-Za-z\s']+$/;
        if (countryRegex.test(form.elements.country.value)) {
          form.submit()
        }
         else {
          alert("only search for countries");
        }
      }
    });
    
  });
select.addEventListener("click",()=>{
    select.classList.toggle("active");
    selectItems.forEach(item =>{
        item.addEventListener("click",(e)=>{
            document.querySelector(".filter").textContent = item.textContent;
            const filter = {
                region: item.textContent.trim()
            }
            fetch("../data.json")
           .then((response) => response.json())
           .then(function (data) {
             document.querySelector(".card-container").innerHTML = "";
             const matchingCountries = data.filter(country => country.region === filter.region);
             matchingCountries.forEach(item =>{
              document.querySelector(".card-container").innerHTML += template(item);
            })
            getElements();
            })
        })
    })
})