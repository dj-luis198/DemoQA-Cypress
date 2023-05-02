export const SchemaToken = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "token": {
            "type": "string"
        },
        "expires": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "result": {
            "type": "string"
        }
    },
    "required": [
        "token",
        "expires",
        "status",
        "result"
    ]
}