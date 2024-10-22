const mongoose = require('mongoose');

const proyecSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },  // Por ejemplo: "en progreso", "completado"
    budget: { type: Number, required: true },
    completed: { type: Boolean, default: false }
});

const Proyec = mongoose.model('Proyec', proyecSchema);

module.exports = Proyec;
