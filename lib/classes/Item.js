
/** 
 * template to generate Item Unit
 * @param { object} item
*/
function Item(item) {
    const {
        ItemUnitVolume,
        ItemUnitVolumeUnitOfMeasureName,
        ItemUnitWeight,
        ItemUnitWeightUnitOfMeasureName
    } = item;

    this.thc = new Concentration(item.ItemUnitThcPercent, item.ItemUnitThcContent, item.ItemUnitThcContentUnitOfMeasureName, item.ItemUnitThcContentDose, item.ItemUnitThcContentDoseUnitOfMeasureName);
    this.cbd = new Concentration(item.ItemUnitCbdPercent, item.ItemUnitCbdContent, item.ItemUnitCbdContentUnitOfMeasureName, item.ItemUnitCbdContentDose, item.ItemUnitCbdContentDoseUnitOfMeasureName);
    this.quantity = item.ItemUnitQuantity;
    this.quantityUnitOfMeasurement = item.ItemUnitQuantityUnitOfMeasureName;
    this.servingSize = item.ItemServingSize;
    this.supplyDurationDays = item.ItemSupplyDurationDays;
    this.itemDimensions = new ItemDimensions({ ItemUnitVolume, ItemUnitVolumeUnitOfMeasureName, ItemUnitWeight, ItemUnitWeightUnitOfMeasureName });
}

/**
 * Template to determine/set content  &  concentration in items
 * @param { string } percentage 
 * @param { string } content 
 * @param { string } contentUnitOfMeasurement 
 * @param { string } contentDose 
 * @param { string } contentDoseUnitOfMeasurement 
 */
function Concentration(percentage, content, contentUnitOfMeasurement, contentDose, contentDoseUnitOfMeasurement) {
    this.percentage = percentage;
    this.content = content;
    this.contentUnitOfMeasurement = contentUnitOfMeasurement;
    this.contentDose = contentDose;
    this.doseUnitOfMeasurement = contentDoseUnitOfMeasurement
}

/**
 * Template for unit dimensions of the item
 * @param { ItemUnitVolume, ItemUnitVolumeUnitOfMeasureName, ItemUnitWeight, ItemUnitWeightUnitOfMeasureName}
 */
function ItemDimensions({ ItemUnitVolume, ItemUnitVolumeUnitOfMeasureName, ItemUnitWeight, ItemUnitWeightUnitOfMeasureName }) {
    this.volume = ItemUnitVolume;
    this.volumeUnitOfMeasurement = ItemUnitVolumeUnitOfMeasureName;
    this.weight = ItemUnitWeight;
    this.weightUnitOfMeasurement = ItemUnitWeightUnitOfMeasureName;
}

module.exports = Item;