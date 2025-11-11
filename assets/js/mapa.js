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
                    -48.48142517189763,
                    -1.3286437082168874
                    ],
                    [
                    -48.4773196350188,
                    -1.3490089036332193
                    ],
                    [
                    -48.47803154177592,
                    -1.3591926687478093
                    ],
                    [
                    -48.47629142802421,
                    -1.3632150008383945
                    ],
                    [
                    -48.47889893441186,
                    -1.3707956244547574
                    ],
                    [
                    -48.471002370725614,
                    -1.37071154507683
                    ],
                    [
                    -48.45860600796695,
                    -1.360770782459113
                    ],
                    [
                    -48.45908066193104,
                    -1.3550079799433092
                    ],
                    [
                    -48.461053735322935,
                    -1.3491666092097176
                    ],
                    [
                    -48.4666602349792,
                    -1.3476670639191326
                    ],
                    [
                    -48.469818419361246,
                    -1.3309354692038227
                    ],
                    [
                    -48.48142517189763,
                    -1.3286437082168874
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