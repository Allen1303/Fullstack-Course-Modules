# Conditional statements control program flow by allowing your code to make decisions and execute different blocks of code based on conditions.
#
# In Python, you use:
#
# if to check a condition; if true, run the code inside.
# elif (else if) to check additional conditions if previous ones were false.
# else to run code if none of the conditions are true.
# EXAMPLE:
age = 18
if age >= 18:
    print("Your are an adult")
elif age > 12:
    print("You are a teenager")
else:
    print("You are a child")
# --------------------------------------------------------------------------------------
# Conditional Statements (if-else and match case)
# if-else
x = 10
y = 15
if x > y:
    print("x is greater")
else:
    print("y is greater or equal")
# --------------------------------------------------------------------------------------
# match case (Python 3.10+)
# The match statement in Python (introduced in version 3.10) is a control flow structure
# that lets you compare a value against multiple patterns, similar to a switch-case in other languages.
# It simplifies checking a variable against many possible values and executing code based on the match.

# Example:

command = "start"
match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")
    case _:
        print("Unknown command")
# --------------------------------------------------------------------------------------
# Looping and Nested Loops
# For loop
for i in range(3):
    print("Iteration", i)
# --------------------------------------------------------------------------------------
# Nested loop
for i in range(2):
    for j in range(2):
        print(f"i={i}, j={j}")
# --------------------------------------------------------------------------------------
# Control Flow and Loops
favorites = ["Creme Brulee", "Apple Pie", "Churros", "Tiramisú", "Chocolate Cake"]
for dessert in favorites:
    if dessert == "Apple Pie":
        print("---------------------------------------")
        print(dessert, "is one of my favorites")
# --------------------------------------------------------------------------------------
# Note that the code below would print the statements 5 times, a solution to solve this
# And print the output once would be to use a for loop or creative if-else statements.
for dessert in favorites:
    if dessert == "Cheese Cake":
        print(dessert, "is one of my favorites too")
    else:
        print("---------------------------------------")
        print(dessert, "is not in the list of favorites")
# ---------------------------------------------------------------------------------------
# The below controll flow code partially solve the issue of the unwanted printed statements
# by using the break statement stops the loop which also stops the else condition if not the
# loop continues until the if condition is satisfied.
for dessert in favorites:
    if dessert == "Pudding":
        break
    else:
        print("------------------------------------------")
        print(dessert, "is not on the list of favorites")
# ---------------------------------------------------------------------------------------
# The else will execute only once after the entire for loop is checked and if the dessert
# we want is not in the list. The else statement is used here in conjunction with the for
# loop, and so called the for-else
for dessert in favorites:
    if dessert == "Chocolate Cake":
        print("------------------------------------")
        print(dessert, "is on my list of favorites")
        break
    else:
        print(dessert, "is not on the list of favorites")
# ---------------------------------------------------------------------------------------
# Similar to break, continue can be used to control the iteration of the loop. The key
# difference is that it can allow you to skip over a section of the loop but then continue
# on with the rest, and as such the code will print everything after Apple Pie.
for dessert in favorites:
    if dessert == "Apple Pie":
        continue
    print("----------------------------------")
    print("Other desserts I like are", dessert)
