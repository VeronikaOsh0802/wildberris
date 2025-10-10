const getGoots = () => {
  const links = document.querySelectorAll(".navigation-link");

  const getData = () => {
    fetch(
      "https://project111se-default-rtdb.asia-southeast1.firebasedatabase.app/db.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      getData();
    });
  });

  localStorage.getItem("goods", JSON.stringify(getData));
  const goods = JSON.parse(localStorage.getItem("goods"));
  console.log(goods);
  console.log(localStorage);
  localStorage.removeItem("goods");
  console.log(localStorage);
};

getGoots();
