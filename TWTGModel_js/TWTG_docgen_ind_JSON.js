function docgen_twtg_ind_json(ds_model, ds_productConfiguration, ds_model_artnostd, ds_accessory, ds_accessory_artnostd, orderedBy_companyName, orderedBy_contactPerson, orderedBy_address1, orderedBy_address2, orderedBy_address3, deliverTo_companyName, deliverTo_contactPerson, deliverTo_address1, deliverTo_address2, deliverTo_address3) {


    let indjson = "";

    ds_accessory_artnostd = (ds_accessory_artnostd == "dummy") ? "" : ds_accessory_artnostd;

    let indobj = {

        ds_model,
        ds_model_artnostd,
        ds_productConfiguration,
        ds_accessory,
        ds_accessory_artnostd,

        orderedBy_companyName,
        orderedBy_contactPerson,
        orderedBy_address1,
        orderedBy_address2,
        orderedBy_address3,
        deliverTo_companyName,
        deliverTo_contactPerson,
        deliverTo_address1,
        deliverTo_address2,
        deliverTo_address3,

    }

    indjson = JSON.stringify(indobj)

    return indjson

}


function docgen_twtg_cond_json(ds_extraAccessory, ds_extraAccessory_artnostd) {


    let array_ds_extraAccessory = [];
    let array_ds_extraAccessory_artnostd = [];

    for (let i = 0; i < 6; i++) {

        array_ds_extraAccessory[i] = "";
        array_ds_extraAccessory_artnostd[i] = "";

    }

    for (let i = 0; i < 6; i++) {

        array_ds_extraAccessory[i] = ds_extraAccessory[i];
        ds_extraAccessory_artnostd[i]=(ds_extraAccessory_artnostd[i]=="dummy")?"":ds_extraAccessory_artnostd[i];
        array_ds_extraAccessory_artnostd[i] = ds_extraAccessory_artnostd[i];

    }

    let cond_data = [];

    for (let i = 0; i < 6; i++) {

        let step = {

            ds_extraAccessory: array_ds_extraAccessory[i],
            ds_extraAccessory_artnostd: array_ds_extraAccessory_artnostd[i]

        }

        cond_data.push(step);

    }

    let outputJSON = "";
    outputJSON = JSON.stringify(cond_data);

     return outputJSON

}