ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([448366.967494, 4063923.193352, 449831.705589, 4065695.411000]);
var wms_layers = [];


        var lyr_pnoamaxactualidad_0 = new ol.layer.Tile({
            'title': 'pnoa max actualidad',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg'
            })
        });
var format_TH2_1 = new ol.format.GeoJSON();
var features_TH2_1 = format_TH2_1.readFeatures(json_TH2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TH2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TH2_1.addFeatures(features_TH2_1);
var lyr_TH2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TH2_1, 
                style: style_TH2_1,
                popuplayertitle: 'TH2',
                interactive: true,
                title: '<img src="styles/legend/TH2_1.png" /> TH2'
            });
var format_parcelas_2 = new ol.format.GeoJSON();
var features_parcelas_2 = format_parcelas_2.readFeatures(json_parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_2.addFeatures(features_parcelas_2);
var lyr_parcelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_2, 
                style: style_parcelas_2,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_2_0.png" /> LANDCO<br />\
    <img src="styles/legend/parcelas_2_1.png" /> SIERRAMAR<br />\
    <img src="styles/legend/parcelas_2_2.png" /> CICH<br />\
    <img src="styles/legend/parcelas_2_3.png" /> OTROS PARTICULARES<br />\
    <img src="styles/legend/parcelas_2_4.png" /> DOMINIO PÚBLICO<br />' });
var format_cesiones_3 = new ol.format.GeoJSON();
var features_cesiones_3 = format_cesiones_3.readFeatures(json_cesiones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_cesiones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cesiones_3.addFeatures(features_cesiones_3);
var lyr_cesiones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cesiones_3, 
                style: style_cesiones_3,
                popuplayertitle: 'cesiones',
                interactive: true,
                title: '<img src="styles/legend/cesiones_3.png" /> cesiones'
            });
var format_proindivisos_4 = new ol.format.GeoJSON();
var features_proindivisos_4 = format_proindivisos_4.readFeatures(json_proindivisos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_proindivisos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proindivisos_4.addFeatures(features_proindivisos_4);
var lyr_proindivisos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proindivisos_4, 
                style: style_proindivisos_4,
                popuplayertitle: 'proindivisos',
                interactive: true,
                title: '<img src="styles/legend/proindivisos_4.png" /> proindivisos'
            });

lyr_pnoamaxactualidad_0.setVisible(true);lyr_TH2_1.setVisible(true);lyr_parcelas_2.setVisible(true);lyr_cesiones_3.setVisible(true);lyr_proindivisos_4.setVisible(true);
var layersList = [lyr_pnoamaxactualidad_0,lyr_TH2_1,lyr_parcelas_2,lyr_cesiones_3,lyr_proindivisos_4];
lyr_TH2_1.set('fieldAliases', {'fid': 'fid', });
lyr_parcelas_2.set('fieldAliases', {'fid': 'ID', 'finca': 'Finca', 'ref_catastral': 'Referencia catastral', 'grupo': 'Grupo de propiedad', 'sup_m2': 'Superficie (m²)', 'pct_sector': '% del sector', 'n_titulares': 'Nº de titulares', 'proindiviso': 'Proindiviso', 'cesion': 'Cesión', 'gml': 'gml', });
lyr_cesiones_3.set('fieldAliases', {'fid': 'fid', 'finca_origen': 'finca_origen', 'sup_m2_planim': 'sup_m2_planim', 'finca_origen_texto': 'finca_origen_texto', 'observaciones': 'observaciones', 'revisar_jer': 'revisar_jer', 'Valid_superficies': 'Valid_superficies', 'finca_origen_uua': 'finca_origen_uua', 'sup_comprobacion_20260911': 'sup_comprobacion_20260911', });
lyr_proindivisos_4.set('fieldAliases', {'fid': 'ID', 'finca': 'Finca', 'ref_catastral': 'Referencia catastral', 'grupo': 'Grupo de propiedad', 'sup_m2': 'Superficie (m²)', 'pct_sector': '% del sector', 'n_titulares': 'Nº de titulares', 'proindiviso': 'Proindiviso', 'cesion': 'Cesión', });
lyr_TH2_1.set('fieldImages', {'fid': '', });
lyr_parcelas_2.set('fieldImages', {'fid': '', 'finca': '', 'ref_catastral': '', 'grupo': '', 'sup_m2': '', 'pct_sector': '', 'n_titulares': '', 'proindiviso': '', 'cesion': '', 'gml': '', });
lyr_cesiones_3.set('fieldImages', {'fid': '', 'finca_origen': '', 'sup_m2_planim': '', 'finca_origen_texto': '', 'observaciones': '', 'revisar_jer': '', 'Valid_superficies': '', 'finca_origen_uua': '', 'sup_comprobacion_20260911': '', });
lyr_proindivisos_4.set('fieldImages', {'fid': '', 'finca': '', 'ref_catastral': '', 'grupo': '', 'sup_m2': '', 'pct_sector': '', 'n_titulares': '', 'proindiviso': '', 'cesion': '', });
lyr_TH2_1.set('fieldLabels', {'fid': 'no label', });
lyr_parcelas_2.set('fieldLabels', {'fid': 'inline label - always visible', 'finca': 'inline label - always visible', 'ref_catastral': 'inline label - always visible', 'grupo': 'inline label - always visible', 'sup_m2': 'inline label - always visible', 'pct_sector': 'inline label - always visible', 'n_titulares': 'inline label - always visible', 'proindiviso': 'inline label - always visible', 'cesion': 'inline label - always visible', 'gml': 'inline label - always visible', });
lyr_cesiones_3.set('fieldLabels', {'fid': 'no label', 'finca_origen': 'no label', 'sup_m2_planim': 'no label', 'finca_origen_texto': 'no label', 'observaciones': 'no label', 'revisar_jer': 'no label', 'Valid_superficies': 'no label', 'finca_origen_uua': 'no label', 'sup_comprobacion_20260911': 'no label', });
lyr_proindivisos_4.set('fieldLabels', {'fid': 'no label', 'finca': 'inline label - always visible', 'ref_catastral': 'inline label - always visible', 'grupo': 'inline label - always visible', 'sup_m2': 'inline label - always visible', 'pct_sector': 'inline label - always visible', 'n_titulares': 'inline label - always visible', 'proindiviso': 'no label', 'cesion': 'no label', });
lyr_proindivisos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});