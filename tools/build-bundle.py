# js/ 원본들을 bundle-order.json 순서대로 이어 붙여 js/app.bundle.js를 만듭니다.
# 사용법: python3 build.py <src 폴더> <www 폴더>
import json, sys, pathlib
src = pathlib.Path(sys.argv[1]); www = pathlib.Path(sys.argv[2])
order = json.loads((src / "bundle-order.json").read_text())
out = "".join(f"// Source: {f}\n{(src / f).read_text()}" for f in order)
(www / "js/app.bundle.js").write_text(out); print("bundle:", len(order), "files,", len(out), "chars")
