document.addEventListener('DOMContentLoaded', function() {
        
        const abrCenter = [-1.35269, -48.46652]; 
        const zoomLevel = 14; 

        // 1. Inicializa o mapa Leaflet (com tema escuro)
        const map = L.map('mapa-cobertura-osm').setView(abrCenter, zoomLevel);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        
        // ----------------------------------------------------
        // COLE AQUI OS DADOS DO GEOJSON.IO (Versão Polígono)
        // ----------------------------------------------------

        // Substitua o 'null' abaixo pelo NOVO código (que terá "type": "Polygon")
        const dadosDaCobertura = {
            "type": "FeatureCollection",
            "features": [
                {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                    [
                        [
                        -48.47950222180589,
                        -1.340150344125135
                        ],
                        [
                        -48.47768577119328,
                        -1.3593308593042366
                        ],
                        [
                        -48.47684878977785,
                        -1.3616603022873193
                        ],
                        [
                        -48.458819196473996,
                        -1.3612257275723607
                        ],
                        [
                        -48.45963676082894,
                        -1.3419430680585123
                        ],
                        [
                        -48.47950222180589,
                        -1.340150344125135
                        ]
                    ]
                    ],
                    "type": "Polygon"
                }
                }
            ]
            }
        
        // ----------------------------------------------------
        // ESTILO E ADIÇÃO DO POLÍGONO
        // ----------------------------------------------------
        
        const estiloCobertura = {
            color: '#ff6b08',      // Laranja da ABR
            fillColor: '#ff6b08',   
            fillOpacity: 0.35,      // Transparência
            weight: 3               // Espessura da linha
        };

        // Esta função lê o GeoJSON e aplica o estilo
        if (dadosDaCobertura) {
            L.geoJSON(dadosDaCobertura, {
                style: estiloCobertura,
                onEachFeature: function (feature, layer) {
                    layer.bindPopup('Área de Cobertura ABR Network');
                }
            }).addTo(map);
        }

        // ----------------------------------------------------
        // MARCADOR DA SEDE ABR (Opcional)
        // ----------------------------------------------------
        
        const orangeIcon = L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color: #ff6b08; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white;"></div>',
            iconSize: [15, 15], 
            iconAnchor: [7.5, 7.5]
        });

        L.marker(abrCenter, {icon: orangeIcon}).addTo(map)
            .bindPopup('**ABR Network Telecom** (Sede)');
    });