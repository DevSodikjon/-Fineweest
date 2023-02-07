const card_branch = document.querySelector(".tags_items_cardBranchs");
const pagination = document.querySelector(".pagination");
const form = document.querySelector(".form");
// const modal_hover = document.querySelector(".modal_hover");
const Name = document.getElementById("Name");
const descriptions = document.getElementById("expDesc");
const saveEditBtn = document.getElementById("save-edit");
const searchForm = document.querySelector(".form_search");
let val = document.querySelector(".search");

let selected = null;
let limit = 10;
let page = 1;

const changeNote = () => {
  saveEditBtn.innerHTML = selected ? "Save" : "Add";
};

const getCard = (id, category) => {
  const { title, _id, tags, photo, description } = category;
  //   <img src="./img/cardImg.png" alt="cardImg">
  // <h5>NO<span>${id}</span></h5>
  return `
    <div class="card" id="${id}">
      <div class="card_img">
            <img src="./img/cardImg.png">
      </div>

      <div class="card_contents">
        <div class="card_data">
          <p>${tags}</p>
        </div>

        <div class="card_title">
          <h4>${title}</h4>
        </div>

        <div class="card_description">
          <p>${description}</p>
        </div>
        
        <div class="card_btns">
        <button class="edit" onclick={edit('${_id})}>Edit</button>
        <button class="delete" onclick={deleteCard('${_id}')}>Delete</button>
        </div>
      </div>
    </div>
`;
};

function getInfo() {
  card_branch.innerHTML = "loading...";
  request.get(`post?page=${page}&limit=${limit}`).then((res) => {
    card_branch.innerHTML = "";
    res.data.data.map((el, i) => {
      card_branch.innerHTML += getCard(i, el);
    });

    let pages_number = Math.ceil(
      res.data.pagination.total / res.data.pagination.limit
    );

    let pages = "";
    for (let i = 1; i < pages_number; i++) {
      pages += `
        <li class="page-item">
          <a class="page-link ${
            pages === i ? "disabled" : ""
          }" href="#" onclick="{changePage(${i})}">${i}</a>
        </li>
        `;
    }

    pagination.innerHTML = `
    <li class="page-item">
      <a class="page-link ${
        pages === 1 ? "disabled" : ""
      }" href="#" onclick="{changePage('prev')}">
        <i class="ri-arrow-left-s-line"></i>Previous
      </a>
    </li>
      ${pages}
    <li class="page-item">
      <a class="page-link ${
        pages_number === pages ? "disabled" : ""
      }" href="#" onclick="{changePage('next')}">
        Next<i class="ri-arrow-right-s-line"></i>
      </a>
    </li>
      `;
  });
}
getInfo();

function changePage(value) {
  if (value === "next") {
    page++;
  } else if (value === "prev") {
    page--;
  } else {
    page = value;
  }
  getInfo();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    title: Name.value,
    description: descriptions.value,
    photo: "63d5c925de86a00eb0b074bb",
    category: "63d6d381fd840217d5938b0d"
    // tags: tags
  };

  request.post("post", data).then((res) => {
    Name.value = "";
    descriptions.value = "";
    modal_hover.classList.remove("active");
    getInfo();
  });
});

val.addEventListener("change", (e) => {
  e.preventDefault();
  console.log("ok");
  console.log(val.value);
});

function deleteCard(id) {
  request.delete(`post/${id}`).then(() => {
    getInfo();
  });
}

// function edit(id) {
//   console.log("helooo");
//   selected = id;
//   changeNote();
//   request.post(`post/${id}`).then((res) => {
//     console.log(res);
//     // let data = res.data.data;
//   });
// }
