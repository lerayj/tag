import Sizzle from 'sizzle';
import * as log from 'loglevel';

//Track select change event from config
//TODO: move into selectAttrValue pour avoir une methode generique
function selectValueAttrHandler(config, configKeyName, selectDom, callback){
    var selector = config[configKeyName];
    if(config[configKeyName][0] == '@')
        selector = selector.substr(1).split(':');
    if(typeof selector == 'object'){
        var selectSelection = Sizzle(selector[0])[0],
            attr = selector[1];
    }
    else{
        var selectSelection = Sizzle(selector)[0],
            attr = 'textContent';
    }

    if(selectSelection.nodeName.toLowerCase() === "select"){
        function handleOptionSelect(selector, callback){
            var optionSelection = Sizzle(":selected", this),
                result = optionSelection[0].textContent;
            if(typeof selector == 'object')
                result = optionSelection[0][selector[1]];
            log.info("[DEBUG] Tracking select: ", selector, "with value: ", result);
            callback(result);
        }
        handleOptionSelect(selector, callback);
        
        selectSelection.addEventListener("change", function(e){
            handleOptionSelect(selector, callback);
        });
    }
}

function radioValueAttrHandler(config, configKeyName, selectDom){
}

//Si l'id_product est un attribut: @selector:attribut (eg RdC: @.cartProduct:id)
function attributeValue(config, configKeyName, line){
    var configRule = config[configKeyName],
        result = null;

    if(!configRule){
        log.warn("[WARNING] No ", configKeyName, " on config.");
        return false;
    }  
    if(configRule[0] == '@'){
        var options = configRule.substr(1).split(':');
        var selection = Sizzle(options[0], line);
        if(selection.length == 0 && Sizzle.matchesSelector(line, options[0])){
            result = line[options[1]];
        } else{
            var value = Sizzle(options[0], line)[0];
            result = value[options[1]];  
        }

    } else{
        console.log("ON attrib: ", configRule, " line: ", line);
        result = Sizzle(configRule, line)[0];
        if(!result) return false;
        result = result.textContent;
    }
    return result.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/^\s+|\s+$/g, "");
}

export default {selectValueAttrHandler, radioValueAttrHandler, attributeValue};