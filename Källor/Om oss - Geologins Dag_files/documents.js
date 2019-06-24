jQuery(document).ready(function () {
  $(".documents-wrap h3.document").on("click", function () {
    /* Class on sibling .item-group */
    $(this)
      .closest(".item-group")
      .next(".item-group")
      .toggleClass("toggled");
    $(this).toggleClass("toggled");
    $(this)
      .next(".inner-item-wrap")
      .toggleClass("visible");
  });
});
