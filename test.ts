// tests go here; this will not be compiled when this package is used as an extension.
let InfinityFinite = TypeScriptExpanded.isFinite(TypeScriptExpanded.negativeInfinity())
let unknownVariable = TypeScriptExpanded.createUnknown()
console.log(TypeScriptExpanded.unknownIsEmpty(unknownVariable))
TypeScriptExpanded.setUnknownString(unknownVariable, "Hi")
console.log(TypeScriptExpanded.getUnknownString(unknownVariable))
TypeScriptExpanded.nullish(null, null)