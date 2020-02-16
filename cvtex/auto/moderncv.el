(TeX-add-style-hook
 "moderncv"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("xcolor" "table") ("fontenc" "T1") ("hyperref" "unicode")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "etoolbox"
    "ifthen"
    "xcolor"
    "ifxetex"
    "ifluatex"
    "fontenc"
    "lmodern"
    "url"
    "hyperref"
    "graphicx"
    "fancyhdr"
    "tweaklist"
    "calc"
    "xparse"
    "microtype"
    "moderncvcollection"
    "moderncvcompatibility"
    "expl3")
   (TeX-add-symbols
    '("enclosure" ["argument"] 1)
    '("cvcolumn" ["argument"] 2)
    '("tellink" ["argument"] 1)
    '("emaillink" ["argument"] 1)
    '("httplink" ["argument"] 1)
    '("link" ["argument"] 1)
    '("cvitemwithcomment" ["argument"] 3)
    '("cventry" ["argument"] 6)
    '("cvlistdoubleitem" ["argument"] 2)
    '("cvlistitem" ["argument"] 1)
    '("cvdoubleitem" ["argument"] 4)
    '("cvitem" ["argument"] 2)
    '("makenewline" ["argument"] 0)
    '("moderncvfoot" ["argument"] 1)
    '("moderncvbody" ["argument"] 1)
    '("moderncvhead" ["argument"] 1)
    '("moderncvstyle" ["argument"] 1)
    '("closing" 1)
    '("opening" 1)
    '("recipient" 2)
    '("descriptionlabel" 1)
    '("bibliographyhead" 1)
    '("cvcolumncell" 1)
    '("pagenumberstyle" 1)
    '("hintstyle" 1)
    '("subsectionstyle" 1)
    '("sectionstyle" 1)
    '("quotestyle" 1)
    '("addressstyle" 1)
    '("titlestyle" 1)
    '("namestyle" 1)
    '("quote" 1)
    '("moderncvicons" 1)
    '("moderncvcolor" 1)
    '("extrainfo" 1)
    '("homepage" 1)
    '("email" 1)
    '("name" 2)
    "pdfpagemode"
    "nopagenumbers"
    "address"
    "phone"
    "social"
    "listitemsymbol"
    "addresssymbol"
    "mobilephonesymbol"
    "fixedphonesymbol"
    "faxphonesymbol"
    "emailsymbol"
    "homepagesymbol"
    "linkedinsocialsymbol"
    "xingsocialsymbol"
    "twittersocialsymbol"
    "githubsocialsymbol"
    "gitlabsocialsymbol"
    "skypesocialsymbol"
    "refname"
    "enclname"
    "makefooter"
    "recomputeheadlengths"
    "recomputebodylengths"
    "recomputefootlengths"
    "recomputelengths"
    "photo"
    "namefont"
    "titlefont"
    "addressfont"
    "quotefont"
    "sectionfont"
    "subsectionfont"
    "hintfont"
    "pagenumberfont"
    "recomputecvheadlengths"
    "recomputecvbodylengths"
    "recomputecvfootlengths"
    "recomputecvlengths"
    "makecvtitle"
    "makecvhead"
    "makecvfoot"
    "section"
    "subsection"
    "bibliographyitemlabel"
    "newblock"
    "recomputeletterheadlengths"
    "recomputeletterbodylengths"
    "recomputeletterfootlengths"
    "recomputeletterlengths"
    "makelettertitle"
    "makeletterhead"
    "makeletterfoot"
    "makeletterclosing"
    "begincvcolumns"
    "today")
   (LaTeX-add-labels
    "lastpage")
   (LaTeX-add-environments
    '("thebibliography" 1)
    "cvcolumns")
   (LaTeX-add-counters
    "cvcolumnscounter"
    "cvcolumnsautowidthcounter"
    "tmpiteratorcounter")
   (LaTeX-add-lengths
    "pagenumberwidth"
    "cvcolumnsdummywidth"
    "cvcolumnswidth"
    "cvcolumnsautowidth"
    "cvcolumnautowidth"
    "bibindent")
   (LaTeX-add-xcolor-definecolors
    "color0"
    "color1"
    "color2"
    "color3"))
 :latex)

