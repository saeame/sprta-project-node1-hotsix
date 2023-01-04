const OwnerService = require("../services/owner.service");

console.log(OwnerService);

a = new OwnerService();

console.log(a);
console.log(a.getAllLaundries());

class OwnerController{

    ownerService = new OwnerService();    

    // getAllLaundries = async function (req, res, next) {
    //     console.log(this.ownerService);

    //     const laundries = await this.ownerService.getAllLaundries();

    //     return res.status(200).send({laundries});

    // }

    getAllLaundries = async (req, res, next) => {
        // const userId = res.locals.a.userId;       
        
        const laundries = await this.ownerService.getAllLaundries();

        return res.status(200).send({laundries});
    }

    chooseALaundryFromPendings = async (req, res, next) => {

        const { laundryId } = req.params;
        // const userId = res.locals.a.userId;
        const userId = 2;

        const msg = await this.ownerService.chooseALaundryfromPendings(laundryId, userId);

        return res.status(200).send({msg});
    }

    getALaundryInProgress = async (req, res, next) => {

        // const userId = res.locals.a.userId;
        const userId = 2;

        const laundry = await this.ownerService.getALaundryInProgress(userId);

        return res.status(200).send({laundry});

    }

    changeALaundryStatus = async (req, res, next) => {
        
        // const userId = res.locals.a.userId;
        const userId = 2;

        const msg = await this.ownerService.changeALaundryStatus(userId);       

        return res.status(200).send({msg});

    }




    

}

module.exports = OwnerController;