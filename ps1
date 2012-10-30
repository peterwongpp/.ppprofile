[ -z "$PS1" -o "$CUSTOMIZED_PS1" != "YES" ] && return

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
export PS1='\[\033[1;33m\]\W\[\033[0;33m\]$(pp_git_formatted_branch)\[\033[0;36m\]$(pp_git_formatted_status)$(pp_git_formatted_stash)\[\033[1;33m\] > \[\033[0m\]'

# depends on git

pp_git_formatted_branch() {
  if [ "$(pp_git_dir)" != "" ]; then
    echo -en " → $(pp_git_branch)"
  fi
}

pp_git_formatted_status() {
  status=$(pp_git_status)
  if [ "$status" != "" ]; then
    echo -en " ($status)"
  fi
}

pp_git_formatted_stash() {
  stash=$(pp_git_stash_status)
  if [ "$stash" != "" ]; then
    if [ "$stash" == "1" ]; then
      echo -en " ($stash stash)"
    else
      echo -en " ($stash stashes)"
    fi
  fi
}
