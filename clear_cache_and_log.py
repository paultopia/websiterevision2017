# I'm having some caching problems with different versions of build files; this is just to log the filenames to help debug. Every filename has a UUID in it, so I can see which versions are live and compare to on disk.

# f-strings only work in 3.6, so if it blows up, it's probably because I'm in some obsolete pipenv.

import datetime
from glob import glob
import os
import requests
import re

now = datetime.datetime.now().strftime("%m-%d-%Y %I:%M%p")
labels = ["css", "app_js", "manifest_js", "vendor_js"]

# CLEAR_THE_CLOUDFLARE_CACHE

email = os.environ["cloudflareemail"]
apikey = os.environ["cloudflareapi"]
zone = os.environ['cloudflarezone']
endpoint = "https://api.cloudflare.com/client/v4/zones/{}/purge_cache".format(zone)
headers = {"X-Auth-Email": email, "X-Auth-Key": apikey, "Content-Type": "application/json"}


def clear_cache():
    print("Trying to clear cache.")
    resp = requests.post(endpoint, headers=headers, json={"purge_everything": True})
    output = resp.json()
    print(output)
    assert output["errors"] == [], "ABORTING: cloudflare api call produced errors"
    assert output['success'], "ABORTING: cloudflare API call did not produce success"
    return output['success']

cache_api_cleared = clear_cache()

# GET THE CORRECT FILENAMES FROM CURRENT BUILD

jsfiles = sorted([os.path.basename(x) for x in glob("dist/static/js/*.js")])
cssfiles = sorted([os.path.basename(x) for x in glob("dist/static/css/*.css")])
local_files = dict(zip(labels, cssfiles + jsfiles))

# GET THE FILENAMES THAT SHOW UP ONLINE

livehtml = requests.get("https://gowder.io").text

regex_patterns = [r'static\/css\/(app.*?\.css)',
           r'static\/js\/(app.*?\.js)',
           r'static\/js\/(manifest.*?\.js)',
           r'static\/js\/(vendor.*?\.js)']

regexes = dict(zip(labels, regex_patterns))


def extract_remote_file(label):
    return label, re.search(regexes[label], livehtml).group(1)


remote_files = {k: v for (k, v) in map(extract_remote_file, labels)}

# ALERT IF SOMETHING IS WRONG

fuckups = []


def check_for_fuckup(name):
    if local_files[name] != remote_files[name]:
        print(f'{name} DOES NOT MATCH REMOTE.  Local: {local_files[name]}, Remote: {remote_files[name]}')
        return True
    return False


for x in labels:
    fucked_up = check_for_fuckup(x)
    if fucked_up:
        fuckups.append(x)

all_files_match = not bool(fuckups)

if all_files_match:
    print("All files successfully matched.")
else:
    print("Had a cache error, all files not successfully matched.")

# LOG IT

extended_labels = ['date', 'cache_api_cleared', 'all_files_match']
for x in labels:
    extended_labels.append('local_' + x)
    extended_labels.append('remote_' + x)

header = f'{",".join(extended_labels)}\n'

logfields = [now, cache_api_cleared, all_files_match]
for x in labels:
    logfields.append(local_files[x])
    logfields.append(remote_files[x])

logline = f'{",".join([str(x) for x in logfields])}\n'

logfilename = "cache_invalidation_log.csv"

if not os.path.exists(logfilename):
    with open(logfilename, "w") as logfile:
        logfile.write(header)

with open(logfilename, "a") as logfile:
    logfile.write(logline)
