/* ----------------------------------
jQuery GeoRegionalizacion
v0.5
probado con jQuery v1.3+
©2011 CSSLab.cl
gratuito para cualquier uso, por supuesto :D
instrucciones: http://www.csslab.cl/
---------------------------------- */

jQuery.fn.geoRegionalizacion = function(options) {
    settings = jQuery.extend({
        regionPrincipal: '#region', // valor: #id, por defecto #region
        regionDependiente: '#comuna' // valor: #id, por defecto #comuna
    }, options);

    jQuery('document').ready(function() {

        Regiones();

        function Regiones() {
            var regiones = Array('RM', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIV', 'XV');
            var i = 0;
            var limite = regiones.length;
            for (i; i < limite; i++) {
                jQuery("<option value='" + regiones[i] + "'>" + regiones[i] + "</option>").appendTo(jQuery(settings.regionPrincipal));
            }
        }

        jQuery(settings.regionDependiente).attr('disabled', 'disabled');
        var texto = jQuery(settings.regionDependiente + '>:first').text();

        comunasRegion(jQuery(settings.regionPrincipal).val());
        if (jQuery(settings.regionPrincipal).length > 0) {
            jQuery(settings.regionPrincipal).change(function() {
                jQuery(settings.regionDependiente).removeAttr('disabled').html("<option value=''>" + texto + "</option>");
                comunasRegion(jQuery(settings.regionPrincipal).val());
            });
        }

        function comunasRegion(id_region_seleccionada, id_comuna) {
            switch (id_region_seleccionada) {
                case "I":
                    jQuery("<option value='ALTO HOSPICIO'>ALTO HOSPICIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CAMINA'>CAMI&Ntilde;A</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COLCHANE'>COLCHANE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUARA'>HUARA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='IQUIQUE'>IQUIQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PICA'>PICA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='POZO ALMONTE'>POZO ALMONTE</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "II":
                    jQuery("<option value='ANTOFAGASTA'>ANTOFAGASTA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CALAMA'>CALAMA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MARIA ELENA'>MARIA ELENA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MEJILLONES'>ALTO HOSPICIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OLLAGUE'>OLLAGUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN PEDRO DE ATACAMA'>SAN PEDRO DE ATACAMA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SIERRA GORDA'>SIERRA GORDA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TALTAL'>TALTAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TOCOPILLA'>TOCOPILLA</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "III":
                    jQuery("<option value='ALTO DEL CARMEN'>ALTO DEL CARMEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CALDERA'>CALDERA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHANARAL'>CHANARAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COPIAPO'>COPIAPO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='DIEGO DE ALMAGRO'>DIEGO DE ALMAGRO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL SALVADOR'>EL SALVADOR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FREIRINA'>FREIRINA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUASCO'>HUASCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TIERRA AMARILLA'>ANTOFAGASTA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VALLENAR'>VALLENAR</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "IV":
                    jQuery("<option value='A HIGUERA'>A HIGUERA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ANDACOLLO'>ANDACOLLO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CANELA'>CANELA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COMBARBALA'>COMBARBALA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COQUIMBO'>COQUIMBO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ILLAPEL'>ILLAPEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA SERENA'>LA SERENA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS VILOS'>LOS VILOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MONTE PATRIA'>MONTE PATRIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OVALLE'>OVALLE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PAIHUANO'>PAIHUANO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUNITAQUI'>PUNITAQUI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RIO HURTADO'>RIO HURTADO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SALAMANCA'>SALAMANCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VICUNA'>VICUNA</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "V":
                    jQuery("<option value='ALGARROBO'>ALGARROBO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CABILDO'>CABILDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CALLE LARGA'>CALLE LARGA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CARTAGENA'>CARTAGENA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CASABLANCA'>CASABLANCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CATEMU'>CATEMU</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CONCON'>CONCON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL QUISCO'>EL QUISCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL TABO'>EL TABO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HIJUELAS'>HIJUELAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='JUAN FERNANDEZ'>JUAN FERNÃNDEZ</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA CALERA'>LA CALERA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA CRUZ'>LA CRUZ</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA LIGUA'>LA LIGUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LIMACHE'>LIMACHE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LLAY LLAY'>LLAY LLAY</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS ANDES'>LOS ANDES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MARIA PINTO'>MARIA PINTO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MELIPILLA'>MELIPILLA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NOGALES'>NOGALES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OLMUE'>OLMUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PANQUEHUE'>PANQUEHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PAPUDO'>PAPUDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PETORCA'>PETORCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUCHUNCAVI'>PUCHUNCAVI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUTAENDO'>PUTAENDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILLOTA'>QUILLOTA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILPUE'>QUILPUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUINTERO'>QUINTERO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RINCONADA'>RINCONADA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN ANTONIO'>SAN ANTONIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN ESTEBAN'>SAN ESTEBAN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN FELIPE'>SAN FELIPE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN RAFAEL'>SAN RAFAEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTA MARIA'>SANTA MARIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTO DOMINGO'>SANTO DOMINGO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VALPARAISO'>VALPARAISO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VILLA ALEMANA'>VILLA ALEMANA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VINA DEL MAR'>VINA DEL MAR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ZAPALLAR'>ZAPALLAR</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "VI":
                    jQuery("<option value='CHEPICA'>CHEPICA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHIMBARONGO'>CHIMBARONGO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CODEGUA'>CODEGUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COINCO'>COINCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COLTAUCO'>COLTAUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='DONIHUE'>DONIHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='GRANEROS'>GRANEROS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA ESTRELLA'>LA ESTRELLA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAS CABRAS'>LAS CABRAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LITUECHE'>LITUECHE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOLOL'>LOLOL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MACHALI'>MACHALI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='Machali'>Machali</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MALLOA'>MALLOA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MARCHIGUE'>MARCHIGUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MARCHIHUE'>MARCHIHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MOSTAZAL'>MOSTAZAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NANCAGUA'>NANCAGUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NAVIDAD'>NAVIDAD</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OLIVAR'>OLIVAR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PALMILLA'>PALMILLA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PAREDONES'>PAREDONES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PERALILLO'>PERALILLO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PEUMO'>PEUMO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PICHIDEGUA'>PICHIDEGUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PICHILEMU'>PICHILEMU</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PLACILLA'>PLACILLA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUMANQUE'>PUMANQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUINTA DE TILCOCO'>QUINTA DE TILCOCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RANCAGUA'>RANCAGUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RENGO'>RENGO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='REQUINOA'>REQUINOA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN FERNANDO'>SAN FERNANDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN FRANCISCO DE MOSTAZAL'>SAN FRANCISCO DE MOSTAZAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN VICENTE'>SAN VICENTE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTA CRUZ'>SANTA CRUZ</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "VII":
                    jQuery("<option value='CAUQUENES'>CAUQUENES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHANCO'>CHANCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COLBUN'>COLBUN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CONSTITUCION'>CONSTITUCION</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CUREPTO'>CUREPTO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CURICO'>CURICO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EMPEDRADO'>EMPEDRADO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUALANE'>HUALANE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LICANTEN'>LICANTEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LINARES'>LINARES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LONGAVI'>LONGAVI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MAULE'>MAULE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MOLINA'>MOLINA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PARRAL'>PARRAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PELARCO'>PELARCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PELLUHUE'>PELLUHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PENCAHUE'>PENCAHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RAUCO'>RAUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RETIRO'>RETIRO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RIO CLARO'>RIO CLARO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ROMERAL'>ROMERAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAGRADA FAMILIA'>SAGRADA FAMILIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN CLEMENTE'>SAN CLEMENTE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN JAVIER'>SAN JAVIER</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TALCA'>TALCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TENO'>TENO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VICHUQUEN'>VICHUQUEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VILLA ALEGRE'>VILLA ALEGRE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='YERBAS BUENAS'>YERBAS BUENAS</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "VIII":
                    jQuery("<option value='ALTO BIO BIO'>ALTO BIO BIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ANTUCO'>ANTUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ARAUCO'>ARAUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='BULNES'>BULNES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CABRERO'>CABRERO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='Chiguayante'>Chiguayante</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHILLAN'>CHILLAN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COBQUECURA'>COBQUECURA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COELEMU'>COELEMU</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COIHUECO'>COIHUECO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CONCEPCION'>CONCEPCION</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CORONEL'>CORONEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CURANILAHUE'>CURANILAHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL CARMEN'>EL CARMEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FLORIDA'>FLORIDA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUALQUI'>HUALQUI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAJA'>LAJA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LEBU'>LEBU</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS ALAMOS'>LOS ALAMOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS ANGELES'>LOS ANGELES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOTA'>LOTA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MULCHEN'>MULCHEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NACIMIENTO'>NACIMIENTO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NEGRETE'>NEGRETE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NINHUE'>NINHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NIQUEN'>NIQUEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PEMUCO'>PEMUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PENCO'>PENCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PINTO'>PINTO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PORTEZUELO'>PORTEZUELO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILACO'>QUILACO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILLECO'>QUILLECO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILLON'>QUILLON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUIRIHUE'>QUIRIHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RANQUIL'>RANQUIL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN CARLOS'>SAN CARLOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN FABIAN'>SAN FABIAN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='San Gregorio de NiquÃ©n'>San Gregorio de NiquÃ©n</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN IGNACIO'>SAN IGNACIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN NICOLAS'>SAN NICOLAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN PATRICIO'>SAN PATRICIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN PEDRO DE LA PAZ'>SAN PEDRO DE LA PAZ</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN ROSENDO'>SAN ROSENDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTA BARBARA'>SANTA BARBARA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTA JUANA'>SANTA JUANA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TALCAHUANO'>TALCAHUANO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TOME'>TOME</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TREGUACO'>TREGUACO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TREHUACO'>TREHUACO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TUCAPEL'>TUCAPEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='YUMBEL'>YUMBEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='YUNGAY'>YUNGAY</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "IX":
                    jQuery("<option value='ANGOL'>ANGOL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CANETE'>CA&Ntilde;ETE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CARAHUE'>CARAHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COLLIPULLI'>COLLIPULLI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CONTULMO'>CONTULMO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CUNCO'>CUNCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CURACAUTIN'>CURACAUTIN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CURARREHUE'>CURARREHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ERCILLA'>ERCILLA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FREIRE'>FREIRE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='GALVARINO'>GALVARINO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='GORBEA'>GORBEA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAUTARO'>LAUTARO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LONCOCHE'>LONCOCHE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LONQUIMAY'>LONQUIMAY</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS SAUCES'>LOS SAUCES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LUMACO'>LUMACO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MELIPEUCO'>MELIPEUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NUEVA IMPERIAL'>NUEVA IMPERIAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PADRE LAS CASAS'>PADRE LAS CASAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PANGUIPULLI'>PANGUIPULLI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PERQUENCO'>PERQUENCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PITRUFQUEN'>PITRUFQUEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUCON'>PUCON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO SAAVEDRA'>PUERTO SAAVEDRA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUREN'>PUREN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RENAICO'>RENAICO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAAVEDRA'>SAAVEDRA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TEMUCO'>TEMUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TEODORO SCHMIDT'>TEODORO SCHMIDT</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TIRUA'>TIRUA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TOLTEN'>TOLTEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TRAIGUEN'>TRAIGUEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VICTORIA'>VICTORIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VILCUN'>VILCUN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VILLARRICA'>VILLARRICA</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "X":
                    jQuery("<option value='ANCUD'>ANCUD</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CALBUCO'>CALBUCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CASTRO'>CASTRO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHONCHI'>CHONCHI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COCHAMO'>COCHAMO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CURACAO DE VELEZ'>CURACAO DE VELEZ</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='DALCAHUE'>DALCAHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FRESIA'>FRESIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FRUTILLAR'>FRUTILLAR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUALAIHUE'>HUALAIHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LLANQUIHUE'>LLANQUIHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS MUERMOS'>LOS MUERMOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MAULLIN'>MAULLIN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OSORNO'>OSORNO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO MONTT'>PUERTO MONTT</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO OCTAY'>PUERTO OCTAY</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO VARAS'>PUERTO VARAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUQUELDON'>PUQUELDON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PURRANQUE'>PURRANQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUYEHUE'>PUYEHUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUEILEN'>QUEILEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUELLON'>QUELLON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUEMCHI'>QUEMCHI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUINCHAO'>QUINCHAO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RIO NEGRO'>RIO NEGRO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN JUAN DE LA COSTA'>SAN JUAN DE LA COSTA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN PABLO'>SAN PABLO</option>").appendTo(jQuery(settings.regionDependiente));

                    break;
                case "XI":
                    jQuery("<option value='AYSEN'>AYSEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CHILE CHICO'>CHILE CHICO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CISNES'>CISNES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COCHRANE'>COCHRANE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COYHAIQUE'>COYHAIQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='GUAITECAS'>GUAITECAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAGO VERDE'>LAGO VERDE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='OHIGGINS'>O'HIGGINS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO AISEN'>PUERTO AISEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO CISNES'>PUERTO CISNES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RIO IBANEZ'>R&Iacute;O IB&Aacute;&Ntilde;EZ</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TORTEL'>TORTEL</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "XII":
                    jQuery("<option value='LAGUNA BLANCA'>LAGUNA BLANCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NAVARINO'>NAVARINO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PORVENIR'>PORVENIR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PRIMAVERA'>PRIMAVERA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO NATALES'>PUERTO NATALES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUERTO NATALES'>PUERTO NATALES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUNTA ARENAS'>PUNTA ARENAS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN GREGORIO'>SAN GREGORIO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TIMAUKEL'>TIMAUKEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TORRES DEL PAINE'>TORRES DEL PAINE</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "XIV":
                    jQuery("<option value='CORRAL'>CORRAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='FUTRONO'>FUTRONO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA UNION'>LA UNION</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAGO RANCO'>LAGO RANCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LANCO'>LANCO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LOS LAGOS'>LOS LAGOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MAFIL'>MAFIL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MARIQUINA'>MARIQUINA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PAILLACO'>PAILLACO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RIO BUENO'>RIO BUENO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VALDIVIA'>VALDIVIA</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "XV":
                    jQuery("<option value='ARICA'>ARICA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CAMARONES'>CAMARONES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='GENERAL LAGOS'>GENERAL LAGOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUTRE'>PUTRE</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                case "RM":
                    jQuery("<option value='BUIN'>BUIN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CALERA DE TANGO'>CALERA DE TANGO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CERRILLOS'>CERRILLOS</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CERRO NAVIA'>CERRO NAVIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='COLINA'>COLINA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='CONCHALI'>CONCHALI</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL BOSQUE'>EL BOSQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='EL MONTE'>EL MONTE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ESTACION CENTRAL'>ESTACION CENTRAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='HUECHURABA'>HUECHURABA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='INDEPENDENCIA'>INDEPENDENCIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='ISLA DE MAIPO'>ISLA DE MAIPO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA CISTERNA'>LA CISTERNA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA FLORIDA'>LA FLORIDA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA GRANJA'>LA GRANJA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA PINTANA'>LA PINTANA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LA REINA'>LA REINA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAMPA'>LAMPA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LAS CONDES'>LAS CONDES</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LO BARNECHEA'>LO BARNECHEA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LO ESPEJO'>LO ESPEJO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='LO PRADO'>LO PRADO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MACUL'>MACUL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='MAIPU'>MAIPU</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='NUNOA'>NUNOA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PADRE HURTADO'>PADRE HURTADO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PAINE'>PAINE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PEDRO AGUIRRE CERDA'>PEDRO AGUIRRE CERDA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PENAFLOR'>PENAFLOR</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PENALOLEN'>PENALOLEN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PIRQUE'>PIRQUE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PROVIDENCIA'>PROVIDENCIA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUDAHUEL'>PUDAHUEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='PUENTE ALTO'>PUENTE ALTO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUILICURA'>QUILICURA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='QUINTA NORMAL'>QUINTA NORMAL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RECOLETA'>RECOLETA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='RENCA'>RENCA</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN BERNARDO'>SAN BERNARDO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN JOAQUIN'>SAN JOAQUIN</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN JOSE DE MAIPO'>SAN JOSE DE MAIPO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN MIGUEL'>SAN MIGUEL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SAN RAMON'>SAN RAMON</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='SANTIAGO CENTRO'>SANTIAGO CENTRO</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TALAGANTE'>TALAGANTE</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='TILTIL'>TILTIL</option>").appendTo(jQuery(settings.regionDependiente));
                    jQuery("<option value='VITACURA'>VITACURA</option>").appendTo(jQuery(settings.regionDependiente));
                    break;
                default:
                    jQuery(settings.regionDependiente).html("<option value=''>" + texto + "</option>");
            };

        };

    });

};