(TeX-add-style-hook
 "template"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("moderncv" "letterpaper")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("inputenc" "utf8") ("geometry" "scale=0.75")))
   (TeX-run-style-hooks
    "latex2e"
    "moderncv"
    "moderncv10"
    "textcomp"
    "multicol"
    "inputenc"
    "geometry"
    "fontspec"
    "xpatch")
   (TeX-add-symbols
    '("mycvlistdoubleitem" ["argument"] 2)))
 :latex)

