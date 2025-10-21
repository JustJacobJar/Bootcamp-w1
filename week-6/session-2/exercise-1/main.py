import fileUtils as fs
import mathUtils as mu
import stringUtils as su

if __name__ == "__main__":
    # Math operations
    print("Addition:", mu.add(5, 3))
    print("Subtraction:", mu.subtract(10, 4))

    # String operations
    print("Uppercase:", su.uppercase("hello"))
    print("Lowercase:", su.lowercase("WORLD"))

    # File operations
    fs.write_file("sample.txt", "Hello, world!")
    print("File content:", fs.read_file("sample.txt"))
