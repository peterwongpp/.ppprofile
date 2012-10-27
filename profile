####################### Configurable #######################

_DEBUG="on" # on: display debug messages; all other values: do not display debug messages

BASE_DIR=$HOME
PROJECT_NAME=".ppprofile"

######## Modify ONLY IF you know what you are doing ########

import_source() {
  cmd="$BASE_DIR/$PROJECT_NAME/$1"
  DEBUG echo "importing $cmd"
  [[ -s $cmd ]] && source $cmd
}

import_source "debug"
import_source "git"

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
export PS1='\[\e[1;33m\]\W\[\e[0;33m\]$(parse_git_branch_formatted)\[\e[0,36m\]$(parse_git_dirty)\[\e[1;33m\]$ \[\e[0m\]'
# -
