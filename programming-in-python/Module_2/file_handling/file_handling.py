    # Verify that the sampletext.txt and file_ops.py files exist and are present inside the project folder. You can run the file_ops.py file by opening a terminal and executing the following command:

#python3 file_ops.py Modify the file_ops.py script to complete the read_file() function. This function should:
#Open and read the contents of sampletext.txt.  Return the entire contents of the file as a string.

#Task 1: Solution
def read_file(file_name):

    with open(file_name, 'r') as file:
        file_contents = file.read()
    return file_contents

# ---------------------------------------------------------------------------- #Task 2: Modify the file_ops.py script to complete the read_file_into_list() function. This function should: Read sampletext.txt line-by-line.  Store each line as an element in a list and return this list.
#Reads a file and returns a list where each element is a line in the file.
#[IMPLEMENT ME]
#        1. Open the given file.
#        2. Read the file line-by-line and append each line to a list.
#        3. Return the list.
# Args: file_name (str): Name of the file to be read.
#Returns: list: List where each item is a line from the file.
#Task 2: Solution
def read_file_into_list(file_name):
    with open(file_name, 'r') as file:

       return file.readlines()    
#-----------------------------------------------------------------------
 #Writes the first line of a given string to an output file.
 #       1. Get the first line of file_contents.
 #       2. Use the File write() function to write the first line into a file
 #          with the name from output_filename.

 # The first line is everything in a string before the first newline ('\n') character.

 #   Args: file_contents (str): String containing multiple lines of text.
 #       output_filename (str): Name of the file to write the first line into.
 #   Modify the file_ops.py script to complete the write_first_line_to_file() function. This function should:

#Accept two arguments: file_contents (a string with multiple lines of content).
#output_filename (the name of the output file).
#Write only the first line of file_contents into the specified output file.
#(Identify the first line as everything before the first newline character, \n).

#task 3: Solution
def write_first_line_to_file(file_contents, output_filename):
    first_line = file_contents.split('\n')[0]  # Get the first line
    with open(output_filename, 'w') as output_file:
        output_file.write(first_line)  # Write the first line to the output file

#-----------------------------------------------------------------------------
#     Reads even-numbered lines of a file and returns them as a list.
#        1. Open and read the given file into a variable.

#Args: file_name (str): Name of the file to be read.
#    Returns: list: List of even-numbered lines in the file (2, 4, 6, etc.).

#Modify the file_ops.py script to complete the read_even_numbered_lines() function. This function should: Read sampletext.txt line-by-line.
#Return a list containing only the even-numbered lines (lines 2, 4, 6, etc.) based on the line number in the file.

#Task 4: Solution
def read_even_numbered_lines(file_name):
    even_lines = []
    with open(file_name, 'r') as file:
        for index, line in enumerate(file, start=1):
            if index % 2 == 0:  # Check if the line number is even
                even_lines.append(line)  # Strip newline characters
    return even_lines

#-------------------------------------------------------------------------------
#     Reads a file and returns a list of its lines in reverse order.
#   1. Open and read the given file into a variable.
#  2. Read the file line-by-line and store the lines in a list in reverse order
# 3. Print the list.  4. Return the list.  Args: file_name (str): Name of the file to be read.
# Returns:
# list: List of lines from the file in reverse order.

#Task 5: Solution
def read_file_in_reverse(file_name):
    with open(file_name, 'r') as file:
        lines = file.readlines()  # Read all lines into a list
    reversed_lines = lines[::-1]  # Reverse every item backwards in the list 
    print(reversed_lines)  # Print the reversed list
    return reversed_lines
