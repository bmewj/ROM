/**
 * attributes.js implements:
 * - ROM.selector.attributes (object)
 * - ROM.selector.attributes.getMatchFunction (function)
 * - ROM.selector.attributes.attr (object)
 */

window.ROM.selector.attributes = (function() {
  var attributes = {};

  attributes.getMatchFunction = function getMatchFunction(matchType, matchValue) {
    var matchFn = attributes.attr[matchType] || function() { return true; };
    var matchAttribute = function matchAttribute(attributeValue) {
      return matchFn(matchValue, attributeValue);
    };

    return matchAttribute;
  };

  attributes.attr = {
    '=': function valueEqual(matchValue, attributeValue) {
      return (matchValue === attributeValue);
    },
    '~=': function valueContainsWord(matchValue, attributeValue) {
      return (simplifyValue(attributeValue).indexOf(simplifyValue(matchValue)) !== -1);
    },
    '|=': function valueStartsWithWord(matchValue, attributeValue) {
      return (simplifyValue(attributeValue).indexOf(simplifyValue(matchValue)) === 0);
    },
    '^=': function valueStartsWith(matchValue, attributeValue) {
      return (attributeValue.indexOf(matchValue) === 0);
    },
    '$=': function valueEndsWith(matchValue, attributeValue) {
      return (attributeValue.indexOf(matchValue, attributeValue.length - matchValue.length) !== -1);
    },
    '*=': function valueContains(matchValue, attributeValue) {
      return (attributeValue.indexOf(matchValue) !== -1);
    }
  };

  /**
   * simplifyValue()
   * Returns a string where all words of a value (split with
   * the splitWords function) are joined together with spaces.
   */
  var simplifyValue = function simplifyValue(value) {
    return splitWords(value).join(' ');
  };

  /**
   * splitWords()
   * Returns an array of the words of the value.
   * A word is separated from other words by a space or hyphen.
   */
  var splitWords = function splitWords(value) {
    var words1 = value.split(' ');
    var words2 = [];
    var words3 = [];

    for (var i = 0; i < words1.length; i += 1)
      words2 = words2.concat(words1[i].split('-'));

    for (var i = 0; i < words2.length; i += 1)
      if (words2[i] !== '')
        words3.push(words2[i]);

    return words3;
  };

  return attributes;
})();
