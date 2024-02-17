const asyncHandler = require("express-async-handler");
const batchModels = require("../models/batchModels");

const cretaeBatch = asyncHandler(async (req, res) => {
  const { batchName } =
    req.body;

  const batchManagment = await batchModels.create({
    batchName
  });
  console.log(batchManagment);
  res.status(200).json(batchManagment);
});

const getBatch = asyncHandler(async (req, res) => {
  const batchManagment = await batchModels.find();
  res.status(200).json(batchManagment);
});

const deleteBatch = asyncHandler(async (req, res) => {
  const batchManagment = await batchModels.findById(req.params.id);
  console.log(req.params.id);
  if (!batchManagment) {
    res.status(404);
    throw new Error("batch not found");
  }

  await batchModels.deleteOne({ _id: req.params.id });
  res.status(200).json(batchManagment);
});

module.exports = { cretaeBatch , getBatch , deleteBatch };
