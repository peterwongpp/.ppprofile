####################### Configurable #######################

PP_BASE_DIR="$HOME/.ppprofile"

CUSTOMIZED_PS1="YES" # YES - use; any other values - do not use

######## Modify ONLY IF you know what you are doing ########

[[ -s "$PP_BASE_DIR/utilities" ]] && source "$PP_BASE_DIR/utilities"

pp_import_source "utilities"
pp_import_source "git"

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
if [ "$CUSTOMIZED_PS1" = "YES" ]; then
  export PS1='\[\e[1;33m\]\W\[\e[0;33m\]$(pp_git_for_ps1)\[\e[1;33m\] > \[\e[0m\]'
fi
