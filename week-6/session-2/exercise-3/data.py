# Lists (Ordered, Mutable, Allows Duplicates)
fruits = ["apple", "banana", "cherry", "banana"]  
print("List:", fruits)
#good for storing data that might have duplicates.  

# Tuples (Ordered, Immutable, Allows Duplicates)
coordinates = (10.0, 20.0, 30.0)
print("Tuple:", coordinates)
#Good for coordinates, measurements and related math values 

# Sets (Unordered, Unique Elements Only)
unique_numbers = {1, 2, 3, 2, 1}
print("Set:", unique_numbers)
#Good for knowing if an item exists in a set.
#Could be used for product stock related data, checking if they sell a certain item 

# Dictionaries (Key-Value Pairs, Unordered, Fast Lookups)
person = {"name": "Alice", "age": 25, "city": "New York"}
print("Dictionary:", person)
#Good for data that has multiple related attribues.
#Could be used for user details
