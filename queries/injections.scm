((key) @_key
 (#eq? @_key "html")
 (value (string) @injection.content)
 (#set! injection.language "html"))
