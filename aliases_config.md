git config --global alias.ac "!git add -A && git commit -m"<br>
git config --global alias.ch "checkout"<br>
git config --global alias.br "branch"<br>
git config --global alias.brv "branch -v"<br>
git config --global alias.alias "config --get-regexp alias"<br>
git config --global alias.track "push -u"<br>
git config --global alias.trackom "push -u origin master"<br>

ac: https://stackoverflow.com/questions/4298960/git-add-and-commit-in-one-command <br>
alias: https://stackoverflow.com/questions/7066325/list-git-aliases

All in one command: <br>
```git config --global alias.ac "!git add -A && git commit -m" && git config --global alias.ch "checkout" && git config --global alias.br "branch" && git config --global alias.brv "branch -v" && git config --global alias.alias "config --get-regexp alias"```