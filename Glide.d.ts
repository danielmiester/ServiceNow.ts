/**
 * Created by daniel.dejager on 8/2/16.
 */
interface GlideRecordI<T> {
    _next():boolean;
    _operation():string;
    _query(field?:any, value?:any):void;
    addEncodedQuery(query:string):void;
    applyRowSecurity():void;
    attachGlideListener(className:string, insert:boolean, update:boolean, _delete:boolean, fields:string, foreign:any, foreign2:any, details:any):void
    autoSysFields(state:boolean):void;
    chooseWindow(first:number, last:number, forceCount:boolean):void;
    close():void;
    createElement():boolean;
    createIndex():boolean;
    dropIndex():boolean;
    evaluateAsDefault(input:string):string;
    findForeignKey(key:string):string;
    hasRightsTo(name:string):string;
    incrementViewCount():void;
    insertLazy():string;
    insertOrUpdate(reason?:string):string;
    isActionAborted():boolean;
    isForeignTable():boolean;
    isMetadata():boolean;
    isReadonly():boolean;
    isValidMetadataRecord():boolean;
    largeResultExpected():void;
    makeReadonly():void;
    nextRecord():boolean;
    notifyUser():void
    onePassQuery():void
    orderByDesc(fieldName:string):void;
    popCurrent():void;
    putCurrent():void;
    putOptimizers(value:any):void;
    queryNoDomain():void;
    scheduleScript(script:string):void;
    targetExtension(ext:string):void;
    updateLazy():boolean;
    addActiveQuery():any;
    addDomainQuery(q:any):void;
    addInactiveQuery():any;
    addJoinQuery(table:string, field:any, value:any):any;
    addNotNullQuery(field:string):any;
    addNullQuery(field:string):any;
    addQuery(field:string, op?:any, value?:any):any;
    appendOrQuery(conditions:any, field:string, op?:any, value?:any):void;
    applyEncodedQuery(query:string):void;
    applyTemplate(temp:string):void
    canCreate():boolean;
    canDelete():boolean;
    canRead():boolean;
    canWrite():boolean;
    changes():boolean;
    deleteMultiple():void;
    deleteRecord():boolean;
    find(field:string, value:string):boolean;
    get(name:any, value?:any):boolean;
    getAttribute(name:string):string;
    getCategory():string;
    getClassDisplayValue():string;
    getDisplayName():string;
    getDisplayValue(name?:string):string;
    getED():any;
    getElement(name:string):any;
    getElements():[any];
    getEncodedQuery():string;
    getEngineParameter(name:string):string;
    getEscapedDisplayValue():string;
    getFields():[any]
    getLabel():string;
    getLastErrorMessage():string;
    getLink(stack:boolean):string;
    getLocation():number;
    getPlural():string;
    getRecordClassName():string
    getRelatedLists():any
    getRelatedRecords(a:string, b:string):void;
    getRelatedTables():any;
    getRowCount():number;
    getRowNumber():number;
    getSetRowCount():number;
    getTableName():string;
    getTableScope():string;
    getTableScopeId():string;
    getTableScopeName():string;
    getUniqueValue():string;
    getValue(field:string):string;
    hasAttachments():boolean;
    hasNext():boolean;
    initialize():void;
    insert():string;
    insertWithReferences():string;
    instanceOf(a:string):boolean;
    isInGlobalScope():boolean;
    isInSelectedScope():boolean;
    isInStoreScope():boolean;
    isNewRecord():boolean;
    isValid():boolean;
    isValidField(name:string):boolean;
    isValidRecord():boolean;
    newRecord():boolean;
    next():boolean;
    operation():string;
    orderBy(field:string):void;
    query(name?:any, value?:any):void;
    restoreLocation():void;
    saveLocation():void
    setAbortAction(abort:boolean):void
    setCategory(name:string):void;
    setDisplayValue(name:string, value:any):void;
    setEngineParameter(name:string, value:string):void
    setForceUpdate(force:boolean):void;
    setLimit(count:number):void;
    setLocation(row:number):void;
    setNewGuid():string;
    setNewGuidValue(value:string):void;
    setQueryReferences(value:boolean):void;
    setSystem(value:boolean):void;
    setUseEngines(value:boolean):void;
    setValue(name:string, value:any):void;
    setWorkflow(value:boolean):void;
    update(value?:any):string;
    updateMultiple():void;
    updateNoDomain(value?:any):string
    updateWithReferences(value?:any):string

}
class GlideRecord<T> implements GlideRecordI{
    constructor(name:string):GlideRecord
}
class gs{
    static include(name:string):boolean;
    static log(a:any,b?:any):void;
}
class GlideController{

}
class GlideDateTime extends Date{
    addSeconds(s:number):void;
    getNumericValue():number;
}

class GlideScriptEvaluator{
    evaluateString(code:string,name?:string, returnErrors?:boolean)
}