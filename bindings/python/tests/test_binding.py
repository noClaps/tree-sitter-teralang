from unittest import TestCase

import tree_sitter
import tree_sitter_teralang


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_teralang.language())
        except Exception:
            self.fail("Error loading TeraLang grammar")
