# I'm having some caching problems with different versions of build files; this is just to log the filenames to help debug.

# f-strings only work in 3.6, so if it blows up, it's probably because I'm in some obsolete pipenv.

import datetime
from glob import glob
import os


now = datetime.datetime.now().strftime("%m-%d-%Y %I:%M%p")

jsfiles = sorted([os.path.basename(x) for x in glob("dist/static/js/*.js")])
cssfiles = sorted([os.path.basename(x) for x in glob("dist/static/css/*.css")])

logline = f'{now},{",".join(jsfiles + cssfiles)}\n'

logfilename = "filename_log.csv"

if not os.path.exists(logfilename):
    with open(logfilename, "w") as logfile:
        logfile.write("Date,App JS,Manifest JS,Vendor JS,Vendor CSS\n")

with open("filename_log.csv", "a") as logfile:
    logfile.write(logline)
