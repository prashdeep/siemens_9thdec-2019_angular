
let restaurantOrderFunction = function (billAmount){

    const applyServiceCharge = function(serviceChargeInPerc){
        serviceChargeInPerc || 0;
        let totalAmount = billAmount + (serviceChargeInPerc/100 * billAmount)
        const applyTip = function(tipAmount){
            return totalAmount = totalAmount + tipAmount;
        }
        return applyTip;
    }
    return applyServiceCharge;
}

const meghanaRest = restaurantOrderFunction(2000);
const meghanaBMT = restaurantOrderFunction(2000);
const meghanaHSR = restaurantOrderFunction(2000);
const passTip1 = meghanaRest(10);
const passTip2 = meghanaBMT(15);
const passTip3 = meghanaHSR(0);

const totalBill = restaurantOrderFunction(2000)(10)(100);
console.log(`Total Amount after applying the tip amount is ${totalBill}`)
