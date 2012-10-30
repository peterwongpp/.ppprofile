[ -z "$PS1" -o "$CUSTOMIZED_PS1" != "YES" ] && return

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
export PS1='\[\033[1;33m\]\W\[\033[0;33m\]$(pp_git_for_ps1)\[\033[1;33m\] > \[\033[0m\]'

# depends on git
pp_git_for_ps1() {
  if [ "$(pp_git_dir)" != "" ];then
    echo -en $PP_COLOR_RESET$PP_COLOR_YELLOW" → $(pp_git_branch)"

    status=$(pp_git_status)
    if [ "$status" != "" ]; then
      echo -en $PP_COLOR_RESET$PP_COLOR_CYAN" ($status)"
    fi

    stash=$(pp_git_stash_status)
    if [ "$stash" != "" ]; then
      if [ "$stash" == "1" ]; then
        echo -en $PP_COLOR_RESET$PP_COLOR_CYAN" ($stash stash)"
      else
        echo -en $PP_COLOR_RESET$PP_COLOR_CYAN" ($stash stashes)"
      fi
    fi
  fi
}

