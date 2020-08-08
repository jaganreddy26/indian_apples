NG:=ng
NPM:=npm
COMPRESS:=tar zcvf

all: dist/dbg-2000.tgz

dist/dbg-2000.tgz: 
	$(NG) build	
	$(COMPRESS) dist/dbg-2000.tgz dist/dbg-2000

