<template>
  <div class="overlay" :class="{ show: viewCart }" id="modal-cart">
    <div class="modal">
      <header class="modal-header">
        <h2 class="modal-title">Cart</h2>
        <button class="modal-close" @click="closeCart()">x</button>
      </header>
      <table class="cart-table">
        <colgroup>
          <col class="col-goods" />
          <col class="col-price" />
          <col class="col-minus" />
          <col class="col-qty" />
          <col class="col-plus" />
          <col class="col-total-price" />
          <col class="col-delete" />
        </colgroup>
        <thead>
          <tr>
            <th>Good(s)</th>
            <th>Price</th>
            <th colspan="3">Qty.</th>
            <th colspan="2">Total</th>
          </tr>
        </thead>
        <tbody class="cart-table__goods"></tbody>
        <tfoot>
          <tr>
            <th colspan=" 5">Total:</th>
            <th class="card-table__total" colspan="2">10000$</th>
          </tr>
        </tfoot>
      </table>
      <form class="modal-form" action="">
        <input
          class="modal-input"
          type="text"
          placeholder="Имя"
          name="nameCustomer"
        />
        <input
          class="modal-input"
          type="text"
          placeholder="Телефон"
          name="phoneCustomer"
        />
        <button class="button cart-buy" type="submit">
          <span class="button-text">Checkout</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const viewCart = useViewCart();

const closeCart = () => {
  viewCart.value = false;
};
</script>
