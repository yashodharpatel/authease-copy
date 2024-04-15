const home = (req, res) => {
  res.send(`${process.env.COMPANY_NAME} Server Working!`);
};

export default { home };