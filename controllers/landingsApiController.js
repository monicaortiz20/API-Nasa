const Landing = require('../models/queryLandings');

const getLandings = async (req, res) => {
    let minimum_mass = req.query.minimum_mass
    if (minimum_mass >= "200000") {
        try {
            let landing = await Landing.getAllLandings;
            res.status(200).json({ landing });
        
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"landing no encontrado por nombre"}); // lo ponemos aqui a esto para que si falla el fetch no me de timeout y me pinte el array vacio
           //el .status(200) es para que me devuelva ese numero de codigo de que todo ha ido bien (200) o error(404)
        }
    // } else
    //     try {
    //         let landing = await Landing.find({},'name mass').sort('-mass')//poner las llaves sin nada es que me busque todo y el .sort es para que me ordene los resultados segun la propiedad que yo le pase. el - delante del id indica que el orden sea descendente, si no lo pongo es ascendente
    //         res.status(200).json({ landing }); // Pinta datos en el pug
    //     }
    //     catch (error) {
    //         console.log(`ERROR: ${error.stack}`);
    //         let landing=[];
    //         res.status(404).json({"message":"landing no encontrado"});
            
    //     }
        }
}
module.exports = {
    getLandings
    }