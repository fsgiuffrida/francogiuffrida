/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.201
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a,b){"use strict";a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"El formulario no se ha podido enviar!",requiredField:"Este campo es obligatorio",requiredFields:"No ha contestado todos los campos requeridos",badTime:"La hora proporcionada no es v&aacute;lida",badEmail:"La direcci&oacute;n de e-mail no es v&aacute;lida",badTelephone:"El n&uacute;mero de tel&eacute;fono proporcionado no es v&aacute;lido",badSecurityAnswer:"La respuesta a su pregunta de seguridad es incorrecta",badDate:"La fecha proporcionada no es v&aacute;lida",lengthBadStart:"Su respuesta debe incluir entre ",lengthBadEnd:" caracteres",lengthTooLongStart:"Su respuesta debe de ser menor a ",lengthTooShortStart:"Su respuesta debe de ser mayor a ",notConfirmed:"Los valores proporcionados no pudieron ser confirmados",badDomain:"Ha introducido un dominio incorrecto",badUrl:"La URL proporcionada no es v&aacute;lida",badCustomVal:"Los valores proporcionados no son v&aacute;lidos",andSpaces:" y espacios ",badInt:"El valor proporcionado no es un n&uacute;mero v&aacute;lido",badSecurityNumber:"El n&uacute;mero de seguridad social proporcionado es incorrecto",badUKVatAnswer:"No n&uacute;mero VAT proporcionado no es v&aacute;lido para el Reino Unido",badStrength:"La contrase&ntilde;a proporcionada no es lo suficientemente segura",badNumberOfSelectedOptionsStart:"Debe seleccionar al menos",badNumberOfSelectedOptionsEnd:" respuesta(s)",badAlphaNumeric:"El valor proporcionado solo debe contener caracteres alfanum&eacute;ricos (a-z y n&uacute;meros)",badAlphaNumericExtra:" y",wrongFileSize:"El archivo que est&aacute; tratando de subir es demasiado grande (m&aacute;x. %s)",wrongFileType:"S&oacute;lo los archivos del tipo %s est&aacute;n permitido",groupCheckedRangeStart:"Por favor, elija entre ",groupCheckedTooFewStart:"Por favor, elija al menos ",groupCheckedTooManyStart:"Por favor, elija un m&aacute;ximo de ",groupCheckedEnd:" &iacute;tem(s)",badCreditCard:"El n&uacute;mero de tarjeta de cr&eacute;dito proporcionado no es v&aacute;lido",badCVV:"CVV proporcionado no es v&aacute;lido",wrongFileDim:"Las dimensiones de la imagen no son validas,",imageTooTall:"el alto de la imagen no puede ser mayor a",imageTooWide:"el ancho de la imagen no puede ser mayor a",imageTooSmall:"la imagen es demasiado peque&ntilde;a",min:"min.",max:"m&aacute;x.",imageRatioNotAccepted:"La proporci&oacute;n de imagen (alto x ancho) no es v&aacute;lida"}})}(a,window)});