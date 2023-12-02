import os, re
# 53592
# d = {"one": "1","two": "2","three": "3","four": "4","five": "5","six": "6","seven": "7","eight": "8","nine": "9","zero": "0",}
# sum = 0
# def find_first(st):
#     return min([(st.find(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1]
# def find_last(st):
#     return max([(st.rfind(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1]
# for l in open("input.txt", "r"):
    #sum = sum + int(find_first(l)+find_last(l))
# print(sum)

d = {"one": "1","two": "2","three": "3","four": "4","five": "5","six": "6","seven": "7","eight": "8","nine": "9","zero": "0",}
print(sum([int(min([(st.find(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1] + max([(st.rfind(e),d[e] if e in d else e) for e in (list(d.keys())+list(d.values())) if e in st])[1]) for st in open("input.txt", "r")]))