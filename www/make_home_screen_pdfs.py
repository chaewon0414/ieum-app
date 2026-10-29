"""Full-bleed mobile home screen concepts based on the 0.3.2 home view."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor


OUT = Path(__file__).resolve().parent / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont("NotoKR", r"C:\Windows\Fonts\NotoSansKR-VF.ttf"))
W, H = 430, 932


def box(c, x, y, w, h, r, fill, border=None):
    c.setFillColor(HexColor(fill))
    if border:
        c.setStrokeColor(HexColor(border)); c.setLineWidth(1)
    c.roundRect(x, y, w, h, r, fill=1, stroke=bool(border))


def t(c, x, y, s, size, color, align="left"):
    c.setFont("NotoKR", size); c.setFillColor(HexColor(color))
    {"left": c.drawString, "center": c.drawCentredString, "right": c.drawRightString}[align](x, y, s)


def icon(c, x, y, kind, color, scale=1):
    c.saveState(); c.translate(x,y); c.scale(scale,scale)
    c.setStrokeColor(HexColor(color)); c.setLineWidth(1.9)
    p=c.beginPath()
    if kind == "home":
        p.moveTo(-10,0); p.lineTo(0,9); p.lineTo(10,0)
        p.moveTo(-7,1); p.lineTo(-7,-10); p.lineTo(7,-10); p.lineTo(7,1)
    elif kind == "policy":
        p.moveTo(-10,5); p.lineTo(0,10); p.lineTo(10,5); p.moveTo(-9,2); p.lineTo(9,2)
        for dx in (-7,0,7): p.moveTo(dx,0); p.lineTo(dx,-9)
        p.moveTo(-10,-11); p.lineTo(10,-11)
    elif kind == "work":
        p.roundRect(-10,-8,20,15,2); p.moveTo(-4,7); p.lineTo(-4,10); p.lineTo(4,10); p.lineTo(4,7); p.moveTo(-10,0); p.lineTo(10,0)
    elif kind == "chat":
        p.roundRect(-10,-7,20,16,5); p.moveTo(-5,-7); p.lineTo(-6,-12); p.lineTo(0,-7)
    elif kind == "profile":
        c.circle(0,5,4,fill=0,stroke=1); p.arc(-10,-12,10,2,0,180)
    elif kind == "spark":
        p.moveTo(0,10); p.lineTo(2,2); p.lineTo(10,0); p.lineTo(2,-2); p.lineTo(0,-10); p.lineTo(-2,-2); p.lineTo(-10,0); p.lineTo(-2,2); p.close()
    elif kind == "bell":
        p.moveTo(-7,-5); p.lineTo(-5,-3); p.lineTo(-5,4); p.curveTo(-5,12,5,12,5,4); p.lineTo(5,-3); p.lineTo(7,-5); p.close()
        p.moveTo(-2,-8); p.curveTo(-2,-12,2,-12,2,-8)
    c.drawPath(p); c.restoreState()


def draw(q, filename):
    c=canvas.Canvas(str(OUT/filename),pagesize=(W,H))
    c.setTitle("디딤돌 0.3.2 메인 홈 - "+q["name"])
    c.setFillColor(HexColor(q["bg"])); c.rect(0,0,W,H,fill=1,stroke=0)

    # App top bar and brand. No page margin, poster frame, or phone mockup.
    c.setFillColor(HexColor("#FFFFFF")); c.rect(0,H-76,W,76,fill=1,stroke=0)
    box(c,18,H-58,43,43,14,q["pale"])
    c.setStrokeColor(HexColor(q["deep"])); c.setLineWidth(2.5)
    p=c.beginPath(); p.moveTo(30,H-39); p.curveTo(37,H-48,47,H-30,53,H-40); c.drawPath(p)
    t(c,72,H-45,"디딤돌",18,q["ink"])
    box(c,335,H-56,37,37,18,q["soft"]); icon(c,353.5,H-38,"bell",q["deep"],.75)
    box(c,383,H-56,37,37,18,q["accent"]); t(c,401.5,H-44,"지",13,q["deep"],"center")

    t(c,20,813,"반가워요!",26,q["ink"])
    t(c,20,788,"오늘의 지원과 생활을 한눈에 확인해요.",11,q["muted"])

    # 0.3.2 support status example data.
    box(c,18,575,394,188,23,q["card"])
    box(c,36,721,101,25,12,q["chip"]); t(c,86.5,729,"나의 지원 현황",10,q["deep"],"center")
    t(c,394,729,"›",22,q["deep"],"right")
    box(c,36,641,170,67,15,"#FFFFFF")
    box(c,224,641,170,67,15,"#FFFFFF")
    t(c,50,682,"신청 중인 정책",9,q["muted"]); t(c,50,651,"2건",24,q["deep"])
    t(c,238,682,"이번 달 지원 예정",9,q["muted"]); t(c,238,653,"700,000원",20,q["deep"])
    c.setStrokeColor(HexColor(q["line"])); c.setLineWidth(1); c.line(36,625,394,625)
    t(c,39,602,"청년 월세 지원",12,q["ink"])
    box(c,319,591,73,26,13,q["chip"]); t(c,355.5,599,"심사 중",9,q["deep"],"center")
    t(c,39,584,"진행상태와 심사결과를 확인하세요",8.7,q["muted"])

    t(c,20,543,"빠른 시작",19,q["ink"])
    box(c,18,438,394,89,19,"#FFFFFF",q["line"])
    box(c,33,455,54,54,17,q["pale"]); icon(c,60,482,"home",q["deep"],1.2)
    t(c,100,489,"생활 관리",15,q["ink"])
    t(c,100,466,"월세와 생활비를 가볍게 관리해요",10,q["muted"])
    t(c,393,478,"›",23,q["deep"],"right")
    for bx,title,desc,kind in [(18,"지원정책 찾기","놓치기 쉬운 혜택까지","policy"),(220,"취업 준비","채용 정보와 면접 연습","work")]:
        box(c,bx,317,192,107,19,"#FFFFFF",q["line"])
        box(c,bx+15,371,38,38,12,q["pale"]); icon(c,bx+34,390,kind,q["deep"],.85)
        t(c,bx+15,349,title,13,q["ink"])
        t(c,bx+15,331,desc,9,q["muted"])

    box(c,18,201,394,100,19,q["note"])
    box(c,34,250,38,38,12,"#FFFFFF"); icon(c,53,269,"spark",q["deep"],.8)
    t(c,84,268,"오늘의 한마디",14,q["ink"])
    t(c,34,231,"작은 한 걸음도 분명한 시작이에요.",10.5,q["muted"])
    t(c,34,213,"오늘도 천천히 나아가요.",10.5,q["muted"])

    # Persistent app actions and navigation.
    box(c,345,116,59,59,20,q["deep"]); icon(c,374.5,145.5,"chat","#FFFFFF",1.13)
    c.setFillColor(HexColor("#FFFFFF")); c.rect(0,0,W,91,fill=1,stroke=0)
    c.setStrokeColor(HexColor(q["line"])); c.line(0,91,W,91)
    for i,(kind,title) in enumerate([("home","홈"),("policy","지원정책"),("chat","커뮤니티"),("profile","내 정보")]):
        nx=54+i*107.3; active=i==0
        if active: box(c,nx-35,31,70,53,15,q["pale"])
        color=q["deep"] if active else q["nav"]
        icon(c,nx,60,kind,color,.95); t(c,nx,41,title,9.5,color,"center")
    c.showPage(); c.save()


draw(dict(name="파스텔 노랑",bg="#FFFCF3",pale="#FFF0BD",soft="#FFF7DA",accent="#FFE3A0",card="#FFF2C9",chip="#FFE2A2",note="#FFF5DB",deep="#785518",ink="#302D25",muted="#736C5E",line="#E9DDC4",nav="#8A857A"),"didimdol_032_home_yellow.pdf")
draw(dict(name="파스텔 초록",bg="#F7FBF5",pale="#DCF0D8",soft="#ECF7EA",accent="#C9E8C5",card="#DFEFDC",chip="#C5E4C1",note="#EDF7EA",deep="#38694A",ink="#29392F",muted="#657568",line="#D7E8D7",nav="#7D8B80"),"didimdol_032_home_green.pdf")
