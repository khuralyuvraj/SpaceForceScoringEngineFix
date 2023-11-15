# SpaceForceScoringEngineFix

Open Firefox in the VM and go to [this site](https://download1500.mediafire.com/4bmebz9w73pgALKwk_Txf26npPcItlnAYrGqXh0JT2XqRY0MTrYA6-HQVNFMrbx0S7F53sUAp5msmX2hoDlGEQithyhCaEvPfiKGZC5OSCj-bozvLVxA5-2rQYul_pGnCe9_MK738T4mqwyibEItZ0Pp1aH5_p7xzRZgFT_s9ary/kd25z8fmcgcbsec/Scoring.zip) > `Advanced` > `Accept the risk and continue` > `Download` and then move the Scoring.zip download to your home folder `/home/secaudit/`

Type the following commands to unzip the file:
```
cd ~
unzip Scoring.zip
rm Scoring.zip
```
Or if you are tethering to the VM then you can do the following and skip all previous steps:
```
cd ~
git clone https://github.com/khuralyuvraj/SpaceForceScoringEngineFix
```

Then run the update script with
```
chmod +x Scoring/update
sudo Scoring/update &
```

And finally, update the Scoring Report desktop shortcut with
```
sudo sed -i 's\/usr/share/csse-pub/index.html\/home/secaudit/Scoring/index.html\' /home/secaudit/Desktop/Scoring\ Report.desktop
```
