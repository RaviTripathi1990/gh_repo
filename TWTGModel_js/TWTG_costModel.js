/**
 * @author Ravi Tripathi
 * @lastModified 2026-09-15
 * 
 */

function NEONCostModel(model, productConfig, region, certifiedCountry, exClassification, qty) {



    try {

        let unitCost = 0;

        let lookupColumn = 1; // this lookup is only used for temerature sensor


        if (qty < 5) {
            lookupColumn = "lessThan5"
        } else if (qty < 50) {
            lookupColumn = "5_to_49"
        } else if (qty < 201) {
            lookupColumn = "50_to_200"
        } else if (qty < 500) {
            lookupColumn = "201_to_499"
        }
        else {
            lookupColumn = "500_and_more"
        }

      
     
      

        
        if (model=="NEON Temperature Sensor (EX)" || model=="NEON Temperature Transmitter (EX)" || model=="NEON Dual Temperature Transmitter (EX)") {

            if (exClassification == "EX" && region == "Europe") { unitCost = MyTwoWayLookup(NEON_EX_tempSensor_Europe,model,  lookupColumn) }
            if (exClassification == "EX" && region != "Europe") { unitCost = MyTwoWayLookup(NEON_EX_tempSensor_nonEurope,model,  lookupColumn) }



        }  else if (model == "NEON Steam trap ultra sonic (Direct-260C) (Ex)" || model == "NEON Steam trap ultra sonic (Direct-450C) (Ex)"|| model == "NEON Steam trap ultra sonic (Direct-260C) (non-Ex)"||model == "NEON Steam trap ultra sonic (Direct-450C) (non-Ex)"||model == "NEON Steam trap ultra sonic (Wired-260C) (Ex)"||model == "NEON Steam trap ultra sonic (Wired-450C) (Ex)"||model == "NEON Steam trap ultra sonic (Wired-260C) (non-Ex)"||model == "NEON Steam trap ultra sonic (Wired-450C) (non-Ex)") {

            if (exClassification == "EX" && region == "Europe") { unitCost = MyTwoWayLookup(NEON_EX_sonicSensor_Europe,productConfig, lookupColumn) }
            if (exClassification == "EX" && region != "Europe") { unitCost = MyTwoWayLookup(NEON_EX_sonicSensor_nonEurope,productConfig, lookupColumn) }
            if (exClassification != "EX" && region == "Europe") { unitCost = MyTwoWayLookup(NEON_nonEX_sonicSensor_Europe,productConfig, lookupColumn) }
            if (exClassification != "EX" && region != "Europe") { unitCost = MyTwoWayLookup(NEON_nonEX_sonicSensor_nonEurope,productConfig, lookupColumn) }

        } else {

            if (exClassification == "EX" && region == "Europe") { unitCost = MyTwoWayLookup(NEON_EX_productLine_Europe,model, lookupColumn) }
            if (exClassification == "EX" && region != "Europe") { unitCost = MyTwoWayLookup(NEON_EX_productLine_nonEurope,model, lookupColumn) }
            if (exClassification != "EX" && region == "Europe") { unitCost = MyTwoWayLookup(NEON_nonEX_productLine_Europe,model, lookupColumn) }
            if (exClassification != "EX" && region != "Europe") { unitCost = MyTwoWayLookup(NEON_nonEX_productLine_nonEurope,model, lookupColumn) }


        }

    


        


        let obj = {

            model: model,
            productConfig: productConfig,
            region: region,
            certifiedCountry: certifiedCountry,
            exClassification: exClassification,
            qty: qty,
            unitCost: unitCost

        }

        let returnObj = JSON.stringify(obj)

        return returnObj

    } catch (error) {

        let errorObj = {

            model: model,
            productConfig: productConfig,
            region: region,
            certifiedCountry: certifiedCountry,
            exClassification: exClassification,
            qty: qty,
            unitCost: 0

        }

        let ErorReturnObj = JSON.stringify(errorObj)

        return ErorReturnObj

    }


}


function neonCost(inputJSON){let result=0; let parseObj=JSON.parse(inputJSON);result=parseObj.unitCost; return result}


// Testing the function so that everything is working fine.