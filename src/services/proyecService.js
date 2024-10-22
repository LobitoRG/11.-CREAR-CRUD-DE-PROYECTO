const Proyec = require('../models/proyecModel');

module.exports = { 
    getAllProyec: async () => {
        return await Proyec.find();
    },

    createProyec: async (title, description, startDate, endDate, status, budget) => {
        const proyec = new Proyec({ title, description, startDate, endDate, status, budget });
        return await proyec.save();
    },

    updateProyec: async (_id, updatedFields) => {
        try {
            const updatedProyec = await Proyec.findByIdAndUpdate(_id, updatedFields, { new: true });
            return updatedProyec;
        } catch (error) {
            console.error("Error al actualizar el proyecto:", error);
            throw error;
        }
    },    

    deleteProyec: async (_id) => {
        return await Proyec.findByIdAndDelete(_id);
    }
};

