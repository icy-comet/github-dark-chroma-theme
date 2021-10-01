const colors = require("@primer/primitives/dist/json/colors/dark.json");

const styles = {
  // Background
  chroma: {
    backgroundColor: colors.canvas.default,
    // Error
    "& .err": {
      color: colors.danger.fg,
    },
    // Punctuation
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
      color: colors.codemirror.linenumberText,
    },
    // LineNumbers
    "& .ln": {
      marginRight: "0.4em",
      padding: "0 0.4em 0 0.4em",
      color: colors.codemirror.linenumberText,
    },
    // Keyword
    "& .k": {
      color: colors.scale.red[3],
    },
    // KeywordConstant
    "& .kc": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeyWordDeclaration
    "& .kd": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordNamespace
    "& .kn": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // KeywordPseudo
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
    "& .kt": {
      color: colors.scale.red[3],
      fontWeight: "bold",
    },
    // NameAttribute
    "& .na": {
      color: colors.fg.default,
    },
    // NameBuiltin
    "& .nb": {
      color: colors.fg.default,
    },
    // NameBuiltinPseudo
    "& .bp": {
      color: colors.fg.default,
    },
    // NameClass
    "& .nc": {
      color: colors.scale.green[1],
      fontWeight: "bold",
    },
    // NameConstant
    "& .no": {
      color: colors.scale.blue[2],
      fontWeight: "bold",
    },
    // NameDecorator
    "& .nd": {
      color: colors.scale.purple[3],
      fontWeight: "bold",
    },
    // NameEntity
    "& .ni": {
      color: colors.scale.orange[2],
    },
    // NameException
    "& .ne": {
      color: colors.scale.orange[2],
      fontWeight: "bold",
    },
    // NameFunction
    "& .nf": {
      color: colors.scale.purple[2],
      fontWeight: "bold",
    },
    // NameLabel
    "& .nl": {
      color: colors.scale.blue[2],
      fontWeight: "bold",
    },
    // NameNamespace
    "& .nm": {
      color: colors.scale.red[3],
    },
    // NameOther
    "& .nx": {
      color: colors.scale.blue[2],
    },
    // NameProperty
    "& .py": {
      color: colors.scale.blue[2],
    },
    // NameTag
    "& .nt": {
      color: colors.scale.green[1],
    },
    // NameVariable
    "& .nv": {
      color: colors.scale.blue[2],
    },
    // NameVariableClass
    "& .vc": {
      color: colors.scale.blue[2],
    },
    // NameVariableGlobal
    "& .vg": {
      color: colors.scale.blue[2],
    },
    // NamevariableInstance
    "& .vi": {
      color: colors.scale.blue[2],
    },
    // Literal
    "& .l": {
      color: colors.scale.blue[2],
    },
    // LiteralDate
    "& .ld": {
      color: colors.scale.blue[2],
    },
    // LiteralString
    "& .s": {
      color: colors.scale.blue[2],
    },
    // LiteralStringAffix
    "& .sa": {
      color: colors.scale.blue[2],
    },
    // LiteralStringBacktick
    "& .sb": {
      color: colors.scale.blue[2],
    },
    // LiteralStringChar
    "& .sc": {
      color: colors.scale.blue[2],
    },
    // LiteralStringDelimiter
    "& .dl": {
      color: colors.scale.blue[2],
    },
    // LiteralStringDoc
    "& .sd": {
      color: colors.scale.blue[2],
    },
    // LiteralStringDouble
    "& .s2": {
      color: colors.scale.blue[2],
    },
    // LiteralStringEscape
    "& .se": {
      color: colors.scale.blue[2],
    },
    // LiteralStringHeredoc
    "& .sh": {
      color: colors.scale.blue[2],
    },
    // LiteralStringInterpol
    "& .si": {
      color: colors.scale.blue[2],
    },
    // LiteralStringOther
    "& .sx": {
      color: colors.scale.blue[2],
    },
    // LiteralStringRegex
    "& .sr": {
      color: colors.scale.blue[2],
    },
    // LiteralStringSingle
    "& .s1": {
      color: colors.scale.blue[2],
    },
    // LiteralStringSymbol
    "& .ss": {
      color: colors.scale.blue[2],
    },
    // LiteralNumber
    "& .m": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberBin
    "& .mb": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberFloat
    "& .mf": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberHex
    "& .mh": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberInteger
    "& .mi": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberIntegerLong
    "& .il": {
      color: colors.scale.blue[2],
    },
    // LiteralNumberOct
    "& .mo": {
      color: colors.scale.blue[2],
    },
    // Operator
    "& .o": {
      color: colors.scale.blue[1],
      fontWeight: "bold",
    },
    // OperatorWord
    "& .ow": {
      color: colors.scale.blue[1],
      fontWeight: "bold",
    },
    // Comment
    "& .c": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentHashbang
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
    "& .cs": {
      color: colors.scale.gray[3],
      fontStyle: "italic",
    },
    // CommentPreprocFile
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
    // Generic Inserted
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
    "& .g": {},
    // NameVariableMagic
    "& .vm": {},
    // NameFunctionMagic
    "& .fm": {},
    // Name
    "& .n": {},
    // Other
    "& .x": {},
  },
};

module.exports = styles;
