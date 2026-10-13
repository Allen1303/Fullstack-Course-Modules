# Excercise 1 IndexError
# Starter code
items = [1, 2, 3, 4, 5]
try:
    item = items[6]
except IndexError as e:
    print(e, "Index does not exist")
    print("------------------------------------")


# -------------------------------------------------------------------------------------
def divide_by(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return 0
    except Exception as e:
        print(e, "Not allowed")


result = divide_by(40, 0)
print(result)
print("-------------------------------------")
# --------------------------------------------------------------------------------------
try:
    with open("file_does_not_exist.txt", "r") as file:
        print(file.read())
except:
    print("Unable to locate file")
