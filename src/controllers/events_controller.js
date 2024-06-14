const Events = require("../models/Events");

exports.getAllBootcamps = async (req, res) => {
  try {
    const bootcamps = await Events.find();
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBootcamp = async (req, res) => {
  const bootcamp = new Bootcamp(req.body);
  try {
    const savedBootcamp = await Events.save();
    res.status(201).json(savedBootcamp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBootcampById = async (req, res) => {
  try {
    const bootcamp = await Events.findById(req.params.id);
    if (!bootcamp)
      return res.status(404).json({ message: "Bootcamp not found" });
    res.status(200).json(bootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
