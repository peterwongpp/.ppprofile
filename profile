# A function to return the current git branch name
parse_git_branch_name() {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'
}

# A function to return the current formatted git branch name
parse_git_branch_formatted() {
  branch_name=$(parse_git_branch_name)

  if [ "$branch_name" ]; then
    echo " → $branch_name"
  fi
}
# -

# A function to return the string of state of the branch and the number of stashes
parse_git_dirty() {
  D="$(git status 2> /dev/null | tail -n1 | awk '{ print $1 }' )"
  if [ "$D" = "nothing" ] ; then
    echo -en " (clean) "
  elif [ "$D" = "no" ]; then
    echo -en " (modified) "
  elif [ "$D" = "#" ]; then
    echo -en " (staged) "
  else
    echo " "
  fi

  if [ "$D" != "" ] ; then
    D2="$(git stash list 2> /dev/null | wc -l | awk '{ print $1 }' )"
    if [ "$D2" = "0" ] ; then
      echo ""
    elif [ "$D2" = "1" ] ; then
      echo -en "($D2 stash) "
    else
      echo -en "($D2 stashes) "
    fi
  fi
}
# -

# Change the command line format and color
# \u User name
# \h Host name
# \w Directory
# $(parse_git_branch) Current git branch name
export PS1='\[\e[1;33m\]\W\[\e[0;33m\]$(parse_git_branch_formatted)\[\e[0,36m\]$(parse_git_dirty)\[\e[1;33m\]$ \[\e[0m\]'
# -
