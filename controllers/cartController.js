const { addItemToCartService, getCartByParamService, checkoutCartService, getTransactionByParamService } = require("../services/cartService");

module.exports.addItemToCartController = async (req, res) => {
      try {
            const cart = await addItemToCartService(req.body);

            res.status(cart.statusCode).json({ cart });
      } catch (error) {
            res.status(500).json({ message: "Something went wrong...", success: false, data: error });
      }
}

module.exports.getCartByParamController = async (req, res) => {
      try {
            const cart = await getCartByParamService(req.query);

            res.status(cart.statusCode).json({ cart });
      } catch (error) {
            res.status(500).json({ message: "Something went wrong...", success: false, data: error });
      }
}

module.exports.checkOutCartController = async (req, res) => {
      try {
            const cart = await checkoutCartService(req.body);

            res.status(cart.statusCode).json({ cart });
      } catch (error) {
            res.status(500).json({ message: "Something went wrong...", success: false, data: error });
      }
}

module.exports.getTransactionByParamController = async (req, res) => {
      try {
            const transaction = await getTransactionByParamService(req.query);

            res.status(transaction.statusCode).json({ transaction });
      } catch (error) {
            res.status(500).json({ message: "Something went wrong...", success: false, data: error });
      }
}