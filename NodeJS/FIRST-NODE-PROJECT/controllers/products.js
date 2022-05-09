const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-products",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Products(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Products.fetchAll();
  res.render("shop", {
    prods: products,
    pageTitle: "SHOP",
    path: "/",
  });
};
