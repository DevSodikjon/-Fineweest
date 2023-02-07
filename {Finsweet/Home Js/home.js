const hero = document.querySelector(".hero");
const catagory = document.querySelector(".catagory_items_cardBranch");

const render = ({ Id, name, description, photo }) => {
  return `
  <a href=""> 
    <div class="card">
      <div class="card_items">
  
        <div class="card_items_img">
          <img src="${photo}" alt="">
        </div>

        <div class="card_items_title">
            <h4>${name}</h4>
        </div>

        <div class="card_items_desc">
            <p>${description}</p>
        </div>
      </div>
    </div>
  </a>

  `;
  // <div class="hero_bg">
  //             <div class="container">
  //                 <div class="hero_items">
  //                     <div class="hero_items_content">
  //                         <p class="post">Posted on startup</p>

  //                         <h2>${name}</h2>
                          
  //                         <p class="data">By <span>James West</span> | May 23, 2022 </p>
                          
  //                         <p class="desc">${description}</p>

  //                         <button><a href="#"> Read More <i class="ri-arrow-right-s-line"></i></a></button>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
};

function getInfo() {
  catagory.innerHTML = "loading...";
  request.get("category").then((res) => {
    catagory.innerHTML = "";
    res.data.data.map((el, i) => {
      catagory.innerHTML += render({
        id: i + 1,
        ...el
      });
    });
  });
}

getInfo();
