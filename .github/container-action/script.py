import os

name = os.getenv("NAME")
greeting = f"Hello, {name}!"
print(greeting)


with open(os.environ["GITHUB_OUTPUT"], "a") as output_file:
    output_file.write(f"greeting={greeting}\n")

