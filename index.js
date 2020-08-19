let data = [
  {
    id: 0,
    name: "Television ",
    img: "TCL-32-HD-LED-TV-32R300-491430758-i-3-1200Wx1200H.jpg",
    description:
      "LED TV is a type of LCD television that uses light-emitting diodes to backlight the display instead of the cold cathode fluorescent lights used in standard LCD televisions.An LED also lasts much longer than most other lighting technologies.",
  },
  {
    id: 1,
    name: "Laptop",
    img: "Laptop.jpg",
    description:
      "A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery.Laptops have an attached keyboard and a touchpad, trackball, or isometric joystick used for navigation.",
  },
  {
    id: 2,
    name: "Mobile",
    img: "Mobile.jpg",
    description:
      " A mobile phone  is a small portable radio telephone. The mobile phone can be used to communicate over long distances without wires.  Now, more people are using smartphones than the old kind of mobile phone, which are called feature phones.",
  },
  {
    id: 3,
    name: "Earphones",
    img: "earphones.jpg",
    description:
      "Headphones are small speakers that can be worn in or around your ears. Smaller headphones, often called earbuds or earphones, are placed inside the outer part of your ear canal.Like speakers, headphones contain transducers that convert an audio signal into sound waves",
  },
  {
    id: 4,
    name: "Power Bank",
    img: "powerBank.png",
    description:
      " Portable Power Banks are comprised of a special battery in a special case with a special circuit to control power flow. They allow you to store electrical energy deposit it in the bank and then later use it to charge up a mobile device draw it from the bank",
  },
  {
    id: 5,
    name: "Camera",
    img: "Camera.jpg",
    description:
      " A camera is an optical instrument used to record images. At their most basic, cameras are sealed boxes (the camera body) with a small hole (the aperture) that allow light in to capture an image on a light-sensitive surface. Many digital cameras can also record moving videos with sound. ",
  },
];

div = document.getElementById("card-list");

console.log(data);
let render_lists = function (lists) {
  let card = "";
  lists.forEach((item) => {
    console.log(item);
    card += `
      <div class="card">
          <img src=${item.img} class="card-img-top" alt=${item.name} style="width:250px;height:200px">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      `;
  });
  div.innerHTML = card;
};
render_lists(data);

input = document.getElementById("filtered_data");

let filterData = function (event) {
  keyword = input.value.toLowerCase();
  filtered_data = data.filter(function (item) {
    item = item.name.toLowerCase();
    return item.indexOf(keyword) > -1;
  });

  render_lists(filtered_data);
};

input.addEventListener("keyup", filterData);
