const proyectService = require('../services/proyecService');

const resolvers = {
    Query: {
        proyec: () => {
            return proyectService.getAllProyec();
        }
    },
    Mutation: {
        createProyec: (_, { title, description, startDate, endDate, status, budget }) => {
            return proyectService.createProyec(title, description, startDate, endDate, status, budget);
        },
        updateProyec: async (_, { _id, title, description, startDate, endDate, status, budget, completed }) => {
            try {
                const updatedProyec = await proyectService.updateProyec(_id, {
                    title,
                    description,
                    startDate,
                    endDate,
                    status,
                    budget,
                    completed
                });

                // Si el proyecto no se encuentra, retornar null.
                if (!updatedProyec) {
                    throw new Error("Proyecto no encontrado");
                }

                return updatedProyec;
            } catch (error) {
                console.error("Error al actualizar el proyecto:", error);
                throw new Error("Error interno del servidor");
            }
        },
        deleteProyec: (_, { _id }) => {
            return proyectService.deleteProyec(_id);
        }
    }
};

module.exports = resolvers;
