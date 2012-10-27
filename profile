[[ -s "$HOME/.ppprofile/git" ]] && source "$HOME/.ppprofile/git"

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
export PS1='\[\e[1;33m\]\W\[\e[0;33m\]$(parse_git_branch_formatted)\[\e[0,36m\]$(parse_git_dirty)\[\e[1;33m\]$ \[\e[0m\]'
# -
