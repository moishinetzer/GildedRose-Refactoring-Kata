import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([
      new Item(
        "foo",
        0,
        0,
        (prevSellin) => prevSellin + 1,
        (prevQuality) => prevQuality - 1
      ),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});
