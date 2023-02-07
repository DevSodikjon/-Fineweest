const card_branch = document.querySelector(".tags_items_cardBranchs");
const pagination = document.querySelector(".pagination");
let limit = 10;
let page = 1;

const getCard = (id, category) => {
  const { title, tags, photo, description } = category;

  //   <img src="./img/cardImg.png" alt="cardImg">
  // <h5>NO<span>${id}</span></h5>
  return `
    <div class="card" id="${id}">
    <div class="card_img">
            <img src="${photo}">
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
        </div>
    </div>
`;
};

function getInfo() {
  card_branch.innerHTML = "loading...";
  request.get(`post?page=${page}&limit=${limit}`).then((res) => {
    card_branch.innerHTML = "";
    res.data.data.map((el, i) => {
      console.log(el.pagination);
      card_branch.innerHTML += getCard(i, el);
    });

    let pages_number = Math.ceil(
      res.data.pagination.total / res.data.pagination.limit
    );

    console.log(pages_number);
    let pages = "";
    for (let i = 1; i < pages_number; i++) {
      pages += `
        <li class="page-item">
          <a class="page-link ${
            pages === i ? "nav_button" : ""
          }" href="#" onclick="{changePage(${i})}">${i}</a>
        </li>
        `;
    }

    pagination.innerHTML = `
    <li class="page-item">
      <a class="page-link ${
        pages === 1 ? "nav_button" : ""
      }" href="#" onclick="{changePage('prev')}">
        <i class="ri-arrow-left-s-line"></i>Previous
      </a>
    </li>
      ${pages}
    <li class="page-item">
      <a class="page-link ${
        pages_number === pages ? "nav_button" : ""
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
