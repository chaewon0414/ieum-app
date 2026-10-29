import re, sys, pathlib, json
b = pathlib.Path(sys.argv[1]).read_text(); out = pathlib.Path(sys.argv[2])
parts = re.split(r"^// Source: (js/\S+)\n", b, flags=re.M)
order = []
for i in range(1, len(parts), 2):
    p = out / parts[i]; p.parent.mkdir(parents=True, exist_ok=True); p.write_text(parts[i+1]); order.append(parts[i])
(out / "bundle-order.json").write_text(json.dumps(order, indent=1))
print(len(order), "files; prefix:", repr(parts[0][:40]))
