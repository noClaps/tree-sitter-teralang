import XCTest
import SwiftTreeSitter
import TreeSitterTeralang

final class TreeSitterTeralangTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_teralang())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading TeraLang grammar")
    }
}
