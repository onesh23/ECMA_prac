# Write a program to print first 10 natural number.

# for i in range(1,11):
#     print("the natural numbers are :",i)


# Write a program to print first 10 even numbers in reverse order.


# for i in range(2,100,2):
#     print(i)

# a = []
# for i in range(2,101):
#     if i % 2 == 0:
#         a.append(i)
#         if len(a) == 11:
#             break
# a.reverse()
# print(a)

# Write a program to display all the numbers which are divisible by 11 but not by 2 between 100 and 500

# a = []
# for i in range(100, 501):
#     # print(i)
#     if i % 11 == 0 and i % 2 != 0:
#         a.append(i) 
# print("number are divisible by 11 but not by 2 between 100 and 500 : ",a)



# Find the sum of all numbers in a list

# sum = 0 
# list = [2,2,4,10,2,2,4,22,2]
# for i in list:
#     # print(i)
#     sum = sum + i
# print(sum)

# Write a Python program to count the number of even and odd numbers from a series of numbers.


# even_count = 0
# odd_count = 0
# for i in range(1,21):
#     if i % 2 == 0:
      

#         even_count = even_count +1
        
#     else:
        
#         odd_count = odd_count + 1
# print("Total Even count are :",even_count)
# print("Total odd counts are : ",odd_count)


# Accept a number and check whether it is palindrome or not.

# inp = input("Enter a number to check whether its a palindrome or not : ")
# a = str(inp)
# b = a[::-1]
# print(b)
# if a == b:
#     print(a," is a palindrome number")
# else:
#     print(a, " is Not palindrome number")


# Write a program that appends the type of elements from a list.



# list = [1,2,3,"onesh",3.3,'hello']
# print(list)
# for i in list:
#     print(i)

# list.append("world")
# list.append(56.4)
# list.append(23)
# print(list)


# write a program to swap 2 numbers.
# a = 23
# b = 45
# a,b = b,a
# print(a)
# print(b)

# Write a program to find the factorial of a number.

# num = int(input('Enter a number to find factorial  : '))
# f = 1
# for i in range(1 , num+1):    
#     # print(i)
#     f *= i
# print(f)

# Write a program to check whether a number is prime or not.

# number = int(input('Enter a number to check whether its prime or not : '))


# if number > 0:
#     for i in range(2,number):
#         if (number % i) == 0:
#             print(number ,'   this is not prime number')
           
#             break 
#         else:
#             print(number,' is a prime number')

#             break
# if number == 2:
#     print( number,"  prime number")




    

