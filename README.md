Test Pilot Helper
========================

Improved debugging of TestPilot installations and experiments by turning on useful settings, and
opening useful pages

Simplest
------------

	cfx run --addon path/to/testpilot-1.x.x.xpi

Or

```
# just run another addon
cfx run --addon some/addon.xpi

# turn on some useful prefs and debugging
cfx run --addon some/addon.xpi --static-args '{"debugpages": true, "debugprefs": true, "local": true}'

# turn on some useful prefs and debugging
cfx run --addon some/addon.xpi --static-args '{"debugpages": true, "debugprefs": true}'

# add your own urls, loaded in 'tabs.open'
cfx run --addon some/addon.xpi --static-args '{"urls": ["http://url1", "http://url2"]}'

# add prefs, with the prefs minilang
cfx run --static-args '{"prefs": {"+addon.pref": 'value', "some.rooted.pref": "value2"}}'
```


See
---------

* http://hg.mozilla.org/labs/testpilotweb/raw-file/tip/README.md
* https://github.com/gregglind/lotsa_addons/tree/master/helper



help with windows
---------------------

0.  (in vmware fusion, turn sharing on for folders)
1.  install `gitbash` (https://help.github.com/articles/set-up-git#platform-windows) (https://openhatch.org/missions/windows-setup/install-git-bash)
2.  install python
3.  fire up `python -m simpleHTTPserver 8000` above `testcases` somewhere.
4.  useful aliases:

    unalias cfx; alias cfx='//vmware-host/Shared\ Folders/glind-mac/gits/addon-sdk/bin/cfx'
    alias aurora='/c/Program\ Files\ \(x86\)/Aurora/firefox.exe'

5.  rm -rf /tmp/moz1 && cfx run -b  C\://Program\ Files\ \(x86\)/Aurora/firefox.exe  -p /tmp/moz1 --addon testpilot-1.2.2.xpi
