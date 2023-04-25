#!/usr/bin/node


import sys

# Get the file path from the first argument
file_path = sys.argv[1]

# Try to open the file and read it
try:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        print(content)
except Exception as e:
    print(e)
