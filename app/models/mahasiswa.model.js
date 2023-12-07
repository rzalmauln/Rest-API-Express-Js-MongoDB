const { default: mongoose } = require("mongoose");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama_mahasiswa: String,
      nrp: String,
      jurusan: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("mahasiswa", schema);
};
