####################### Configurable #######################

PP_BASE_DIR="$HOME/.ppprofile"

CUSTOMIZED_PS1="YES" # YES - use; any other values - do not use

######## Modify ONLY IF you know what you are doing ########

[[ -s "$PP_BASE_DIR/utilities" ]] && source "$PP_BASE_DIR/utilities"

pp_import_source "utilities"
pp_import_source "git"
pp_import_source "ps1"
pp_import_source "shortcuts"
