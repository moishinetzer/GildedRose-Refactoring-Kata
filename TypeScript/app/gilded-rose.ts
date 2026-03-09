export class Item {
  name: string;
  sellIn: number;
  quality: number;

  // updateSellIn is a callback that give the item the current sellIn and sets the new sellIn to the returned value
  updateSellIn: (sellIn: number, quality: number) => number;
  updateQuality: (quality: number, sellin: number) => number;

  constructor(
    name: string,
    sellIn: number,
    quality: number,
    updateSellIn: (sellIn: number, quality: number) => number,
    updateQuality: (quality: number, sellin: number) => number
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.updateSellIn = updateSellIn;
    this.updateQuality = updateQuality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      item.sellIn = item.updateSellIn(item.sellIn, item.quality);
      item.quality = item.updateQuality(item.quality, item.sellIn);

      //   if (item.name === "Sulfuras, Hand of Ragnaros") continue;

      //   // item.Quality logic
      //   switch (item.name) {
      //     case "Backstage passes to a TAFKAL80ETC concert": {
      //       if (item.sellIn <= 5) {
      //         item.quality += 3;
      //       } else if (item.sellIn <= 10) {
      //         item.quality += 2;
      //       } else if (item.sellIn <= 0) {
      //         item.quality = 0;
      //       } else {
      //         item.quality += 1;
      //       }

      //       break;
      //     }

      //     case "Aged Brie": {
      //       if (item.sellIn > 0) {
      //         item.quality += 1;
      //       } else {
      //         item.quality += 2;
      //       }
      //       break;
      //     }

      //     default: {
      //       if (item.sellIn > 0) {
      //         item.quality -= 1;
      //       } else {
      //         item.quality -= 2;
      //       }
      //       break;
      //     }
      //   }

      //   if (item.quality < 0) item.quality = 0;

      //   if (item.quality > 50 && item.name !== "Sulfuras, Hand of Ragnaros") {
      //     item.quality = 50;
      //   } else {
      //     if (item.quality > 80) item.quality = 80;
      //   }

      //   item.sellIn = item.sellIn - 1;
      // }
    }
    return this.items;
  }
}
