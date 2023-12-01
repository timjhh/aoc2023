import os, re

f = open("i2.txt", "r")

d = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
}

sum = 0
for l in f:
    if len(l) == 0:
        continue
    #ne = " ".join(d.get(e, e) for e in l.split())
    pat = '|'.join(sorted(re.escape(k) for k in l))
    ne = re.sub(pat, lambda m: l.get(m.group(0).upper()))
    le = re.sub(r'\D', '', l)
    print("OLD 1:", l, " OLD: ", le, " NEW: ", ne)
    if len(le) < 2:
        continue
    elif len(le) == 2:
        sum = sum + int(le)
    else:
        print("NUM: ", le, " NEW: ", int(le[0] + le[-1]))
        sum = sum + int(le[0] + le[-1])

print(sum)
