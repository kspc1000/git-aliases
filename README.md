# Git Aliases
A repository to note down the git aliases I use, and to expedite their configuration.

## List
- `alias.alias` **config --get-regexp alias** (Usage: `git alias`)<br />
- `alias.ac` **!git add -A && git commit -m** (Usage: `git ac "commit message"`)<br />
- `alias.ch` **checkout** (Usage: `git ch branch-name`)<br />
- `alias.br` **branch** (Usage: `git br`)<br />
- `alias.brv` **branch -v** (Usage: `git brv`)<br />
- `alias.ra` **remote add** (Usage: `git ra remote-name remote-link`)<br />
- `alias.rao` **remote add origin** (Usage: `git rao remote-link`)<br />
- `alias.track` **push -u** (Usage: `git track remote-name remote-branch-name`)<br />
- `alias.tracko` **push -u origin** (Usage: `git tracko remote-branch-name`<br />
- `alias.trackom`* **push -u origin master** (Usage: `git trackom`)<br />

\**om: origin master*

All in one command copy-paste: <br>
```git config --global alias.alias "config --get-regexp alias" && git config --global alias.ac "!git add -A && git commit -m" && git config --global alias.ch "checkout" && git config --global alias.br "branch" && git config --global alias.brv "branch -v" && git config --global alias.ra "remote add" && git config --global alias.rao "remote add origin" && git config --global alias.track "push -u" && git config --global alias.tracko "push -u origin" && git config --global alias.trackom "push -u origin master"```

## Source

[<img src="https://img.youtube.com/vi/ecK3EnyGD8o/0.jpg" alt="thumbnail" />](https://www.youtube.com/watch?v=ecK3EnyGD8o&t=80s)
