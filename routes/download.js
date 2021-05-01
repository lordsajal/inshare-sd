const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  const file = await File.findOne({ uuid: req.params.uuid });
  if (!file) {
    return res.render("download", { error: "lisk has been expired." });
  }

  const filePath = `${__dirname}/../${file.path}`;
  res.download(filePath);
});

module.exports = router;
