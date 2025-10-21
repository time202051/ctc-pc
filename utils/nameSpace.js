/**
 * Filename: nameSpace.js
 * Creation Date: 2024-12-06
 * Author: 李嘉鹏
 */
const defaultNameSpace = "ol";
const statePrefix = "is-";
function _bem(namespace, block, blockSuffix, element, modifier) {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

export class NameSpace {
  constructor(block) {
    this.block = block;
    this.namespace = defaultNameSpace;
  }
  b(blockSuffix = "") {
    return _bem(this.namespace, this.block, blockSuffix, "", "");
  }
  e(element) {
    return _bem(this.namespace, this.block, "", element, "");
  }
  m(modifier) {
    return _bem(this.namespace, this.block, "", "", modifier);
  }
  be(blockSuffix = "", element = "") {
    return blockSuffix && element ? _bem(this.namespace, this.block, blockSuffix, element, "") : "";
  }
  em(element = "", modifier = "") {
    return element && modifier ? _bem(this.namespace, this.block, "", element, modifier) : "";
  }
  bm(blurSuffix = "", modifier = "") {
    return blurSuffix && modifier ? _bem(this.namespace, this.block, blurSuffix, "", modifier) : "";
  }
  bem(blockSuffix = "", element = "", modifier = "") {
    return blockSuffix && element && modifier
      ? _bem(this.namespace, this.block, blockSuffix, element, modifier)
      : "";
  }
  is(name, ...args) {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  }
  id(code) {
    return code ? this.b(code + "") : "";
  }
}
