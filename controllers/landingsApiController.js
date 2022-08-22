const Landing = require('../models/queryLandings');

const getLandings = async (req, res) => {
    let minimum_mass = req.query.minimum_mass
    //para fechas
    let dateFrom = req.query.from
    let dateTo = req.query.to

    //convertimos a num
    let minMassToNum = parseInt(minimum_mass)

    //para encontrarlo por masa mínima (200000):
    if (minMassToNum) {
        if(minMassToNum < 200000){
            res.status(400).json({"Bad Request": "Min mass must be equal or greater than 200000"});
        }
        try {
            let landingMassMin = await Landing.getLandingsMassMin(minMassToNum);
            res.status(200).json({ landingMassMin });
        
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"¡landing not found!"}); 
        }

        //por fecha (desde 1960)
    } else if(dateFrom) { 
        try {
            let landingFromTo = await Landing.getLandingFrom(dateFrom)
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"¡landing not found!"});
        }

        //por fecha (hasta 1990)
    } else if (dateTo){
        try {
            let landingFromTo = await Landing.getLandingTo(dateTo);
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"¡landing not found!"});
        }

    //para encontrar meteoritos caídos por fecha comprendida entre 1960 & 1990:
    } else if (dateFrom && dateTo) {
        try {
            let landingFromTo = await Landing.getLandingFromTo(dateFrom, dateTo)
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"¡landing not found!"}); 
        }
    }else {
        const landings = await Landing.getAllLandings();
        res.status(200).json(landings);
    }
}





module.exports = {
    getLandings
    }