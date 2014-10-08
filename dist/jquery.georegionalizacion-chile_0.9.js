;(function($) {

    $.geoRegionalizacion = function(element, options) {

        var defaults = {
            regionDependiente: "#comuna",
            onRegionSelect: function() {},
            onComunaSelect: function() {},
            onCreate: function() {}

        };
        var plugin = this;
        plugin.settings = {};

        var $element = $(element),
             element = $element;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            // the plugin working
            var regiones = Array("RM","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIV","XV");
            var i = 0;
            var limite = regiones.length;
            for (i; i < limite; i++) {
                jQuery("<option value='" + regiones[i] + "'>" + regiones[i] + "</option>").appendTo($element);
            }

            jQuery(plugin.settings.regionDependiente).attr("disabled","disabled");
            var texto = jQuery(plugin.settings.regionDependiente + ">:first").text();

            comunasRegion($element.val());
            if ($element.length > 0) {
                $element.change(function() {
                    jQuery(plugin.settings.regionDependiente).removeAttr("disabled").html("<option value=''>" + texto + "</option>");
                    comunasRegion($element.val());
                    plugin.settings.onRegionSelect.call(this);
                });
                jQuery(plugin.settings.regionDependiente).change(function() {
                    plugin.settings.onComunaSelect.call(this);
                });
            }
            function comunasRegion(id_region_seleccionada) {
                switch (id_region_seleccionada) {
                    case "I":
                        jQuery("<option value='ALTO HOSPICIO'>ALTO HOSPICIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CAMINA'>CAMI&Ntilde;A</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COLCHANE'>COLCHANE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUARA'>HUARA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='IQUIQUE'>IQUIQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PICA'>PICA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='POZO ALMONTE'>POZO ALMONTE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "II":
                        jQuery("<option value='ANTOFAGASTA'>ANTOFAGASTA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CALAMA'>CALAMA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MARIA ELENA'>MARIA ELENA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MEJILLONES'>ALTO HOSPICIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OLLAGUE'>OLLAGUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN PEDRO DE ATACAMA'>SAN PEDRO DE ATACAMA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SIERRA GORDA'>SIERRA GORDA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TALTAL'>TALTAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TOCOPILLA'>TOCOPILLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "III":
                        jQuery("<option value='ALTO DEL CARMEN'>ALTO DEL CARMEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CALDERA'>CALDERA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHANARAL'>CHANARAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COPIAPO'>COPIAPO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='DIEGO DE ALMAGRO'>DIEGO DE ALMAGRO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL SALVADOR'>EL SALVADOR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FREIRINA'>FREIRINA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUASCO'>HUASCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TIERRA AMARILLA'>ANTOFAGASTA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VALLENAR'>VALLENAR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "IV":
                        jQuery("<option value='A HIGUERA'>A HIGUERA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ANDACOLLO'>ANDACOLLO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CANELA'>CANELA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COMBARBALA'>COMBARBALA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COQUIMBO'>COQUIMBO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ILLAPEL'>ILLAPEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA SERENA'>LA SERENA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS VILOS'>LOS VILOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MONTE PATRIA'>MONTE PATRIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OVALLE'>OVALLE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PAIHUANO'>PAIHUANO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUNITAQUI'>PUNITAQUI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RIO HURTADO'>RIO HURTADO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SALAMANCA'>SALAMANCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VICUNA'>VICUNA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "V":
                        jQuery("<option value='ALGARROBO'>ALGARROBO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CABILDO'>CABILDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CALLE LARGA'>CALLE LARGA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CARTAGENA'>CARTAGENA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CASABLANCA'>CASABLANCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CATEMU'>CATEMU</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CONCON'>CONCON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL QUISCO'>EL QUISCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL TABO'>EL TABO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HIJUELAS'>HIJUELAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='JUAN FERNANDEZ'>JUAN FERNANDEZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA CALERA'>LA CALERA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA CRUZ'>LA CRUZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA LIGUA'>LA LIGUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LIMACHE'>LIMACHE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LLAY LLAY'>LLAY LLAY</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS ANDES'>LOS ANDES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MARIA PINTO'>MARIA PINTO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MELIPILLA'>MELIPILLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NOGALES'>NOGALES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OLMUE'>OLMUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PANQUEHUE'>PANQUEHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PAPUDO'>PAPUDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PETORCA'>PETORCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUCHUNCAVI'>PUCHUNCAVI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUTAENDO'>PUTAENDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILLOTA'>QUILLOTA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILPUE'>QUILPUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUINTERO'>QUINTERO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RINCONADA'>RINCONADA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN ANTONIO'>SAN ANTONIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN ESTEBAN'>SAN ESTEBAN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN FELIPE'>SAN FELIPE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN RAFAEL'>SAN RAFAEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTA MARIA'>SANTA MARIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTO DOMINGO'>SANTO DOMINGO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VALPARAISO'>VALPARAISO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VILLA ALEMANA'>VILLA ALEMANA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VINA DEL MAR'>VINA DEL MAR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ZAPALLAR'>ZAPALLAR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "VI":
                        jQuery("<option value='CHEPICA'>CHEPICA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHIMBARONGO'>CHIMBARONGO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CODEGUA'>CODEGUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COINCO'>COINCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COLTAUCO'>COLTAUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='DONIHUE'>DONIHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='GRANEROS'>GRANEROS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA ESTRELLA'>LA ESTRELLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAS CABRAS'>LAS CABRAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LITUECHE'>LITUECHE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOLOL'>LOLOL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MACHALI'>MACHALI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MALLOA'>MALLOA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MARCHIGUE'>MARCHIGUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MARCHIHUE'>MARCHIHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MOSTAZAL'>MOSTAZAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NANCAGUA'>NANCAGUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NAVIDAD'>NAVIDAD</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OLIVAR'>OLIVAR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PALMILLA'>PALMILLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PAREDONES'>PAREDONES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PERALILLO'>PERALILLO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PEUMO'>PEUMO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PICHIDEGUA'>PICHIDEGUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PICHILEMU'>PICHILEMU</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PLACILLA'>PLACILLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUMANQUE'>PUMANQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUINTA DE TILCOCO'>QUINTA DE TILCOCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RANCAGUA'>RANCAGUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RENGO'>RENGO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='REQUINOA'>REQUINOA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN FERNANDO'>SAN FERNANDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN FRANCISCO DE MOSTAZAL'>SAN FRANCISCO DE MOSTAZAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN VICENTE'>SAN VICENTE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTA CRUZ'>SANTA CRUZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "VII":
                        jQuery("<option value='CAUQUENES'>CAUQUENES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHANCO'>CHANCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COLBUN'>COLBUN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CONSTITUCION'>CONSTITUCION</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CUREPTO'>CUREPTO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CURICO'>CURICO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EMPEDRADO'>EMPEDRADO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUALANE'>HUALANE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LICANTEN'>LICANTEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LINARES'>LINARES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LONGAVI'>LONGAVI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MAULE'>MAULE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MOLINA'>MOLINA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PARRAL'>PARRAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PELARCO'>PELARCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PELLUHUE'>PELLUHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PENCAHUE'>PENCAHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RAUCO'>RAUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RETIRO'>RETIRO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RIO CLARO'>RIO CLARO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ROMERAL'>ROMERAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAGRADA FAMILIA'>SAGRADA FAMILIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN CLEMENTE'>SAN CLEMENTE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN JAVIER'>SAN JAVIER</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TALCA'>TALCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TENO'>TENO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VICHUQUEN'>VICHUQUEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VILLA ALEGRE'>VILLA ALEGRE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='YERBAS BUENAS'>YERBAS BUENAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "VIII":
                        jQuery("<option value='ALTO BIO BIO'>ALTO BIO BIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ANTUCO'>ANTUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ARAUCO'>ARAUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='BULNES'>BULNES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CABRERO'>CABRERO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='Chiguayante'>Chiguayante</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHILLAN'>CHILLAN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COBQUECURA'>COBQUECURA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COELEMU'>COELEMU</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COIHUECO'>COIHUECO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CONCEPCION'>CONCEPCION</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CORONEL'>CORONEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CURANILAHUE'>CURANILAHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL CARMEN'>EL CARMEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FLORIDA'>FLORIDA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUALQUI'>HUALQUI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAJA'>LAJA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LEBU'>LEBU</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS ALAMOS'>LOS ALAMOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS ANGELES'>LOS ANGELES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOTA'>LOTA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MULCHEN'>MULCHEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NACIMIENTO'>NACIMIENTO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NEGRETE'>NEGRETE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NINHUE'>NINHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NIQUEN'>NIQUEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PEMUCO'>PEMUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PENCO'>PENCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PINTO'>PINTO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PORTEZUELO'>PORTEZUELO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILACO'>QUILACO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILLECO'>QUILLECO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILLON'>QUILLON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUIRIHUE'>QUIRIHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RANQUIL'>RANQUIL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN CARLOS'>SAN CARLOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN FABIAN'>SAN FABIAN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='San Gregorio de NiquÃ©n'>San Gregorio de NiquÃ©n</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN IGNACIO'>SAN IGNACIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN NICOLAS'>SAN NICOLAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN PATRICIO'>SAN PATRICIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN PEDRO DE LA PAZ'>SAN PEDRO DE LA PAZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN ROSENDO'>SAN ROSENDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTA BARBARA'>SANTA BARBARA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTA JUANA'>SANTA JUANA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TALCAHUANO'>TALCAHUANO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TOME'>TOME</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TREGUACO'>TREGUACO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TREHUACO'>TREHUACO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TUCAPEL'>TUCAPEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='YUMBEL'>YUMBEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='YUNGAY'>YUNGAY</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "IX":
                        jQuery("<option value='ANGOL'>ANGOL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CANETE'>CA&Ntilde;ETE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CARAHUE'>CARAHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COLLIPULLI'>COLLIPULLI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CONTULMO'>CONTULMO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CUNCO'>CUNCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CURACAUTIN'>CURACAUTIN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CURARREHUE'>CURARREHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ERCILLA'>ERCILLA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FREIRE'>FREIRE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='GALVARINO'>GALVARINO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='GORBEA'>GORBEA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAUTARO'>LAUTARO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LONCOCHE'>LONCOCHE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LONQUIMAY'>LONQUIMAY</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS SAUCES'>LOS SAUCES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LUMACO'>LUMACO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MELIPEUCO'>MELIPEUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NUEVA IMPERIAL'>NUEVA IMPERIAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PADRE LAS CASAS'>PADRE LAS CASAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PANGUIPULLI'>PANGUIPULLI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PERQUENCO'>PERQUENCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PITRUFQUEN'>PITRUFQUEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUCON'>PUCON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO SAAVEDRA'>PUERTO SAAVEDRA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUREN'>PUREN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RENAICO'>RENAICO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAAVEDRA'>SAAVEDRA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TEMUCO'>TEMUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TEODORO SCHMIDT'>TEODORO SCHMIDT</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TIRUA'>TIRUA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TOLTEN'>TOLTEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TRAIGUEN'>TRAIGUEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VICTORIA'>VICTORIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VILCUN'>VILCUN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VILLARRICA'>VILLARRICA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "X":
                        jQuery("<option value='ANCUD'>ANCUD</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CALBUCO'>CALBUCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CASTRO'>CASTRO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHONCHI'>CHONCHI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COCHAMO'>COCHAMO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CURACAO DE VELEZ'>CURACAO DE VELEZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='DALCAHUE'>DALCAHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FRESIA'>FRESIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FRUTILLAR'>FRUTILLAR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUALAIHUE'>HUALAIHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LLANQUIHUE'>LLANQUIHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS MUERMOS'>LOS MUERMOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MAULLIN'>MAULLIN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OSORNO'>OSORNO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO MONTT'>PUERTO MONTT</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO OCTAY'>PUERTO OCTAY</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO VARAS'>PUERTO VARAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUQUELDON'>PUQUELDON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PURRANQUE'>PURRANQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUYEHUE'>PUYEHUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUEILEN'>QUEILEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUELLON'>QUELLON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUEMCHI'>QUEMCHI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUINCHAO'>QUINCHAO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RIO NEGRO'>RIO NEGRO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN JUAN DE LA COSTA'>SAN JUAN DE LA COSTA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN PABLO'>SAN PABLO</option>").appendTo(jQuery(plugin.settings.regionDependiente));

                        break;
                    case "XI":
                        jQuery("<option value='AYSEN'>AYSEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CHILE CHICO'>CHILE CHICO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CISNES'>CISNES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COCHRANE'>COCHRANE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COYHAIQUE'>COYHAIQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='GUAITECAS'>GUAITECAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAGO VERDE'>LAGO VERDE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='OHIGGINS'>O'HIGGINS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO AISEN'>PUERTO AISEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO CISNES'>PUERTO CISNES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RIO IBANEZ'>R&Iacute;O IB&Aacute;&Ntilde;EZ</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TORTEL'>TORTEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "XII":
                        jQuery("<option value='LAGUNA BLANCA'>LAGUNA BLANCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NAVARINO'>NAVARINO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PORVENIR'>PORVENIR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PRIMAVERA'>PRIMAVERA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO NATALES'>PUERTO NATALES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUERTO NATALES'>PUERTO NATALES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUNTA ARENAS'>PUNTA ARENAS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN GREGORIO'>SAN GREGORIO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TIMAUKEL'>TIMAUKEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TORRES DEL PAINE'>TORRES DEL PAINE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "XIV":
                        jQuery("<option value='CORRAL'>CORRAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='FUTRONO'>FUTRONO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA UNION'>LA UNION</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAGO RANCO'>LAGO RANCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LANCO'>LANCO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LOS LAGOS'>LOS LAGOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MAFIL'>MAFIL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MARIQUINA'>MARIQUINA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PAILLACO'>PAILLACO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RIO BUENO'>RIO BUENO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VALDIVIA'>VALDIVIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "XV":
                        jQuery("<option value='ARICA'>ARICA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CAMARONES'>CAMARONES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='GENERAL LAGOS'>GENERAL LAGOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUTRE'>PUTRE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    case "RM":
                        jQuery("<option value='BUIN'>BUIN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CALERA DE TANGO'>CALERA DE TANGO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CERRILLOS'>CERRILLOS</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CERRO NAVIA'>CERRO NAVIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='COLINA'>COLINA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='CONCHALI'>CONCHALI</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL BOSQUE'>EL BOSQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='EL MONTE'>EL MONTE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ESTACION CENTRAL'>ESTACION CENTRAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='HUECHURABA'>HUECHURABA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='INDEPENDENCIA'>INDEPENDENCIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='ISLA DE MAIPO'>ISLA DE MAIPO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA CISTERNA'>LA CISTERNA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA FLORIDA'>LA FLORIDA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA GRANJA'>LA GRANJA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA PINTANA'>LA PINTANA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LA REINA'>LA REINA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAMPA'>LAMPA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LAS CONDES'>LAS CONDES</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LO BARNECHEA'>LO BARNECHEA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LO ESPEJO'>LO ESPEJO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='LO PRADO'>LO PRADO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MACUL'>MACUL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='MAIPU'>MAIPU</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='NUNOA'>NUNOA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PADRE HURTADO'>PADRE HURTADO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PAINE'>PAINE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PEDRO AGUIRRE CERDA'>PEDRO AGUIRRE CERDA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PENAFLOR'>PENAFLOR</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PENALOLEN'>PENALOLEN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PIRQUE'>PIRQUE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PROVIDENCIA'>PROVIDENCIA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUDAHUEL'>PUDAHUEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='PUENTE ALTO'>PUENTE ALTO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUILICURA'>QUILICURA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='QUINTA NORMAL'>QUINTA NORMAL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RECOLETA'>RECOLETA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='RENCA'>RENCA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN BERNARDO'>SAN BERNARDO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN JOAQUIN'>SAN JOAQUIN</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN JOSE DE MAIPO'>SAN JOSE DE MAIPO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN MIGUEL'>SAN MIGUEL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SAN RAMON'>SAN RAMON</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='SANTIAGO CENTRO'>SANTIAGO CENTRO</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TALAGANTE'>TALAGANTE</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='TILTIL'>TILTIL</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        jQuery("<option value='VITACURA'>VITACURA</option>").appendTo(jQuery(plugin.settings.regionDependiente));
                        break;
                    default:
                        jQuery(plugin.settings.regionDependiente).html("<option value=''>" + texto + "</option>");
                }
                plugin.settings.onCreate.call(this);
            }
        };
        plugin.init();
    };

    $.fn.geoRegionalizacion = function(options) {
        return this.each(function() {
            if (undefined === $(this).data("geoRegionalizacion")) {
                var plugin = new $.geoRegionalizacion(this, options);
                $(this).data("geoRegionalizacion", plugin);
            }
        });
    };
})(jQuery);
