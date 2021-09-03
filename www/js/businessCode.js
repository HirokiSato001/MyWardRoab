// カテゴリー
var CATEGORIES = defineEnum({
    TOPS : {
        value : 1,
        string : 'トップス'
    },
    BOTOMS : {
        value : 2,
        string : 'ボトムス'
    },
    OUTER : {
        value : 3,
        string : 'アウター'
    },
    SHOES : {
        value : 4,
        string : 'シューズ'
    }
});

// トップス
var TOPS = defineEnum({
    TSHIRT : {
        value : 1,
        string : 'Tシャツ'
    },
    POLO : {
        value : 2,
        string : 'ポロシャツ'
    },
    KNIT : {
        value : 3,
        string : 'ニット'
    },
    SHIRT : {
        value : 4,
        string : 'シャツ'
    },
    HOODIE : {
        value : 5,
        string : 'パーカー'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// ボトムス
var TOPS = defineEnum({
    DENIM : {
        value : 1,
        string : 'デニムパンツ'
    },
    SLACKS : {
        value : 2,
        string : 'スラックスパンツ'
    },
    CHINOS : {
        value : 3,
        string : 'チノパンツ'
    },
    CARGO : {
        value : 4,
        string : 'カーゴパンツ'
    },
    WIDE : {
        value : 5,
        string : 'ワイドパンツ'
    },
    SWEAT : {
        value : 6,
        string : 'スウェットパンツ'
    },
    SHORT : {
        value : 7,
        string : 'ショートパンツ'
    },
    OVERALLS : {
        value : 8,
        string : 'オーバーオール'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// アウター
var OUTER = defineEnum({
    JACKET : {
        value : 1,
        string : 'ジャケット'
    },
    DOWN : {
        value : 2,
        string : 'ダウン'
    },
    COAT : {
        value : 3,
        string : 'コート'
    },
    CARDIGAN : {
        value : 4,
        string : 'カーディガン'
    },
    BLOUSON : {
        value : 5,
        string : 'ブルゾン'
    },
    RIDERS : {
        value : 6,
        string : 'ライダース'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// シューズ
var SHOES = defineEnum({
    SNEAKERS : {
        value : 1,
        string : 'スニーカー'
    },
    SANDALS : {
        value : 2,
        string : 'サンダル'
    },
    BOOTS : {
        value : 3,
        string : 'ブーツ'
    },
    LEATHER : {
        value : 4,
        string : '革靴'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// カラー
var COLORS = defineEnum({
    BLACK : {
        value : 1,
        string : 'ブラック'
    },
    WHITE : {
        value : 2,
        string : 'ホワイト'
    },
    GRAY : {
        value : 3,
        string : 'グレー'
    },
    KHAKI : {
        value : 4,
        string : 'カーキ'
    },
    NAVY : {
        value : 5,
        string : 'ネイビー'
    },
    BROWN : {
        value : 6,
        string : 'ブラウン'
    },
    BEIGE : {
        value : 7,
        string : 'ベージュ'
    },
    RED : {
        value : 8,
        string : 'レッド'
    },
    ORANGE : {
        value : 9,
        string : 'オレンジ'
    },
    YELLOW : {
        value : 10,
        string : 'イエロー'
    },
    GREEN : {
        value : 11,
        string : 'グリーン'
    },
    BLUE : {
        value : 12,
        string : 'ブルー'
    },
    PURPLE : {
        value : 13,
        string : 'パープル'
    },
    PINK : {
        value : 14,
        string : 'ピンク'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// デザイン
var DESIGNS = defineEnum({
    PLAIN : {
        value : 1,
        string : '無地'
    },
    PLAID : {
        value : 2,
        string : 'チェック'
    },
    STRIPE : {
        value : 3,
        string : 'ストライプ'
    },
    BORDER : {
        value : 4,
        string : 'ボーダー'
    },
    CAMOUFLAGE : {
        value : 5,
        string : '迷彩'
    },
    ANIMAL : {
        value : 6,
        string : 'アニマル'
    },
    PAISLEY : {
        value : 7,
        string : 'ペイズリー'
    },
    Dot : {
        value : 8,
        string : '水玉（ドット）'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// 素材
var MATERIALS = defineEnum({
    COTTON : {
        value : 1,
        string : '綿（コットン）'
    },
    LINEN : {
        value : 2,
        string : '麻（リネン）'
    },
    WOOL : {
        value : 3,
        string : '毛（ウール）'
    },
    POLYESTER : {
        value : 4,
        string : 'ポリエステル'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// サイズ
var SIZES = defineEnum({
    XS : {
        value : 1,
        string : 'XS'
    },
    S : {
        value : 2,
        string : 'S'
    },
    M : {
        value : 3,
        string : 'M'
    },
    L : {
        value : 4,
        string : 'L'
    },
    XL : {
        value : 5,
        string : 'XL以上'
    },
    F : {
        value : 6,
        string : 'F'
    },
    OTHERS : {
        value : 99,
        string : 'その他'
    }
});

// 季節
var SEASONS = defineEnum({
    SPRING : {
        value : 1,
        string : '春'
    },
    SUMMER : {
        value : 2,
        string : '夏'
    },
    AUTUMN : {
        value : 3,
        string : '秋'
    },
    WINTER : {
        value : 4,
        string : '冬'
    }
});
