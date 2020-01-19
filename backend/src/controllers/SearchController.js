const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        console.log(techsArray)

        // Buscar todos os Devs num raio de 10km
        // Filtrar por tecnologias

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            }, 
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 100000000,
                },
            },
        });

        return(response.json({ devs }));

    }
}