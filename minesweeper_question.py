#from random import randint
import random
#print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
​
def game(n, b):
    arr = [[0 for row in range(n)] for column in range(n)]
    for num in range(b):
        x = random.randint(0,n-1)
        y = random.randint(0,n-1)
        arr[y][x] = 'X'
        
        if (x >=0 and x <= 3) and (y >= 0 and y <= 4):
            if arr[y][x+1] != 'X':
                arr[y][x+1] += 1 # center right
                
        if (x >=1 and x <= 4) and (y >= 0 and y <= 4):
            if arr[y][x-1] != 'X':
                arr[y][x-1] += 1 # center left
                
        if (x >= 1 and x <= n-1) and (y >= 1 and y <= n-1):
            if arr[y-1][x-1] != 'X':
                arr[y-1][x-1] += 1 # top left
 
        if (x >= 0 and x <= n-2) and (y >= 1 and y <= n-1):
            if arr[y-1][x+1] != 'X':
                arr[y-1][x+1] += 1 # top right
                
        if (x >= 0 and x <= n-1) and (y >= 1 and y <= n-1):
            if arr[y-1][x] != 'X':
                arr[y-1][x] += 1 # top center
 
        if (x >=0 and x <= n-2) and (y >= 0 and y <= n-2):
            if arr[y+1][x+1] != 'X':
                arr[y+1][x+1] += 1 # bottom right
                
        if (x >= 1 and x <= n-1) and (y >= 0 and y <= n-2):
            if arr[y+1][x-1] != 'X':
                arr[y+1][x-1] += 1 # bottom left
                
        if (x >= 0 and x <= n-1) and (y >= 0 and y <= n-2):
            if arr[y+1][x] != 'X':
                arr[y+1][x] += 1 # bottom center
                
    for row in arr:
        print("\t".join(str(cell) for cell in row))
        print("  ")
         
if __name__ == "__main__":
    game(5, 6) # Level 1
    game(6, 8) # level 2
    game(8, 10) # level 3 
