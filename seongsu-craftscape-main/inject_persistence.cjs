const fs = require('fs');
let html = fs.readFileSync('public/seongsu-map.html', 'utf-8');

// 1. Replace the entire script header block up to `var mapBounds`
const oldScriptHeadRegex = /<script>[\s\S]*?var mapBounds =/;
const newScriptHead = `<script>
        window.isEraserMode = false;
        window.isDraggingEraser = false;
        window.allBuildingLayers = {};
        
        // LocalStorage Load
        window.undoStackIds = JSON.parse(localStorage.getItem('undoStackIds')) || [];
        window.erasedBuildings = JSON.parse(localStorage.getItem('erasedBuildings')) || [];

        function saveEraserState() {
            localStorage.setItem('undoStackIds', JSON.stringify(window.undoStackIds));
            localStorage.setItem('erasedBuildings', JSON.stringify(window.erasedBuildings));
        }

        function updateUndoBtn() {
            var undoBtn = document.getElementById("undoBtn");
            if (window.undoStackIds.length > 0) {
                undoBtn.style.display = "block";
                undoBtn.innerText = "되돌리기 (" + window.undoStackIds.length + ")";
            } else {
                undoBtn.style.display = "none";
            }
        }

        function eraseLayer(l) {
            l.remove();
            if (map) map.closePopup();
            if (window.currentEraserSession) {
                window.currentEraserSession.push(l.featureObjectId);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            var btn = document.getElementById("eraserBtn");
            var undoBtn = document.getElementById("undoBtn");

            if(btn) {
                btn.addEventListener("click", function() {
                    window.isEraserMode = !window.isEraserMode;
                    btn.classList.toggle("active", window.isEraserMode);
                    btn.innerText = window.isEraserMode ? "지우개 모드: 켜짐" : "지우개 모드: 끄기";
                    if(window.isEraserMode) {
                        document.getElementById("map").classList.add("eraser-cursor");
                    } else {
                        document.getElementById("map").classList.remove("eraser-cursor");
                    }
                });
            }

            if(undoBtn) {
                undoBtn.addEventListener("click", function() {
                    if (window.undoStackIds.length > 0) {
                        var session = window.undoStackIds.pop();
                        session.forEach(function(id) {
                            var l = window.allBuildingLayers[id];
                            if(l) l.addTo(map);
                            // Remove from erasedBuildings
                            var idx = window.erasedBuildings.indexOf(id);
                            if(idx > -1) window.erasedBuildings.splice(idx, 1);
                        });
                        saveEraserState();
                        updateUndoBtn();
                    }
                });
            }
            
            // Initial UI state
            updateUndoBtn();
        });

        // 1. 지도 초기화 (기존 유지)
        var mapBounds =`;
html = html.replace(oldScriptHeadRegex, newScriptHead);

// 2. Map mouseup event (update to use new arrays)
const oldMapMouseUpRegex = /map\.on\('mouseup', function\(\) \{[\s\S]*?\}\);/;
const newMapMouseUp = `map.on('mouseup', function() {
            if (window.isDraggingEraser) {
                window.isDraggingEraser = false;
                map.dragging.enable();
                if(window.currentEraserSession && window.currentEraserSession.length > 0) {
                    window.undoStackIds.push(window.currentEraserSession);
                    // Add to erasedBuildings
                    window.currentEraserSession.forEach(id => window.erasedBuildings.push(id));
                    saveEraserState();
                    updateUndoBtn();
                }
                window.currentEraserSession = null;
            }
        });`;
html = html.replace(oldMapMouseUpRegex, newMapMouseUp);

// 3. onEachFeature registration and events
const oldOnEachFeatureStart = 'onEachFeature: function(feature, layer) {';
const newOnEachFeatureStart = `onEachFeature: function(feature, layer) {
                var objId = feature.properties.OBJECTID;
                layer.featureObjectId = objId;
                window.allBuildingLayers[objId] = layer;`;
html = html.replace(oldOnEachFeatureStart, newOnEachFeatureStart);

const oldLayerEventsRegex = /layer\.on\(\{\s*mousedown: function\(e\) \{[\s\S]*?\}\);/g;
const newLayerEvents = `layer.on({
                    mousedown: function(e) {
                        if (window.isEraserMode) {
                            window.isDraggingEraser = true;
                            window.currentEraserSession = [];
                            map.dragging.disable();
                            eraseLayer(e.target);
                        }
                    },
                    mouseup: function(e) {
                        if (window.isEraserMode && window.isDraggingEraser) {
                            window.isDraggingEraser = false;
                            map.dragging.enable();
                            if(window.currentEraserSession && window.currentEraserSession.length > 0) {
                                window.undoStackIds.push(window.currentEraserSession);
                                window.currentEraserSession.forEach(id => window.erasedBuildings.push(id));
                                saveEraserState();
                                updateUndoBtn();
                            }
                            window.currentEraserSession = null;
                        }
                    },
                    click: function(e) {
                        if (window.isEraserMode) {
                            e.originalEvent.stopPropagation();
                        }
                    },
                    mouseover: function(e) {
                        var l = e.target;
                        if (window.isEraserMode && window.isDraggingEraser) {
                            eraseLayer(l);
                        } else {
                            l.setStyle({ fillOpacity: 0.8, weight: 2.5 });
                        }
                    },
                    mouseout: function(e) {
                        var l = e.target;
                        var rawAddr = l.feature.properties.주소;
                        var addr = normalizeAddress(rawAddr);
                        var hasData = buildingGroup[addr] && buildingGroup[addr].length > 0;
                        l.setStyle({ 
                            fillOpacity: 0.6, 
                            weight: 1.5,
                            fillColor: hasData ? "#2B6CB0" : "#CBD5E0"
                        });
                    }
                });`;
html = html.replace(oldLayerEventsRegex, newLayerEvents);

// 4. Finally, process the erasedBuildings right after adding to map
const oldAddToMap = '}).addTo(map);';
const newAddToMap = `}).addTo(map);
        
        // Remove buildings that were previously erased
        if (window.erasedBuildings && window.erasedBuildings.length > 0) {
            window.erasedBuildings.forEach(function(id) {
                var l = window.allBuildingLayers[id];
                if(l) l.remove();
            });
        }`;
html = html.replace(oldAddToMap, newAddToMap);

fs.writeFileSync('public/seongsu-map.html', html, 'utf-8');
console.log('Successfully injected localStorage persistence for eraser.');
