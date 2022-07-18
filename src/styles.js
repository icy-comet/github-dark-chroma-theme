const colors = require("@primer/primitives/dist/json/colors/dark.json");

// chroma/pygments tokens reference:
// https://pygments.org/docs/tokens/

// vs code tokens reference:
// https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide

const styles = {
  chroma: {
    // Background
    backgroundColor: colors.canvas.default,
    // Error
    "& .err": {
      color: colors.danger.fg,
    },
    // Punctuation
    // e.g. `[`, `(`, `...`
    "& .p": {
      color: colors.fg.default,
    },
    // LineTableTD
    "& .lntd": {
      verticalAlign: "top",
      padding: 0,
      margin: 0,
      border: 0,
    },
    // LineTable
    "& .lntable": {
      borderSpacing: 0,
      padding: 0,
      margin: 0,
      border: 0,
      width: "auto",
      overflow: "auto",
      display: "block",
    },
    // LineHighlight
    "& .hl": {
      display: "block",
      width: "100%",
      backgroundColor: colors.codemirror.activelineBg,
    },
    // LineNumbersTable
    "& .lnt": {
      marginRight: "0.4em",
      padding: "0 0.4em 0 0.4em",
      fontSize: "0.875rem",
      color: colors.scale.gray[4],
    },
    // LineNumbers
    "& .ln": {
      marginRight: "0.4em",
      padding: "0 0.4em 0 0.4em",
      color: colors.scale.gray[4],
    },
    // Keyword
    "& .k": {
      color: colors.scale.red[3],
    },
    // KeywordConstant
    // words like `None` in newer Python
    "& .kc": {
      color: colors.scale.blue[2],
      fontWeight: "bold",
    },
    // KeyWordDeclaration
    // words like `var` in Go, JS
    "& .kd": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordNamespace
    // words like `import` in Python, Go
    "& .kn": {
      // could also be orange[3] — vs code distinguishes between packages and namespaces
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordPseudo
    // words like `None` in older Python
    "& .kp": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordReserved
    "& .kr": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordType
    // for built-in types: int,char
    "& .kt": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // Name
    "& .n": {
      color: colors.fg.default,
    },
    // NameAttribute
    // e.g. attrs of HTML tags
    "& .na": {
      color: colors.fg.default,
    },
    // NameBuiltin
    // words available in the global namespace
    "& .nb": {
      color: colors.fg.default,
    },
    // NameBuiltinPseudo
    // words like `self` in Ruby, `this` in Java
    "& .bp": {
      color: colors.fg.default,
    },
    // NameClass
    // class declaration
    "& .nc": {
      color: colors.scale.orange[3],
      fontWeight: "bold",
    },
    // NameConstant
    // constant names; determined by the declaration or uppercase convention
    "& .no": {
      color: colors.scale.blue[2],
      fontWeight: "bold",
    },
    // NameDecorator
    // syntax element in Python/C#
    "& .nd": {
      color: colors.scale.purple[2],
      fontWeight: "bold",
    },
    // NameEntity
    // e.g. &nbsp; in HTML
    "& .ni": {
      color: colors.scale.orange[2],
    },
    // NameException
    // e.g. RuntimeError in Python
    "& .ne": {
      color: colors.scale.orange[3],
      fontWeight: "bold",
    },
    // NameFunction
    // function names
    "& .nf": {
      color: colors.scale.purple[2],
      fontWeight: "bold",
    },
    // NameFunctionMagic
    // e.g. `__init__` in Python
    "& .fm": {
      color: colors.scale.purple[2],
      fontWeight: "bold",
    },
    // NameLabel
    // label names in langs. that support `goto`
    "& .nl": {
      color: colors.scale.blue[2],
      fontWeight: "bold",
    },
    // NameNamespace
    // e.g. import paths in Python/Go
    "& .nm": {
      color: colors.scale.red[3],
    },
    // NameOther
    // normally unused but gets used with langs like JS for all the names (a lexer issue?)
    // "& .nx": {
    //   color: colors.scale.blue[2],
    // },
    // NameProperty
    // occasionally used for class attrs
    "& .py": {
      color: colors.scale.blue[2],
    },
    // NameTag
    // tag names in markup langs.
    "& .nt": {
      color: colors.scale.green[1],
    },
    // NameVariable
    // variable names in langs like PHP that have prefixes in the name
    "& .nv": {
      color: colors.scale.blue[2],
    },
    // NameVariableClass
    // class variables
    "& .vc": {
      color: colors.scale.blue[2],
    },
    // NameVariableGlobal
    // global vars like in Ruby
    "& .vg": {
      color: colors.scale.blue[2],
    },
    // NameVariableInstance
    // instance variables
    "& .vi": {
      color: colors.scale.blue[2],
    },
    // NameVariableMagic
    // e.g. `__doc__` in Python
    "& .vm": {
      color: colors.scale.blue[2],
    },
    // Literal
    // match any literal
    "& .l": {
      color: colors.scale.blue[1],
    },
    // LiteralDate
    // e.g. 42d in Boo
    "& .ld": {
      color: colors.scale.blue[2],
    },
    // LiteralString
    "& .s": {
      color: colors.scale.blue[1],
    },
    // LiteralStringDouble
    // double-quoted string
    "& .s2": {
      color: colors.scale.blue[1],
    },
    // LiteralStringSingle
    // single quoted strings
    "& .s1": {
      color: colors.scale.blue[1],
    },
    // LiteralStringBacktick
    // strings enclosed in backticks
    "& .sb": {
      color: colors.scale.blue[1],
    },
    // LiteralStringChar
    // single character literal
    "& .sc": {
      color: colors.scale.blue[1],
    },
    // LiteralStringAffix
    // e.g. `r` in `r"cool"`
    "& .sa": {
      color: colors.scale.blue[2],
    },
    // LiteralStringDelimiter
    // e.g. the word END in Perl
    "& .dl": {
      color: colors.scale.blue[2],
    },
    // LiteralStringDoc
    // e.g. doc strings in Python
    "& .sd": {
      color: colors.scale.blue[1],
    },
    // LiteralStringEscape
    // escape sequence in literal string
    "& .se": {
      color: colors.scale.blue[2],
    },
    // LiteralStringHeredoc
    // heredoc strings in Ruby/Perl
    "& .sh": {
      color: colors.scale.blue[2],
    },
    // LiteralStringInterpol
    // e.g. #{foo} in Ruby
    "& .si": {
      color: colors.scale.blue[1],
    },
    // LiteralStringOther
    // e.g. `%q{foo}` string constructs in Ruby
    "& .sx": {
      color: colors.scale.blue[1],
    },
    // LiteralStringRegex
    // e.g. `/foo/` in JavaScript
    "& .sr": {
      color: colors.scale.blue[2],
    },
    // LiteralStringSymbol
    // e.g. `:foo` in LISP
    "& .ss": {
      color: colors.scale.blue[1],
    },
    // LiteralNumber
    // match any number literal
    "& .m": {
      color: colors.scale.blue[1],
    },
    // LiteralNumberBin
    // match binary literals e.g. `0b101010`
    "& .mb": {
      color: colors.scale.blue[1],
    },
    // LiteralNumberFloat
    // match float literals
    "& .mf": {
      color: colors.scale.blue[1],
    },
    // LiteralNumberHex
    // match hex literals e.g. e.g. `0xdeadbeef`
    "& .mh": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberInteger
    // match integer literals
    "& .mi": {
      color: colors.scale.blue[1],
    },
    // LiteralNumberIntegerLong
    // e.g. 42L in Python
    "& .il": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberOct
    // match octal literals
    "& .mo": {
      color: colors.scale.blue[1],
    },
    // Operator
    // e.g. +, -
    "& .o": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // OperatorWord
    // e.g. `not` in Python
    "& .ow": {
      color: colors.scale.blue[3],
      fontWeight: "bold",
    },
    // Comment
    "& .c": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentHashbang
    // match hashbang lines
    "& .ch": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentMultiline
    "& .cm": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentSingle
    "& .c1": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // Comment Special
    // e.g. author and license information
    "& .cs": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentPreprocFile
    // match filenames in preprocessor comments, such as include files in C/C++
    "& .cpf": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // GenericDeleted
    "& .gd": {
      color: colors.scale.red[2],
      backgroundColor: colors.scale.red[9],
    },
    // GenericEmph
    "& .ge": {
      color: colors.fg.default,
      fontStyle: "italic",
    },
    // GenericError
    "& .gr": {
      color: colors.scale.red[2],
    },
    // GenericHeading
    "& .gh": {
      color: colors.scale.blue[2],
    },
    // GenericInserted
    "& .gi": {
      color: colors.scale.green[1],
      backgroundColor: colors.scale.green[2],
    },
    // GenericOutput
    "& .go": {
      color: colors.scale.gray[3],
    },
    // GenericPrompt
    "& .gp": {
      color: colors.scale.gray[3],
    },
    // GenericStrong
    "& .gs": {
      fontWeight: "bold",
    },
    // GenericSubheading
    "& .gu": {
      color: colors.scale.blue[2],
    },
    // GenericTraceback
    "& .gt": {
      color: colors.scale.red[2],
    },
    // GenericUnderline
    "& .gl": {
      textDecoration: "underline",
    },
    // TextWhiteSpace
    "& .w": {
      color: colors.fg.subtle,
    },

    // Generic
    // not used generally
    "& .g": {},
    // Other
    // special token for data not matched by a parser (e.g. HTML markup in PHP code)
    "& .x": {
      color: colors.fg.default,
    },
  },
};

module.exports = styles;
