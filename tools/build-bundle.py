# build-bundle.ps1과 같은 방식으로 js/app.bundle.js를 만듭니다. 사용법: python3 build050.py <웹 폴더>
import re, sys, pathlib
root = pathlib.Path(sys.argv[1])
ps1 = (pathlib.Path(sys.argv[2]) if len(sys.argv) > 2 else root / "build-bundle.ps1").read_text(encoding="utf-8-sig")
files = [f for f in re.findall(r'"(js/[^"]+\.js)"', ps1) if f != "js/app.bundle.js"]
parts = []
for f in files:
    c = (root / f).read_text(encoding="utf-8-sig")
    c = re.sub(r"(?m)^import .*?;\r?\n", "", c)
    c = re.sub(r"(?m)^export ", "", c)
    parts.append(f"// Source: {f}\r\n{c}")
(root / "js/app.bundle.js").write_bytes("\r\n\r\n".join(parts).encode("utf-8"))
print("bundle:", len(files), "files")
