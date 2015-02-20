#!/usr/bin/env python3

import random
import string
import sys
from collections import deque
#sys.setdefaultencoding("UTF-8")

#Bloat encryption invented by Hunter Gregal
#Encrypt bloat
def bloat_encrypt(destring,enstring):
    m=(string.ascii_lowercase)
    
    #Asks for a key from the user
    key=str(input("Please enter a key to encrypt the string. This key will be required in order to decrypt it as well.\n: "))

    #gives key numerical value
    keylist=list(key)
    i=len(key) - 1
    c=0
    while i:
        c= c + ord(keylist[i])
        i=i-1
        
    #encodes destring with key
    destring=str(destring)
    destringlist=list(destring)
    i=len(destring) -1
    while i:
        n = ord(destringlist[i]) #gives each letter a number value
        destringlist[i]=chr(n+c) #increase each letter value by key value and converts it to its unicode char
        i=i-1
    destring=''.join(destringlist)


   #Further obfuscates destring by salting it    
    while destring:
        
        #Reverses string and adds random letters
        x=(len(destring)-1)
        enstring = (enstring + destring[x] + random.choice(m))
        destring = destring[0:x]
    print(enstring)       
    return destring,enstring

#Decrypt bloat
def bloat_decrypt(destring,enstring):
    key=str(input("Please enter a key to decrypt the string with.\n:"))

    #Reverses string and removes salt
    destring=''
    x=list(enstring)
    x=x[::2]
    x.reverse()
    destring=''.join(x)

    #gives key numerical value
    keylist=list(key)
    i=len(key) - 1
    c=0
    while i:
        c= c + ord(keylist[i])
        i=i-1

    #Decrypts string with the key

    destring=str(destring)
    destringlist=list(destring)
    i=len(destring) -1

    while i:
        m = ord(destringlist[i])
        destringlist[i]=chr(m-c)
        i=i-1
    destring=''.join(destringlist)
    
    print(destring)
    return destring,enstring





print("Python string encryptor brought to you by Hunter Gregal")
print("\n\n\n")

#Define enstring/destring ahead of time
enstring=''
destring=''
go=input("Would you like to use the program? Y/N\n: ")

while go == "Y" or go == "y":  #Run or breaks the program depending on input
    choice=input("Would you like to decrypt or encrypt a string? [decrypt]/[encrypt]\n: ") #Asks user if they want to encrypt or decrypt

    if choice == "encrypt" or choice == "Encrypt": #If user chooses encrypt....
        method=input("What encryption method would you like to use?\n [bloat]\n: ")
        destring=input("What string would you like to encrypt?\n: ")
    
        if method == "bloat" or method == "Bloat": #If user chooses bloat run bloat_encrypt function
            bloat_encrypt(destring,enstring)
    
        
    elif choice =="decrypt" or choice == "Decrypt": #If user chooses decrypt ....
        method=input("What is the decryption method you would like to use?\n [bloat]\n: ")
        enstring=input("What is the string that you would like to decrypt?\n: ")
    
        if method == "bloat" or method == "Bloat": #If users chooses bloat run bloat_decrypt function
            bloat_decrypt(destring,enstring)
    
    
        go=input("Would you like to use the program again? Y/N\n: ") #Keep running?
input("Press any key to exit")
