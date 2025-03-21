git config --global alias.alias "config --get-regexp alias"<br>
git config --global alias.ac "!git add -A && git commit -m"<br>
git config --global alias.ch "checkout"<br>
git config --global alias.br "branch"<br>
git config --global alias.brv "branch -vv"<br>
git config --global alias.ra "remote add" <br>
git config --global alias.rao "remote add origin" <br>
git config --global alias.track "push -u"<br>
git config --global alias.tracko "push -u origin"<br>
git config --global alias.trackom "push -u origin master"<br>

ac: https://stackoverflow.com/questions/4298960/git-add-and-commit-in-one-command <br>
alias: https://stackoverflow.com/questions/7066325/list-git-aliases

All in one command copy-paste: <br>
```
git config --global alias.alias "config --get-regexp alias" && git config --global alias.ac "!git add -A && git commit -m" && git config --global alias.ch "checkout" && git config --global alias.br "branch" && git config --global alias.brv "branch -vv" && git config --global alias.ra "remote add" && git config --global alias.rao "remote add origin" && git config --global alias.track "push -u" && git config --global alias.tracko "push -u origin" && git config --global alias.trackom "push -u origin master"
```