import { getCookie, setCookie } from "./utils.js";

// 儲存語言的 key
const LANG_KEY = "lang";
export const LANG = getLanguage(); // "FR"|"EN"|"ZH"

/**
 * 設定目前語言
 * @param {string} lang - "FR" | "EN" | "ZH"
 */
export function setLanguage(lang) {
  const choice = (lang || "").toUpperCase();
  if (["FR", "EN", "ZH"].includes(choice)) {
    // localStorage.setItem(LANG_KEY, choice);
    setCookie(LANG_KEY, choice);
    // 重新載入頁面，用新的語言重新渲染
    window.location.reload();
  } else {
    console.warn("Langue non supportée:", lang);
  }
}

/**
 * 取得目前語言
 * @returns {string} - "FR" | "EN" | "ZH"
 */
export function getLanguage() {
  // 1) 檢查 URL 查詢參數（優先）
  
  let lang = getCookie(LANG_KEY);
  // 3) 預設語言
  return lang || "FR";
}




export const translations = {
  "nos_categories": { FR: "Nos Catégories", EN: "Our categories", ZH: "所有分類" },
  "dishes": { FR: "Plats", EN: "Dishes", ZH: "主餐" },
  "sides": { FR: "Accompagnements", EN: "Sides", ZH: "配菜" },
  "dish1":  { FR: "Tofu grillé bio", EN: "Organic Grilled Tofu", ZH: "香煎豆腐定食" },
  "dish2":  { FR: "Bol au nattō et légumes", EN: "Natto Veggie Bowl", ZH: "納豆蔬菜丼" },
  "dish3":  { FR: "Soba froides au sésame", EN: "Chilled Sesame Soba", ZH: "芝麻冷蕎麥麵" },
  "dish4":  { FR: "Curry de légumes kabocha", EN: "Kabocha Vegetable Curry", ZH: "南瓜蔬菜咖哩" },
  "dish5":  { FR: "Onigiri trio végétal", EN: "Veggie Onigiri Trio", ZH: "蔬食飯糰三品" },
  "dish6":  { FR: "Soupe miso aux légumes", EN: "Veggie Miso Soup", ZH: "蔬菜味噌湯" },
  "dish7":  { FR: "Tempeh teriyaki", EN: "Teriyaki Tempeh", ZH: "照燒天貝" },
  "dish8":  { FR: "Ramen shōyu végétal", EN: "Vegan Shoyu Ramen", ZH: "素醬油拉麵" },
  "dish9":  { FR: "Mapo tofu végétarien", EN: "Vegetarian Mapo Tofu", ZH: "素麻婆豆腐" },
  "dish10": { FR: "Ochazuke au thé vert", EN: "Green Tea Ochazuke", ZH: "綠茶泡飯" },
  "dish11": { FR: "Gyoza végétarien", EN: "Vegetarian Gyoza", ZH: "蔬菜煎餃" },
  "dish12": { FR: "Edamame au sel de mer", EN: "Sea Salt Edamame", ZH: "海鹽毛豆" },
  "dish13": { FR: "Salade de wakamé", EN: "Wakame Salad", ZH: "和風海藻沙拉" },
  "dish14": { FR: "Soupe claire aux champignons", EN: "Clear Mushroom Soup", ZH: "清湯香菇湯" },
  "dish15": { FR: "Aubergine grillée au miso", EN: "Miso Grilled Eggplant", ZH: "味噌烤茄子" },
  "add_to_cart": { FR: "Ajouter", EN: "Add to cart", ZH: "加入購物車" },
  "see_more": { FR: "Voir plus", EN: "See more", ZH: "查看更多" },
  "supprimer": { FR: "Supprimer", EN: "Delete", ZH: "刪除" },
  "filter": { FR: "Filtre", EN: "Filter", ZH: "篩選" },
  "apply": { FR: "Appliquer", EN: "Apply", ZH: "套用" },
  "reset": { FR: "Réinitialiser", EN: "Reset", ZH: "重置" },
  "close": { FR: "Fermer", EN: "Close", ZH: "關閉" },
  "no_results": { FR: "Aucun résultat", EN: "No results", ZH: "無符合條件的結果" },
  "allergies": { FR: "Allergènes", EN: "Allergens", ZH: "過敏原" },
  "ingredients": { FR: "Ingrédients", EN: "Ingredients", ZH: "食材" },
  "added": { FR: "Ajouté ✓", EN: "Added ✓", ZH: "已加入 ✓" },
  "neutral": { FR: "Neutre", EN: "Neutral", ZH: "中立" },
  "include": { FR: "Inclure", EN: "Include", ZH: "包含" },
  "exclude": { FR: "Exclure", EN: "Exclude", ZH: "排除" },
  "go back": { FR: "Retour", EN: "Go back", ZH: "返回" },
  "cart": { FR: "Panier", EN: "Cart", ZH: "購物車" },
  "language": { FR: "Langue", EN: "Language", ZH: "語言" },
  "help": { FR: "Aide", EN: "Help", ZH: "取得協助" },
  "nos_categories": { FR: "Nos Catégories", EN: "Our categories", ZH: "所有分類" },
  "payment_success": { FR: "Paiement réussi", EN: "Payment Successful", ZH: "付款成功" },
  "cash_notice": { 
    FR: "Si vous avez choisi le paiement en espèces (Espèces), veuillez vous rendre au comptoir pour finaliser votre paiement.",
    EN: "If you selected cash payment (Espèces), please proceed to the counter to complete your payment.",
    ZH: "若您選擇現金支付（Espèces），請至櫃檯完成結帳。"
  },
  "order_number": { FR: "Numéro de commande", EN: "Order Number", ZH: "取餐號碼" },
  "choose_satisfaction": { 
    FR: "Veuillez évaluer votre satisfaction concernant la commande",
    EN: "Please rate your order satisfaction",
    ZH: "請選擇您的點餐滿意度"
  },
  "unsatisfied": { FR: "Insatisfait", EN: "Not Satisfied", ZH: "不滿意" },
  "neutral": { FR: "Moyen", EN: "Neutral", ZH: "普通" },
  "satisfied": { FR: "Satisfait", EN: "Satisfied", ZH: "滿意" },
  "done": { FR: "Terminé", EN: "Done", ZH: "完成" },
  // 食材與過敏原
  // key 必須小寫且不含空白
  "tofu bio": { FR: "Tofu bio", EN: "Organic tofu", ZH: "有機豆腐" },
  "miso": { FR: "Miso", EN: "Miso", ZH: "味噌" },
  "riz complet": { FR: "Riz complet", EN: "Brown rice", ZH: "糙米" },
  "légumes de saison": { FR: "Légumes de saison", EN: "Seasonal vegetables", ZH: "時令蔬菜" },
  "soja": { FR: "Soja", EN: "Soy", ZH: "大豆" },
  "sésame (traces)": { FR: "Sésame (traces)", EN: "Sesame (traces)", ZH: "芝麻（可能含有）" },
  "nattō": { FR: "Nattō", EN: "Natto", ZH: "納豆" },
  "sauce shōyu": { FR: "Sauce shōyu", EN: "Shoyu sauce", ZH: "醬油" },
  "riz": { FR: "Riz", EN: "Rice", ZH: "米飯" },
  "concombre": { FR: "Concombre", EN: "Cucumber", ZH: "黃瓜" },
  "algues": { FR: "Algues", EN: "Seaweed", ZH: "海藻" },
  "gluten": { FR: "Gluten", EN: "Gluten", ZH: "麩質" },
  "soba": { FR: "Soba", EN: "Soba noodles", ZH: "蕎麥麵" },
  "goma dare": { FR: "Goma dare", EN: "Sesame sauce", ZH: "芝麻醬" },
  "cébette": { FR: "Cébette", EN: "Spring onion", ZH: "青蔥" },
  "graines de sésame": { FR: "Graines de sésame", EN: "Sesame seeds", ZH: "芝麻籽" },
  "sésame": { FR: "Sésame", EN: "Sesame", ZH: "芝麻" },
  "kabocha": { FR: "Kabocha", EN: "Kabocha squash", ZH: "南瓜" },
  "carotte": { FR: "Carotte", EN: "Carrot", ZH: "胡蘿蔔" },
  "pomme de terre": { FR: "Pomme de terre", EN: "Potato", ZH: "馬鈴薯" },
  "umeboshi": { FR: "Umeboshi", EN: "Umeboshi", ZH: "梅干" },
  "algues nori": { FR: "Algues nori", EN: "Nori seaweed", ZH: "海苔" },
  "dashi végétal": { FR: "Dashi végétal", EN: "Vegetarian dashi", ZH: "素高湯" },
  "tofu": { FR: "Tofu", EN: "Tofu", ZH: "豆腐" },
  "wakame": { FR: "Wakame", EN: "Wakame", ZH: "裙帶菜" },
  "tempeh": { FR: "Tempeh", EN: "Tempeh", ZH: "天貝" },
  "sauce teriyaki": { FR: "Sauce teriyaki", EN: "Teriyaki sauce", ZH: "照燒醬" },
  "brocoli": { FR: "Brocoli", EN: "Broccoli", ZH: "西蘭花" },
  "bouillon soja": { FR: "Bouillon soja", EN: "Soy broth", ZH: "醬油高湯" },
  "nouilles ramen": { FR: "Nouilles ramen", EN: "Ramen noodles", ZH: "拉麵" },
  "champignons": { FR: "Champignons", EN: "Mushrooms", ZH: "蘑菇" },
  "pak choï": { FR: "Pak choï", EN: "Pak choi", ZH: "青江菜" },
  "doubanjiang": { FR: "Doubanjiang", EN: "Doubanjiang", ZH: "豆瓣醬" },
  "poivre du Sichuan": { FR: "Poivre du Sichuan", EN: "Sichuan pepper", ZH: "花椒" },
  "gluten (selon sauce)": { FR: "Gluten (selon sauce)", EN: "Gluten (depends on sauce)", ZH: "麩質（視醬料而定）" },
  "thé vert": { FR: "Thé vert", EN: "Green tea", ZH: "綠茶" },
  "prune salée": { FR: "Prune salée", EN: "Salted plum", ZH: "鹹梅" },
  "chou": { FR: "Chou", EN: "Cabbage", ZH: "高麗菜" },
  "pâte à gyoza": { FR: "Pâte à gyoza", EN: "Gyoza wrapper", ZH: "餃子皮" },
  "edamame": { FR: "Edamame", EN: "Edamame", ZH: "毛豆" },
  "sel de mer": { FR: "Sel de mer", EN: "Sea salt", ZH: "海鹽" },
  "algues wakamé": { FR: "Algues wakamé", EN: "Wakame seaweed", ZH: "若布海藻" },
  "vinaigrette japonaise": { FR: "Vinaigrette japonaise", EN: "Japanese dressing", ZH: "和風醬汁" },
  "bouillon végétal": { FR: "Bouillon végétal", EN: "Vegetable broth", ZH: "蔬菜高湯" },
  "shiitake": { FR: "Shiitake", EN: "Shiitake mushroom", ZH: "香菇" },
  "ciboule": { FR: "Ciboule", EN: "Spring onion", ZH: "蔥" },
  "aubergine": { FR: "Aubergine", EN: "Eggplant", ZH: "茄子" },
  "huile de sésame": { FR: "Huile de sésame", EN: "Sesame oil", ZH: "芝麻油" },
  "order": { FR: "Commander", EN: "Order", ZH: "點餐" },
  "total": { FR: "Total", EN: "Total", ZH: "總金額" },
  //取得協助//
  "Request help": { FR: "Demande d'aide", EN: "Request help", ZH: "服務支援" },
  "An on-site staff member has been called for you. Please wait.": { FR: "Un membre du personnel a été appelé pour vous. Veuillez patienter.", EN: "An on-site staff member has been called for you. Please wait.", ZH: "我們已通知現場工作人員前來協助您，請稍候。" },
  "Continue commanding": { FR: "Continuer à commander", EN: "Continue commanding", ZH: "繼續點餐" },
  //商品描述//
  "desc1": { 
  FR: "Tofu bio grillé à l’extérieur croustillant et intérieur fondant, assaisonné légèrement pour une saveur saine et raffinée.", 
  EN: "Organic tofu grilled until golden and crisp on the outside, tender inside, lightly seasoned for a refreshing and healthy taste.", 
  ZH: "嚴選有機豆腐，外層煎至金黃香脆，內裡依舊細嫩，搭配簡單調味，口感清爽又健康。" 
  },

  "desc2": { 
  FR: "Nattō onctueux accompagné de légumes de saison frais, servi sur du riz chaud, nutritif et typiquement japonais.", 
  EN: "Sticky natto paired with fresh seasonal vegetables, served over warm rice, bringing both nutrition and authentic Japanese comfort.", 
  ZH: "滑順黏稠的納豆搭配新鮮時令蔬菜，佐以米飯一同享用，營養滿分又富含日本家常風味。" 
  },

  "desc3": { 
  FR: "Soba froides nappées d’une sauce sésame parfumée et onctueuse, offrant fraîcheur et légèreté parfaite en été.", 
  EN: "Chilled soba noodles topped with a rich sesame dressing, offering nutty fragrance and refreshing taste, ideal for hot summer days.", 
  ZH: "冰涼爽口的蕎麥麵，淋上香濃芝麻醬汁，帶有堅果芳香，清新消暑，是夏日的完美料理。" 
  },

  "desc4": { 
  FR: "Kabocha japonais doux et légumes variés mijotés lentement dans un curry onctueux, aux notes sucrées et épicées.", 
  EN: "Sweet Japanese kabocha and assorted vegetables simmered slowly in rich curry, blending natural sweetness with gentle spices.", 
  ZH: "選用香甜的日本南瓜與多種蔬菜，慢火燉煮成濃郁咖哩，散發天然甜味與香料的溫潤氣息。" 
  },

  "desc5": { 
  FR: "Trio d’onigiri végétaux, préparés avec des ingrédients de saison et assaisonnés délicatement, pour une bouchée saine et savoureuse.", 
  EN: "A trio of veggie onigiri, each with seasonal ingredients and unique seasoning, delivering pure and wholesome flavors in every bite.", 
  ZH: "三款不同風味的蔬食飯糰，結合當季食材與獨特調味，每一口都能嚐到純粹又安心的美味。" 
  },

  "desc6": { 
  FR: "Bouillon au miso agrémenté de légumes variés, au goût riche et doux, apportant chaleur et réconfort à chaque gorgée.", 
  EN: "A miso-based broth enriched with assorted vegetables, offering a savory-sweet depth that comforts both body and soul.", 
  ZH: "以大豆味噌熬製的湯底，搭配豐富蔬菜，湯頭醇厚香甜，喝下一口立即暖心暖胃。" 
  },

  "desc7": { 
  FR: "Tempeh riche en protéines, laqué d’une sauce teriyaki sucrée-salée, grillé pour une texture ferme et caramélisée.", 
  EN: "Protein-rich tempeh glazed with sweet-savory teriyaki sauce, pan-seared to perfection with a smoky caramelized surface.", 
  ZH: "富含蛋白質的天貝，刷上香甜鹹香的照燒醬，煎至外層焦香，口感紮實又入味。" 
  },

  "desc8": { 
  FR: "Bouillon de ramen végétal à la sauce soja riche, garni de nouilles et légumes frais, savoureux et léger.", 
  EN: "A deep soy-based ramen broth with veggie noodles and fresh toppings, delivering bold flavors without heaviness.", 
  ZH: "以醇厚的醬油湯頭為基底，加入蔬菜麵條與新鮮配料，風味濃郁卻不油膩，令人回味無窮。" 
  },

  "desc9": { 
  FR: "Tofu soyeux mijoté dans une sauce épicée et parfumée, savoureuse et équilibrée, idéal pour accompagner le riz.", 
  EN: "Silky tofu simmered in a spicy, aromatic sauce, rich in flavor yet balanced, making it a perfect dish with rice.", 
  ZH: "麻辣香氣四溢的醬汁，搭配滑嫩豆腐，辛香濃郁卻不失清爽，是下飯的最佳選擇。" 
  },

  "desc10": { 
  FR: "Riz chaud arrosé de thé vert parfumé, garni légèrement, mariant la fraîcheur du thé et la douceur du riz.", 
  EN: "Steamed rice soaked in fragrant green tea, topped with light garnishes, blending tea aroma with rice for refreshing flavor.", 
  ZH: "以清香綠茶沖淋米飯，佐以少量配料，茶香與米香交融，口感清爽解膩。" 
  },

  "desc11": { 
  FR: "Gyoza végétarien doré à la poêle, farci de légumes frais et assaisonnés légèrement, offrant une bouchée croustillante à l’extérieur et juteuse à l’intérieur.", 
  EN: "Pan-fried vegetarian gyoza filled with fresh seasoned vegetables, crisp on the outside and juicy inside for a delightful bite.", 
  ZH: "以多種新鮮蔬菜製成的餡料，包裹於金黃煎餃皮中，外酥內嫩，每一口都充滿鮮香滋味。" 
  },

  "desc12": { 
    FR: "Jeunes edamame simplement blanchis et saupoudrés de sel de mer, révélant leur douceur naturelle et un goût rafraîchissant en collation légère.", 
    EN: "Tender edamame lightly blanched and sprinkled with sea salt, highlighting natural sweetness with a clean and refreshing snack flavor.", 
    ZH: "新鮮毛豆略為川燙後灑上海鹽，保留原始甘甜，鹹香清爽，是最適合分享的小食。" 
  },

  "desc13": { 
    FR: "Salade de wakamé marinée à la japonaise, aux saveurs iodées et acidulées, apportant fraîcheur, légèreté et une touche d’exotisme marin.", 
    EN: "Japanese-style wakame salad, marinated with tangy flavors, offering refreshing sea essence and a light, healthy taste.", 
    ZH: "和風調味拌製的海藻沙拉，帶有清爽酸香與海洋風味，口感脆嫩，是一道輕盈健康的前菜。" 
  },

  "desc14": { 
    FR: "Bouillon clair aux champignons parfumés, préparé délicatement pour une saveur douce et réconfortante, parfait en entrée légère et chaude.", 
    EN: "A delicate clear soup infused with mushrooms, offering a mild, comforting flavor that warms the body as a light starter.", 
    ZH: "以香菇熬製的清澈湯頭，入口甘甜清香，溫潤暖胃，是簡單卻令人安心的湯品。" 
  },

  "desc15": { 
    FR: "Aubergine grillée au miso, caramélisée et fondante, combinant la douceur de l’aubergine et la richesse umami de la pâte miso.", 
    EN: "Miso-glazed eggplant, grilled until caramelized and tender, blending the eggplant’s sweetness with savory umami miso richness.", 
    ZH: "茄子刷上味噌醬後烘烤至表面焦香，內裡軟嫩滑順，融合甘甜與味噌的濃厚鮮味。" 
  }
};

