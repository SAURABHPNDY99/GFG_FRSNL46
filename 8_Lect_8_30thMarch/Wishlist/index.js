const wishlistInput = document.querySelector("#wishlist-input");
const btnAdd = document.querySelector("#btn-add");
const wishlistContainer = document.querySelector("#wishlist-container");

let wishlist = [];
let id = 1;

wishlistInput.addEventListener("input", (e) => console.log(e.target.value));

btnAdd.addEventListener("click", () => {
  if (wishlistInput.value === "") return alert("Wishlist should not be blank");

  let wishlistObj = { id: id++, label: wishlistInput.value };
  wishlist.push(wishlistObj);
  updateWishlist();
  wishlistInput.value = "";
});

function updateWishlist() {
  wishlistContainer.innerHTML = wishlist
    .map(
      (wishlist) => `
            <div>
                <input id="${wishlist.id}" type='checkbox'>
                <label for="${wishlist.id}">${wishlist.label}</label>
                <button>X</button>
            </div>
        `
    )
    .join("");
}

function removeItem() {}
