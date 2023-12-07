const db = require("../models");
const mahasiswa = db.mahasiswa;

exports.create = async (req, res) => {
  try {
    const data = await mahasiswa.create(req.body);
    return res.send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Error creating mahasiswa",
    });
  }
};
exports.findAll = async (req, res) => {
  try {
    const data = await mahasiswa.find().lean();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving mahasiswa.",
    });
  }
};
exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await mahasiswa.findById(id);
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Error retrieving mahasiswa." });
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await mahasiswa.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });

    const message = data
      ? "mahasiswa was updated successfully."
      : `Cannot update mahasiswa with id=${id}. Maybe mahasiswa was not found!`;

    res.send({ message });
  } catch (err) {
    res.status(500).send({
      message: "Error updating mahasiswa with id=" + id,
    });
  }
};
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await mahasiswa.findOneAndDelete({ _id: id });
    const message = data
      ? "mahasiswa was deleted successfully!"
      : `Cannot delete mahasiswa with id=${id}. Maybe mahasiswa was not found!`;
    res.send({ message });
  } catch (err) {
    res.status(500).send({
      message: "Could not delete mahasiswa with id=" + id,
    });
  }
};
