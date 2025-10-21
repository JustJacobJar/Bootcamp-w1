# Python variables (Dynamic typing)
name = "Alice"   # String
age = 25        # Integer
height = 5.6    # Float
is_student = True  # Boolean

# Python list (similar to JavaScript arrays)
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access first element

# Python dictionary (similar to JavaScript objects)
person = {"name": "Alice", "age": 25}
print(person["name"])  # Access value by key

# Python for loop (similar to JavaScript for loop)
for i in range(5):  # range(5) generates numbers 0 to 4
    print(f"Iteration {i}")

# JavaScript equivalent
# for (let i = 0; i < 5; i++) {
#     console.log(`Iteration ${i}`);
# }

# Python while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Function without parameters
def greet():
    print("Hello, World!")

# Function with parameters
def add_numbers(a, b):
    return a + b

# Calling the functions
greet()
sum_result = add_numbers(3, 7)
print(f"Sum: {sum_result}")

def sum_list(numbers, count= 1):
    if not all(isinstance(num, (int, float)) for num in numbers):
        return "Error: List must contain only numbers"
    return sum(numbers)

print(sum_list([1, 2, 3, 4]))  # Should return 10
print(sum_list([1, "two", 3]))  # Should return an error message

