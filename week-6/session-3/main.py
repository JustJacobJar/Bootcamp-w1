import os

path = ".\week-6\session-3\Documents"

data = os.listdir(path)

with open(".\week-6\session-3\\results.txt", "+w") as file:
  for item in data:
    file.write(item + "\n")
    