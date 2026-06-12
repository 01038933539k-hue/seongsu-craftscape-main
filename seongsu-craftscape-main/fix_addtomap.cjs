const fs = require('fs');

let html = fs.readFileSync('public/seongsu-map.html', 'utf-8');

// 1. Fix the broken tileLayer
const brokenTileLayer = "L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n" +
"              maxZoom: 19,\n" +
"              attribution: '&copy; OpenStreetMap'\n" +
"          });\n" +
"        geoJsonLayer.addTo(map);\n\n" +
"        // 현재 남아있는 건물들을 기준으로 지도 범위와 화면 제한 동적 설정\n" +
"        var currentBounds = geoJsonLayer.getBounds();\n" +
"        map.setMaxBounds(currentBounds.pad(0.1)); // 패딩을 주어 약간 여유있게 제한\n" +
"        map.fitBounds(currentBounds);\n" +
"        map.options.minZoom = 16;";
const fixedTileLayer = "L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n" +
"              maxZoom: 19,\n" +
"              attribution: '&copy; OpenStreetMap'\n" +
"          }).addTo(map);";

html = html.replace(brokenTileLayer, fixedTileLayer);

// 2. Properly replace the L.geoJSON end
// We know it ends with `}).addTo(map);` right before `</script>`
// Let's find the last occurrence of `}).addTo(map);`
const lastAddToMapIndex = html.lastIndexOf('}).addTo(map);');
if (lastAddToMapIndex !== -1) {
    const before = html.substring(0, lastAddToMapIndex);
    const after = html.substring(lastAddToMapIndex + '}).addTo(map);'.length);
    const newEnd = `});
        geoJsonLayer.addTo(map);

        // 현재 남아있는 건물들을 기준으로 지도 범위와 화면 제한 동적 설정
        var currentBounds = geoJsonLayer.getBounds();
        map.setMaxBounds(currentBounds.pad(0.05)); // 0.05 패딩으로 꽉 차게 제한
        map.fitBounds(currentBounds);
        map.options.minZoom = 15;`; // minZoom 15로 여유롭게
    html = before + newEnd + after;
}

fs.writeFileSync('public/seongsu-map.html', html, 'utf-8');
console.log('Fixed the geoJsonLayer bounds and runtime error.');
