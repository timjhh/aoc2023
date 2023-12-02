d = {"one": "1","two": "2","three": "3","four": "4","five": "5","six": "6","seven": "7","eight": "8","nine": "9","zero": "0",}

# Part one
print("Part one:", sum([int(min([(st.find(e),d[e] if e in d else e) for e in (list(d.values())) if e in st])[1] + max([(st.rfind(e),d[e] if e in d else e) for e in (list(d.values())) if e in st])[1]) for st in open("input.txt", "r")]))

# Part two
print("Part two: ", sum([int(min([(st.find(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1] + max([(st.rfind(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1]) for st in open("input.txt", "r")]))