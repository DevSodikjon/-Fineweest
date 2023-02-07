const Name = document.getElementById("Name");
const descriptions = document.getElementById("expDesc");
const photos = document.getElementById("photo");
const exp = document.getElementById("experiences");
const experience_form = document.getElementById("experience-form");
const saveEditBtn = document.getElementById("save-edit");
const addBtn = document.getElementById("addBtn");
const selectCatagory = document.querySelector(".selectCatagory");
const photo = document.getElementById("photo");
const tags = document.getElementById("tags");

let selected = null;



const getCard = (id, category) => {
  const {
    _id,
    title,
    photo = "63d5c925de86a00eb0b074bb",
    description,
    // tags
  } = category;

  // console.log(_id);
  return `
  <div class="card" style="width: 18rem;" >
      <img src="${photo}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</</p></br>
        <a href="#" class="btn btn-primary" onclick={deleteCard('${_id}')}>Delete</a>
      </div>
    </div>
    `;
};



function getInfo() {
  exp.innerHTML = "loading...";
  request.get("post").then((res) => {
    exp.innerHTML = "";
    res.data.data.map((el, i) => {
      // console.log(el.title);
      exp.innerHTML += getCard(i, el);
    });
  });
}

getInfo();

experience_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    title: Name.value,
    description: descriptions.value,
    photo: "63d5c925de86a00eb0b074bb",
    category: "63d6d381fd840217d5938b0d",
    // tags: tags
  };

  request.post("post", data).then((res) => {
    console.log(res);
        // request.post("experiences", data).then((res) => {
        //   getExperiences();
        // });
    getInfo();
  });
});

function deleteCard(id) {
  request.delete(`post/${id}`).then(() => {
    console.log(id);
    getInfo();
  });
}

logOut.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("I am working");
  localStorage.removeItem(TOKEN, res.data.token);
  window.location.href = "../{Finsweet/Home.html";
});
