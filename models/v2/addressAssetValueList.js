exports.models = {
    "addressAssetValueList": {
        "id": "addressAssetValueList",
        "required": ["items", "locked"],
        "properties": {
            "items": {
                "type": "array",
                "items": {
                    "$ref": "addressAssetValue"
                },
                "description": "Array of SendAssetToAdress items"
            },
            "locked": {
                "type": "boolean",
                "description": "is the list locked"
            }
        }
    }
}