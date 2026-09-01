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
