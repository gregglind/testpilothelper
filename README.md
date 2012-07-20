# Test Pilot Helper

This addon turns on some config settings and opens useful pages when it starts up.

## help with windows:

0.  (in vmware fusion, turn sharing on for folders)
1.  install `gitbash` (https://help.github.com/articles/set-up-git#platform-windows) (https://openhatch.org/missions/windows-setup/install-git-bash)
2.  install python
3.  fire up `python -m simpleHTTPserver 8000` above `testcases` somewhere.
4.  useful aliases:

    unalias cfx; alias cfx='//vmware-host/Shared\ Folders/glind-mac/gits/addon-sdk/bin/cfx'
    alias aurora='/c/Program\ Files\ \(x86\)/Aurora/firefox.exe'

5.  rm -rf /tmp/moz1 && cfx run -b  C\://Program\ Files\ \(x86\)/Aurora/firefox.exe  -p /tmp/moz1 --addon testpilot-1.2.2.xpi
