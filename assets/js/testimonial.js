const datatesti = [
  {
    name: "Beardy Jack",
    comment: "Mantap pisan jasanya!",
    image: "./assets/images/luffy.jpg",
  },
  {
    name: "Amir Khan",
    comment: "Pelayanannya ramah!",
    image: "./assets/images/zoro.jpg",
  },
  {
    name: "Julia",
    comment: "Rekomended banget!",
    image: "./assets/images/sanji.jpg",
  },
  {
    name: "Earl Johnson",
    comment: "Yah Lumayan",
    image: "./assets/images/robin.jpg",
  },
  {
    name: "Jill",
    comment: "Tidak sesuai permintaan",
    image: "./assets/images/usop.jpg",
  },
];

function showtestimonial() {
  let testiForHtml = "";

  datatesti.forEach((item) => {
    testiForHtml += `
        <div class="testimonial">
        <img src=${item.image} class="profile-testimonial" />
        <p class="quote">"${item.comment}"</p>
        <p class="author">- ${item.name}</p>
    </div>`;
  });
  document.getElementById("testimonials").innerHTML = testiForHtml;
}
showtestimonial();
