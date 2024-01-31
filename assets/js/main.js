const imgBox = document.getElementById("img-box");
const priceBox = document.getElementById("price-box");
const blackBtn = document.getElementById("black-btn");
const redBtn = document.getElementById("red-btn");
const buyBtn = document.getElementById("buy-btn");

const data = {
  blackimg: "assets/img/img-black.jpeg",
  blackprice: "200$",
  redimg: "assets/img/img-red.jpeg",
  redprice: "300$",
};

redBtn.addEventListener("click", () => {
  imgBox.innerHTML = `
    <img
    src="${data.redimg}"
    class="card-img-top"
    alt="..."
    />
    
`;
  priceBox.innerText = data.redprice;
  buyBtn.classList.add("bg-red");
  buyBtn.classList.remove("bg-black");
});

blackBtn.addEventListener("click", () => {
  imgBox.innerHTML = `
      <img
      src="${data.blackimg}"
      class="card-img-top"
      alt="..."
      />      
  `;
  priceBox.innerText = data.blackprice;
  buyBtn.classList.add("bg-black");
  buyBtn.classList.remove("bg-red");
});
