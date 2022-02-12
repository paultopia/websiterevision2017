#!/usr/bin/env bash

set -o errexit

if [ "$#" -eq 0 ]; then
  echo "usage: bash $0 main.tex" >&2
  exit 1
fi

echo "PWD IS: "

echo $PWD

# We use $DEPLOY_URL to detect the Netlify environment.
if [ -v DEPLOY_URL ]; then
  : ${NETLIFY_BUILD_BASE="/opt/buildhome"}
else
  : ${NETLIFY_BUILD_BASE="$PWD/buildhome"}
fi

NETLIFY_CACHE_DIR="$NETLIFY_BUILD_BASE/cache"

TEXLIVE_DIR="$NETLIFY_CACHE_DIR/texlive"
TEXLIVE_BIN="$TEXLIVE_DIR/2021/bin/x86_64-linux"

# points to 2020 version, for some reason naming it 2020 doesn't work.

# INSTALL_TL="install-tl-unx.tar.gz"
# INSTALL_TL_VERSION="$(tar tf "$INSTALL_TL" | grep -om1 '^install-tl-[0-9]*')"
# INSTALL_TL_SUCCESS="$NETLIFY_CACHE_DIR/$INSTALL_TL_VERSION-success"

# TEXLIVEONFLY="$TEXLIVE_DIR/2020/texmf-dist/scripts/texliveonfly/texliveonfly.py"

# and actually 2020 version failed too, so let's try a build from current version of
# https://github.com/frangio/netlify-latex/blob/master/build.sh


INSTALL_TL_URL="http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz"
INSTALL_TL="install-tl-unx.tar.gz"
INSTALL_TL_SUCCESS="$NETLIFY_CACHE_DIR/install-tl-success"

TEXLIVEONFLY="$TEXLIVE_DIR/2021/texmf-dist/scripts/texliveonfly/texliveonfly.py"

# export CTAN_REPO="http://mirror.las.iastate.edu/tex-archive/systems/texlive/tlnet"

export CTAN_REPO="http://ctan.math.illi­nois.edu/systems/texlive/tlnet"

# See https://github.com/yihui/tinytex/issues/114 

# and https://tex.stackexchange.com/a/463002/112616

TEXLIVE_PROFILE="\
selected_scheme scheme-custom
TEXMFCONFIG \$TEXMFSYSCONFIG
TEXMFHOME \$TEXMFLOCAL
TEXMFVAR \$TEXMFSYSVAR
binary_x86_64-linux 1
collection-basic 1
collection-binextra 1
collection-latex 1
instopt_adjustpath 1
instopt_adjustrepo 1
instopt_letter 0
instopt_portable 1
instopt_write18_restricted 1
tlpdbopt_autobackup 1
tlpdbopt_backupdir tlpkg/backups
tlpdbopt_create_formats 1
tlpdbopt_desktop_integration 1
tlpdbopt_file_assocs 1
tlpdbopt_generate_updmap 0
tlpdbopt_install_docfiles 1
tlpdbopt_install_srcfiles 1
tlpdbopt_post_code 1
tlpdbopt_sys_bin /usr/local/bin
tlpdbopt_sys_info /usr/local/share/info
tlpdbopt_sys_man /usr/local/share/man
tlpdbopt_w32_multi_user 1
TEXDIR $TEXLIVE_DIR/2021
TEXMFLOCAL $TEXLIVE_DIR/texmf-local
TEXMFSYSCONFIG $TEXLIVE_DIR/2021/texmf-config
TEXMFSYSVAR $TEXLIVE_DIR/2021/texmf-var
"

echo "$TEXLIVE_PROFILE" > texlive.profile


if [ ! -e "$INSTALL_TL_SUCCESS" ]; then
  echo "[$0] Installing TeX Live..."

  curl -L "$INSTALL_TL_URL" | tar xz --one-top-level=itl --strip-components=1
  echo "$TEXLIVE_PROFILE" > texlive.profile
  itl/install-tl --profile=texlive.profile
  "$TEXLIVE_BIN/tlmgr" install latexmk texliveonfly
  echo "[$0] Installed TeX Live."

  touch "$INSTALL_TL_SUCCESS"
else
  echo "[$0] Found existing TeX Live installation."
fi


export PATH="$TEXLIVE_BIN:$PATH"

# FREEZE 2020 repository (FAILING)
#tlmgr repository add ftp://tug.org/historic/systems/texlive/2020/tlnet-final
#
#tlmgr option repository ftp://tug.org/historic/systems/texlive/2020/tlnet-final

# NOTE TO SELF: to attempt to speed build, keeping track of packages that tlmgr says are already installed
# when pinning to 2020 version:
# xetex, l3packages, etoolbox, xcolor, microtype, l3kernel, regexpatch.  marvosym failed.
# this may be because of netlify caching, and hence unreliable?? Not sure.  But I will try to comment them out and see if it still builds. 

# TEMPORARILY GETTING RID OF THIS TO SEE IF I CAN GET IT TO DO SOMETHING.

tlmgr --verify-repo=none update -self -all
tlmgr --verify-repo=none install xetex
tlmgr --verify-repo=none install l3packages
tlmgr --verify-repo=none install etoolbox
tlmgr --verify-repo=none install xcolor
tlmgr --verify-repo=none install microtype
tlmgr --verify-repo=none install l3kernel
tlmgr --verify-repo=none install regexpatch
tlmgr --verify-repo=none install marvosym

python "$TEXLIVEONFLY" -c latexmk --compiler=xelatex -a "-g -pdf -synctex=1 -interaction=nonstopmode" "$@"

# mkdir -p dist
# cp *.pdf dist

# used to url encode the filename, which can includes special characters that
# conflict with the _redirects file syntax
# urlencode() {
#   local string="${1}"
#   local strlen="${#string}"
#   local encoded=""
#   local pos c o

#   for (( pos=0 ; pos<strlen ; pos++ )); do
#     c="${string:$pos:1}"
#     case "$c" in
#       [-_.~a-zA-Z0-9] ) o="${c}" ;;
#       * ) printf -v o '%%%02x' "'$c"
#     esac
#     encoded+="${o}"
#   done

#   echo "${encoded}"
# }

# echo "/ /$(urlencode "${1/%.tex/.pdf}") 302" > dist/_redirects
