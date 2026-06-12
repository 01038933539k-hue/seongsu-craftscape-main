const fs = require('fs');

let html = fs.readFileSync('public/seongsu-map.html', 'utf-8');

// 1. Process erasedData to filter GeoJSON
const erasedDataStr = fs.readFileSync('erased_data.json', 'utf-8');
const erasedIds = JSON.parse(erasedDataStr);
const erasedSet = new Set(erasedIds);
console.log('Total erased buildings received: ' + erasedSet.size);

const startDelimiter = 'var buildingGeoJSON = ';
const startIdx = html.indexOf(startDelimiter);
const clickableBoundsIdx = html.indexOf('var CLICKABLE_BOUNDS');

let searchArea = html.substring(startIdx + startDelimiter.length, clickableBoundsIdx);
const lastBraceIdx = searchArea.lastIndexOf('}');
const geoJsonStr = searchArea.substring(0, lastBraceIdx + 1);

const geoObj = JSON.parse(geoJsonStr);
const initialCount = geoObj.features.length;
geoObj.features = geoObj.features.filter(f => !erasedSet.has(f.properties.OBJECTID));
const finalCount = geoObj.features.length;
console.log('Filtered features from ' + initialCount + ' to ' + finalCount);

const newGeoJsonStr = JSON.stringify(geoObj);
html = html.substring(0, startIdx + startDelimiter.length) + newGeoJsonStr + searchArea.substring(lastBraceIdx + 1) + html.substring(clickableBoundsIdx);

// 2. Apply Map Bounds and minZoom
const mapInitOld = "var map = L.map('map').setView([37.54069, 127.055675], 17);";
const mapInitNew = "var mapBounds = L.latLngBounds([37.5385, 127.0485], [37.5450, 127.0590]);\n" +
"        var map = L.map('map', {\n" +
"            maxBounds: mapBounds,\n" +
"            maxBoundsViscosity: 1.0,\n" +
"            minZoom: 15\n" +
"        }).setView([37.54069, 127.055675], 17);";
html = html.replace(mapInitOld, mapInitNew);

// 3. Popup Max-height, Scroll, and autoPanPadding
const oldPopupHtmlLogic = "if (tenants.length > 0) {\n" +
"                    tenants.forEach(function(t) {\n" +
"                        popupHtml += `\n" +
"                            <div class=\"tenant-item\">\n" +
"                                <span class=\"floor-badge\">${t.floor}F</span>\n" +
"                                <b>${t.name}</b>\n" +
"                                <span class=\"sector-badge\">${t.sector}</span>\n" +
"                            </div>`;\n" +
"                    });\n" +
"                } else {";

const newPopupHtmlLogic = "if (tenants.length > 0) {\n" +
"                    // 5개 정도 보이도록 max-height 설정 및 스크롤 추가\n" +
"                    popupHtml += '<div style=\"max-height: 160px; overflow-y: auto; padding-right: 4px;\">';\n" +
"                    tenants.forEach(function(t) {\n" +
"                        popupHtml += `\n" +
"                            <div class=\"tenant-item\">\n" +
"                                <span class=\"floor-badge\">${t.floor}F</span>\n" +
"                                <b>${t.name}</b>\n" +
"                                <span class=\"sector-badge\">${t.sector}</span>\n" +
"                            </div>`;\n" +
"                    });\n" +
"                    popupHtml += '</div>';\n" +
"                } else {";
html = html.replace(oldPopupHtmlLogic, newPopupHtmlLogic);

const oldBindPopup = "layer.bindPopup(popupHtml, { closeButton: true });";
const newBindPopup = "layer.bindPopup(popupHtml, { closeButton: true, autoPanPadding: [20, 20] });";
html = html.replace(oldBindPopup, newBindPopup);

const customScrollbarCSS = "        /* 스크롤바 커스텀 */\n" +
"        .custom-popup div::-webkit-scrollbar {\n" +
"            width: 6px;\n" +
"        }\n" +
"        .custom-popup div::-webkit-scrollbar-track {\n" +
"            background: #f1f1f1; \n" +
"            border-radius: 4px;\n" +
"        }\n" +
"        .custom-popup div::-webkit-scrollbar-thumb {\n" +
"            background: #cbd5e0; \n" +
"            border-radius: 4px;\n" +
"        }\n" +
"        .custom-popup div::-webkit-scrollbar-thumb:hover {\n" +
"            background: #a0aec0; \n" +
"        }\n" +
"    </style>";
html = html.replace('</style>', customScrollbarCSS);

fs.writeFileSync('public/seongsu-map.html', html, 'utf-8');
console.log('Saved modified seongsu-map.html');
