# PPProfile

My bash profile

---

How do you use it is your problem. Here is how I use it ;)

1. cd ~/
2. git clone git://github.com/peterwongpp/.ppprofile.git
3. edit .profile to add the following line:
    - [[ -s "$HOME/.ppprofile/profile" ]] && source "$HOME/.ppprofile/profile"
4. open .ppprofile/profile to see if anything need to update
5. do the followings if needed:
    - ln -s .profile .bashrc
    - ln -s .profile .bash_profile
    - ...
