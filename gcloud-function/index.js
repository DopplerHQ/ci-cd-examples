exports.dopplerTest = (req, res) => {
  res.status(200).send(JSON.stringify(process.env)); // Testing purposes only!
}
