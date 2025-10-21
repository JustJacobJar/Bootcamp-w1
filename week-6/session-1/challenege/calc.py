def factorial(num):
   if(num == 0):  return 0

   calcValue = 1
   for x in range(num+1):
      if(x > 0):
        calcValue *= x
   return calcValue

while True:
  userIn = input("Input a number. Type 'q' to exit ")

  if(userIn.lower() == "q"):
    print("Goodbye!")
    break

  if not userIn.isdigit():
        print("Invalid input. Please enter a positive integer.")
        continue
  
  num = int(userIn)
  print(f"The factorial of {num} is {factorial(num)}")