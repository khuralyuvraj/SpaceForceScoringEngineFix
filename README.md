# SpaceForceScoringEngineFix

Use the following command to clone this repo into your home directory
```
cd ~
git clone https://github.com/khuralyuvraj/SpaceForceScoringEngineFix Scoring
```

Then run the update script with
```
chmod +x Scoring/update
sudo Scoring/update &
```

And finally, update the Scoring Report desktop shortcut with
```
sudo mousepad Desktop/Scoring\ Report.desktop
```
and change the following line: `/usr/share/csse-pub/index.html` -> `/home/secaudit/Scoring/index.html`
