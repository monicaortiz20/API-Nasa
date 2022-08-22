const Landing = require('../schemas/landings')


//--------- Funciones Query para los GET ----------//

//para coger todos:
const getAllLandings = async () => {
    try{
        let getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}

//para masa mínima:
const getLandingsMassMin = async(minMassToNum) => {
    try {
        let getLandingsMassMin = await Landing.find( {mass: {$gt: minMassToNum}} )
        console.log(getLandingsMassMin);
        return getLandingsMassMin

    } catch (error) {
        console.error(error)
    }
}


//para conseguir por fecha (desde 1960) - FROM:
const getLandingFrom = async(dateFrom) => {
    try {
        let landingDateFromTo = await Landing.find({year: {$gt:dateFrom}})
        return landingDateFromTo

    } catch (error) {
        console.error(error)
    }
}


//para conseguir por fecha (hasta 1990) - TO:
const getLandingTo = async (dateTo) => {
    try {
        let landingDateFromTo = await Landing.find({year: {$lt:dateTo}})
        return landingDateFromTo

    } catch (error) {
        console.error(error)
    }
}


//para conseguir ambas fechas:
const getLandingFromTo = async (dateFrom, dateTo) => {
    try {
        let landingDateFromTo = await Landing.find({year:{$gt:dateFrom, $lt:dateTo}})
        return landingDateFromTo

    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    getAllLandings,
    getLandingsMassMin,
    getLandingFrom,
    getLandingTo,
    getLandingFromTo
};