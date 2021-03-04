# You may create additional functions here:
board = ["-","-","-","-",
         "-","-","-","-",
         "-","-","-","-",
         "-","-","-","-"]

game_still_going = True

winner = None

current_player = "X"

def display_board():
  print(board[0] + " | " + board[1] + " | " + board[2] + " | " + board[3])   
  print(board[4] + " | " + board[5] + " | " + board[6] + " | " + board[7])
  print(board[8] + " | " + board[9] + " | " + board[10] + " | " + board[11])
  print(board[12] + " | " + board[13] + " | " + board[14] + " | " + board[15])


# Additional Functions above this comment

# Implement your Minesweeper Solution Below:

def play_game():
    
    display_board()
    #Edit the code Below Here



    pass
    #Edit the code Above Here
#play Function Ends Here


if __name__=='__main__':
    play()
    
