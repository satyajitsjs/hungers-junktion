(function () {
  const CATEGORY_ORDER = [
    "burgers",
    "wraps",
    "sandwiches",
    "samosa",
    "rolls",
    "fries",
    "quick-bites",
    "momos",
    "vada-pav",
    "combos",
    "pizza",
    "garlic-bread",
    "sundaes",
    "fried-chicken",
    "snacks"
  ];

  const CATEGORY_LABELS = {
    burgers: "Burgers",
    wraps: "Wraps",
    sandwiches: "Sandwiches",
    samosa: "Samosa",
    rolls: "Rolls",
    fries: "Fries",
    "quick-bites": "Quick Bites",
    momos: "Momos",
    "vada-pav": "Vada Pav",
    combos: "Combos",
    pizza: "Pizza",
    "garlic-bread": "Garlic Bread",
    sundaes: "Sundaes",
    "fried-chicken": "Fried Chicken",
    snacks: "Snacks"
  };

  function getCategoryLabel(category) {
    return CATEGORY_LABELS[category] || category;
  }

  function formatPrice(value) {
    if (typeof value !== "number") {
      return value;
    }
    return value.toLocaleString("en-IN");
  }

  function getItemMeta(item) {
    const parts = [];
    if (item && item.category) {
      parts.push(getCategoryLabel(item.category));
    }
    if (item && item.quantity) {
      parts.push(item.quantity);
    }
    if (item && typeof item.priceLarge === "number") {
      parts.push(`Large Rs. ${formatPrice(item.priceLarge)}`);
    }
    return parts.join(" | ");
  }

  function normalizeMenuData(items) {
    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((item) => {
      const normalized = { ...item };
      const meta = getItemMeta(normalized);

      if (!normalized.description) {
        normalized.description = meta || normalized.name || "Signature item";
      }

      if (!Array.isArray(normalized.ingredients)) {
        normalized.ingredients = [];
      }

      if (typeof normalized.rating !== "number") {
        normalized.rating = 4.5;
      }

      if (!normalized.prepTime) {
        normalized.prepTime = "15-20 mins";
      }

      if (typeof normalized.calories !== "number") {
        normalized.calories = normalized.type === "veg" ? 250 : 320;
      }

      if (typeof normalized.popular !== "boolean") {
        normalized.popular = false;
      }

      if (!Array.isArray(normalized.dietary)) {
        normalized.dietary = normalized.type === "veg" ? ["vegetarian"] : [];
      }

      if (!normalized.spiceLevel) {
        normalized.spiceLevel = "medium";
      }

      if (!normalized.alt) {
        normalized.alt = `${normalized.name} from Hunger's Junktion`;
      }

      return normalized;
    });
  }

  window.HJMenu = {
    CATEGORY_ORDER,
    CATEGORY_LABELS,
    getCategoryLabel,
    formatPrice,
    getItemMeta,
    normalizeMenuData
  };
})();
