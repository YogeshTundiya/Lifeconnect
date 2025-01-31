const testController = (req, res) => {
  res.status(200).send({
    message: "Yogesh",
    success: true,
  });
};

module.exports = { testController };
